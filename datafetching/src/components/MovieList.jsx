/* eslint-disable react/prop-types */
// components/MovieList.js
import Movie from "./Movie";

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="p-2">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
