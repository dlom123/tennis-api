'use strict';
module.exports = (sequelize, DataTypes) => {
  const matches_singles_sets = sequelize.define('matches_singles_sets', {
    deleted_at: DataTypes.DATE
  }, {});
  matches_singles_sets.associate = function(models) {
    // associations can be defined here
  };
  return matches_singles_sets;
};