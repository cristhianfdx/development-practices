const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String },
    password: { type: String },
    admin: { type: Boolean }
});

module.exports = model('User', userSchema);