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
    Players.belongsToMany(models.MatchesDoublesTeams, {
      through: 'matches_doubles_teams_players',
      foreignKey: 'player_id',
      as: 'teams'
    })
  }

  return Players
}
