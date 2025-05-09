import moviemodel from "../model/moviemodel.js";

const resolvers = {
  listMovies: () => {
    return moviemodel.find({});
  },
  addMovie: (args) => {
    let data = new moviemodel({
      name: args.name,
      genre: args.genre,
      year: args.year,
    });
    data.save();
    return data;
  },
};

export default resolvers;
