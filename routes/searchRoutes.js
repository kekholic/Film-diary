const express = require('express');

const apiRouter = express.Router();

const { showSearchPage, showSearchMovieList, showSearchOneMovie } = require('../controllers/searchController');

apiRouter
  .route('/')
  .get(showSearchPage)
  .post(showSearchMovieList);

apiRouter
  .route('/one')
  .post(showSearchOneMovie);

module.exports = apiRouter;
