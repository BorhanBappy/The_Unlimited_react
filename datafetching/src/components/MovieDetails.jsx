/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loading from "./Loading";
import axios from "axios";
const KEY = "117e7765";

export default function MovieDetails({
  selectedID,
  closeSelectedMovie,
  handleAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true); // Loading state
  const [userRating, setUserRating] = useState("");
  const [error, setError] = useState(null);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    Plot: plot,
    imdbRating,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function onAddMovie() {
    const newWatchedMovie = {
      imdbID: selectedID,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    handleAddWatched(newWatchedMovie);
    closeSelectedMovie();
  }

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedID);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedID
  )?.userRating;
  console.log(isWatched);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true); // Set loading before fetching
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    }

    getMovieDetails();
  }, [selectedID]);

  // Change Title and cleanup title

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return function () {
      document.title = "usePopcorn";
    };
  }, [title]);

  return (
    <div className="bg-slate-800 text-white rounded-xl shadow-2xl  relative font-['Poppins'] p-5">
      <header className="relative">
        <button
          onClick={closeSelectedMovie}
          className="absolute top-0 left-0 bg-slate-700 p-2 rounded-full text-white hover:bg-slate-600 transition"
        >
          &larr;
        </button>
      </header>

      {/* Loading Spinner */}

      {loading ? (
        <Loading />
      ) : (
        <>
          <img
            src={poster}
            alt={`Poster of ${title}`}
            className="w-full h-[250px] object-cover rounded-lg shadow-md"
          />
          <div className="mt-3 text-sm text-gray-300">
            <p>
              {released} • {runtime}
            </p>
            <p className="text-yellow-400">{genre}</p>
          </div>
          <div className="flex items-center gap-1 mt-2 text-yellow-400 font-semibold">
            <span className="text-lg">⭐</span>
            {imdbRating} IMDb rating
          </div>

          {/* Movie Details */}
          <section className="mt-5 space-y-3">
            {!isWatched ? (
              <div className="flex flex-col items-center justify-center bg-slate-600 p-2 w-full">
                <StarRating
                  maxRating={10}
                  size={24}
                  setUserRating={setUserRating}
                />
                {userRating > 0 && (
                  <button
                    className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition cursor-pointer"
                    onClick={onAddMovie}
                  >
                    Add Movie List
                  </button>
                )}
              </div>
            ) : (
              <div className=" bg-slate-600 text-center p-2">
                You Rated the movie {watchedUserRating}
              </div>
            )}
            <p className="text-gray-300 italic">{plot}</p>
            <p className="text-sm text-gray-400">
              🎭 Starring: <span className="text-white">{actors}</span>
            </p>
            <p className="text-sm text-gray-400">
              🎬 Directed by: <span className="text-white">{director}</span>
            </p>
          </section>
        </>
      )}
    </div>
  );
}
