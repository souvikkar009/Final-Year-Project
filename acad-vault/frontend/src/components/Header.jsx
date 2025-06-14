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
        <header className="h-16 flex items-center justify-end relative text-white shadow shadow-slate-400">
            <NavLink className={"absolute right-1/2 translate-x-1/2"} to={"/"}>
                <div className=" font-bold text-4xl">AcadVault</div>
            </NavLink>

            {pathname === "/" && userRole && userRole === "unauthorized" && (
                <NavLink to={"/auth"}>
                    <button className="py-2 px-4 mr-8 font-semibold rounded cursor-pointer bg-teal-600">
                        Register / Log In
                    </button>
                </NavLink>
            )}

            {userRole && userRole !== "unauthorized" && (
                <button
                    className="py-2 px-4 mr-8 font-semibold rounded cursor-pointer bg-teal-600"
                    onClick={handleLogOut}
                >
                    Logout
                </button>
            )}
        </header>
    );
};

export default Header;
