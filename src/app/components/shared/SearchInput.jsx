"use client";

const SearchInput = ({ onSearchInput }) => {
  return (
    <div className="flex justify-center items-center">
      <input
        onChange={onSearchInput}
        className="w-full sm:w-1/2 border-2 border-teal-300 py-2 sm:py-3 rounded-lg px-4 text-lg"
        type="text"
        placeholder="this placeholder comming from dynamical"
      />
    </div>
  );
};

export default SearchInput;
