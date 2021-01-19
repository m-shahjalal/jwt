// dependencies
const express = require('express');
const cookieParser = require('cookie-parser');

// export modules
module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cookieParser());

  // view engine
  app.set('view engine', 'ejs');
};
