import { useState } from "react";
import { state_names } from "../resources/States";
import axios from "axios";
import { NavLink } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const StudentRegister = () => {
    let initialState = {
        first_name: "",
        last_name: "",
        dob: "",
        gender: "",
        state: "",
        district: "",
        pin_code: "",
        address: "",
        mobile_no: "",
        aadhar_no: "",
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerData = {
            full_name: {
                first_name: formData.first_name,
                last_name: formData.last_name,
            },
            dob: formData.dob,
            gender: formData.gender,
            state: formData.state,
            district: formData.district,
            pin_code: formData.pin_code,
            address: formData.address,
            mobile_no: formData.mobile_no,
            aadhar_no: formData.aadhar_no,
            email: formData.email,
            password: formData.email,
        };
        console.log(registerData);
        await axios
            .post(`/api/auth/student/register`, registerData)
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
            <div className="w-full max-w-xl p-8 shadow-lg shadow-slate-400 border border-slate-300 rounded-lg ">
                <h2 className="text-2xl font-bold text-center mb-6 text-teal-400">
                    Student Registration
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-slate-300"
                >
                    <div className="flex gap-4">
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            className="w-1/2 p-2 rounded form-border"
                            onChange={handleChange}
                            value={formData.first_name}
                            required
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            className="w-1/2 p-2 rounded form-border"
                            onChange={handleChange}
                            value={formData.last_name}
                            required
                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            type="date"
                            name="dob"
                            className="w-1/2 p-2 rounded form-border"
                            onChange={handleChange}
                            value={formData.dob}
                            required
                        />
                        <select
                            name="gender"
                            id="gender"
                            className="w-1/2 form-border rounded bg-slate-900 cursor-pointer"
                            onChange={handleChange}
                            value={formData.gender}
                        >
                            <option value={""}>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="flex gap-4">
                        <select
                            id="state"
                            name="state"
                            className="form-border rounded bg-slate-900 cursor-pointer"
                            required
                            onChange={handleChange}
                            value={formData.state}
                        >
                            {state_names.map((state, index) => (
                                <option value={state} key={index}>
                                    {state ? state : "State"}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name="district"
                            placeholder="District"
                            className="w-1/2 p-2 rounded form-border"
                            onChange={handleChange}
                            value={formData.district}
                            required
                        />
                    </div>
                    <input
                        type="number"
                        name="pin_code"
                        placeholder="Pin Code"
                        className="w-full p-2 rounded form-border"
                        onChange={handleChange}
                        value={formData.pin_code}
                        required
                    />
                    <textarea
                        rows="3"
                        name="address"
                        placeholder="Address"
                        className="w-full p-2 rounded resize-none form-border"
                        onChange={handleChange}
                        value={formData.address}
                        required
                    ></textarea>
                    <input
                        type="text"
                        name="mobile_no"
                        placeholder="Mobile No"
                        className="w-full p-2 rounded form-border"
                        onChange={handleChange}
                        value={formData.mobile_no}
                        required
                    />
                    <input
                        type="text"
                        name="aadhar_no"
                        placeholder="Aadhar No"
                        className="w-full p-2 rounded form-border"
                        onChange={handleChange}
                        value={formData.aadhar_no}
                        required
                    />
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
                        className="w-full bg-teal-600 text-white cursor-pointer font-bold py-2 rounded"
                    >
                        Register
                    </button>
                </form>
                <div className="text-slate-300 mt-4 text-center">
                    Already registered? Click to{" "}
                    <span className="font-bold hover:underline text-teal-400 cursor-pointer">
                        <NavLink to={"/auth/student/login"}>Log In</NavLink>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default StudentRegister;
