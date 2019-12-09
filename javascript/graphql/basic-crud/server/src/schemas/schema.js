const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
} = require('graphql');

const _ = require('lodash');

const Book = require('../models/Book');
const Author = require('../models/Author');

/*
let books = [
    {id: "1", name: "testName1", genre: "testGenre1", authorId: "1"},
    {id: "2", name: "testName2", genre: "testGenre2", authorId: "2"},
    {id: "3", name: "testName3", genre: "testGenre3", authorId: "3"},
    {id: "4", name: "testName4", genre: "testGenre4", authorId: "1"},
    {id: "5", name: "testName5", genre: "testGenre5", authorId: "2"},
    {id: "6", name: "testName6", genre: "testGenre6", authorId: "3"}
];

let authors = [
    {id: "1", name: "testName1", age: 31},
    {id: "2", name: "testName2", age: 44},
    {id: "3", name: "testName3", age: 50}    
];
*/

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author:{
            type: AuthorType,
            async resolve(parent, args){
                //return _.find(authors, {id: parent.authorId});
                return await Author.findById(parent.authorId);
            }
        }   
    })    
    
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books:{
            type: new GraphQLList(BookType),
            async resolve(parent, args){
                //return _.filter(books, {authorId: parent.id});
                return await Book.find({authorId: parent.id})
            }
        }    
    })    
    
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            async resolve(parent, args){
                //return _.find(books, {id: args.id});
                return await Book.findById(args.id);
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            async resolve(parent, args){
                //return _.find(authors, {id: args.id});
                return await Author.findById(args.id);
            }
        },
        books:{
            type: new GraphQLList(BookType),
            async resolve(parent, args){
                //return books;
                return await Book.find({});
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            async resolve(parent, args){
                //return authors;
                return await Author.find({});                
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addAuthor:{
            type: AuthorType,
            args: {
                name: {type: GraphQLString},
                age: {type: GraphQLInt}
            },
            async resolve(parent, args){
                let author = new Author({
                    name: args.name,
                    age: args.age
                });
                
                await author.save();
                return {status: true, message: 'Author created'};
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type: new GraphQLNonNull(GraphQLString)},
                authorId: {type: new GraphQLNonNull(GraphQLID)}
            },
            async resolve(parent, args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });

                await book.save();
                return {status: true, message: 'Book created'};
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation    
});