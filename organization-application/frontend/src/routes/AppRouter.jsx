import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AdminLogin from "../components/AdminLogin";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../components/Dashboard";

const AppRouter = createBrowserRouter([
  // Home Page
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "auth", element: <AdminLogin /> }],
  },
  {
    element: <ProtectedRoutes allowedRoles={"admin"} />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [{ index: true, element: <Dashboard /> }],
      },
    ],
  },
]);

export default AppRouter;
