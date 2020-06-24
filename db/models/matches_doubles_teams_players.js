'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesDoublesTeamsPlayers = sequelize.define('MatchesDoublesTeamsPlayers', {
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_doubles_teams_players',
    underscored: true
  });
  MatchesDoublesTeamsPlayers.associate = function(models) {
    // associations can be defined here
  };
  return MatchesDoublesTeamsPlayers;
};