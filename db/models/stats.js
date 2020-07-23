'use strict'

module.exports = (sequelize, DataTypes) => {
  const Stats = sequelize.define('Stats', {
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'stats',
    underscored: true
  })
  Stats.associate = function(models) {
    // associations can be defined here
  }
  return Stats
}
