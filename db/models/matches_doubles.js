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
    // associations can be defined here
  };
  return MatchesDoubles;
};