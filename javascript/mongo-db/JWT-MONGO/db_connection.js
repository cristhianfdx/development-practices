const mongoose = require('mongoose');

const config = require('./config');

mongoose.connect(config.database, {useNewUrlParser:true});

mongoose.Promise = global.Promise;

module.exports = mongoose;