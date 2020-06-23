'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matches_doubles_sets_scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      set_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'matches_doubles_sets',
          key: 'id'
        }
      },
      team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'matches_doubles_teams',
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
    return queryInterface.dropTable('matches_doubles_sets_scores');
  }
};