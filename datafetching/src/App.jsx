/* eslint-disable react/prop-types */
// App.js
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Summary from "./components/Summary";
import WatchedList from "./components/WatchedList";
import ErrorMessage from "./components/ErrorMessage";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";

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
          {isLoading && <Loading />}
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

// Watch List

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

export default Popcorn;
