/* eslint-disable react/prop-types */
// App.js
import { useState } from "react";
import ListedMovie from "./Components/ListedMovie.jsx";
import SeenMovie from "./Components/SeenMovie.jsx";
import { tempMovieData } from "./data.js";

function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <div className=" w-screen h-screen bg-gray-900">
      <NavBar movies={movies} />
      <Main movies={movies} />
    </div>
  );
}
function Main({ movies }) {
  return (
    <div className=" flex justify-center gap-4 mt-4">
      <ListedMovie movies={movies} />
      <SeenMovie />
    </div>
  );
}
function NavBar({ movies }) {
  return (
    <nav className="bg-blue-500 py-3 px-8 flex items-center justify-between">
      <Logo />
      <Search />
      <NumResult movies={movies} />
    </nav>
  );
}
function Logo() {
  return (
    <div className="text-white text-2xl font-bold flex gap-2">
      <span>🍿</span> <h1>usePopcom</h1>
    </div>
  );
}
function Search() {
  const [querySelector, setQuerySelector] = useState("");

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search movies..."
        value={querySelector}
        className="w-[400px] p-2 pl-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onChange={(e) => setQuerySelector(e.target.value)}
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
        🔍
      </span>
    </div>
  );
}

function NumResult({ movies }) {
  return (
    <div>
      <p className=" text-white text-lg p-2">Found {movies.length} results</p>
    </div>
  );
}

export default App;
