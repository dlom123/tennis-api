'use strict';
module.exports = (sequelize, DataTypes) => {
  const matches_doubles_teams = sequelize.define('matches_doubles_teams', {
    deleted_at: DataTypes.DATE
  }, {});
  matches_doubles_teams.associate = function(models) {
    // associations can be defined here
  };
  return matches_doubles_teams;
};