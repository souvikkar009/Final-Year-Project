import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import OrganizationSideBar from "../components/OrganizationSideBar";

const OrganizationLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 flex overflow-hidden">
                <div className="w-1/5 shrink-0 border-r border-r-slate-400">
                    <OrganizationSideBar />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default OrganizationLayout;
