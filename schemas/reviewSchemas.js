const Joi = require('joi');

const reviewScheme = Joi.object({
  rating: Joi.number().integer().min(1).max(5).required().messages({
    'number.base': 'Rating should be a number',
    'number.integer': 'Rating should be an integer',
    'number.min': 'Rating should be at least 1',
    'number.max': 'Rating should be at most 5',
    'any.required': 'Rating is required',
  }),
  comment: Joi.string().min(10).max(250).required().messages({
    'string.base': 'Comment should be a string',
    'string.min': 'Comment should be at least 10',
    'string.max': 'Comment should not exceed 250 characters',
    'any.required': 'Comment is required',
  }),
});

module.exports = { reviewScheme };
