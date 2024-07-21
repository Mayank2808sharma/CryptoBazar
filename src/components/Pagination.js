import React, { useContext, useRef } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "./../context/CryptoContext";

const PerPage = () => {
  const { setPerPage } = useContext(CryptoContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = inputRef.current.value;
    if (val !== 0) {
      setPerPage(val);
      inputRef.current.value = val;
    }
  };

  return (
    <form
      className="relative flex items-center font-nunito mr-4 md:mr-12"
      onSubmit={handleSubmit}
    >
      <label htmlFor="per-page" className="mr-2">
        Per Page:
      </label>
      <input
        id="per-page"
        type="number"
        ref={inputRef}
        className="w-16 p-2 border border-gray-300 rounded mr-2"
        defaultValue={10}
        min={1}
      />
      <button
        type="submit"
        className="text-white py-1 px-3 rounded flex items-center"
      >
        <img src={searchIcon} alt="search" className="" />
      </button>
    </form>
  );
};

const Pagination = () => {
  let { page, setPage, totalPages, perPage, cryptoData } = useContext(
    CryptoContext
  );

  const TotalNumber = Math.ceil(totalPages / perPage);

  const next = () => {
    if (page === TotalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const multiStepNext = () => {
    if (page + 3 >= TotalNumber) {
      setPage(TotalNumber - 1);
    } else {
      setPage(page + 3);
    }
  };

  const multiStepPrev = () => {
    if (page - 3 <= 1) {
      setPage(1);
    } else {
      setPage(page - 2);
    }
  };

  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <PerPage />
        <ul className="flex items-center justify-end text-sm mt-2 md:mt-0">
          <li className="flex items-center">
            <button className="outline-none w-8" onClick={prev}>
              <img
                className="w-full h-auto transform rotate-180"
                src={paginationArrow}
                alt="left"
              />
            </button>
          </li>

          {page + 1 === TotalNumber || page === TotalNumber ? (
            <li>
              <button
                onClick={multiStepPrev}
                className="outline-none rounded-full w-8 h-8 flex items-center justify-center text-lg"
              >
                ...
              </button>
            </li>
          ) : null}

          {page - 1 !== 0 ? (
            <li>
              <button
                onClick={prev}
                className="outline-none hover:text-green rounded-full w-8 h-8 flex items-center justify-center mx-1.5"
              >
                {page - 1}
              </button>
            </li>
          ) : null}
          <li>
            <button
              disabled
              className="outline-none rounded-full w-8 h-8 flex items-center justify-center bg-green text-white mx-1.5"
            >
              {page}
            </button>
          </li>

          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li>
              <button
                onClick={next}
                className="outline-none hover:text-green rounded-full w-8 h-8 flex items-center justify-center mx-1.5"
              >
                {page + 1}
              </button>
            </li>
          ) : null}

          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li>
              <button
                onClick={multiStepNext}
                className="outline-none hover:text-green rounded-full w-8 h-8 flex items-center justify-center text-lg"
              >
                ...
              </button>
            </li>
          ) : null}

          {page !== TotalNumber ? (
            <li>
              <button
                onClick={() => setPage(TotalNumber)}
                className="outline-none hover:text-green rounded-full w-8 h-8 flex items-center justify-center mx-1.5"
              >
                {TotalNumber}
              </button>
            </li>
          ) : null}
          <li>
            <button className="outline-none w-8" onClick={next}>
              <img className="w-full h-auto" src={paginationArrow} alt="right" />
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
