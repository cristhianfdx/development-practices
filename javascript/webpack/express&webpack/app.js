//'use strict'

import express from 'express';
const app = express();

//webpack
const webpack = require('webpack');
const webpacDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

//middleware
app.use(webpacDevMiddleware(webpack(webpackConfig)));
app.use(express.static(__dirname + '/public'));

app.listen(3000, ()=>{
    console.log("Server on port 3000");
});