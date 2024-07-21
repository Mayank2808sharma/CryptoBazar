import React from "react";
import { Outlet } from "react-router-dom";
import Filters from "../components/Filters";
import TableComponent from "../components/TableComponent";

const Crypto = () => {
  return (
    <section className="w-full md:w-[80%] h-full flex flex-col mt-16 mb-24 relative px-4 md:px-0">
      <Filters />
      <TableComponent />
      <Outlet />
    </section>
  );
};

export default Crypto;
