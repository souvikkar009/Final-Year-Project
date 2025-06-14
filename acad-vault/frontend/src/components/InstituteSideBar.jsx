import { NavLink, useLocation } from "react-router-dom";

const InstituteSideBar = () => {
    const pathname = useLocation().pathname;
    return (
        <aside className="flex flex-col">
            {pathname !== "/institute" && (
                <NavLink to={"/organization"}>
                    <div className="bg-slate-700 text-slate-300 mt-12 mx-8 py-2 rounded cursor-pointer font-semibold block text-center">
                        Institute Page
                    </div>
                </NavLink>
            )}
            {pathname !== "/organization/get-accesskey" && (
                <NavLink to={"/organization/get-accesskey"}>
                    <div className="bg-slate-700 text-slate-300 mt-12 mx-8 py-2 rounded cursor-pointer font-semibold block text-center">
                        Generate Access Key
                    </div>
                </NavLink>
            )}
        </aside>
    );
};

export default InstituteSideBar;
