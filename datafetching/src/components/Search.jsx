// components/Search.js
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

export default Search;
