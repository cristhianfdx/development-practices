const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mevn-database', {
    useNewUrlParser :true
    })
    .then((db)=> {console.log("Database is connected")})
    .catch((err)=> {console.error("Error:", err);});

module.exports = mongoose;