const express = require('express');
const mongoose = require('mongoose');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

middleware(app); // middleware
routes(app); //routes

// database connection and start server
const dbURI =
  'mongodb+srv://test:test123@cluster0.1gsip.mongodb.net/jwt-auth?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) =>
    app.listen(5000, () => console.log(`Server running at 5000`))
  )
  .catch((err) => console.log(err));
