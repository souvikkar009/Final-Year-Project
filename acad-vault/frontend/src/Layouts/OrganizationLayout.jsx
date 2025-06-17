import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import OrganizationSideBar from "../components/sidebars/OrganizationSideBar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const OrganizationLayout = () => {
    const [organization, setOrganization] = useState(null);
    useEffect(() => {
        const fetchOrganizationData = async () => {
            try {
                const orgData = (await axios.get("api/organization")).data;
                setOrganization(orgData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchOrganizationData();
    }, []);
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 flex overflow-hidden">
                <div className="w-1/5 shrink-0 border-r border-r-slate-400">
                    <OrganizationSideBar />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <Outlet context={organization} />
                </div>
            </div>
        </div>
    );
};

export default OrganizationLayout;
