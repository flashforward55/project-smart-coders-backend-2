const Joi = require('joi');
const { phoneRegex, skypeRegex, birthdayRegex } = require('../const');
const { registerValidationSchema } = require('./authValidationSchema');

const updateUserSchema = Joi.object().keys({
  name: registerValidationSchema.extract('name'),
  email: registerValidationSchema.extract('email'),
  phone: Joi.string().pattern(phoneRegex).allow('').messages({
    'string.pattern.base': 'Valid number is format +38 (000) 123 45 67',
  }),
  skype: Joi.string().pattern(skypeRegex).allow('').messages({
    'string.pattern.base':
      'Valid skype is format only latin letters, numbers, and the following special characters: period (.), underscore (_), hyphen (-),',
  }),
  birthday: Joi.string().pattern(birthdayRegex).messages({
    'string.pattern.base': 'Valid birthday has format YYYY-MM-DD',
  }),
  avatarURL: Joi.string(),
});

module.exports = { updateUserSchema };
