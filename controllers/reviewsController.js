const { ctrlWrapper } = require('../helpers');

const {
  getAllReviewService,
  getUserReviewService,
  createService,
  updateService,
  deleteService,
} = require('../services/reviewService');

const getAllReviews = async (_, res) => {
  const result = await getAllReviewService();
  res.status(200).json(result);
};

const getUserReview = async (req, res) => {
  const result = await getUserReviewService(req.user);
  res.status(200).json(result);
};

const createUserReview = async (req, res) => {
  const result = await createService(req.user, req.body);
  res.status(201).json(result);
};

const updateUserReview = async (req, res) => {
  const result = await updateService(req.user, req.body);
  res.status(200).json(result);
};

const deleteUserReview = async (req, res) => {
  await deleteService(req.user);
  res.status(200).json({ message: 'Your review are deleted' });
};

module.exports = {
  getAllReviews: ctrlWrapper(getAllReviews),
  getUserReview: ctrlWrapper(getUserReview),
  createUserReview: ctrlWrapper(createUserReview),
  updateUserReview: ctrlWrapper(updateUserReview),
  deleteUserReview: ctrlWrapper(deleteUserReview),
};
