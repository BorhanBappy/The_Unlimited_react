/* eslint-disable react/prop-types */
import { useState } from "react";
import { tempWatchedData } from "../data.js";
// Define the average function

// const average = (arr) => {
//   if (arr.length === 0) return 0;
//   const sum = arr.reduce((acc, curr) => acc + curr, 0);
//   return (sum / arr.length).toFixed(1);
// };
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function SeenMovie() {
  const [watched] = useState(tempWatchedData);
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="bg-slate-800 text-white rounded-lg shadow-lg w-[350px] h-auto relative">
      {/* Position the button on the right side */}
      <Button isOpen={isOpen} setOpen={setOpen} />
      {/* Summary Section */}
      {isOpen && (
        <>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
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
  const arr = watched.map((movie) => movie.userRating);
  console.log(arr);
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
