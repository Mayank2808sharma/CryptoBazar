import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
        hidden md:flex md:items-center md:text-green [text-decoration:none]
      "
    >
      <img
        src={logoSvg}
        alt="CryptoBucks"
        className="w-16 h-16 lg:w-20 lg:h-20"
      />
      <span className="ml-2 text-lg lg:text-xl">CryptoBazar</span>
    </Link>
  );
};

export default Logo;
