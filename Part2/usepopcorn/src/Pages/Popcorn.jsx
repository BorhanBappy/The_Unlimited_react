/* eslint-disable react/prop-types */
// App.js
import { useState } from "react";
import { tempWatchedData } from "../data.js";

import { tempMovieData } from "../data.js";

function Popcorn() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched] = useState(tempWatchedData);

  return (
    <div className=" w-screen bg-gray-900">
      <Navbar>
        <Search />
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
          <MovieList movies={movies} />
        </ListBox>
        <ListBox>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </ListBox>
      </Main>
    </div>
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
  const [querySelector, setQuerySelector] = useState();

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search movies..."
        value={querySelector}
        className="md:w-[400px] p-2 pl-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onChange={(e) => setQuerySelector(e.target.value)}
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
  const [isOpen, setOpen] = useState(true);
  console.log(isOpen);
  return (
    <div className="bg-slate-800 text-white rounded-lg shadow-lg w-[350px] h-auto relative">
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
function MovieList({ movies }) {
  return (
    <ul className=" p-2">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function Movie({ movie }) {
  return (
    <li className="flex flex-col mb-6 md:flex-row ">
      <img
        className="rounded-lg border-4 border-gray-700 shadow-lg"
        src={movie.Poster}
        alt={`${movie.Title} Poster`}
        style={{ width: "50px" }}
      />
      <div className=" flex flex-col gap-1 p-2">
        <h2 className=" w-[200px]">{movie.Title}</h2>
        <h2>📆 {movie.Year}</h2>
      </div>
    </li>
  );
}

// Watch List

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
        src={movie.Poster}
        alt={`${movie.Title} Poster`}
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
          <span>{avgImdbRating}</span>
        </p>
        <p className="flex items-center">
          <span className="mr-1">🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p className="flex items-center">
          <span className="mr-1">👨‍💼</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

export default Popcorn;
