const mongoose = require('mongoose');

const URI = "mongodb://cris89:c890611@ds163354.mlab.com:63354/tareas";

mongoose.connect(URI, {useNewUrlParser: true})
.then(db => console.log("Database conected "))
.catch(err => console.log("Database Error :", err));

module.exports = mongoose;