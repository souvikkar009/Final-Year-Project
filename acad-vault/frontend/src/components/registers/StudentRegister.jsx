import { useState } from "react";
import { state_names } from "../../resources/States";
import axios from "axios";
import { NavLink } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

/*
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

*/

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
            password: formData.password,
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-2xl">
                {/* Animated background elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text py-2 text-transparent">
                        Student Registration
                    </h2>
                    <p className="text-gray-300 mt-2">
                        Join AcadVault and Streamline Your Academic Data
                        Management
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                    <div className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="Enter first name"
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                                    onChange={handleChange}
                                    value={formData.first_name}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Enter last name"
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                                    onChange={handleChange}
                                    value={formData.last_name}
                                    required
                                />
                            </div>
                        </div>

                        {/* DOB and Gender */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    name="dob"
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                                    onChange={handleChange}
                                    value={formData.dob}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Gender
                                </label>
                                <select
                                    name="gender"
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 cursor-pointer"
                                    onChange={handleChange}
                                    value={formData.gender}
                                    required
                                >
                                    <option value="" className="bg-slate-800">
                                        Select Gender
                                    </option>
                                    <option
                                        value="Male"
                                        className="bg-slate-800"
                                    >
                                        Male
                                    </option>
                                    <option
                                        value="Female"
                                        className="bg-slate-800"
                                    >
                                        Female
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* State and District */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    State
                                </label>
                                <select
                                    name="state"
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 cursor-pointer"
                                    onChange={handleChange}
                                    value={formData.state}
                                    required
                                >
                                    {state_names.map((state, index) => (
                                        <option
                                            value={state}
                                            key={index}
                                            className="bg-slate-800"
                                        >
                                            {state || "Select State"}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    District
                                </label>
                                <input
                                    type="text"
                                    name="district"
                                    placeholder="Enter district"
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                                    onChange={handleChange}
                                    value={formData.district}
                                    required
                                />
                            </div>
                        </div>

                        {/* Pin Code */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Pin Code
                            </label>
                            <input
                                type="number"
                                name="pin_code"
                                placeholder="Enter pin code"
                                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                                onChange={handleChange}
                                value={formData.pin_code}
                                required
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Address
                            </label>
                            <textarea
                                rows="3"
                                name="address"
                                placeholder="Enter your address"
                                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 resize-none"
                                onChange={handleChange}
                                value={formData.address}
                                required
                            />
                        </div>

                        {/* Contact Information */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Mobile Number
                                </label>
                                <input
                                    type="text"
                                    name="mobile_no"
                                    placeholder="Enter mobile number"
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                                    onChange={handleChange}
                                    value={formData.mobile_no}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Aadhar Number
                                </label>
                                <input
                                    type="text"
                                    name="aadhar_no"
                                    placeholder="Enter Aadhar number"
                                    className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                                    onChange={handleChange}
                                    value={formData.aadhar_no}
                                    required
                                />
                            </div>
                        </div>

                        {/* Email and Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email address"
                                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Create a strong password"
                                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                                onChange={handleChange}
                                value={formData.password}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="cursor-pointer w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold py-3 rounded-lg hover:from-teal-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Create Account
                        </button>
                    </div>

                    {/* Login Link */}
                    <div className="text-center mt-6 text-gray-300">
                        Already have an account?{" "}
                        <NavLink
                            to={"/auth/student/login"}
                            className="font-semibold text-teal-400 hover:text-teal-300 hover:underline transition-colors"
                        >
                            Sign In
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentRegister;
