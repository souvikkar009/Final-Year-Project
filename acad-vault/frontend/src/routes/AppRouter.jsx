import { createBrowserRouter, Navigate } from "react-router-dom";

import Unauthorized from "../components/Unauthorized";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import PublicRoutes from "../routes/PublicRoutes";
import StudentRegister from "../components/StudentRegister";
import StudentLogin from "../components/StudentLogin";
import OrganizationLogin from "../components/OrganizationLogin";
import OrganizationRegister from "../components/OrganizationRegister";
import InstituteLogin from "../components/InstituteLogin";
import InstituteRegister from "../components/InstituteRegister";
import ProtectedRoute from "./ProtectedRoutes";

import StudentLayout from "../layouts/StudentLayout";
import OrganizationLayout from "../layouts/OrganizationLayout";
import InstituteLayout from "../layouts/InstituteLayout";

import OrganizationAccessKeyGeneration from "../components/OrganizationAccessKeyGeneration";
import Organization from "../pages/Organization";
import Auth from "../pages/Auth";
import AuthLayout from "../layouts/AuthLayout";
import Institute from "../pages/Institute";
import Student from "../pages/Student";

const AppRouter = createBrowserRouter([
    // Home Page
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/unauthorized", element: <Unauthorized /> },
        ],
    },
    // Public auth routes
    {
        element: <PublicRoutes />,
        children: [
            {
                path: "/auth",
                element: <AuthLayout />,
                children: [
                    { index: true, element: <Auth /> },
                    { path: "/auth/student/login", element: <StudentLogin /> },
                    {
                        path: "/auth/student/register",
                        element: <StudentRegister />,
                    },
                    {
                        path: "/auth/organization/login",
                        element: <OrganizationLogin />,
                    },
                    {
                        path: "/auth/organization/register",
                        element: <OrganizationRegister />,
                    },
                    {
                        path: "/auth/institute/login",
                        element: <InstituteLogin />,
                    },
                    {
                        path: "/auth/institute/register",
                        element: <InstituteRegister />,
                    },
                ],
            },
        ],
    },

    // Protected Routes

    {
        element: <ProtectedRoute allowedRoles={["student"]} />,
        children: [
            {
                path: "/student",
                element: <StudentLayout />,
                children: [{ index: true, element: <Student /> }],
            },
        ],
    },
    {
        element: <ProtectedRoute allowedRoles={["institute"]} />,
        children: [
            {
                path: "/institute",
                element: <InstituteLayout />,
                children: [{ index: true, element: <Institute /> }],
            },
        ],
    },
    {
        element: <ProtectedRoute allowedRoles={["organization"]} />,
        children: [
            {
                path: "/organization",
                element: <OrganizationLayout />,
                children: [
                    { index: true, element: <Organization /> },
                    {
                        path: "get-accesskey",
                        element: <OrganizationAccessKeyGeneration />,
                    },
                ],
            },
        ],
    },
]);

export default AppRouter;
