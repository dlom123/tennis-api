'use strict'

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
		tableName: 'users',
    underscored: true
  })
  Users.associate = function(models) {
    Users.hasOne(models.Players, { foreignKey: 'id', as: 'player' })
  }
  return Users
}
