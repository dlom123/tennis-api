'use strict';
module.exports = (sequelize, DataTypes) => {
  const locations_settings = sequelize.define('locations_settings', {
    deleted_at: DataTypes.DATE
  }, {});
  locations_settings.associate = function(models) {
    // associations can be defined here
  };
  return locations_settings;
};