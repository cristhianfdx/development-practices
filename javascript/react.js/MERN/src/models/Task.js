const mongoose = require('mongoose');
const {Schema} = mongoose;

const schemaTask = new Schema({
    title: {type: String, required: true },
    description: {type: String, required: true }
});

const modelTask = mongoose.model('Tasks', schemaTask);

module.exports = modelTask;
