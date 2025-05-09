 import React from "react";
 import {gpl, useQuery} from "@apollo/client"

 const listAllMovies=gpl`
 query{
 movieList{
   name
   genre
   year
 }
 }
 `
 const Movies =()=>{
    const { loading, error, data } = useQuery(listAllMovies);
    console.log(data)
    if (loading) return <p>We are loading your movies...</p>;
  if (error) return <p>Cannot fetch your movies! :{error.message}</p>;

    return(
        <div className="movies">
         {data.map((movie)=>{
            return <SingleMovie
            movieName={movie.name}
            movieGenre={movie.genre}    
            movieYear={movie.year}
            
            />
         })}

        </div>
    )
 }

 export default Movies