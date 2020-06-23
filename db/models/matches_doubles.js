'use strict';
module.exports = (sequelize, DataTypes) => {
  const matches_doubles = sequelize.define('matches_doubles', {
    date: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {});
  matches_doubles.associate = function(models) {
    // associations can be defined here
  };
  return matches_doubles;
};