const render = require('../lib/render');
const renderElement = require('../lib/renderElement');

const { User, Hub, Movie } = require('../db/models');

exports.addMoviesToDB = async (req, res) => {
  const { user } = req.session;
  const {
    Year, Title, Rated, Released, Runtime, Genre, Director, Plot, Poster, Imdb,
  } = req.body;
  console.log('ALLO BLTAT');
  console.log(Year, Title, Rated, Released, Runtime, Genre, Director, Plot, Poster, Imdb);
  const movie = await Movie.findOrCreate({
    where: {
      Year, Title, Rated, Released, Runtime, Genre, Director, Plot, Poster, Imdb,
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
