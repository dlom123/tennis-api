'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesSinglesSets = sequelize.define('MatchesSinglesSets', {
    matchId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    seq: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_singles_sets',
    underscored: true
  });
  MatchesSinglesSets.associate = function(models) {
    MatchesSinglesSets.belongsTo(models.MatchesSingles, { as: 'match' })
    MatchesSinglesSets.belongsTo(models.Players, {
      foreignKey: 'player_id',
      as: 'player'
    })
  };
  return MatchesSinglesSets;
};