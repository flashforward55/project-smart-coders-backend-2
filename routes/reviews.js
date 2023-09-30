const express = require('express');

const {
  getAllReviews,
  getUserReview,
  createUserReview,
  updateUserReview,
  deleteUserReview,
} = require('../controllers/reviewsController');

const { auth, validateBody } = require('../middlewares');

const { reviewSchemas } = require('../schemas/reviewSchemas');

const router = express.Router();

router.get('/', getAllReviews);

router.get('/own', auth, getUserReview);

router.post('/own', auth, validateBody(reviewSchemas), createUserReview);

router.patch('/own', auth, validateBody(reviewSchemas), updateUserReview);

router.delete('/own', auth, deleteUserReview);

module.exports = router;
