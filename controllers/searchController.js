const render = require('../lib/render');
const renderElement = require('../lib/renderElement');

const SearchPage = require('../views/SearchPage');
const MoviePreviewList = require('../views/components/MoviePreviewList');
const OneMovie = require('../views/components/OneMovie');

exports.showSearchPage = async (req, res) => {
  const { user } = req.session;
  render(SearchPage, { user }, res);
};

exports.showSearchMovieList = async (req, res) => {
  const { result } = req.body;
  renderElement(MoviePreviewList, { movies: result.Search }, res);
};

exports.showSearchOneMovie = async (req, res) => {
  const { result } = req.body;
  renderElement(OneMovie, { movie: result }, res);
};
