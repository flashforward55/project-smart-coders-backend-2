const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRES_IN } = process.env;

const createTokens = user => {
  const payload = {
    id: user._id,
  };
  const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });

  return { accessToken };
};

// module.exports = { createTokens };
module.exports = createTokens;
