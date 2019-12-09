import mongoose from "mongoose";
import {gql} from 'apollo-server-express';

const { ObjectId } = mongoose.Types;

ObjectId.prototype.valueOf = function() {
  return this.toString();
};

export default gql`
    type Book{
        _id: String!
        title: String!
        author: String!
    }

    type Query{
        listBooks: [Book]
    }

    type Mutation{
        createBook(title: String!, author: String!): Book
        updateBook(_id: String!, title: String!, author: String!): Book
        deleteBook(_id: String!): Book
    }

`;