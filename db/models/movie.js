const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, { through: models.Hub, foreignKey: 'movie_id', otherKey: 'user_id' });
    }
  }
  Movie.init({
    Title: DataTypes.STRING,
    Year: DataTypes.STRING,
    Rated: DataTypes.STRING,
    Released: DataTypes.STRING,
    Runtime: DataTypes.STRING,
    Genre: DataTypes.STRING,
    Director: DataTypes.STRING,
    Plot: DataTypes.STRING(2500),
    Type: DataTypes.STRING,
    Awards: DataTypes.STRING,
    Language: DataTypes.STRING,
    Writer: DataTypes.STRING,
    Actors: DataTypes.STRING,
    Poster: DataTypes.STRING,
    imdbRating: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
