'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('locations_hours', {
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
      day: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      open_hour: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      open_minute: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      close_hour: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      close_minute: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('locations_hours');
  }
};