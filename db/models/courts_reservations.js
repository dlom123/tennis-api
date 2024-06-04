'use strict'

module.exports = (sequelize, DataTypes) => {
  const CourtsReservations = sequelize.define('CourtsReservations', {
    courtId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    startTime: DataTypes.DATE,
    isPrivate: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'courts_reservations',
    underscored: true
  })
  CourtsReservations.associate = function (models) {
    CourtsReservations.belongsTo(models.Locations, {
      foreignKey: 'location_id',
      as: 'location'
    })
  }

  return CourtsReservations
}
