import {buildSchema} from "graphql";

const schema = buildSchema(`
    type Query{
    listMovies:[Movie]
    }
    type Mutation{
    addMovie(name:String!,genre:String!,year:String!):Movie
    }
    type Movie{
      name:String,
      genre:String,
      year:String
    }
    `);

export default schema;
