'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      rated: {
        type: Sequelize.STRING
      },
      released: {
        type: Sequelize.STRING
      },
      runtime: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      plot: {
        type: Sequelize.STRING(2500)
      },
      poster: {
        type: Sequelize.STRING
      },
      imdb: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};