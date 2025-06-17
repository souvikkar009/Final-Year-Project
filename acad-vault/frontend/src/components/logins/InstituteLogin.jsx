import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
    );
};

export default AcademicInstituteLogin;
