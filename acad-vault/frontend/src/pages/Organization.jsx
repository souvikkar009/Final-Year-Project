import React from "react";
import { NavLink } from "react-router-dom";

const Organization = () => {
  return (
    <div>
      <aside className="w-1/5 h-screen fixed flex flex-col shadow-lg">
        <NavLink to={"/organization/get_accesskey"}>
          <div className="bg-gray-100 mt-12 mx-8 py-2 rounded cursor-pointer font-semibold block text-center">
            Generate Access Key
          </div>
        </NavLink>
      </aside>
    </div>
  );
};

export default Organization;
