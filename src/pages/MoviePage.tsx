import { useState } from 'react';
// import Header from '../components/Header';
import movies from '../data/movies.json';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const MoviePage = () => {
  const genres = movies.flatMap(movie => movie.genres);
  const allGenres = [...new Set(genres)].sort();

  const languages = movies.map(movie => movie.language);
  const allLanguages = [...new Set(languages)].sort();

  const [selectedGenre, setSelectedGenre] = useState("Genre");
  const [selectedLanguage, setSelectedLanguage] = useState("Language");
  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState("")

  const moviesPerPage = 10; // adjust as needed

  const handleGenreSelection = (e) => setSelectedGenre(e.target.value);
  const handleLanguageSelection = (e) => setSelectedLanguage(e.target.value);

  const filteredMovies = movies.filter(movie => {
    const genreMatch =
      selectedGenre === "Genre" || movie.genres.includes(selectedGenre);
    const languageMatch =
      selectedLanguage === "Language" || movie.language === selectedLanguage;

    const queryMatch = movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    return genreMatch && languageMatch && queryMatch;
  });

  // Pagination logic
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);


  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-[#121212] group/design-root overflow-x-hidden">
      <main className="flex flex-col gap-8 py-8 px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
            Now Showing
          </p>
          <div className="flex flex-wrap gap-3">
            {/* Genre Select */}
            <button className="flex py-2 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/5 pl-4 pr-3 text-white hover:bg-white/10 transition-colors">
              <select
                className="outline-none bg-transparent"
                title="Choose genre"
                value={selectedGenre}
                onChange={handleGenreSelection}
              >
                <option value="Genre" className="dark:bg-[#121212] font-bold">
                  Genre
                </option>
                {allGenres.map((genre, idx) => (
                  <option className="dark:bg-[#121212]" key={idx} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </button>

            {/* Language Select */}
            <button className="flex py-2 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/5 pl-4 pr-3 text-white hover:bg-white/10 transition-colors">
              <select
                className="outline-none bg-transparent"
                title="Choose language"
                value={selectedLanguage}
                onChange={handleLanguageSelection}
              >
                <option value="Language" className="dark:bg-[#121212] font-bold">
                  Language
                </option>
                {allLanguages.map((lang, idx) => (
                  <option className="dark:bg-[#121212]" key={idx} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </button>

            {/* Search Filter */}
            <div className="flex flex-row bg-white/5 items-center rounded-lg px-4 py-2">
              <div className="text-white flex items-center justify-center">
                <Search />
              </div>
              <input
              onChange={(e)=> {
                setSearchQuery(e.target.value)
              }}
              value={searchQuery}
                className=" flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 border-none h-full placeholder:text-white/50 pl-4 text-base font-normal leading-normal"
                placeholder="Search for movies..."
              />
            </div>
          </div>
        </div>

        {/* Movie Grid */}
        {currentMovies.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-600 font-bold text-xl">No movies found 😔</p>
          </div>
        ) : (
          <div className="grid relative grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
            {currentMovies.map((m, idx) => (
              <Link to={`/movies/${m.id}`} key={idx} className="group relative aspect-2/3 w-full overflow-hidden rounded-lg cursor-pointer transition-transform backdrop-blur-sm duration-300 ease-in-out hover:scale-105">
                <div
                  className="bg-cover bg-center absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${m.poster})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-base font-bold leading-tight line-clamp-2">
                    {m.title}
                  </h3>
                  <p className=" text-gray-300 text-xs mt-1">
                    {m.genres.join("/")} | {Math.floor(m.duration / 60)}H {m.duration % 60}M
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="rounded-full bg-[#ec1337] px-6 py-2 text-sm font-bold text-white">
                    Book Now
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 p-4 flex-wrap">
            <button
              title='Previous'
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className=" text-white h-10 w-10 flex items-center justify-center rounded-full  hover:bg-white/10"
            >
              <ChevronLeft />
            </button>
            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`flex items-center justify-center h-10 w-10 rounded-full ${currentPage === idx + 1 ? "bg-[#ec1337] text-white" : "text-white hover:bg-white/10"
                  }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              title='Next'
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className=" text-white h-10 w-10 flex items-center justify-center rounded-full  hover:bg-white/10"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MoviePage;
