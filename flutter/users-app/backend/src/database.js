const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/flutter-app', {useNewUrlParser: true});
        console.log("Database is connected");
    } catch (error) {
        console.error(error);
    }
}

module.exports = { connect };