import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      {/* Movielist - Popular 
      MovieCard*N
         Movielist - Now Playing
         Movielist - Trending 
         Movielist - Horor */}
    </div>
  );
};

export default SecondaryContainer;
