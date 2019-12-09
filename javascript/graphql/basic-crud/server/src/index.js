const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const graphQLHTTP = require('express-graphql');

const app = express();

// Mongo
require('./database');

// GraphQL
const schema = require('./schemas/schema.js');

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use('/graphql',graphQLHTTP({
    schema,
    graphiql: true
}))


app.listen(5000, ()=>{
    console.log("Server on port 5000");
});