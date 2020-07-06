'use strict'

module.exports = (sequelize, DataTypes) => {
  const MatchesDoublesTeamsPlayers = sequelize.define('MatchesDoublesTeamsPlayers', {
    teamId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_doubles_teams_players',
    underscored: true
  });
  MatchesDoublesTeamsPlayers.associate = function(models) {
    MatchesDoublesTeamsPlayers.belongsTo(models.MatchesDoublesTeams, {
      foreignKey: 'team_id',
      as: 'team'
    })
    MatchesDoublesTeamsPlayers.belongsTo(models.Players, { as: 'player' })
  }
  return MatchesDoublesTeamsPlayers
}
