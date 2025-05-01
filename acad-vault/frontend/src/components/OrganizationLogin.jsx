import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

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
    <div className="flex items-center justify-center bg-white mt-16">
      <div className="w-full max-w-lg p-8 shadow-lg border border-gray-400 rounded-lg text-blue-700">
        <div className="text-2xl font-bold text-center mb-6">
          Organization Login
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganizationLogin;
