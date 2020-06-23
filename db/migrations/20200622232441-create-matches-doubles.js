'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matches_doubles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'locations',
          key: 'id'
        }
      },
      surface_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'surfaces',
          key: 'id'
        }
      },
      location_setting_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'location_settings',
          key: 'id'
        }
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
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
    return queryInterface.dropTable('matches_doubles');
  }
};