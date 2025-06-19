import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Building2, Lock } from "lucide-react";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const AcademicInstituteLogin = () => {
    let initialState = {
        institute_id: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post(`/api/auth/institute/login`, {
                institute_id: formData.institute_id,
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
        /*
        <div className="flex items-center justify-center">
            <div className="w-full mt-12 max-w-xl p-8 shadow-lg shadow-slate-400 border border-slate-400 rounded-lg">
                <div className="text-2xl font-bold text-center mb-6 text-teal-400">
                    Academic Institute Login
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-slate-300"
                >
                    <input
                        type="text"
                        name="institute_id"
                        placeholder="Institute ID"
                        className="w-full p-2 rounded form-border"
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
                        <NavLink to={"/auth/institute/register"}>
                            Register
                        </NavLink>
                    </span>
                </div>
            </div>
        </div>

        */
        <div className="min-h-screen bg-slate-900 flex items-top pt-8 justify-center p-4">
            {/* Subtle animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative w-full max-w-lg">
                {/* Main card with modern styling */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl shadow-black/25 p-8 mt-12">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl mb-4 shadow-lg">
                            <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Academic Institute Login
                        </h2>
                        <p className="text-slate-400">
                            Access your institution dashboard
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Institute ID Input */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Building2 className="h-5 w-5 text-slate-400 group-focus-within:text-teal-400 transition-colors duration-300" />
                            </div>
                            <input
                                type="text"
                                name="institute_id"
                                placeholder="Institute ID"
                                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-300"
                                onChange={handleChange}
                                value={formData.institute_id}
                                required
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/0 via-teal-500/0 to-teal-500/0 group-focus-within:from-teal-500/5 group-focus-within:via-transparent group-focus-within:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>

                        {/* Password Input */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-teal-400 transition-colors duration-300" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-300"
                                onChange={handleChange}
                                value={formData.password}
                                required
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/0 via-teal-500/0 to-teal-500/0 group-focus-within:from-teal-500/5 group-focus-within:via-transparent group-focus-within:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full cursor-pointer relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                        >
                            <span className="relative z-10">Sign In</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
                        </button>
                    </div>

                    {/* Register Link */}
                    <div className="mt-8 text-center">
                        <p className="text-slate-400">
                            New to AcadVault?{" "}
                            <span className="font-semibold text-teal-400 hover:text-teal-300 transition-colors duration-300 relative group cursor-pointer">
                                <NavLink to={"/auth/institute/register"}>
                                    Register
                                </NavLink>
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </p>
                    </div>
                </div>

                {/* Subtle floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-teal-500/20 rounded-full blur-sm animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-blue-500/20 rounded-full blur-sm animate-bounce delay-700"></div>
            </div>
        </div>
    );
};

export default AcademicInstituteLogin;
