import axios from "axios";
import { useState } from "react";
import { Lock, User, Shield } from "lucide-react";

axios.defaults.baseURL = "http://localhost:3028";
axios.defaults.withCredentials = true;

/*
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

*/

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
      .post("/api/admin/login", {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Glass morphism card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
          {/* Header with icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Admin Portal</h2>
            <p className="text-gray-300">Secure access to admin dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Admin ID Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                <User className="w-4 h-4" />
                Admin ID
              </label>
              <div className="relative">
                <input
                  id="input-admin_id"
                  type="text"
                  name="admin_id"
                  placeholder="Enter your admin ID"
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  onChange={handleChange}
                  value={formData.admin_id}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Access Admin Panel
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              Secure authentication required • Authorized personnel only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
