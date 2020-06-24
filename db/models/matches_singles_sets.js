'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesSinglesSets = sequelize.define('MatchesSinglesSets', {
    score: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_singles_sets',
    underscored: true
  });
  MatchesSinglesSets.associate = function(models) {
    // associations can be defined here
  };
  return MatchesSinglesSets;
};