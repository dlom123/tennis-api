'use strict'

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
		tableName: 'users',
    underscored: true
  })
  Users.associate = function(models) {
    // associations can be defined here
    // Users.hasOne(models.Players)
  }
  return Users
}
