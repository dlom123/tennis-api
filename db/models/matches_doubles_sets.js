'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesDoublesSets = sequelize.define('MatchesDoublesSets', {
    score: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_doubles_sets',
    underscored: true
  });
  MatchesDoublesSets.associate = function(models) {
    MatchesDoublesSets.belongsTo(models.MatchesDoubles, { as: 'match' })
    MatchesDoublesSets.belongsTo(models.MatchesDoublesTeams, {
      foreignKey: 'team_id',
      as: 'team'
    })
  };
  return MatchesDoublesSets;
};