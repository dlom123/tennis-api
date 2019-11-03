'use strict'

module.exports = (sequelize, DataTypes) => {
  const PlayersStats = sequelize.define('playersStats', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'players',
        key: 'id'
      }
    },
    stat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stats',
        key: 'id'
      },
    },
    num: {
      type: DataTypes.INTEGER
    },
    denom: {
      type: DataTypes.INTEGER
    },
    deleted_at: {
      type: DataTypes.DATE
    }
  },
  {
    underscored: true,
    // tableName: 'players_stats'
  })

  return PlayersStats
}