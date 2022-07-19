const express = require('express');

const apiRouter = express.Router();

const { apiController } = require('../controllers/apiController');

apiRouter
  .route('/search/:str')
  .get(apiController);

module.exports = apiRouter;
