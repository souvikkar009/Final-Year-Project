import React from "react";
import { NavLink } from "react-router-dom";

const Failure = () => {
  return (
    <div>
      <div className="w-2xl mt-12 mx-auto p-8 rounded border border-slate-700 shadow-lg shadow-slate-400 text-white">
        <div className="mt-4 text-center text-4xl font-bold">
          Data Sharing Unsuccessful
        </div>
        <div className="mt-12 text-6xl font-bold text-sky-500 text-center">
          Plz Try Again
        </div>
        <div className="text-center mt-8 text-lg">
          Go to{" "}
          <span className="font-semibold underline">
            <NavLink to={"/"}>Home Page</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Failure;
