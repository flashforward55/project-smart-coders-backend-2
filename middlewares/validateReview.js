const HttpError = require('../helpers/HttpError');

const validateReview = (req, _, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new HttpError(400, 'Fields are empty, please enter the data.'));
  }
  next();
};

module.exports = validateReview;
