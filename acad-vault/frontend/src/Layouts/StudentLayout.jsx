import React from "react";
import Student from "../pages/Student";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const StudentLayout = () => {
    return (
        <div>
            <Header />
            <Student />
            <Outlet />
        </div>
    );
};

export default StudentLayout;
