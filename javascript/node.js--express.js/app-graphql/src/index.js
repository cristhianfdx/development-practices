import express from 'express';
import morgan from 'morgan';
import graphqlHttp from 'express-graphql';

import schema from './schema';
import { connect } from './database';

const app = express();
connect();


// Middlewares
app.use(morgan('dev'));
app.use('/graphql', graphqlHttp({
    graphiql: true,
    schema
}));


app.listen(3000, ()=>{
    console.log("Server on port 3000");
});