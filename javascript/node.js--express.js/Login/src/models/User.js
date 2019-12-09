const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default : Date.now}
});

UserSchema.methods.encryptPassword = async (password)=>{
    const salt = await bycrypt.genSalt(10);
    const hash = bycrypt.hash(password, salt);
    return hash;
};

UserSchema.methods.matchPassword = async function (password){
    return await bycrypt.compare(password, this.password);
};

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;