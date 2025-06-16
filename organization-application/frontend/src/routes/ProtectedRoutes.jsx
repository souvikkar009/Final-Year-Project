import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoutes = ({ allowedRoles }) => {
  const { userRole, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!userRole) return <Navigate to="/" />;

  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
