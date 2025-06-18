import { NavLink, useLocation } from "react-router";
import { useAuth } from "../routes/AuthContext";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const Header = () => {
    const pathname = useLocation().pathname;

    const { userRole } = useAuth();

    const handleLogOut = async () => {
        await axios.get("api/auth/logout").then(() => {
            window.location.replace("/");
        });
    };

    return (
        // <header className="h-16 flex items-center justify-end relative text-white shadow shadow-slate-400">
        //     <NavLink className={"absolute right-1/2 translate-x-1/2"} to={"/"}>
        //         <div className=" font-bold text-4xl">AcadVault</div>
        //     </NavLink>

        //     {pathname === "/" && userRole && userRole === "unauthorized" && (
        //         <NavLink to={"/auth"}>
        //             <button className="py-2 px-4 mr-8 font-semibold rounded cursor-pointer bg-teal-600">
        //                 Register / Log In
        //             </button>
        //         </NavLink>
        //     )}

        //     {userRole && userRole !== "unauthorized" && (
        //         <button
        //             className="py-2 px-4 mr-8 font-semibold rounded cursor-pointer bg-teal-600"
        //             onClick={handleLogOut}
        //         >
        //             Logout
        //         </button>
        //     )}
        // </header>

        <header className="relative z-50 h-16 flex items-center justify-between px-8 backdrop-blur-sm bg-slate-900/50 border-b border-slate-700/50">
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <NavLink to={"/"}>
                    <div className="font-bold text-4xl bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        AcadVault
                    </div>
                </NavLink>
            </div>
            {pathname === "/" && userRole && userRole === "unauthorized" && (
                <NavLink to={"/auth"} className="ml-auto">
                    <button
                        onClick={handleLogOut}
                        className="py-2 cursor-pointer text-white px-6 font-semibold rounded-lg bg-teal-600 hover:bg-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 hover:scale-105"
                    >
                        Login / Register
                    </button>
                </NavLink>
            )}
            {userRole && userRole !== "unauthorized" && (
                <div className="ml-auto">
                    <button
                        onClick={handleLogOut}
                        className="py-2 cursor-pointer px-6 text-white font-semibold rounded-lg bg-teal-600 hover:bg-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 hover:scale-105"
                    >
                        Logout
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
