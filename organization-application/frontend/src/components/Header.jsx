/*
import { NavLink } from "react-router";
import { useAuth } from "../routes/AuthContext";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3028";
// axios.defaults.withCredentials = true;

const Header = () => {

  const { userRole } = useAuth();

  const handleLogOut = async () => {
    await axios.get("api/admin/logout").then(() => {
      window.location.replace("/");
    });
  };

  return (
    <header className="h-16 flex items-center justify-end relative text-white shadow shadow-slate-400">
      <NavLink className={"absolute right-1/2 translate-x-1/2"} to={"/"}>
        <div className=" font-bold text-4xl">XYZ Org</div>
      </NavLink>
      {userRole && userRole !== "admin" && (
        <NavLink to={"/auth"}>
          <button className="py-2 px-4 mr-8 font-semibold rounded cursor-pointer bg-sky-600">
            Admin Login
          </button>
        </NavLink>
      )}

      {userRole && userRole !== "unauthorized" && (
        <button
          className="py-2 px-4 mr-8 font-semibold rounded cursor-pointer bg-sky-600"
          onClick={handleLogOut}
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;

*/
import axios from "axios";
import { useAuth } from "../routes/AuthContext";
import { NavLink } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3028";
axios.defaults.withCredentials = true;

const Header = () => {
  const { userRole } = useAuth();

  const handleLogOut = async () => {
    await axios.get("api/admin/logout").then(() => {
      window.location.replace("/");
    });
  };

  return (
    <header className="h-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-b border-slate-700/50 flex items-center justify-between px-8 relative">
      {/* Logo/Brand - Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <NavLink to={"/"} className="group">
          <div className="font-bold text-3xl bg-gradient-to-r py-0.5 from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-blue-500 transition-all duration-300 tracking-wide">
            XYZ Org
          </div>
        </NavLink>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center space-x-4 ml-auto">
        {userRole && userRole !== "admin" && (
          <NavLink to={"/auth"}>
            <button className="cursor-pointer group relative px-6 py-2.5 font-semibold text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:from-blue-500 group-hover:to-indigo-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-white/20 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z"
                  />
                </svg>
                <span>Admin Login</span>
              </span>
            </button>
          </NavLink>
        )}

        {userRole && userRole !== "unauthorized" && (
          <button
            className="group relative px-6 py-2.5 font-semibold text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/50"
            onClick={handleLogOut}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-600 transition-all duration-300 group-hover:from-red-500 group-hover:to-rose-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-white/20 to-red-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative flex items-center space-x-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
