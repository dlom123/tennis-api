'use strict';
module.exports = (sequelize, DataTypes) => {
  const surfaces = sequelize.define('surfaces', {
    type: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {});
  surfaces.associate = function(models) {
    // associations can be defined here
  };
  return surfaces;
};