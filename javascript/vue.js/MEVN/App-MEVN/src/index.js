'use strict'

const express = require('express');
const morgan = require('morgan');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());//permite leer datos json

//Routes
app.use('/api/tasks',require('./routes/taks'));

//Static Files
app.use(express.static(__dirname + '/public'));

//Server
app.listen(app.get('port'), ()=>{
    console.log("Server on port", app.get('port'));
});