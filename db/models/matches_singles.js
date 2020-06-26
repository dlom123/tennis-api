'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesSingles = sequelize.define('MatchesSingles', {
    locationId: DataTypes.INTEGER,
    setting: DataTypes.STRING,
    surface: DataTypes.STRING,
    date: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_singles',
    underscored: true
  });
  MatchesSingles.associate = function(models) {
    MatchesSingles.belongsTo(models.Locations, { as: 'location' })
    MatchesSingles.hasMany(models.MatchesSinglesSets, {
      foreignKey: 'match_id',
      as: 'sets'
    })
  };
  return MatchesSingles;
};