'use strict'

module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('Players', {
    userId: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    height: DataTypes.INTEGER,
    rating: DataTypes.STRING,
    isRightHanded: DataTypes.BOOLEAN,
    backhand: DataTypes.INTEGER,
    avatarUrl: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'players',
    underscored: true,
  })
  Players.associate = function(models) {
    Players.belongsTo(models.Users, { as: 'user' })
    Players.hasMany(models.MatchesSinglesSets, {
      foreignKey: 'player_id',
      as: 'sets_singles'
    })
    Players.hasMany(models.MatchesDoublesTeamsPlayers, {
      foreignKey: 'player_id',
      as: 'doubles_teams_player'
    })
  }

  return Players
}
