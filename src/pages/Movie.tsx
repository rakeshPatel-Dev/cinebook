import { useNavigate, useParams } from "react-router-dom";
import movies from "../data/movies.json";
import { CirclePlay, Film, Star, X } from "lucide-react";
import { useState } from "react";
import {  ToastContainer } from "react-toastify";

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);
  const [showTrailer, setShowTrailer] = useState(false);

  const navigate = useNavigate();
  const handleBooking = () => {
    navigate("/booking", { state: { movie } });

  }

  if (!movie) {
    return (
      <div className="text-center text-white pt-40 text-3xl">
        Movie Not Found 😢
      </div>
    );
  }

  return (
    <div className="dark:bg-[#121212] min-h-screen">
      <ToastContainer position={"top-center"} />
      {/* Banner Section */}
      <div className="relative h-[50vh] lg:h-[65vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.banner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent" />

        {/* Movie Header */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-20 py-10 text-white">
          <div className="flex flex-col md:flex-row items-end gap-8 max-w-7xl mx-auto">
            <img
              className="w-46 h-66 object-cover rounded-lg shadow-xl -mt-28"
              src={movie.poster}
              alt={movie.title}
            />

            <div className="flex-1">
              <div className="text-sm text-white/70 flex items-center gap-2">
                <a className="hover:text-white" href="/">Home</a> /
                <a className="hover:text-white" href="/movies">Movies</a> /
                <span className="text-white">{movie.title}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mt-2">
                {movie.title}
              </h1>

              <div className="flex flex-wrap gap-3 mt-4">
                {movie.genres.map((g) => (
                  <span key={g} className="bg-white/10 px-4 py-1 rounded-lg text-sm">
                    {g}
                  </span>
                ))}
                <span className="bg-white/10 px-4 py-1 rounded-lg text-sm">
                  {Math.floor(movie.duration / 60)}h {movie.duration % 60}m
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                handleBooking()
              }}
              className="h-12 px-6 bg-[#ec1337] hover:bg-[#c60f2d] rounded-lg font-bold flex cursor-pointer transition-all items-center gap-2 text-white">
              <Film /> Book Tickets
            </button>
            <button
              onClick={() => {
                setShowTrailer(true)
              }}
              className="h-12 px-6 bg-white/10 border border-white/10 cursor-pointer hover:bg-white/15 transition-all rounded-lg font-bold flex items-center gap-2 text-white">
              <CirclePlay /> Watch Trailer
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 lg:px-10 justify-between py-12 max-w-7xl mx-auto flex items-center flex-row">
        <div className=" w-3/4 text-white">
          {/* Synopsis */}
          <h3 className="text-2xl font-bold mb-3">Synopsis</h3>
          <p className="text-white/80 leading-relaxed">{movie.description}</p>

          {/* Cast */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Cast</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {movie.cast.map((actor) => (
                <div key={actor} className="text-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    🎭
                  </div>
                  <p className="font-semibold">{actor}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trailer */}

          {showTrailer &&
            <div className="mt-12 absolute top-0 left-0 bg-black/10  backdrop-blur-2xl h-full  w-full flex items-center justify-center flex-col">
              <div className="flex items-center justify-between w-3/5 flex-row">

                <h3 className="text-3xl font-bold mb-4">Trailer</h3>
                <span
                  onClick={() => {
                    setShowTrailer(false)
                  }}
                  title="Close"
                ><X className=" h-10 w-10 bg-white/10 hover:bg-white/20 transition-all cursor-pointer rounded-full p-2 " /></span>
              </div>
              <iframe
                className="w-3/5 border-white/10 select-none border aspect-video rounded-lg"
                src={`${movie.trailer}?autoplay=1`}
                title="Movie Trailer"
                allowFullScreen
                allow="autoplay"



              ></iframe>
            </div>
          }
        </div>
        <div className="">
          <div className="bg-white/5 rounded-lg p-6 space-y-2">
            <h3 className="text-xl font-bold text-white mb-2">Details</h3>
            <div className="flex justify-between gap-8 text-sm">
              <span className="text-white/60">Release Year</span>
              <span className="text-white font-medium">{movie.year}</span>
            </div>
            <div className="flex justify-between gap-8 text-sm">
              <span className="text-white/60">Director</span>
              <span className="text-white font-medium">{movie.director}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Duration</span>
              <span className="text-white font-medium">{movie.duration} Min</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Language</span>
              <span className="text-white font-medium">{movie.language}</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-6 mt-6">
            <h3 className="text-xl font-bold text-white mb-4">Ratings</h3>
            <div className="flex items-center flex-row gap-4">
              <Star size={35} className="text-yellow-500" />
              <span className="text-white font-extrabold text-2xl">{movie.rating}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Movie;
