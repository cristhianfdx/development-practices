'use strict'

const bodyParser = require('body-parser');
const morgan = require('morgan');

const express = require('express'); 
const app = express();

const productRoutes = require('./routes/products.js');

//settings
app.set('json spaces', 4);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//Routes
app.use('/products', productRoutes);


//Static files

//Start server

app.listen(3000, ()=>{
    console.log("Server on port 3000");
});
