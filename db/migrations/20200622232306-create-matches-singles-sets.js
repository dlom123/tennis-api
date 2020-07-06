'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matches_singles_sets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      match_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'matches_singles',
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
      seq: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('matches_singles_sets');
  }
};