import { NavLink, useLocation } from "react-router-dom";

const InstituteSideBar = () => {
    const pathname = useLocation().pathname;

    return (
        <aside className="flex flex-col z-20">
            {pathname !== "/institute" && (
                <NavLink to={"/institute"}>
                    <div className="sidebar-item">Institute Page</div>
                </NavLink>
            )}
            {pathname !== "/institute/register-student-bulk" && (
                <NavLink to={"/institute/register-student-bulk"}>
                    <div className="sidebar-item">Register In Bulk</div>
                </NavLink>
            )}
            {pathname !== "/institute/upload-student-data" && (
                <NavLink to={"/institute/upload-student-data"}>
                    <div className="sidebar-item">Upload Student Data</div>
                </NavLink>
            )}
        </aside>
    );
};

export default InstituteSideBar;
