// src/routes/PublicRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PublicRoutes = () => {
  const { userRole, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (userRole === "admin") return <Navigate to="/admin" />;

  return <Outlet />;
};

export default PublicRoutes;
