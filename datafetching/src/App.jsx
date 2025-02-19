/* eslint-disable react/prop-types */
// App.js
import { useEffect, useState } from "react";
import axios from "axios";
import StarRating from "./components/StarRating";
import Lodding from "./components/Lodding";

const KEY = "117e7765";

function Popcorn() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedID, setSelectedID] = useState(null);

  // useEffect(function () {
  //   console.log("Initial Rendering");
  // }, []);
  // useEffect(function () {
  //   console.log("After Every Rendering");
  // });
  // useEffect(() => {
  //   console.log("D");
  // }, [query]);

  // console.log("During Rendering");

  // Using Axios

  function handleSelectMovie(id) {
    setSelectedID((selectedID) => (id === selectedID ? null : id));
  }

  function closeSelectedMovie() {
    setSelectedID(null);
  }

  function handleWatched(movie) {
    setWatched((prevWatched) => [...prevWatched, movie]);
  }

  useEffect(
    function () {
      const fetchMovie = async () => {
        try {
          setLoading(true);
          setError("");
          const response = await axios.get(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (response.data.Response === "False") {
            throw new Error("Movie not found"); // Error message from API
          }
          if (!response.data.Search) {
            throw new Error("Something went wrong with fetching movies");
          }
          setMovies(response.data.Search);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        } finally {
          setLoading(false);
        }
      };
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovie();
    },
    [query]
  );

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(
  //       `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=kabhi`
  //     );
  //     const data = await res.json();
  //     setMovies(data.Search);
  //   })();
  // }, []);

  return (
    <div className=" w-screen min-h-screen bg-gray-900">
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        {/* <Listed element={<MovieList movies={movies} />} />
        <Listed
          element={
            <>
              <Summary watched={watched} />
              <WatchedList watched={watched} />
            </>
          }
        /> */}
        <ListBox>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </ListBox>
        <ListBox>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              closeSelectedMovie={closeSelectedMovie}
              handleAddWatched={handleWatched}
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedList watched={watched} />
            </>
          )}
        </ListBox>
      </Main>
      {/* <Dependency /> */}
    </div>
  );
}
function Loader() {
  return (
    <div className="flex justify-center items-center min-h-[700px]">
      <p className="text-4xl">Loading ..</p>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <p className="flex justify-center items-center min-h-[500px]">
      <span> 🔴{message}</span>
    </p>
  );
}
function Logo() {
  return (
    <div className="text-white text-2xl font-bold flex gap-2">
      <span>🍿</span> <h1>usePopcom</h1>
    </div>
  );
}

function Search({ query, setQuery }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        className="md:w-[400px] p-2 pl-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
        🔍
      </span>
    </div>
  );
}
function Navbar({ children }) {
  return (
    <nav className="bg-blue-500 py-3 px-8 flex items-center justify-between">
      <Logo />
      {children}
    </nav>
  );
}

function Main({ children }) {
  return <div className=" flex justify-center gap-4  p-8">{children}</div>;
}

function NumResult({ movies }) {
  return (
    <div>
      <p className=" text-white text-lg p-2">Found {movies.length} results</p>
    </div>
  );
}

//MovieList

function ListBox({ children }) {
  // console.log(children);
  const [isOpen, setOpen] = useState(true);
  // console.log(isOpen);
  return (
    <div className="bg-slate-800 text-white rounded-lg shadow-lg w-[350px] min-h-[490px] relative">
      <Button isOpen={isOpen} setOpen={setOpen} />
      {isOpen && children}
    </div>
  );
}

function Button({ isOpen, setOpen }) {
  return (
    <div className="absolute top-1 right-1 z-10 ">
      <button
        className="font-bold bg-black w-6 h-6 rounded-full hover:bg-gray-600"
        onClick={() => setOpen((open) => !open)}
      >
        {isOpen ? "-" : "+"}
      </button>
    </div>
  );
}
function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className=" p-2">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelectMovie }) {
  // console.log(movie);
  return (
    <li
      className="flex flex-col mb-6 md:flex-row hover:bg-amber-800 cursor-pointer"
      onClick={() => onSelectMovie(movie.imdbID)}
    >
      <img
        className="rounded-lg border-4 border-gray-700 shadow-lg"
        src={movie.Poster}
        alt={`${movie.Title} Poster`}
        style={{ width: "50px", height: "70px" }}
      />
      <div className=" flex flex-col gap-1 p-2">
        <h2 className=" w-[]">{movie.Title}</h2>
        <h2>📆 {movie.Year}</h2>
      </div>
    </li>
  );
}

// Watch List

function MovieDetails({
  selectedID,
  closeSelectedMovie,
  handleAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true); // Loading state
  const [userRating, setUserRating] = useState("");
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
        <Lodding />
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
                You Rated the movie
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

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

/*function SeenMovie() {
  const [watched] = useState(tempWatchedData);
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="bg-slate-800 text-white rounded-lg shadow-lg w-[350px] h-auto relative">
      <Button isOpen={isOpen} setOpen={setOpen} />
      {isOpen && (
        <>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
}
*/
function WatchedList({ watched }) {
  return (
    <ul className="space-y-4 mt-4">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
function WatchedMovie({ movie }) {
  return (
    <li className="flex items-center gap-4 p-2 rounded-lg">
      <img
        className="rounded-lg border-4 border-gray-600 shadow-md"
        src={movie.poster}
        alt={`${movie.title} Poster`}
        style={{ width: "50px" }}
      />
      <div>
        <h3 className="text-md font-semibold">{movie.Title}</h3>
        <div className="flex gap-4 text-sm">
          <p>
            <span>⭐ {movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟 {movie.userRating}</span>
          </p>
          <span>👨‍💼 {movie.runtime} min</span>
        </div>
      </div>
    </li>
  );
}

function Summary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  // const arr = watched.map((movie) => movie.userRating);
  // console.log(arr);
  return (
    <div className="bg-slate-700 p-4 rounded-lg shadow-sm w-full relative">
      <h2 className="text-xl font-semibold mb-2">Movies You Watched</h2>
      <div className="flex justify-between gap-4 text-sm font-medium">
        <p className="flex items-center">
          <span className="mr-1">#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p className="flex items-center">
          <span className="mr-1">⭐</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p className="flex items-center">
          <span className="mr-1">🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p className="flex items-center">
          <span className="mr-1">👨‍💼</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}

export default Popcorn;
