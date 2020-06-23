'use strict'

module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('Players', {
    gender: DataTypes.STRING,
    height: DataTypes.INTEGER,
    rating: DataTypes.STRING,
    isRightHanded: DataTypes.BOOLEAN,
    backhand: DataTypes.INTEGER,
    avatarUrl: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'players',
    underscored: true
  })
  Players.associate = function(models) {
    // associations can be defined here
    // Players.belongsTo(models.Users)
  }

  return Players
}
