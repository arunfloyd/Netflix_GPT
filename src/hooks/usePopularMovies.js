import { MOVIE_API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  //Fetch data from TMDB APO and upadate the store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIE_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default usePopularMovies;
