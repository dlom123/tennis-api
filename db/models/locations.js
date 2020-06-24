'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'locations',
    underscored: true
  });
  Locations.associate = function(models) {
    // associations can be defined here
  };
  return Locations;
};