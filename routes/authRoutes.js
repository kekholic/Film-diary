const authRouter = require('express').Router();

const { isValid } = require('../middlewares/auth');

const {
  getRegistrationForm,
  getLoginForm,
  registration,
  login,
  logout,
} = require('../controllers/authController');

authRouter
  .route('/registration')
  .get(getRegistrationForm)
  .post(isValid, registration);

authRouter
  .route('/login')
  .get(getLoginForm)
  .post(login);

authRouter.get('/logout', logout);

module.exports = authRouter;
