const { ctrlWrapper } = require('../helpers');

const { Review } = require('../models/review');

const {
  getAllService,
  getOwnService,
  createOwnService,
  updateOwnService,
  deleteOwnService,
} = require('../services/reviewService');

const getAllReviews = async (_, res) => {
  const result = await getAllService();
  res.status(200).json(result);
};

const getOwnReview = async (req, res) => {
  const result = await getOwnService(req.user);
  res.status(200).json(result);
};

const createOwnReview = async (req, res) => {
  const result = await createOwnService(req.user, req.body);
  res.status(201).json(result);
};

const updateOwnReview = async (req, res) => {
  const result = await updateOwnService(req.user, req.body);
  res.status(200).json(result);
};

const deleteOwnReview = async (req, res) => {
  await deleteOwnService(req.user);
  res.status(200).json({ message: 'Your review are deleted' });
};

module.exports = {
  getAllReviews: ctrlWrapper(getAllReviews),
  getOwnReview: ctrlWrapper(getOwnReview),
  createOwnReview: ctrlWrapper(createOwnReview),
  updateOwnReview: ctrlWrapper(updateOwnReview),
  deleteOwnReview: ctrlWrapper(deleteOwnReview),
};
