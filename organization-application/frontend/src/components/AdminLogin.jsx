import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3028";
axios.defaults.withCredentials = true;

const AdminLogin = () => {
  let initialState = {
    admin_id: "",
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
      .post(`/api/admin/login`, {
        admin_id: formData.admin_id,
        password: formData.password,
      })
      .then((response) => {
        setFormData(initialState);
        alert(response.data.message);
        window.location.replace("/admin");
      })
      .catch((error) => {
        alert(error.response.data.message);
        setFormData(initialState);
      });
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <div className="w-full max-w-xl p-8 shadow-lg shadow-slate-400 border border-slate-400 rounded-lg text-sky-400">
        <h2 className="text-2xl font-bold text-center mb-4">Student Log In</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-slate-300">
          <div>
            <div className="input-name">Admin Id</div>
            <input
              id="input-admin_id"
              type="text"
              name="admin_id"
              placeholder="Admin ID"
              className="w-full p-2 rounded form-border"
              onChange={handleChange}
              value={formData.admin_id}
              required
            />
          </div>
          <div>
            <div className="input-name">Password</div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 rounded form-border"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 cursor-pointer text-white font-bold py-2 rounded"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
