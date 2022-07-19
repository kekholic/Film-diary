const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Layout = require('./Layout');

module.exports = function getLoginForm({ user }) {
  return (
    <Layout user={user}>
      <form name="searchForm" method="POST">
        <input name="searchInput" data-id-search="search-input" type="text" className="form-control" placeholder="Введите название фильма" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button data-id-button="search-button" className="btn btn-outline-secondary fixCardInputbtn" type="submit" id="button-addon2">Найти</button>
        <br />
        <div id="filmList" />
      </form>
    </Layout>
  );
};
