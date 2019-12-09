const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use(require('./routes/users.js'));

module.exports = app;