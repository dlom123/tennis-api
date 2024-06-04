'use strict'

module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    name: DataTypes.STRING,
    settings: DataTypes.ARRAY(DataTypes.STRING),
    surfaces: DataTypes.ARRAY(DataTypes.STRING),
    isPrivate: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'locations',
    underscored: true
  })
  Locations.associate = function (models) {
    Locations.hasMany(models.LocationsHours, { as: 'hours' })
    Locations.hasMany(models.Courts, { as: 'courts' })
    Locations.hasMany(models.MatchesSingles, { as: 'matches_singles' })
    Locations.hasMany(models.MatchesDoubles, { as: 'matches_doubles' })
  }

  return Locations
}
