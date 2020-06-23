'use strict';
module.exports = (sequelize, DataTypes) => {
  const locations_surfaces = sequelize.define('locations_surfaces', {
    deleted_at: DataTypes.DATE
  }, {});
  locations_surfaces.associate = function(models) {
    // associations can be defined here
  };
  return locations_surfaces;
};