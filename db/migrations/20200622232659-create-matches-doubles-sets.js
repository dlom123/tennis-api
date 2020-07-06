'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matches_doubles_sets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      match_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'matches_doubles',
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
    return queryInterface.dropTable('matches_doubles_sets');
  }
};