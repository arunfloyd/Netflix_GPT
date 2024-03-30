import { MOVIE_API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import {  addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  //Fetch data from TMDB APO and upadate the store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIE_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useUpcomingMovies;
