import React from "react";
import { Outlet } from "react-router-dom";
import Institute from "../pages/Institute";
import Header from "../components/Header";

const InstituteLayout = () => {
    return (
        <div>
            <Header />
            <Institute />
            <Outlet />
        </div>
    );
};

export default InstituteLayout;
