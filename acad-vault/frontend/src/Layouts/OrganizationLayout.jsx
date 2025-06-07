import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const OrganizationLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default OrganizationLayout;
