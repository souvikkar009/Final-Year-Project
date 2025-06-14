import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import StudentSideBar from "../components/sidebars/StudentSideBar";
import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const StudentLayout = () => {
    const [student, setStudent] = useState(null);
    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const studentData = (await axios.get("api/student")).data;
                setStudent(studentData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchStudentData();
    }, []);
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 flex overflow-hidden">
                <div className="w-1/5 shrink-0 border-r border-r-slate-400">
                    <StudentSideBar />
                </div>
                <div className="flex-1 overflow-y-auto">
                    <Outlet context={student} />
                </div>
            </div>
        </div>
    );
};

export default StudentLayout;
