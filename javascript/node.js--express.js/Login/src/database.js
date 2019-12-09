const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/app-node-login", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(db => console.log("Database Conected"))
.catch(err=> {
    console.error("Database conected error :", err);
});


module.exports = mongoose;