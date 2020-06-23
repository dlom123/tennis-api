'use strict';
module.exports = (sequelize, DataTypes) => {
  const location_settings = sequelize.define('location_settings', {
    type: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {});
  location_settings.associate = function(models) {
    // associations can be defined here
  };
  return location_settings;
};