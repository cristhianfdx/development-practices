const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    avatar:{ type: String}
});

module.exports = model('User', UserSchema);