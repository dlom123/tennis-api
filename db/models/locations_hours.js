'use strict'

module.exports = (sequelize, DataTypes) => {
  const LocationsHours = sequelize.define('LocationsHours', {
    locationId: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    openHour: DataTypes.INTEGER,
    openMinute: DataTypes.INTEGER,
    closeHour: DataTypes.INTEGER,
    closeMinute: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'locations_hours',
    underscored: true
  })
  LocationsHours.associate = function (models) {
    LocationsHours.belongsTo(models.Locations, {
      foreignKey: 'location_id',
      as: 'location'
    })
  }

  return LocationsHours
}
