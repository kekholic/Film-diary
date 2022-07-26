const bcrypt = require('bcrypt');

const { User } = require('../db/models');

const render = require('../lib/render');

const RegisterForm = require('../views/auth/Registration');
const LoginForm = require('../views/auth/Login');

const { failAuth } = require('../middlewares/auth');

exports.getRegistrationForm = (req, res) => {
  console.log('registration');
  return render(RegisterForm, null, res);
};

exports.getLoginForm = (req, res) => {
  render(LoginForm, null, res);
};

exports.registration = async (req, res) => {
  const { login, name, password } = req.body;
  try {
    const candidate = await User.findOne({ where: { login } });
    if (candidate) return res.status(401).json({ message: 'Имя пользователя занято' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      login,
      password: hashedPassword,
    });

    return res.redirect('/auth/login');
  } catch (error) {
    console.log('error: ', error.message);
    failAuth(res, 'Ошибка регистрации. Повторите попытку.');
  }
};

exports.login = async (req, res) => {
  const { login, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ where: { login } });
    if (!user) return failAuth(res, 'Неверное имя или пароль!');

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return failAuth(res, 'Неверное имя или пароль!!');

    req.session.user = { id: user.id, login: user.login, name: user.name };

    return res.redirect('/');
  } catch (error) {
    console.log('error: ', error.message);
    return failAuth(res, 'Неудалось войти. Повторите попытку.');
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err.message);
      failAuth(res, 'Произошла ошибка. Повторите попытку');
    }
    res.clearCookie('sid');

    return res.redirect('/');
  });
};
