const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-stack', {useNewUrlParser: true})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log("Database error: ", err));

module.exports = mongoose;