'use strict';
module.exports = (sequelize, DataTypes) => {
  const matches_doubles_teams_players = sequelize.define('matches_doubles_teams_players', {
    deleted_at: DataTypes.DATE
  }, {});
  matches_doubles_teams_players.associate = function(models) {
    // associations can be defined here
  };
  return matches_doubles_teams_players;
};