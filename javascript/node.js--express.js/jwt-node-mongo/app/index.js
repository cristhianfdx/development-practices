const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./config');

//Settings
const port = process.env.PORT || 3000;

mongoose.connect(config.database, {useNewUrlParser : true})
    .then(db=>{
        console.log("Database connected");
    }).catch(err=>{
        console.error(err);
    });

app.set('jwtSecret', config.secret);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

//Routes
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

//Server listening
app.listen(port, ()=>{
    console.log("Server on port", port);
})