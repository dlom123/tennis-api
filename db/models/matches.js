'use strict'

module.exports = (sequelize, DataTypes) => {
  const Matches = sequelize.define('matches', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME
  },
  {
    underscored: true,
    classMethods: {
      associate: db => {
        // Matches.hasMany(db.sets)
      }
    }
  })

  return Matches
}