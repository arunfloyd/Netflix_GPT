import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  if (!movies) return;
  console.log(movies[0]);

  return (
    <div>
      <div className="flex overflow-x-scroll">
        <h1>{title}</h1>
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
