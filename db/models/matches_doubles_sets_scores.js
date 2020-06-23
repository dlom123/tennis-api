'use strict';
module.exports = (sequelize, DataTypes) => {
  const matches_doubles_sets_scores = sequelize.define('matches_doubles_sets_scores', {
    score: DataTypes.INTEGER
  }, {});
  matches_doubles_sets_scores.associate = function(models) {
    // associations can be defined here
  };
  return matches_doubles_sets_scores;
};