const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.send('Такой страницы не существует, до свидания');
});

module.exports = route;
