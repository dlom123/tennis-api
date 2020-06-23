'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matches_singles_sets_scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      set_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'matches_singles_sets',
          key: 'id'
        }
      },
      player_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'players',
          key: 'id'
        }
      },
      score: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('matches_singles_sets_scores');
  }
};