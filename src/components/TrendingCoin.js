import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCoin = ({ data }) => {
  let navigate = useNavigate();

  const getCoinDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <div
      className="w-full md:w-[45%] lg:w-[30%] border border-gray-200 mb-12 last:mb-0 rounded-2xl p-4 md:p-6 relative cursor-pointer
      bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 shadow-md"
      onClick={() => getCoinDetails(data.id)}
    >
      {data ? (
        <>
          <div className="flex items-center">
            <img
              src={data.large}
              alt={data.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-green">{data.name}</h3>
              <p className="text-sm text-gray-500">Market Cap Rank: {data.market_cap_rank}</p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-700">
              Price (in BTC):
              <span className="text-green">
                &nbsp;{new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 2,
                }).format(data.price_btc)}
              </span>
            </h3>
            <h3 className="text-lg font-medium text-gray-700 mt-2">
              Score: <span className="text-green">{data.score}</span>
            </h3>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-8 h-8 border-4 border-green rounded-full border-b-gray-200 animate-spin"
            role="status"
          />
          <span className="ml-2">Please wait...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoin;
