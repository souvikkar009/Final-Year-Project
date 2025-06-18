import React, { useState } from "react";
import { textToArrayOfStrings } from "../../utils/textToArrayOfStrings";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {
    Building2,
    Hash,
    Lock,
    ChevronDown,
    GraduationCap,
} from "lucide-react";

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
        } else if (
            e.target.name === "institute_level" &&
            e.target.value !== "higher_studies"
        ) {
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
        /*
        <div className="flex items-center justify-center">
            <div className="w-full mt-12 max-w-xl p-8 shadow-lg shadow-slate-400 border border-slate-400 rounded-lg ">
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
        */

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 flex items-top justify-center py-4">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative w-full max-w-2xl">
                {/* Main card with glassmorphism */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl shadow-black/25 p-8 mt-12">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full mb-4 shadow-lg">
                            <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl py-2 font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Institute Registration
                        </h2>
                        <p className="text-slate-300 mt-2">
                            Join the AcadVault network
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Institute Name */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Building2 className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                            </div>
                            <input
                                type="text"
                                name="institute_name"
                                placeholder="Institute Name"
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
                                onChange={handleChange}
                                value={formData.institute_name}
                                required
                            />
                        </div>

                        {/* Institute ID */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Hash className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                            </div>
                            <input
                                type="number"
                                name="institute_id"
                                placeholder="Institute ID"
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
                                onChange={handleChange}
                                value={formData.institute_id}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
                                onChange={handleChange}
                                value={formData.password}
                                required
                            />
                        </div>

                        {/* Institute Type and Level */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative group">
                                <select
                                    name="institute_type"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm cursor-pointer appearance-none"
                                    onChange={handleChange}
                                    value={formData.institute_type}
                                >
                                    <option
                                        value=""
                                        className="bg-slate-800 text-slate-300"
                                    >
                                        Select Institute Type
                                    </option>
                                    <option
                                        value="School"
                                        className="bg-slate-800 text-slate-300"
                                    >
                                        School
                                    </option>
                                    <option
                                        value="Board"
                                        className="bg-slate-800 text-slate-300"
                                    >
                                        Board
                                    </option>
                                    <option
                                        value="College"
                                        className="bg-slate-800 text-slate-300"
                                    >
                                        College
                                    </option>
                                    <option
                                        value="University"
                                        className="bg-slate-800 text-slate-300"
                                    >
                                        University
                                    </option>
                                    <option
                                        value="Multi-Disciplinary Institute"
                                        className="bg-slate-800 text-slate-300"
                                    >
                                        Multi-Disciplinary Institute
                                    </option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                            </div>

                            <div className="relative group">
                                <select
                                    name="institute_level"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm cursor-pointer appearance-none"
                                    onChange={handleChange}
                                    value={formData.institute_level}
                                >
                                    <option
                                        value=""
                                        className="bg-slate-800 text-slate-300"
                                    >
                                        Select Institute Level
                                    </option>
                                    <option
                                        value="secondary"
                                        className="bg-slate-800 text-slate-300"
                                    >
                                        Secondary
                                    </option>
                                    <option
                                        value="higher_secondary"
                                        className="bg-slate-800 text-slate-300"
                                    >
                                        Higher Secondary
                                    </option>
                                    <option
                                        value="higher_studies"
                                        className="bg-slate-800 text-slate-300"
                                    >
                                        Higher Studies
                                    </option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Conditional Higher Studies Fields */}
                        {isHigherStudy && (
                            <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                                <div className="relative group">
                                    <div className="absolute top-3 left-3 pointer-events-none">
                                        <GraduationCap className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                                    </div>
                                    <textarea
                                        name="program_levels_text"
                                        placeholder="Enter program levels separated by comma (,). e.g. doctoral, undergraduate, postgraduate"
                                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm resize-none"
                                        rows={3}
                                        onChange={handleChange}
                                        value={formData.program_levels_text}
                                        required
                                    />
                                </div>

                                <div className="relative group">
                                    <div className="absolute top-3 left-3 pointer-events-none">
                                        <GraduationCap className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                                    </div>
                                    <textarea
                                        name="program_names_text"
                                        placeholder="Enter program names separated by comma (,). e.g. B.Tech, BCA, MBA"
                                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 backdrop-blur-sm resize-none"
                                        rows={3}
                                        onChange={handleChange}
                                        value={formData.program_names_text}
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="cursor-pointer w-full relative overflow-hidden bg-gradient-to-r from-teal-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                        >
                            <span className="relative z-10">
                                Create Institute Account
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
                        </button>
                    </div>

                    {/* Login Link */}
                    <div className="mt-8 text-center">
                        <p className="text-slate-300">
                            Already registered?{" "}
                            <span
                                className="font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-indigo-300 transition-all duration-300 relative group cursor-pointer"
                                onClick={() => {
                                    // Your navigation logic here
                                    window.location.href =
                                        "/auth/institute/login";
                                }}
                            >
                                Sign In
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </p>
                    </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-400/30 rounded-full blur-sm animate-bounce delay-700"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-purple-400/30 rounded-full blur-sm animate-bounce delay-1000"></div>
            </div>
        </div>
    );
};

export default AcademicInstituteRegister;
