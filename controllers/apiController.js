const fetch = require('node-fetch');

const parser = require('../lib/parseToQuery');

const APIKEY = 'b8972d06';

exports.apiController = async (req, res) => {
  const string = parser(req.params.str);
  const response = await fetch(`http://www.omdbapi.com/?s=${string}&plot=full&apikey=${APIKEY}`);
  const result = await response.json();
  res.json(result);
};

exports.apiControllerOneMovie = async (req, res) => {
  const { imdbID } = req.params;
  const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=${APIKEY}`);
  const result = await response.json();
  res.json(result);
};
