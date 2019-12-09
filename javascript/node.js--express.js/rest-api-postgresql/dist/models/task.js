'use strict';

module.exports = function (sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    name: DataTypes.TEXT,
    done: DataTypes.BOOLEAN,
    projectId: DataTypes.INTEGER
  }, {
    timestamps: false
  });

  Task.associate = function (models) {
    Task.belongsTo(models.Project, {
      foreignKey: 'projectId',
      sourceKey: 'id'
    });
  };

  return Task;
};