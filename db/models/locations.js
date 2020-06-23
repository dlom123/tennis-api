'use strict';
module.exports = (sequelize, DataTypes) => {
  const locations = sequelize.define('locations', {
    name: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {});
  locations.associate = function(models) {
    // associations can be defined here
  };
  return locations;
};