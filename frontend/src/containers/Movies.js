import React from "react";
import SingleMovie from "../components/SingleMovie";

const movies = [
  { name: "John Wick", genre: "Action", year: "2021" },
  { name: "John Wick", genre: "Action", year: "2021" },
  { name: "John Wick", genre: "Action", year: "2021" },
  { name: "John Wick", genre: "Action", year: "2021" },
  { name: "John Wick", genre: "Action", year: "2021" },
  { name: "John Wick", genre: "Action", year: "2021" },
  { name: "John Wick", genre: "Action", year: "2021" },
];

const Movies = () => {
  return (
    <div className="movies">
      {movies.map((movie) => {
        return <SingleMovie />;
      })}
    </div>
  );
};

export default Movies;
