'use strict'

module.exports = (sequelize, DataTypes) => {
  const Stats = sequelize.define('stats', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seq: {
      type: DataTypes.INTEGER
    },
    deletedAt: DataTypes.DATE
  },
  {
    underscored: true
  })

  return Stats
}