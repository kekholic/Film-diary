const React = require('react');
const Layout = require('../Layout');

module.exports = function LogUser() {
  return (
    <Layout>
      <h1>Вход</h1>

      <form id="logUser" action="/auth/login" method="POST">
        <input
          id="inputLogMail"
          type="text"
          name="email"
          tabIndex="2"
          placeholder="Email"
          required
        />

        <input
          id="inputLogPassword"
          name="password"
          type="password"
          tabIndex="2"
          placeholder="Пароль"
          required
        />

        <input
          type="submit"
          value="Войти"
          tabIndex="3"
        />
      </form>
    </Layout>
  );
};
