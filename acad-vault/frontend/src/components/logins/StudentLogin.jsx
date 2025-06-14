import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
        <div className="flex items-center justify-center mt-12">
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
    );
};

export default StudentLogin;
