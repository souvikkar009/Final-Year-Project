import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { User, Lock, GraduationCap } from "lucide-react";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const StudentLogin = () => {
    let initialState = {
        avid: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission logic here
        await axios
            .post(`/api/auth/student/login`, {
                avid: formData.avid,
                password: formData.password,
            })
            .then((response) => {
                setFormData(initialState);
                alert(response.data.message);
                window.location.reload();
            })
            .catch((error) => {
                alert(error.response.data.message);
                setFormData(initialState);
            });
    };

    return (
        /* <div className="flex items-center justify-center mt-12">
            <div className="w-full max-w-xl p-8 shadow-lg shadow-slate-400 border border-slate-400 rounded-lg text-teal-400">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Student Log In
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-slate-300"
                >
                    <input
                        type="text"
                        name="avid"
                        placeholder="AVID"
                        className="w-full p-2 rounded form-border"
                        onChange={handleChange}
                        value={formData.avid}
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
                    <button
                        type="submit"
                        className="w-full bg-teal-600 cursor-pointer text-white font-bold py-2 rounded"
                    >
                        Log In
                    </button>
                </form>
                <div className="text-slate-300 mt-4 text-center">
                    New to AcadVault? Click to{" "}
                    <span className="font-bold hover:underline text-teal-400 cursor-pointer">
                        <NavLink to={"/auth/student/register"}>
                            Register
                        </NavLink>
                    </span>
                </div>
            </div>
        </div>
        */

        <div className="min-h-screen flex items-top pt-16 justify-center bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900 p-4">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10"></div>

            {/* Animated background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative w-full max-w-md">
                {/* Glassmorphism card */}
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl shadow-black/25 p-8 transform hover:scale-105 transition-all duration-300">
                    {/* Header with icon */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mb-4 shadow-lg">
                            <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Welcome Back
                        </h2>
                        <p className="text-slate-300 mt-2">
                            Sign in to your AcadVault account
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* AVID Input */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
                            </div>
                            <input
                                type="text"
                                name="avid"
                                placeholder="AVID"
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50 transition-all duration-300 backdrop-blur-sm"
                                onChange={handleChange}
                                value={formData.avid}
                                required
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/0 via-teal-400/0 to-teal-400/0 group-focus-within:from-teal-400/10 group-focus-within:via-transparent group-focus-within:to-purple-400/10 transition-all duration-300 pointer-events-none"></div>
                        </div>

                        {/* Password Input */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-teal-400 transition-colors" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50 transition-all duration-300 backdrop-blur-sm"
                                onChange={handleChange}
                                value={formData.password}
                                required
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400/0 via-teal-400/0 to-teal-400/0 group-focus-within:from-teal-400/10 group-focus-within:via-transparent group-focus-within:to-purple-400/10 transition-all duration-300 pointer-events-none"></div>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full cursor-pointer relative overflow-hidden bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400/50"
                        >
                            <span className="relative z-10">Sign In</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
                        </button>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-slate-300">
                            New to AcadVault?{" "}
                            <span className="font-semibold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent hover:from-teal-300 hover:to-blue-300 transition-all duration-300 relative group cursor-pointer">
                                <NavLink to={"/auth/student/register"}>
                                    Register
                                </NavLink>

                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentLogin;
