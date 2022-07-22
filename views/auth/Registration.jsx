const React = require('react');
const Layout = require('../Layout');

module.exports = function RegUser() {
  return (
    <Layout>
      <h1>Регистрация</h1>

      <form id="regUser" action="/auth/registration" method="POST">
        <input
          id="inputRegMail"
          type="text"
          name="login"
          tabIndex="2"
          placeholder="login"
          required
        />

        <input
          id="inputRegUsername"
          name="name"
          type="text"
          tabIndex="1"
          placeholder="Имя"
          required
        />

        <input
          id="inputRegPassword"
          name="password"
          type="password"
          tabIndex="2"
          placeholder="Пароль"
          required
        />

        <input
          id="inputRegPassword2"
          name="password2"
          type="password"
          tabIndex="2"
          placeholder="Повторите пароль"
          required
        />

        <input
          type="submit"
          value="Зарегистрироваться"
          tabIndex="3"
        />
      </form>
    </Layout>
  );
};
