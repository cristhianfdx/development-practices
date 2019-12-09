import express  from 'express';
const app = express();

//Model
//import Car from './models/Cars';

import { ApolloServer} from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

//settings
app.set('port', process.env.PORT || 3000);

//Routes

apolloServer.applyMiddleware({
    app,
    path: '/graphql',
    cors: true,
    bodyParserConfig: express.json()
});

//Server
app.listen(app.get('port'), ()=> console.log("server on port 3000"));