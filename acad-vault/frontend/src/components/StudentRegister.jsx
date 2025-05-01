import { useState } from "react";
import { state_names } from "../resources/States";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const StudentRegister = () => {
  let initialState = {
    first_name: "",
    last_name: "",
    dob: "",
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
        // setFormData(initialState);
        alert(response.data.message);
        // window.location.reload();
      })
      .catch((error) => {
        alert(error.response.data.message);
        // setFormData(initialState);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white mt-2">
      <div className="w-full max-w-lg p-8 shadow-lg border border-gray-400 rounded-lg text-blue-700">
        <h2 className="text-2xl font-bold text-center mb-6">
          Student Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="w-1/2 p-2 text-black rounded form-border"
              onChange={handleChange}
              value={formData.first_name}
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="w-1/2 p-2 text-black rounded form-border"
              onChange={handleChange}
              value={formData.last_name}
              required
            />
          </div>
          <input
            type="date"
            name="dob"
            className="w-full p-2 text-black rounded form-border"
            onChange={handleChange}
            value={formData.dob}
            required
          />
          <div className="flex gap-4">
            <select
              id="state"
              name="state"
              className="form-border rounded text-black"
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
              className="w-1/2 p-2 text-black rounded form-border"
              onChange={handleChange}
              value={formData.district}
              required
            />
          </div>
          <input
            type="number"
            name="pin_code"
            placeholder="Pin Code"
            className="w-full p-2 text-black rounded form-border"
            onChange={handleChange}
            value={formData.pin_code}
            required
          />
          <textarea
            rows="3"
            name="address"
            placeholder="Address"
            className="w-full p-2 text-black rounded resize-none form-border"
            onChange={handleChange}
            value={formData.address}
            required
          ></textarea>
          <input
            type="text"
            name="mobile_no"
            placeholder="Mobile No"
            className="w-full p-2 text-black rounded form-border"
            onChange={handleChange}
            value={formData.mobile_no}
            required
          />
          <input
            type="text"
            name="aadhar_no"
            placeholder="Aadhar No"
            className="w-full p-2 text-black rounded form-border"
            onChange={handleChange}
            value={formData.aadhar_no}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 text-black rounded form-border"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 text-black rounded form-border"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-bold py-2 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
