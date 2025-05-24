import React, { useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const Student = () => {
    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const student = (await axios.get("api/student")).data;
                console.log(student);
            } catch (error) {
                console.log(error);
            }
        };
        fetchStudentData();
    }, []);
    return <div>This is Student Page</div>;
};

export default Student;
