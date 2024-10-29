/* eslint-disable react/prop-types */
import { useState } from "react";
// import { tempMovieData } from "../data.js";
export default function ListedMovie({ movies }) {
  const [isOpen, setOpen] = useState(true);
  return (
    <div className="bg-slate-800 text-white rounded-lg shadow-lg w-[350px] h-auto relative">
      <Button isOpen={isOpen} setOpen={setOpen} />
      {isOpen && <MovieList movies={movies} />}
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
