import { useNavigate, useParams } from "react-router-dom";
import movies from "../data/movies.json";
import { CirclePlay, Film, Star, X } from "lucide-react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);
  const [showTrailer, setShowTrailer] = useState(false);

  const navigate = useNavigate();
  const handleBooking = () => {
    navigate("/booking", { state: { movie } });
  };

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
      <div className="relative h-[45vh] md:h-[60vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.banner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent" />

        {/* Movie Header */}
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-10 py-10 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 max-w-7xl mx-auto">
            <img
              className="w-32 h-48 md:w-48 md:h-72 object-cover rounded-lg shadow-xl -mt-20 md:-mt-28"
              src={movie.poster}
              alt={movie.title}
            />

            <div className="flex-1">
              <div className="text-sm text-white/70 flex items-center gap-2">
                <a className="hover:text-white" href="/">Home</a> /
                <a className="hover:text-white" href="/movies">Movies</a> /
                <span className="text-white">{movie.title}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mt-2">
                {movie.title}
              </h1>

              <div className="flex flex-wrap gap-2 mt-3">
                {movie.genres.map((g) => (
                  <span key={g} className="bg-white/10 px-3 py-1 rounded-lg text-sm">
                    {g}
                  </span>
                ))}
                <span className="bg-white/10 px-3 py-1 rounded-lg text-sm">
                  {Math.floor(movie.duration / 60)}h {movie.duration % 60}m
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <button
                  onClick={handleBooking}
                  className="h-11 px-5 bg-[#ec1337] hover:bg-[#c60f2d] rounded-lg font-bold flex items-center gap-2 text-white"
                >
                  <Film /> Book Tickets
                </button>

                <button
                  onClick={() => setShowTrailer(true)}
                  className="h-11 px-5 bg-white/10 border border-white/10 hover:bg-white/15 rounded-lg font-bold flex items-center gap-2 text-white"
                >
                  <CirclePlay /> Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-10 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-white">
            <h3 className="text-2xl font-bold mb-3">Synopsis</h3>
            <p className="text-white/80 leading-relaxed">{movie.description}</p>

            {/* Cast */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Cast</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {movie.cast.map((actor) => (
                  <div key={actor} className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      🎭
                    </div>
                    <p className="font-semibold">{actor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white/5 rounded-lg p-6 space-y-2">
              <h3 className="text-xl font-bold text-white mb-2">Details</h3>
              <Detail label="Release Year" value={movie.year} />
              <Detail label="Director" value={movie.director} />
              <Detail label="Duration" value={`${movie.duration} Min`} />
              <Detail label="Language" value={movie.language} />
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Ratings</h3>
              <div className="flex items-center gap-4">
                <Star size={35} className="text-yellow-500" />
                <span className="text-white font-extrabold text-2xl">
                  {movie.rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRAILER MODAL */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-3xl bg-black/40 p-4 rounded-xl relative">
            <X
              onClick={() => setShowTrailer(false)}
              className="absolute top-3 right-3 h-8 w-8 p-1 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer"
            />

            <h3 className="text-2xl font-bold text-white mb-4">Trailer</h3>

            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg border border-white/10"
                src={`${movie.trailer}?autoplay=1`}
                allowFullScreen
                allow="autoplay"
                title="Trailer"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Detail = ({ label, value }: any) => (
  <div className="flex justify-between text-sm">
    <span className="text-white/60">{label}</span>
    <span className="text-white font-medium">{value}</span>
  </div>
);

export default Movie;
