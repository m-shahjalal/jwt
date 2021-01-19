const authRoute = require('./authRoute');
const authentication = require('../middleware/auth');

module.exports = (app) => {
  app.get('*', authentication.checkUser);
  app.get('/', (req, res) => res.render('home'));
  app.get('/smoothies', authentication.check, (req, res) =>
    res.render('smoothies')
  );
  app.use(authRoute);
};
