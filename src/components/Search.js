import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "./../context/CryptoContext";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    handleSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearchText("");
    setSearchData();
  };

  return (
    <div className="relative w-full md:w-96">
      <form
        className="relative flex items-center font-nunito w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          onChange={handleInput}
          value={searchText}
          className="w-full h-10 rounded-lg placeholder:text-gray-400 pl-3 pr-10 required outline-none border border-gray-300 focus:border-green-500 transition-colors"
          placeholder="Search here..."
        />
        <button type="submit" className="absolute right-2 cursor-pointer">
          <img src={searchIcon} className="w-5 h-5" alt="search" />
        </button>
      </form>
      {searchText.length > 0 && (
        <ul
          className="absolute top-full mt-1 w-full max-h-60 rounded-lg overflow-y-auto py-2 bg-white bg-opacity-80 backdrop-blur-md shadow-lg z-10 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300"
        >
          {searchData ? (
            searchData.map((coin) => {
              return (
                <li
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                >
                  <img
                    className="w-5 h-5 mr-2"
                    src={coin.thumb}
                    alt={coin.name}
                  />
                  <span>{coin.name}</span>
                </li>
              );
            })
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-8 h-8 border-4 border-green-500 rounded-full border-b-gray-200 animate-spin"
                role="status"
              />
              <span className="ml-2">Searching...</span>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

const Search = () => {
  let { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);

  return (
    <div className="relative w-full">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;