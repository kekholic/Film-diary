const express = require('express');

const apiRouter = express.Router();

const { showSearchPage, showSearchMovieList } = require('../controllers/searchController');

apiRouter
  .route('/')
  .get(showSearchPage)
  .post(showSearchMovieList);

module.exports = apiRouter;
