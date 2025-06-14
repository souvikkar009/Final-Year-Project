import React, { useState } from "react";
import { textToArrayOfStrings } from "../utils/textToArrayOfStrings";
import axios from "axios";
import { NavLink } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const AcademicInstituteRegister = () => {
    let initialState = {
        institute_name: "",
        institute_id: "",
        password: "",
        institute_type: "",
        institute_level: "",
        program_levels_text: "",
        program_names_text: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [isHigherStudy, setIsHigherStudy] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (
            e.target.name === "institute_level" &&
            e.target.value === "higher_studies"
        ) {
            setIsHigherStudy(true);
        } else {
            setIsHigherStudy(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerData = {
            institute_name: formData.institute_name,
            institute_id: formData.institute_id,
            password: formData.password,
            institute_type: formData.institute_type,
            institute_level: formData.institute_level,
            program_levels: textToArrayOfStrings(formData.program_levels_text),
            program_names: textToArrayOfStrings(formData.program_names_text),
        };

        console.log(registerData);

        await axios
            .post(`/api/auth/institute/register`, registerData)
            .then((response) => {
                alert(response.data.message);
                setFormData(initialState);
                window.location.reload();
            })
            .catch((error) => {
                alert(error.response.data.message);
                setFormData(initialState);
            });
    };
    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-xl p-8 shadow-lg shadow-slate-400 border border-slate-400 rounded-lg ">
                <h2 className="text-2xl font-bold text-center mb-6 text-teal-400">
                    Institute Registration
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-slate-300"
                >
                    <input
                        type="text"
                        name="institute_name"
                        placeholder="Institute Name"
                        className="w-full p-2 rounded form-border"
                        onChange={handleChange}
                        value={formData.institute_name}
                        required
                    />

                    <input
                        type="number"
                        name="institute_id"
                        className="w-full p-2 rounded form-border"
                        placeholder="Institute Id"
                        onChange={handleChange}
                        value={formData.institute_id}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-2 rounded form-border"
                        onChange={handleChange}
                        value={formData.password}
                        required
                    />
                    <div className="flex gap-4">
                        <select
                            name="institute_type"
                            className="w-1/2 rounded p-2 form-border bg-slate-900 cursor-pointer"
                            onChange={handleChange}
                            value={formData.institute_type}
                        >
                            <option value="">--Select Institute Type--</option>
                            <option value="School">School</option>
                            <option value="Board">Board</option>
                            <option value="College">College</option>
                            <option value="University">University</option>
                            <option value="Multi-Disciplinary Institute">
                                Multi-Disciplinary Institute
                            </option>
                        </select>
                        <select
                            name="institute_level"
                            className="w-1/2 rounded p-2 form-border bg-slate-900 cursor-pointer"
                            onChange={handleChange}
                            value={formData.institute_level}
                        >
                            <option value="">--Select Institute Level--</option>
                            <option value="secondary">Secondary</option>
                            <option value="higher_secondary">
                                Higher Secondary
                            </option>
                            <option value="higher_studies">
                                Higher Studies
                            </option>
                        </select>
                    </div>
                    {isHigherStudy && (
                        <>
                            <textarea
                                name="program_levels_text"
                                placeholder="Enter program levels separated comma (,). e.g. doctoral,undergraduation,postgraduation"
                                className="w-full p-2 rounded resize-none form-border"
                                rows={"3"}
                                onChange={handleChange}
                                value={formData.program_levels_text}
                                required
                            ></textarea>
                            <textarea
                                name="program_names_text"
                                placeholder="Enter program names separated comma (,). e.g. Btech,BCA,MBA"
                                className="w-full p-2 rounded resize-none form-border"
                                rows={"3"}
                                onChange={handleChange}
                                value={formData.program_names_text}
                                required
                            ></textarea>
                        </>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-teal-600 cursor-pointer text-white font-bold py-2 rounded"
                    >
                        Register
                    </button>
                </form>
                <div className="text-slate-300 mt-4 text-center">
                    Already Registered? Click to{" "}
                    <span className="font-bold hover:underline text-teal-400 cursor-pointer">
                        <NavLink to={"/auth/institute/login"}>Log In</NavLink>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AcademicInstituteRegister;
