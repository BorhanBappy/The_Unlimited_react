import WatchedMovie from "./WatchedMovie";

export default function WatchedList({ watched }) {
  return (
    <ul className="space-y-4 mt-4">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
