'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesDoublesSets = sequelize.define('MatchesDoublesSets', {
    score: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_doubles_sets',
    underscored: true
  });
  MatchesDoublesSets.associate = function(models) {
    // associations can be defined here
  };
  return MatchesDoublesSets;
};