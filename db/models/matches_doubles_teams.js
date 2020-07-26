'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesDoublesTeams = sequelize.define('MatchesDoublesTeams', {
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_doubles_teams',
    underscored: true
  });
  MatchesDoublesTeams.associate = function(models) {
    MatchesDoublesTeams.hasMany(models.MatchesDoublesSets, {
      foreignKey: 'team_id',
      as: 'sets'
    })
    MatchesDoublesTeams.belongsToMany(models.Players, {
      through: 'matches_doubles_teams_players',
      foreignKey: 'team_id',
      as: 'players'
    })
  };
  return MatchesDoublesTeams;
};