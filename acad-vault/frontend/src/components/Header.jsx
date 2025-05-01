import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const currentLocation = useLocation();
  const basepath = currentLocation.pathname.split("/")[1];
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <NavLink to={"/"}>
        <div className="text-xl font-bold cursor-pointer text-blue-700">
          AcadVault
        </div>
      </NavLink>

      {basepath === "" && (
        <nav className="flex space-x-8">
          <NavLink
            to={"/student"}
            className="px-3 py-2 text-gray-700 hover:text-blue-700 cursor-pointer font-medium transition"
          >
            Student
          </NavLink>

          <NavLink
            to={"/institute"}
            className="px-3 py-2 text-gray-700 hover:text-blue-700 cursor-pointer font-medium transition"
          >
            Academic Institute
          </NavLink>

          <NavLink
            to={"/organization"}
            className="px-3 py-2 text-gray-700 hover:text-blue-700 cursor-pointer font-medium transition"
          >
            Organization
          </NavLink>
        </nav>
      )}
      {basepath === "student" && (
        <NavLink
          to={"/student"}
          className="px-3 py-2 text-gray-700 hover:text-blue-700 cursor-pointer font-medium transition"
        >
          Student
        </NavLink>
      )}
      {basepath === "institute" && (
        <NavLink
          to={"/institute"}
          className="px-3 py-2 text-gray-700 hover:text-blue-700 cursor-pointer font-medium transition"
        >
          Academic Institute
        </NavLink>
      )}
      {basepath === "organization" && (
        <NavLink
          to={"/organization"}
          className="px-3 py-2 text-gray-700 hover:text-blue-700 cursor-pointer font-medium transition"
        >
          Organization
        </NavLink>
      )}

      <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition cursor-pointer">
        Explore AcadVault
      </button>
    </header>
  );
};

export default Header;
