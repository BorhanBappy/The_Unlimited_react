/* eslint-disable react/prop-types */

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

export default Movie;
