'use strict';
module.exports = (sequelize, DataTypes) => {
  const matches_singles_sets_scores = sequelize.define('matches_singles_sets_scores', {
    score: DataTypes.INTEGER
  }, {});
  matches_singles_sets_scores.associate = function(models) {
    // associations can be defined here
  };
  return matches_singles_sets_scores;
};