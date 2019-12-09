'use strict' //Usar funcionalidades Ecmascript 6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crud-example', {
    useNewUrlParser :true
});

module.exports = mongoose;

