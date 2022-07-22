const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Movie, { through: models.Hub, foreignKey: 'user_id', otherKey: 'movie_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    login: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
