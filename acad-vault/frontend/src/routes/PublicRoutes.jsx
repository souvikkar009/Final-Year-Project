// src/routes/PublicRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PublicRoutes = () => {
    const { userRole, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    if (userRole === "student") return <Navigate to="/student" />;
    if (userRole === "organization") return <Navigate to="/organization" />;
    if (userRole === "institute") return <Navigate to="/institute" />;

    return <Outlet />;
};

export default PublicRoutes;
