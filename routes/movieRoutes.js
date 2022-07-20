const express = require('express');

const movieRouter = express.Router();

const { addMoviesToDB } = require('../controllers/moviesController');

movieRouter
  .route('/add')
  .post(addMoviesToDB);

module.exports = movieRouter;
