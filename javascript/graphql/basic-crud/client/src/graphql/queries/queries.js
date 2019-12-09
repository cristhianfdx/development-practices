import {gql} from 'apollo-boost';


const getBooksQuery = gql`
    query {
        books{
            name
            id
        }
    }
`;

const getAuthorsQuery = gql`
    query {
        authors{
            name
            id
        }
    }

`;

const getBookQuery = gql`
    query($id:ID){
        book(id:$id){
            name
            genre
            id
            author{
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }            
    }

`;

export {getBooksQuery, getAuthorsQuery, getBookQuery};