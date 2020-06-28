'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesDoublesTeams = sequelize.define('MatchesDoublesTeams', {
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_doubles_teams',
    underscored: true
  });
  MatchesDoublesTeams.associate = function(models) {
    MatchesDoublesTeams.hasMany(models.MatchesDoublesSets, {
      foreignKey: 'team_id',
      as: 'sets'
    })
    MatchesDoublesTeams.hasMany(models.MatchesDoublesTeamsPlayers, {
      foreignKey: 'team_id',
      as: 'players'
    })
  };
  return MatchesDoublesTeams;
};