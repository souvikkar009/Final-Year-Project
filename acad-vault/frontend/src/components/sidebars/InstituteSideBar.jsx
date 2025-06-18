import { NavLink, useLocation } from "react-router-dom";

const InstituteSideBar = ({ props }) => {
    const pathname = useLocation().pathname;
    console.log(pathname);
    

    return (
        <aside className="flex flex-col z-20">
            {pathname !== "/institute" && (
                <NavLink to={"/institute"}>
                    <div className="sidebar-item">Institute Page</div>
                </NavLink>
            )}
            {props === "higher_studies" &&
                pathname !== "/institute/register-higher-studies" && (
                    <NavLink to={"/institute/register-higher-studies"}>
                        <div className="sidebar-item">
                            Register In Higher Studies
                        </div>
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
