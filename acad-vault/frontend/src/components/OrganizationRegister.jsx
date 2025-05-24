import { useState } from "react";
import axios from "axios";
import { FaRegCopy } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const OrganizationRegister = () => {
    const initialState = {
        organization_name: "",
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [authRes, setAuthRes] = useState("");
    const [copied, setCopied] = useState(false);

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
            <div className="w-full max-w-xl p-8 shadow-lg shadow-slate-400 border border-gray-400 rounded-lg">
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
                className={`w-full h-screen fixed left-0 top-0 bg-gray-400 opacity-50 ${
                    authRes ? "block" : "hidden"
                }`}
            ></div>
            {authRes && (
                <div className="fixed bg-white z-10 opacity-100 border border-gray-400 shadow-lg max-w-lg rounded p-8">
                    <IoCloseSharp
                        className="absolute right-4 top-4 text-2xl hover:text-red-700 cursor-pointer"
                        title="Close"
                        onClick={() => {
                            window.location.reload();
                        }}
                    />
                    <div className="text-center text-xl mt-4">
                        {authRes.message}
                    </div>
                    <div className=" text-center my-4 font-bold">
                        Copy the secret code
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <div className={`bg-gray-100 py-2 px-4 rounded`}>
                            <div
                                className={`${
                                    copied && "bg-blue-700 text-white"
                                }`}
                            >
                                {authRes.secret_key}
                            </div>
                        </div>
                        <FaRegCopy
                            className="text-2xl cursor-pointer"
                            onClick={async () => {
                                await window.navigator.clipboard.writeText(
                                    authRes.secret_key
                                );
                                setCopied(true);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrganizationRegister;
