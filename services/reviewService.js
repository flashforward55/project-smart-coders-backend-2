const { Review } = require('../models/review.js');

const { HttpError } = require('../helpers');

const getAllService = async () => {
  const result = await Review.find().exec();

  if (result.length === 0) {
    throw new HttpError(404, 'Not found');
  }
  return result;
};

const getOwnService = async user => {
  const id = user.id;

  const result = await Review.find(
    { owner: id },
    '-createdAt -updatedAt'
  ).exec();
  if (result === null) {
    throw new HttpError(404, 'Not found');
  }
  return result;
};

const createOwnService = async (user, body) => {
  const id = user.id;

  const existingReview = await Review.findOne({ owner: id }).exec();

  if (existingReview) {
    throw new HttpError(404, 'You have already made a review.');
  }

  const newReview = {
    owner: user.id,
    name: user.name,
    rating: body.rating,
    comment: body.comment,
  };

  const result = await Review.create(newReview);

  return result;
};

const updateOwnService = async (user, body) => {
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

const deleteOwnService = async user => {
  const id = user.id;

  const existingReview = await Review.findOne({ owner: id }).exec();

  if (existingReview) {
    throw new HttpError(404, 'You do not have any review to delete.');
  }

  const result = await Review.findByIdAndRemove(id);

  return result;
};

module.exports = {
  getAllService,
  getOwnService,
  createOwnService,
  updateOwnService,
  deleteOwnService,
};
