import { useState } from "react";
import { NavLink } from "react-router-dom";

const Auth = () => {
    const [openStudentAuth, setOpenStudentAuth] = useState(false);
    const [openInstituteAuth, setOpenInstituteAuth] = useState(false);
    const [openOrganizationAuth, setOpenOrganizationAuth] = useState(false);
    return (
        <div className="flex items-center justify-center mt-12">
            <div className="w-full max-w-2xl p-8 shadow shadow-slate-400 border border-slate-400 rounded-lg text-white font-semibold">
                <div className="flex items-center justify-between">
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenStudentAuth(true)}
                        onMouseLeave={() => setOpenStudentAuth(false)}
                    >
                        <div className="auth-entity">Student</div>
                        {openStudentAuth && (
                            <div className="auth-type-container">
                                <NavLink to={"/auth/student/register"}>
                                    <div className="auth-type">Register</div>
                                </NavLink>
                                <NavLink to={"/auth/student/login"}>
                                    <div className="auth-type">Log In</div>
                                </NavLink>
                            </div>
                        )}
                    </div>
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenInstituteAuth(true)}
                        onMouseLeave={() => setOpenInstituteAuth(false)}
                    >
                        <div className="auth-entity">Academic Institute</div>
                        {openInstituteAuth && (
                            <div className="auth-type-container">
                                <NavLink to={"/auth/institute/register"}>
                                    <div className="auth-type">Register</div>
                                </NavLink>

                                <NavLink to={"/auth/institute/login"}>
                                    <div className="auth-type">Log In</div>
                                </NavLink>
                            </div>
                        )}
                    </div>
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenOrganizationAuth(true)}
                        onMouseLeave={() => setOpenOrganizationAuth(false)}
                    >
                        <div className="auth-entity">Organization</div>
                        {openOrganizationAuth && (
                            <div className="auth-type-container">
                                <NavLink to={"/auth/organization/register"}>
                                    <div className="auth-type">Register</div>
                                </NavLink>
                                <NavLink to={"/auth/organization/login"}>
                                    <div className="auth-type">Log In</div>
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
