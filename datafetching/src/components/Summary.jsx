/* eslint-disable react/prop-types */
import average from "./Average";

export default function Summary({ watched }) {
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
