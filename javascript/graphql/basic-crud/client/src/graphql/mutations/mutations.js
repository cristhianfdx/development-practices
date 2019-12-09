import {gql} from 'apollo-boost';

const AddBooMutation = gql`
    mutation($name:String!, $genre:String!, $authorId:ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }

`;

export {AddBooMutation};