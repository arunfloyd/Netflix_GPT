import { MOVIE_API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  //Fetch data from TMDB APO and upadate the store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIE_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useTopRatedMovies;
