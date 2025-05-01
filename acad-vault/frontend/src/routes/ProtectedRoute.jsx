// routes/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

const ProtectedRoute = ({ allowedRoles }) => {
    const { userRole, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    if (!userRole) return <Navigate to="/" />;

    return allowedRoles.includes(userRole) ? (
        <Outlet />
    ) : (
        <Navigate to="/unauthorized" />
    );
};

export default ProtectedRoute;
