'use strict'

const moongose = require('../libs/db-connection');
const taskSchema = require('./schemas');

const model = moongose.model('tasks', taskSchema);

module.exports = model;

