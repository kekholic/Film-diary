const ReactDomServer = require('react-dom/server');
const React = require('react');

const renderElement = (reactElement, properties, response) => {
  const reactEl = React.createElement(reactElement, properties);
  const html = ReactDomServer.renderToStaticMarkup(reactEl);
  return response.json(html);
};

module.exports = renderElement;
