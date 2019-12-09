'use strict';

module.exports = (sequelize, DataTypes) => {

  const Project = sequelize.define('Project', {
    name: DataTypes.TEXT,
    priority: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    deliverydate: DataTypes.DATE
  }, {timestamps : false});

  Project.associate = function(models) {
    Project.hasMany(models.Task, {
      foreignKey: 'projectId',
      sourceKey: 'id'
    });
  };

  return Project;

};