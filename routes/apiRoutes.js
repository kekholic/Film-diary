const express = require('express');

const apiRouter = express.Router();

const { apiController, apiControllerOneMovie } = require('../controllers/apiController');

apiRouter
  .route('/search/:str')
  .get(apiController);

apiRouter
  .route('/search/one/:imdbID')
  .get(apiControllerOneMovie);

module.exports = apiRouter;
