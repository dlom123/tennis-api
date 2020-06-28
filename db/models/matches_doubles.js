'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesDoubles = sequelize.define('MatchesDoubles', {
    setting: DataTypes.STRING,
    surface: DataTypes.STRING,
    date: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_doubles',
    underscored: true
  });
  MatchesDoubles.associate = function(models) {
    MatchesDoubles.belongsTo(models.Locations, { as: 'location' })
    MatchesDoubles.hasMany(models.MatchesDoublesSets, {
      foreignKey: 'match_id',
      as: 'sets'
    })
  };
  return MatchesDoubles;
};