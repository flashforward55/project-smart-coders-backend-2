const express = require('express');

const {
  getAllReviews,
  getOwnReview,
  createOwnReview,
  updateOwnReview,
  deleteOwnReview,
} = require('../controllers/reviewsController');

const { auth, validateBody } = require('../middlewares');

const { reviewScheme } = require('../schemas/reviewSchemas');

const router = express.Router();

router.get('/', getAllReviews);

router.get('/own', auth, getOwnReview);

router.post('/own', auth, validateBody(reviewScheme), createOwnReview);

router.patch('/own', auth, validateBody(reviewScheme), updateOwnReview);

router.delete('/own', auth, deleteOwnReview);

module.exports = router;
