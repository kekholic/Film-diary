const ReactDomServer = require('react-dom/server');
const React = require('react');

const render = (reactElement, properties, response) => {
  const reactEl = React.createElement(reactElement, properties);
  const html = ReactDomServer.renderToStaticMarkup(reactEl);
  response.write('<!DOCTYPE html>');
  response.write(html);
  return response.end();
};

module.exports = render;
