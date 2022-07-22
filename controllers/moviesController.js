const render = require('../lib/render');
const renderElement = require('../lib/renderElement');

const OneMovie = require('../views/components/OneMovie');

const { User, Hub, Movie } = require('../db/models');

exports.addMoviesToDB = async (req, res) => {
  const { user } = req.session;
  const {
    Year, Title, Rated, Released, Runtime, Genre, Director, Plot, Poster, imdbRating, Type, Awards, Language, Writer, Actors,
  } = req.body;
  const movie = await Movie.findOrCreate({
    where: {
      Year, Title, Rated, Released, Runtime, Genre, Director, Plot, Poster, imdbRating, Type, Awards, Language, Writer, Actors,
    },
    raw: true,
  });
  const userId = user.id;
  const movieId = movie[0].id;
  const doWeHave = await Hub.findOne({ where: { movie_id: movieId, user_id: userId } });
  // записываем промежуточную таблицу если еще не записали
  if (!doWeHave) {
    await Hub.create({ movie_id: movieId, user_id: userId });
  }
  return res.status(200).json();
};

exports.showOneMovieFromDB = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findOne({ where: { id }, raw: true });
  renderElement(OneMovie, { movie }, res);
};

exports.deleteMovieFromDB = async (req, res) => {
  const { id } = req.params;
  await Movie.destroy({ where: { id } });
  res.status(200).json();
};
