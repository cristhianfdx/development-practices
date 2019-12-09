const { gql } = require('apollo-server');

export default gql`
    type Car{
        _id: String!
        name: String!
    }

    type Query{
        allCars : [Car!]!
    }

    type Mutation{
        createCar(name: String!): Car!
    }

`;