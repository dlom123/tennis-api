'use strict'

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {})
  Users.associate = function(models) {
    // associations can be defined here
    // Users.hasOne(models.Players)
  }
  return Users
}
