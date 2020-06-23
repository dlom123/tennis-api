'use strict';
module.exports = (sequelize, DataTypes) => {
  const matches_singles = sequelize.define('matches_singles', {
    date: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {});
  matches_singles.associate = function(models) {
    // associations can be defined here
  };
  return matches_singles;
};