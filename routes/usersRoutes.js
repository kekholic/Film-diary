const express = require('express');

const route = express.Router();

const { usersController, personalFavorites } = require('../controllers/usersController');

route.get('/', usersController);

route.get('/:login', personalFavorites);

module.exports = route;
