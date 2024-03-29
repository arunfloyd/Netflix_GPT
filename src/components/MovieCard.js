import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

function MovieCard({ posterPath }) {
  return (
    <div className="w-48">
      <img alt="Movie_Image" src={IMG_CDN_URL + posterPath} />
    </div>
  );
}

export default MovieCard;
