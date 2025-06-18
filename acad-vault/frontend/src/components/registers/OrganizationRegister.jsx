import { useState } from "react";
import axios from "axios";
import { FaRegCopy } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Copy, X, Eye, EyeOff } from "lucide-react";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

/*
const OrganizationRegister = () => {
    const initialState = {
        organization_name: "",
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [authRes, setAuthRes] = useState("");
    const [copiedSecretKey, setCopiedSecretKey] = useState(false);
    const [copiedOrgId, setCopiedOrgId] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        await axios
            .post(`/api/auth/organization/register`, {
                organization_name: formData.organization_name,
                email: formData.email,
                password: formData.password,
            })
            .then((response) => {
                setAuthRes(response.data);
                setFormData(initialState);
            })
            .catch((error) => {
                alert(error.response.data.message);
                setFormData(initialState);
            });
    };

    return (
        <div className="flex items-center justify-center relative">
            <div className="w-full mt-12 max-w-xl p-8 shadow-lg shadow-slate-400 border border-gray-400 rounded-lg">
                <div className="text-2xl font-bold text-center mb-6 text-teal-400">
                    Organization Registration
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-slate-300"
                >
                    <input
                        type="text"
                        name="organization_name"
                        placeholder="Organization Name"
                        className="w-full p-2 rounded form-border"
                        onChange={handleChange}
                        value={formData.organization_name}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-2 rounded form-border"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-2 rounded form-border"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white font-bold py-2 rounded cursor-pointer"
                    >
                        Register
                    </button>
                </form>
                <div className="text-slate-300 mt-4 text-center">
                    Already registered? Click to{" "}
                    <span className="font-bold hover:underline text-teal-400 cursor-pointer">
                        <NavLink to={"/auth/organization/login"}>
                            Log In
                        </NavLink>
                    </span>
                </div>
            </div>
            <div
                className={`w-full h-screen fixed left-0 top-0 bg-slate-900 ${
                    authRes ? "block" : "hidden"
                }`}
            ></div>
            {authRes && (
                <div className="fixed bg-slate-900 z-10 border border-slate-300 shadow-lg shadow-slate-300 max-w-lg rounded p-8">
                    <IoCloseSharp
                        className="absolute right-4 top-4 text-2xl text-white hover:text-red-700 cursor-pointer"
                        title="Close"
                        onClick={() => {
                            window.location.reload();
                        }}
                    />
                    <div className="text-center text-teal-400 text-xl mt-4">
                        {authRes.message}
                    </div>
                    {authRes.secret_key && (
                        <div className="text-center text-white mt-4 mb-1 font-bold">
                            Secret Code
                        </div>
                    )}

                    <div className="flex items-center gap-4">
                        <div className={`bg-slate-700 py-2 px-4 rounded grow`}>
                            <span
                                className={`${
                                    copiedSecretKey && "bg-blue-700 text-white"
                                } font-bold text-slate-300`}
                            >
                                {authRes.secret_key}
                            </span>
                        </div>
                        <FaRegCopy
                            className="text-2xl cursor-pointer text-white"
                            onClick={async () => {
                                await window.navigator.clipboard.writeText(
                                    authRes.secret_key
                                );
                                setCopiedSecretKey(true);
                                setTimeout(() => {
                                    setCopiedSecretKey(false);
                                }, 300);
                            }}
                        />
                    </div>
                    {authRes.org_id && (
                        <div className="text-center text-white my-1 font-bold">
                            Organization Id
                        </div>
                    )}
                    <div className="flex items-center gap-4">
                        <div
                            className={`bg-slate-700 py-2 px-4 rounded-lg grow`}
                        >
                            <span
                                className={`${
                                    copiedOrgId && "bg-blue-700 text-white"
                                } font-bold text-slate-300`}
                            >
                                {authRes.org_id}
                            </span>
                        </div>
                        <FaRegCopy
                            className="text-2xl cursor-pointer text-white"
                            onClick={async () => {
                                await window.navigator.clipboard.writeText(
                                    authRes.org_id
                                );
                                setCopiedOrgId(true);
                                setTimeout(() => {
                                    setCopiedOrgId(false);
                                }, 300);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrganizationRegister;

*/

export default function OrganizationRegistration() {
    const initialState = {
        organization_name: "",
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [authRes, setAuthRes] = useState(null);
    const [copiedSecretKey, setCopiedSecretKey] = useState(false);
    const [copiedOrgId, setCopiedOrgId] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        setIsLoading(true);
        await axios
            .post(`/api/auth/organization/register`, {
                organization_name: formData.organization_name,
                email: formData.email,
                password: formData.password,
            })
            .then((response) => {
                setAuthRes(response.data);
                setFormData(initialState);
                setIsLoading(false);
            })
            .catch((error) => {
                alert(error.response.data.message);
                setFormData(initialState);
            });
    };

    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            if (type === "secret") {
                setCopiedSecretKey(true);
                setTimeout(() => setCopiedSecretKey(false), 2000);
            } else {
                setCopiedOrgId(true);
                setTimeout(() => setCopiedOrgId(false), 2000);
            }
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
            </div>

            {/* Main Form Container */}
            <div className="w-full max-w-xl relative z-10">
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl shadow-slate-900/50">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-lg"></div>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">
                            Organization Registration
                        </h1>
                        <p className="text-slate-400 text-sm">
                            Create your organization account
                        </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        {/* Organization Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 block">
                                Organization Name
                            </label>
                            <input
                                type="text"
                                name="organization_name"
                                placeholder="Enter organization name"
                                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                                onChange={handleChange}
                                value={formData.organization_name}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 block">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email address"
                                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300 block">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter password"
                                    className="w-full px-4 py-3 pr-12 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className={`cursor-pointer w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                                isLoading
                                    ? "bg-slate-600 cursor-not-allowed"
                                    : "bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 hover:shadow-lg hover:shadow-cyan-500/25"
                            }`}
                        >
                            {isLoading
                                ? "Registering..."
                                : "Register Organization"}
                        </button>
                    </div>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-slate-400 text-sm">
                            Already registered?{" "}
                            <span className="text-cyan-400 hover:text-cyan-300 cursor-pointer font-medium transition-colors">
                                <NavLink to={"/auth/organization/login"}>
                                    Log In
                                </NavLink>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Success Modal Overlay */}
            {authRes && (
                <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-lg w-full shadow-2xl shadow-slate-900/50 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => window.location.reload()}
                            className="absolute right-4 top-4 text-slate-400 hover:text-red-400 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Success Message */}
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <div className="w-8 h-8 text-white font-bold text-xl">
                                    ✓
                                </div>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-2">
                                {authRes.message}
                            </h2>
                            <p className="text-slate-400 text-sm">
                                Please save these credentials securely
                            </p>
                        </div>

                        {/* Credentials */}
                        <div className="space-y-6">
                            {/* Secret Key */}
                            {authRes.secret_key && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 block">
                                        Secret Key
                                    </label>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3">
                                            <code
                                                className={`text-sm font-mono transition-all duration-200 ${
                                                    copiedSecretKey
                                                        ? "text-green-400"
                                                        : "text-slate-300"
                                                }`}
                                            >
                                                {authRes.secret_key}
                                            </code>
                                        </div>
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    authRes.secret_key,
                                                    "secret"
                                                )
                                            }
                                            className={`p-3 rounded-xl transition-all duration-200 ${
                                                copiedSecretKey
                                                    ? "bg-green-600 text-white"
                                                    : "bg-slate-700 hover:bg-slate-600 text-slate-300"
                                            }`}
                                        >
                                            <Copy size={18} />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Organization ID */}
                            {authRes.org_id && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 block">
                                        Organization ID
                                    </label>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3">
                                            <code
                                                className={`text-sm font-mono transition-all duration-200 ${
                                                    copiedOrgId
                                                        ? "text-green-400"
                                                        : "text-slate-300"
                                                }`}
                                            >
                                                {authRes.org_id}
                                            </code>
                                        </div>
                                        <button
                                            onClick={() =>
                                                copyToClipboard(
                                                    authRes.org_id,
                                                    "org"
                                                )
                                            }
                                            className={`p-3 rounded-xl transition-all duration-200 ${
                                                copiedOrgId
                                                    ? "bg-green-600 text-white"
                                                    : "bg-slate-700 hover:bg-slate-600 text-slate-300"
                                            }`}
                                        >
                                            <Copy size={18} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Warning */}
                        <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                            <p className="text-amber-400 text-sm">
                                ⚠️ Please save these credentials securely. You
                                won't be able to retrieve them later.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
