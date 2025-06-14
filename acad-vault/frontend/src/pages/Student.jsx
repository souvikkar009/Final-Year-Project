import React, { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const Student = () => {
    const [student, setStudent] = useState(null);
    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const studentData = (await axios.get("api/student")).data;
                setStudent(studentData);
                console.log(studentData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchStudentData();
    }, []);
    return (
        <div className="w-3/4 mx-auto my-12 shadow-lg border border-slate-400 shadow-slate-400 p-8 rounded-lg text-white">
            {student && (
                <div>
                    <div className="flex items-center justify-center mb-2">
                        <div className="h-[96px] w-[96px] rounded-full main-gradient flex justify-center items-center font-bold text-5xl">
                            {student.full_name.first_name.charAt(0) +
                                student.full_name.last_name.charAt(0)}
                        </div>
                    </div>

                    <div className="font-semibold text-2xl text-center">
                        {student.full_name.first_name +
                            " " +
                            student.full_name.last_name}
                    </div>

                    <div id="details-general" className="mt-8">
                        <div className="flex items-center justify-center">
                            <span className="inline bg-teal-600 py-2 px-4 rounded text-xl text-white font-semibold">
                                General Details
                            </span>
                        </div>
                        <div
                            id="details-avid"
                            className="mt-4 flex flex-col justify-center gap-1"
                        >
                            <div className="data-title">AvId</div>
                            <div className="data-value grow">
                                {student.avid}
                            </div>
                        </div>
                        <div id="details-bio">
                            <div
                                id="details-name"
                                className="flex items-center gap-8 mt-4"
                            >
                                <div
                                    id="details-first_name"
                                    className="data-container w-1/2"
                                >
                                    <div className="data-title">First Name</div>
                                    <div className="data-value">
                                        {student.full_name.first_name}
                                    </div>
                                </div>
                                <div
                                    id="details-last_name"
                                    className="data-container w-1/2"
                                >
                                    <div className="data-title">Last Name</div>
                                    <div className="data-value">
                                        {student.full_name.last_name}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-8 mt-4">
                                <div
                                    id="details-dob"
                                    className="data-container w-1/2"
                                >
                                    <div className="data-title">
                                        Date of Birth
                                    </div>
                                    {(() => {
                                        const date = new Date(student.dob);
                                        const months = [
                                            "January",
                                            "February",
                                            "March",
                                            "April",
                                            "May",
                                            "June",
                                            "July",
                                            "August",
                                            "September",
                                            "October",
                                            "November",
                                            "December",
                                        ];
                                        return (
                                            <div
                                                id="details-dob-value"
                                                className="data-value"
                                            >
                                                {date.getDate() +
                                                    " " +
                                                    months[date.getMonth()] +
                                                    ", " +
                                                    date.getFullYear()}
                                            </div>
                                        );
                                    })()}
                                </div>
                                <div
                                    id="details-gender"
                                    className="data-container w-1/2"
                                >
                                    <div className="data-title">Gender</div>
                                    <div className="data-value">
                                        {student.gender}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="details-address-full">
                            <div
                                id="details-address"
                                className="data-container w-full mt-4"
                            >
                                <div className="data-title">Address</div>
                                <div className="data-value">
                                    {student.address}
                                </div>
                            </div>

                            <div className="flex items-center gap-8 mt-4">
                                <div
                                    id="details-district"
                                    className="data-container w-1/2"
                                >
                                    <div className="data-title">District</div>
                                    <div className="data-value">
                                        {student.district}
                                    </div>
                                </div>
                                <div
                                    id="details-pin_code"
                                    className="data-container w-1/2"
                                >
                                    <div className="data-title">Pin Code</div>
                                    <div className="data-value">
                                        {student.pin_code}
                                    </div>
                                </div>
                            </div>

                            <div
                                id="details-state"
                                className="data-container w-full mt-4"
                            >
                                <div className="data-title">State</div>
                                <div className="data-value">
                                    {student.state}
                                </div>
                            </div>
                        </div>
                        <div
                            id="details-contact"
                            className="flex items-center gap-8 mt-4"
                        >
                            <div
                                id="details-email"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">Email</div>
                                <div className="data-value">
                                    {student.email}
                                </div>
                            </div>
                            <div
                                id="detail-mobile_no"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">Mobile No</div>
                                <div className="data-value">
                                    {student.mobile_no}
                                </div>
                            </div>
                        </div>
                        <div
                            id="details-ids"
                            className="data-container mt-4 w-full"
                        >
                            <div className="data-title">Aadhar No</div>
                            <div className="data-value">
                                {student.aadhar_no}
                            </div>
                        </div>
                    </div>
                    <div id="details-secondary" className="mt-12">
                        <div className="flex items-center justify-center">
                            <span className="inline bg-teal-600 py-2 px-4 rounded text-xl text-white font-semibold">
                                Secondary Examination Details
                            </span>
                        </div>
                        <div
                            id="details-secondary-school"
                            className="data-container w-full mt-4"
                        >
                            <div className="data-title">School Name</div>
                            <div className="data-value">
                                {student.secondary.school_name}
                            </div>
                        </div>
                        <div className="flex items-center gap-8 mt-4">
                            <div
                                id="details-secondary-board"
                                className="data-container w-3/4"
                            >
                                <div className="data-title">Board Name</div>
                                <div className="data-value">
                                    {student.secondary.board_name}
                                </div>
                            </div>
                            <div
                                id="details-secondary-examination_year"
                                className="data-container w-1/4"
                            >
                                <div className="data-title">Passing Year</div>
                                <div className="data-value">
                                    {student.secondary.examination_year}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 mt-4">
                            <div
                                id="details-secondary-registration_no"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">
                                    Registration Number
                                </div>
                                <div className="data-value">
                                    {student.secondary.registration_no}
                                </div>
                            </div>
                            <div
                                id="details-secondary-enrollment_no"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">
                                    Enrollment Number
                                </div>
                                <div className="data-value">
                                    {student.secondary.enrollment_no}
                                </div>
                            </div>
                        </div>
                        <div
                            id="details-secondary-subjects"
                            className="data-container w-full mt-4"
                        >
                            <div className="data-title">Subjects</div>
                            <div className="flex items-center gap-2">
                                {student.secondary.subjects.map(
                                    (subject, key) => (
                                        <div
                                            key={key}
                                            className="py-1 px-2 bg-slate-700 rounded font-bold text-slate-300"
                                        >
                                            {subject}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div
                            id="details-secondary-marks_subjects"
                            className="data-container w-full mt-4"
                        >
                            <div className="data-title">Subject Marks</div>
                            <div className="flex item-center gap-2 flex-wrap">
                                {(() => {
                                    const marks_subjects =
                                        student.secondary.marks_subjects;
                                    return Object.keys(marks_subjects).map(
                                        (subject, idx) => (
                                            <div
                                                className="py-1 px-2 bg-slate-700 rounded font-bold text-slate-300"
                                                key={idx}
                                            >
                                                {subject} :{" "}
                                                <span className="text-teal-400">
                                                    {marks_subjects[subject]}
                                                </span>
                                            </div>
                                        )
                                    );
                                })()}
                            </div>
                        </div>
                        <div className="flex gap-8 mt-4">
                            <div
                                id="details-secondary-marks_total"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">Total Marks</div>
                                <div className="data-value">
                                    {student.secondary.marks_total}
                                </div>
                            </div>
                            <div
                                id="details-secondary-marks_obtained"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">Marks Obtained</div>
                                <div className="data-value">
                                    {student.secondary.marks_obtained}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-8 mt-4">
                            <div
                                id="details-secondary-marks_total_actual"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">
                                    Actual Total Marks
                                </div>
                                <div className="data-value">
                                    {student.secondary.marks_total_actual
                                        ? student.secondary.marks_total_actual
                                        : "NULL"}
                                </div>
                            </div>
                            <div
                                id="details-secondary-marks_obtained_actual"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">
                                    Actual Marks Obtained
                                </div>
                                <div className="data-value">
                                    {student.secondary.marks_obtained_actual
                                        ? student.secondary
                                              .marks_obtained_actual
                                        : "NULL"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="details-higher_secondary" className="mt-12">
                        <div className="flex items-center justify-center">
                            <span className="inline bg-teal-600 py-2 px-4 rounded text-xl text-white font-semibold">
                                Higher Secondary Examination Details
                            </span>
                        </div>
                        <div
                            id="details-higher_secondary-school"
                            className="data-container w-full mt-4"
                        >
                            <div className="data-title">School Name</div>
                            <div className="data-value">
                                {student.higher_secondary.school_name}
                            </div>
                        </div>
                        <div
                            id="details-higher_secondary-board"
                            className="data-container w-full mt-4"
                        >
                            <div className="data-title">Board Name</div>
                            <div className="data-value">
                                {student.higher_secondary.board_name}
                            </div>
                        </div>
                        <div className="flex items-center gap-8 mt-4">
                            <div
                                id="details-higher_secondary-dicipline"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">Dicipline</div>
                                <div className="data-value">
                                    {student.higher_secondary.dicipline}
                                </div>
                            </div>
                            <div
                                id="details-higher_secondary-examination_year"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">Passing Year</div>
                                <div className="data-value">
                                    {student.higher_secondary.examination_year}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 mt-4">
                            <div
                                id="details-higher_secondary-registration_no"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">
                                    Registration Number
                                </div>
                                <div className="data-value">
                                    {student.higher_secondary.registration_no}
                                </div>
                            </div>
                            <div
                                id="details-higher_secondary-enrollment_no"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">
                                    Enrollment Number
                                </div>
                                <div className="data-value">
                                    {student.higher_secondary.enrollment_no}
                                </div>
                            </div>
                        </div>
                        <div
                            id="details-higher_secondary-subjects"
                            className="data-container w-full mt-4"
                        >
                            <div className="data-title">Subjects</div>
                            <div className="flex items-center gap-2">
                                {student.higher_secondary.subjects.map(
                                    (subject, key) => (
                                        <div
                                            key={key}
                                            className="py-1 px-2 bg-slate-700 rounded font-bold text-slate-300"
                                        >
                                            {subject}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div
                            id="details-higher_secondary-marks_subjects"
                            className="data-container w-full mt-4"
                        >
                            <div className="data-title">Subject Marks</div>
                            <div className="flex item-center gap-2 flex-wrap">
                                {(() => {
                                    const marks_subjects =
                                        student.higher_secondary.marks_subjects;
                                    return Object.keys(marks_subjects).map(
                                        (subject, idx) => (
                                            <div
                                                className="py-1 px-2 bg-slate-700 rounded font-bold text-slate-300"
                                                key={idx}
                                            >
                                                {subject} :{" "}
                                                <span className="text-teal-400">
                                                    {marks_subjects[subject]}
                                                </span>
                                            </div>
                                        )
                                    );
                                })()}
                            </div>
                        </div>
                        <div className="flex gap-8 mt-4">
                            <div
                                id="details-higher_secondary-marks_total"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">Total Marks</div>
                                <div className="data-value">
                                    {student.higher_secondary.marks_total}
                                </div>
                            </div>
                            <div
                                id="details-higher_secondary-marks_obtained"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">Marks Obtained</div>
                                <div className="data-value">
                                    {student.higher_secondary.marks_obtained}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-8 mt-4">
                            <div
                                id="details-higher_secondary-marks_total_actual"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">
                                    Actual Total Marks
                                </div>
                                <div className="data-value">
                                    {
                                        student.higher_secondary
                                            .marks_total_actual
                                    }
                                </div>
                            </div>
                            <div
                                id="details-higher_secondary-marks_obtained_actual"
                                className="data-container w-1/2"
                            >
                                <div className="data-title">
                                    Actual Marks Obtained
                                </div>
                                <div className="data-value">
                                    {
                                        student.higher_secondary
                                            .marks_obtained_actual
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Student;
