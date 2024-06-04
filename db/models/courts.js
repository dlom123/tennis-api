'use strict'

module.exports = (sequelize, DataTypes) => {
  const Courts = sequelize.define('Courts', {
    locationId: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    surface: DataTypes.STRING,
    isUsable: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'courts',
    underscored: true
  })
  Courts.associate = function (models) {
    Courts.belongsTo(models.Locations, {
      foreignKey: 'location_id',
      as: 'location'
    })
  }

  return Courts
}
