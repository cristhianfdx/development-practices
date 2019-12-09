import express from 'express';
const app = express();

//Database
require('./db_connection');

//Model
import Book from './models/Book';

//GraphQL
import {ApolloServer} from 'apollo-server-express';


import typeDefs from './graphql/schemas';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {Book}
});

//Settings
app.set('port', process.env.PORT || 3000);

server.applyMiddleware({
    app,
    path: '/graphiql',
    cors: true, 
    bodyParserConfig: express.json()
});


//Server on Port

app.listen(app.get('port'), ()=> console.log("Server on port", app.get('port')));