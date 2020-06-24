'use strict';
module.exports = (sequelize, DataTypes) => {
  const MatchesSingles = sequelize.define('MatchesSingles', {
    setting: DataTypes.STRING,
    surface: DataTypes.STRING,
    date: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {
    tableName: 'matches_singles',
    underscored: true
  });
  MatchesSingles.associate = function(models) {
    // associations can be defined here
  };
  return MatchesSingles;
};