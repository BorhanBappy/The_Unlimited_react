export default function WatchedMovie({ movie }) {
  return (
    <li className="flex items-center gap-4 p-2 rounded-lg">
      <img
        className="rounded-lg border-4 border-gray-600 shadow-md"
        src={movie.poster}
        alt={`${movie.title} Poster`}
        style={{ width: "50px" }}
      />
      <div>
        <h3 className="text-md font-semibold">{movie.title}</h3>
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
