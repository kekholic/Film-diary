'use strict';
const {
  Model
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
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    rated: DataTypes.STRING,
    released: DataTypes.STRING,
    runtime: DataTypes.STRING,
    genre: DataTypes.STRING,
    director: DataTypes.STRING,
    plot: DataTypes.STRING(2500),
    poster: DataTypes.STRING,
    imdb: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};