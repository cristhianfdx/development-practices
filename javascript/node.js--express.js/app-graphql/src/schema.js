import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';


const typeDefs = `
    type Query {
        getUsers: [User]
        getOneUser(user_id: ID!): User 
    }    

    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    type Message {
        status : Boolean
        message: String
    }

    type Mutation {        
        createUser(input: UserInput) : Message
        updateUser(input: UserInput, user_id: ID!) : Message
        deleteUser(user_id: ID!) : Message        
    }  

    input UserInput {
        firstname: String!
        lastname: String!
        age: Int
    }

`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
});

