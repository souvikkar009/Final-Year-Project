import React from "react";
import { NavLink } from "react-router-dom";

const Organization = () => {
    return (
        <div>
            <aside className="w-1/5 h-screen fixed flex flex-col border-r border-r-slate-400">
                <NavLink to={"/organization/get-accesskey"}>
                    <div className="bg-slate-700 text-slate-300 mt-12 mx-8 py-2 rounded cursor-pointer font-semibold block text-center">
                        Generate Access Key
                    </div>
                </NavLink>
            </aside>
        </div>
    );
};

export default Organization;
