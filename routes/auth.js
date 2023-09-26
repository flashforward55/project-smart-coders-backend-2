const express = require('express');

const { auth, validateBody /* uploadAvatar */ } = require('../middlewares');
const {
  registerValidationSchema,
  loginValidationSchema,
} = require('../schemas/authValidationSchema');
/* const { updateUserSchema } = require('../schemas/updateUserSchema'); */

const {
  register,
  login,
  logout,
  /*   updateUser, */
} = require('../controllers/authControllers');

const router = express.Router();

router.post('/register', validateBody(registerValidationSchema), register);
router.post('/login', validateBody(loginValidationSchema), login);
router.post('/logout', auth, logout);

module.exports = router;
