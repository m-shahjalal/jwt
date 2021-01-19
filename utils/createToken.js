const jwt = require('jsonwebtoken');

const createToken = (id) => {
  return jwt.sign({ id }, '@TODO: make a secret key', {
    expiresIn: 60 * 60 * 24 * 3,
  });
};

module.exports = createToken;
