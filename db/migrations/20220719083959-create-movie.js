module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Title: {
        type: Sequelize.STRING,
      },
      Year: {
        type: Sequelize.STRING,
      },
      Rated: {
        type: Sequelize.STRING,
      },
      Released: {
        type: Sequelize.STRING,
      },
      Runtime: {
        type: Sequelize.STRING,
      },
      Genre: {
        type: Sequelize.STRING,
      },
      Director: {
        type: Sequelize.STRING,
      },
      Type: {
        type: Sequelize.STRING,
      },
      Awards: {
        type: Sequelize.STRING,
      },
      Language: {
        type: Sequelize.STRING,
      },
      Writer: {
        type: Sequelize.STRING,
      },
      Actors: {
        type: Sequelize.STRING,
      },
      Plot: {
        type: Sequelize.STRING(2500),
      },
      Poster: {
        type: Sequelize.STRING,
      },
      imdbRating: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  },
};
