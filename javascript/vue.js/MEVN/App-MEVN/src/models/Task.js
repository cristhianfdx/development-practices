//Schemas and Model

const mongoose = require('../config/db_connection');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String
});

const TaskModel = mongoose.model('tasks', TaskSchema);

module.exports= TaskModel;