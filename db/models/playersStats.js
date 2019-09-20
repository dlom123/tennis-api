'use strict'

module.exports = (sequelize, DataTypes) => {
  const PlayersStats = sequelize.define('players_stats', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    aces: DataTypes.INTEGER,
    doubleFaults: DataTypes.INTEGER,
    winners: DataTypes.INTEGER,
    unforcedErrors: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  },
  {
    underscored: true,
    classMethods: {
      associate: db => {
        PlayersStats.belongsTo(db.Players)
      }
    }
  })

  return PlayersStats
}