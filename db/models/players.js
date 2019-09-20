'use strict'

module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('players', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    height: DataTypes.INTEGER,
    rightHanded: DataTypes.BOOLEAN,
    level: DataTypes.FLOAT,
    avatarUrl: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  },
  {
    underscored: true,
    classMethods: {
      associate: db => {
        Players.hasMany(db.playersStats)
      }
    }
  })

  return Players
}