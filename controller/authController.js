// dependencies
const User = require('../model/User');
const createToken = require('../utils/createToken');
const customError = require('../utils/error');

// module scaffolding
const authController = {};

// signup page loading
authController.signupGet = (req, res) => {
  res.render('signup');
};

// signup processing by POST request
authController.signupPost = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, {
      maxAge: 1000 * 60 * 60 * 24 * 3,
      httpOnly: true,
    });
    res.json({ user: user._id });
  } catch (error) {
    res.json({ error: customError(error) });
  }
};

// login page loading
authController.loginGet = (req, res) => {
  res.render('login');
};

// login processing by POST request
authController.loginPost = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    if (user) {
      const token = createToken(user._id);
      res.cookie('jwt', token, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        httpOnly: true,
      });
      res.json({ user: user._id });
    }
  } catch (error) {
    res.json({ error: customError(error) });
  }
};

// logout authController
authController.logoutGet = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};

// export module
module.exports = authController;
