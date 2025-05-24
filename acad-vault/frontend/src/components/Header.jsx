import { NavLink, useLocation } from "react-router";

const Header = () => {
    const pathname = useLocation().pathname;
    return (
        <header className="h-16 flex items-center justify-end relative text-white  shadow shadow-slate-400 mb-12">
            <NavLink className={"absolute right-1/2 translate-x-1/2"} to={"/"}>
                <div className=" font-bold text-4xl">AcadVault</div>
            </NavLink>

            {pathname === "/" && (
                <NavLink to={"/auth"}>
                    <button className="py-2 px-4 mr-8 font-semibold rounded cursor-pointer bg-teal-600">
                        Register / Log In
                    </button>
                </NavLink>
            )}
        </header>
    );
};

export default Header;
