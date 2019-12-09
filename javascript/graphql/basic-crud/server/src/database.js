const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/graphql-react-app', {useNewUrlParser: true})
    .then(db => console.log("Database is connected"))
    .catch(err=> console.error(err));