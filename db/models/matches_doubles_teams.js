'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesDoublesTeams = sequelize.define('MatchesDoublesTeams', {
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_doubles_teams',
    underscored: true
  });
  MatchesDoublesTeams.associate = function(models) {
    // associations can be defined here
  };
  return MatchesDoublesTeams;
};