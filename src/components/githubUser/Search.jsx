const Search = ({ onSearch }) => {
  return (
    <>
      <input
        type="text"
        onChange={onSearch}
        className="p-2 rounded text-slate-500"
        placeholder="search any github user"
      />
    </>
  );
};

export default Search;
