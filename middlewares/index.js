const validateBody = require('./validateBody');
const validateReview = require('./validateReview');
const isValidId = require('./isValidId');
const auth = require('./auth');
const uploadAvatar = require('./uploadAvatar');

module.exports = {
  validateBody,
  validateReview,
  isValidId,
  auth,
  uploadAvatar,
};
