const express = require('express');

const { auth, validateBody } = require('../middlewares');
const {
  registerValidationSchema,
  loginValidationSchema,
} = require('../schemas/authValidationSchema');

const { register, login, logout } = require('../controllers/authControllers');

const router = express.Router();

router.post('/register', validateBody(registerValidationSchema), register);
router.post('/login', validateBody(loginValidationSchema), login);
router.post('/logout', auth, logout);

module.exports = router;
