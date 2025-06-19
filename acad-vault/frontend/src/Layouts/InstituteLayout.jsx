import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import InstituteSideBar from "../components/sidebars/InstituteSideBar";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const InstituteLayout = () => {
    const [institute, setInstitute] = useState(null);
    useEffect(() => {
        const fetchInstituteData = async () => {
            try {
                const instituteData = (await axios.get("api/institute")).data;
                setInstitute(instituteData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchInstituteData();
    }, []);
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 flex overflow-hidden">
                <div className="w-1/5 shrink-0 border-r border-r-slate-400">
                    {institute && <InstituteSideBar />}
                </div>
                <div className="flex-1 overflow-y-auto">
                    <Outlet context={institute} />
                </div>
            </div>
        </div>
    );
};

export default InstituteLayout;
