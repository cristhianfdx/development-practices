'use strict'

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//Database Connection
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks',require('./controllers/task_controller'));

//Static Files
app.use(express.static(path.join(__dirname + '/public')));

//Server on listening
app.listen(app.get('port'), ()=> console.log(`Server on port ${app.get('port')}`));