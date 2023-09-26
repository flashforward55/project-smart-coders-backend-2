const { HttpError } = require('../helpers');

const validateBody = schema => {
  return (req, _, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return next(new HttpError(400, `Validation error: ${error.message}!`));
    }
    next();
  };
};

module.exports = validateBody;
