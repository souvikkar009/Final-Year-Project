import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import AdminLogin from "../components/AdminLogin";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../components/Dashboard";
import ShareData from "../components/ShareData";
import ThankYou from "../components/ThankYou";
import Failure from "../components/Failure";

const AppRouter = createBrowserRouter([
  // Home Page
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <ShareData /> },
      { path: "auth", element: <AdminLogin /> },
      { path: "thankyou", element: <ThankYou /> },
      { path: "failure", element: <Failure /> },
    ],
  },
  {
    element: <ProtectedRoutes allowedRoles={["admin"]} />,
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
