const { User, Movie } = require('../db/models');

const render = require('../lib/render');

const PersonalPage = require('../views/PersonalPage');

exports.usersController = async (req, res) => {
  const login = req.session?.user?.login;
  if (login) return res.redirect(`/${login}`);
  return res.redirect('/auth/login');
};

exports.personalFavorites = async (req, res) => {
  const { user } = req.session;
  const { id } = req.session.user;
  const movies = await Movie.findAll({ include: { model: User, where: { id } }, raw: true });
  console.log('ALLO BLYAT');
  return render(PersonalPage, { movies, user }, res);
};
