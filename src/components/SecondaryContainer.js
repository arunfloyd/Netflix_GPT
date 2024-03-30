import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-72 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />

          <MovieList title={"Popular"} movies={movies.popularMovies} />

          <MovieList title={"Up Coming"} movies={movies.nowPlayingMovies} />

          {/* Movielist - Popular 
    MovieCard*N
       Movielist - Now Playing
       Movielist - Trending 
       Movielist - Horor */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
