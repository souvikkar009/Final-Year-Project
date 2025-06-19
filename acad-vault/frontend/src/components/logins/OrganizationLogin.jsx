import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

/*

const OrganizationLogin = () => {
    const initialState = {
        email: "",
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
            .post(`/api/auth/organization/login`, {
                email: formData.email,
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
        <div className="flex items-center justify-center">
            <div className="w-full mt-12 max-w-xl p-8 shadow-lg shadow-slate-400 border border-slate-400 rounded-lg">
                <div className="text-2xl font-bold text-center mb-6 text-teal-400">
                    Organization Login
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-slate-300"
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-2 rounded form-border"
                        onChange={handleChange}
                        value={formData.email}
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
                        className="w-full bg-teal-600 text-white font-bold py-2 rounded"
                    >
                        Log In
                    </button>
                </form>
                <div className="text-slate-300 mt-4 text-center">
                    New to AcadVault? Click to{" "}
                    <span className="font-bold hover:underline text-teal-400 cursor-pointer">
                        <NavLink to={"/auth/organization/register"}>
                            Register
                        </NavLink>
                    </span>
                </div>
            </div>
        </div>
    );
};

*/

import { Mail, Lock, Building2, Eye, EyeOff } from "lucide-react";

const OrganizationLogin = () => {
    const initialState = {
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(formData);
        // Handle form submission logic here
        await axios
            .post("/api/auth/organization/login", {
                email: formData.email,
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
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative w-full max-w-md">
                {/* Glassmorphism card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                            <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-slate-300">
                            Sign in to your organization account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                onChange={handleChange}
                                value={formData.password}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
                                ) : (
                                    <Eye className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
                                )}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                    Signing in...
                                </div>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    {/* Register Link */}
                    <div className="mt-8 text-center">
                        <p className="text-slate-300">
                            New to AcadVault?{" "}
                            <NavLink
                                to="/auth/organization/register"
                                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 transition-all duration-200"
                            >
                                Create an account
                            </NavLink>
                        </p>
                    </div>
                </div>

                {/* Additional decorative elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"></div>
                </div>
            </div>
        </div>
    );
};

export default OrganizationLogin;
