const express = require('express');

const movieRouter = express.Router();

const { addMoviesToDB, showOneMovieFromDB, deleteMovieFromDB } = require('../controllers/moviesController');

movieRouter
  .route('/add')
  .post(addMoviesToDB);

movieRouter
  .route('/:id')
  .get(showOneMovieFromDB)
  .delete(deleteMovieFromDB);

module.exports = movieRouter;
