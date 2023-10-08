const { Review } = require('../models');

const { HttpError } = require('../helpers');

const getAllReviewService = async () => {
  const result = await Review.find({}, '-createdAt -updatedAt').populate(
    'owner',
    'name avatarURL'
  );
  return result;
};

const getUserReviewService = async user => {
  const id = user.id;

  const result = await Review.find(
    { owner: id },
    '-createdAt -updatedAt'
  ).exec();

  // if (result.length === 0) {
  //   throw new HttpError(404, 'Not found');
  // }
  return result;
};

const createService = async (user, body) => {
  const id = user.id;

  const existingReview = await Review.findOne({ owner: id }).exec();

  if (existingReview) {
    throw new HttpError(403, 'You have already made a review.');
  }

  const newReview = {
    owner: user.id,
    rating: body.rating,
    comment: body.comment,
  };

  const result = await Review.create(newReview);

  return result;
};

const updateService = async (user, body) => {
  const id = user.id;

  const existingReview = await Review.findOne({ owner: id }).exec();

  if (!existingReview) {
    throw new HttpError(404, 'You do not have any review to update.');
  }

  const result = await Review.findByIdAndUpdate(existingReview._id, body, {
    new: true,
  }).exec();

  return result;
};

const deleteService = async user => {
  const id = user.id;

  const existingReview = await Review.findOne({ owner: id }).exec();

  if (!existingReview) {
    throw new HttpError(404, 'You do not have any review to remove.');
  }

  const result = await Review.findByIdAndRemove(existingReview._id);

  return result;
};

module.exports = {
  getAllReviewService,
  getUserReviewService,
  createService,
  updateService,
  deleteService,
};
