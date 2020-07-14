'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesDoublesSets = sequelize.define('MatchesDoublesSets', {
    matchId: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    tiebreakerScore: DataTypes.INTEGER,
    seq: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_doubles_sets',
    underscored: true
  });
  MatchesDoublesSets.associate = function(models) {
    MatchesDoublesSets.belongsTo(models.MatchesDoubles, { as: 'match' })
    MatchesDoublesSets.belongsTo(models.MatchesDoublesTeams, {
      foreignKey: 'team_id',
      as: 'team'
    })
  };
  return MatchesDoublesSets;
};