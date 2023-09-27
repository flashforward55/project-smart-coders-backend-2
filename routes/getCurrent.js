const express = require('express');

const { auth, uploadAvatar, validateBody } = require('../middlewares');
const { updateUserSchema } = require('../schemas/updateUserSchema');
const { updateUser, getCurrent } = require('../controllers/authControllers');

const router = express.Router();

router.get('/current', auth, getCurrent);
router.patch(
  '/edit',
  auth,
  uploadAvatar,
  validateBody(updateUserSchema),
  updateUser
);
module.exports = router;
