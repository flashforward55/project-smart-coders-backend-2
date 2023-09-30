const express = require('express');

const {
  getAllReviews,
  getUserReview,
  createUserReview,
  updateUserReview,
  deleteUserReview,
} = require('../controllers/reviewsController');

const { auth, validateBody, validateReview } = require('../middlewares');

const { reviewSchemas } = require('../schemas/reviewSchemas');

const router = express.Router();

router.get('/', getAllReviews);

router.get('/own', auth, getUserReview);

router.post(
  '/own',
  auth,
  validateReview,
  validateBody(reviewSchemas),
  createUserReview
);

router.patch(
  '/own',
  auth,
  validateReview,
  validateBody(reviewSchemas),
  updateUserReview
);

router.delete('/own', auth, deleteUserReview);

module.exports = router;
