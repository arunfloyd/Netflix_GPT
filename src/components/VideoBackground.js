import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
      
      ></iframe>
    </div>
  );
};

export default VideoBackground;
