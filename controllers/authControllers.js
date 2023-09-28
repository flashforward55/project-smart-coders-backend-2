const { ctrlWrapper } = require('../helpers');
const { registerService, loginService, logoutService } = require('../services');

const { User } = require('../models');

const register = async (req, res) => {
  await registerService(req.body);
  const { user, token } = await loginService(req.body);
  res.status(201).json({ user, token });
  /*  res.status(201).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
      phone: user.phone,
      skype: user.skype,
      birthday: user.birthday,
      createdAt: user.createdAt,
      token: user.token,
    },
    token,
  }); */
};

const login = async (req, res) => {
  const { user, token } = await loginService(req.body);
  res.json({ user, token });
  /* res.status(201).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
      phone: user.phone,
      skype: user.skype,
      birthday: user.birthday,
      createdAt: user.createdAt,
      token: user.token,
    },
    token,
  }); */
};

const logout = async (req, res) => {
  await logoutService(req.user);
  res.status(200).json({ message: 'Logout successful' });
};

const getCurrent = (req, res) => {
  const user = req.user;
  res.json({ user });
};

const updateUser = async (req, res) => {
  const { _id: id } = req.user;

  const userFromDB = await User.findById(id);

  if (req.body.avatarURL === '') {
    req.body.avatarURL = userFromDB.avatarURL;
  }

  const updatedUser = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.json(updatedUser);
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrent: ctrlWrapper(getCurrent),
  updateUser: ctrlWrapper(updateUser),
};
