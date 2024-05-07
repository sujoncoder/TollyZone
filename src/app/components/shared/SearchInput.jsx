"use client";

const SearchInput = ({ onSearchInput }) => {
  return (
    <div className="flex justify-center items-center">
      <input
        onChange={onSearchInput}
        className="w-1/2 border-2 border-teal-300 py-4 rounded-lg px-4 text-lg"
        type="text"
        placeholder="this placeholder comming from dynamical"
      />
    </div>
  );
};

export default SearchInput;
