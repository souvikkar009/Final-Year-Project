import React from "react";
import Student from "../pages/Student";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import StudentSideBar from "../components/StudentSideBar";

const StudentLayout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 flex overflow-hidden">
                <div className="w-1/5 shrink-0 border-r border-r-slate-400">
                    <StudentSideBar />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default StudentLayout;
