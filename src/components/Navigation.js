import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="w-full md:w-[40%] mt-4 md:mt-16 flex flex-col md:flex-row justify-around items-center
    border border-green rounded-lg bg-white shadow-md p-4 md:p-2"
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5 p-2.5
${
  isActive
    ? "bg-green text-white"
    : " text-gray-200 hover:text-green active:bg-green active:text-white"
}
    border-0 cursor-pointer rounded capitalize font-semibold transition-colors duration-300`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5 p-2.5
${
  isActive
    ? "bg-green text-white"
    : " text-gray-300 hover:text-green active:bg-green active:text-white"
}
    border-0 cursor-pointer rounded capitalize font-semibold transition-colors duration-300`;
        }}
      >
        Trending
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5 p-2.5
${
  isActive
    ? "bg-green text-white"
    : " text-gray-700 hover:text-green active:bg-green active:text-white"
}
    border-0 cursor-pointer rounded capitalize font-semibold transition-colors duration-300`;
        }}
      >
        Saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
