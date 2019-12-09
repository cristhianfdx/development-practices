'use strict'

const moongose = require('../libs/db-connection');
const Schema = moongose.Schema;

const  taskSchema = new Schema({
    title : String,
    description : String,
    status : Boolean
});


module.exports = taskSchema;