const authController = require('../controller/authController');

const Router = require('express').Router();

Router.get('/signup', authController.signupGet);
Router.post('/signup', authController.signupPost);
Router.get('/login', authController.loginGet);
Router.post('/login', authController.loginPost);
Router.get('/logout', authController.logoutGet);

module.exports = Router;
