'use strict';
module.exports = (sequelize, DataTypes) => {
  const matches_doubles_sets = sequelize.define('matches_doubles_sets', {
    deleted_at: DataTypes.DATE
  }, {});
  matches_doubles_sets.associate = function(models) {
    // associations can be defined here
  };
  return matches_doubles_sets;
};