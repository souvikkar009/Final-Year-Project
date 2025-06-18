// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Auth = () => {
//     const [openStudentAuth, setOpenStudentAuth] = useState(false);
//     const [openInstituteAuth, setOpenInstituteAuth] = useState(false);
//     const [openOrganizationAuth, setOpenOrganizationAuth] = useState(false);
//     return (
//         <div className="flex items-center justify-center mt-12">
//             <div className="w-full max-w-2xl p-8 shadow shadow-slate-400 border border-slate-400 rounded-lg text-white font-semibold">
//                 <div className="flex items-center justify-between">
//                     <div
//                         className="relative"
//                         onMouseEnter={() => setOpenStudentAuth(true)}
//                         onMouseLeave={() => setOpenStudentAuth(false)}
//                     >
//                         <div className="auth-entity">Student</div>
//                         {openStudentAuth && (
//                             <div className="auth-type-container">
//                                 <NavLink to={"/auth/student/register"}>
//                                     <div className="auth-type">Register</div>
//                                 </NavLink>
//                                 <NavLink to={"/auth/student/login"}>
//                                     <div className="auth-type">Log In</div>
//                                 </NavLink>
//                             </div>
//                         )}
//                     </div>
//                     <div
//                         className="relative"
//                         onMouseEnter={() => setOpenInstituteAuth(true)}
//                         onMouseLeave={() => setOpenInstituteAuth(false)}
//                     >
//                         <div className="auth-entity">Academic Institute</div>
//                         {openInstituteAuth && (
//                             <div className="auth-type-container">
//                                 <NavLink to={"/auth/institute/register"}>
//                                     <div className="auth-type">Register</div>
//                                 </NavLink>

//                                 <NavLink to={"/auth/institute/login"}>
//                                     <div className="auth-type">Log In</div>
//                                 </NavLink>
//                             </div>
//                         )}
//                     </div>
//                     <div
//                         className="relative"
//                         onMouseEnter={() => setOpenOrganizationAuth(true)}
//                         onMouseLeave={() => setOpenOrganizationAuth(false)}
//                     >
//                         <div className="auth-entity">Organization</div>
//                         {openOrganizationAuth && (
//                             <div className="auth-type-container">
//                                 <NavLink to={"/auth/organization/register"}>
//                                     <div className="auth-type">Register</div>
//                                 </NavLink>
//                                 <NavLink to={"/auth/organization/login"}>
//                                     <div className="auth-type">Log In</div>
//                                 </NavLink>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Auth;

import { useState } from "react";

const Auth = () => {
    const [openStudentAuth, setOpenStudentAuth] = useState(false);
    const [openInstituteAuth, setOpenInstituteAuth] = useState(false);
    const [openOrganizationAuth, setOpenOrganizationAuth] = useState(false);

    return (
        <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-start justify-center px-4">
            <div className="w-full max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Choose Your Role
                    </h1>
                    <p className="text-gray-300">
                        Select how you'd like to access AcadVault
                    </p>
                </div>

                {/* Auth Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Student */}
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenStudentAuth(true)}
                        onMouseLeave={() => setOpenStudentAuth(false)}
                    >
                        <div className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-center text-white font-semibold hover:bg-white/15 transition-all duration-300 cursor-pointer">
                            <div className="text-2xl mb-2">🎓</div>
                            <div className="text-xl">Student</div>
                        </div>

                        {openStudentAuth && (
                            <div className="absolute top-full left-0 right-0 bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-xl z-10">
                                <a
                                    href="/auth/student/register"
                                    className="block"
                                >
                                    <div className="px-6 py-3 hover:bg-white/10 transition-colors text-white">
                                        Register
                                    </div>
                                </a>
                                <a href="/auth/student/login" className="block">
                                    <div className="px-6 py-3 hover:bg-white/10 transition-colors text-white border-t border-white/10">
                                        Log In
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Academic Institute */}
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenInstituteAuth(true)}
                        onMouseLeave={() => setOpenInstituteAuth(false)}
                    >
                        <div className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-center text-white font-semibold hover:bg-white/15 transition-all duration-300 cursor-pointer">
                            <div className="text-2xl mb-2">🏫</div>
                            <div className="text-xl">Academic Institute</div>
                        </div>

                        {openInstituteAuth && (
                            <div className="absolute top-full left-0 right-0 bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-xl z-10">
                                <a
                                    href="/auth/institute/register"
                                    className="block"
                                >
                                    <div className="px-6 py-3 hover:bg-white/10 transition-colors text-white">
                                        Register
                                    </div>
                                </a>
                                <a
                                    href="/auth/institute/login"
                                    className="block"
                                >
                                    <div className="px-6 py-3 hover:bg-white/10 transition-colors text-white border-t border-white/10">
                                        Log In
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Organization */}
                    <div
                        className="relative"
                        onMouseEnter={() => setOpenOrganizationAuth(true)}
                        onMouseLeave={() => setOpenOrganizationAuth(false)}
                    >
                        <div className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-center text-white font-semibold hover:bg-white/15 transition-all duration-300 cursor-pointer">
                            <div className="text-2xl mb-2">🏢</div>
                            <div className="text-xl">Organization</div>
                        </div>

                        {openOrganizationAuth && (
                            <div className="absolute top-full left-0 right-0 bg-white/15 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-xl z-10">
                                <a
                                    href="/auth/organization/register"
                                    className="block"
                                >
                                    <div className="px-6 py-3 hover:bg-white/10 transition-colors text-white">
                                        Register
                                    </div>
                                </a>
                                <a
                                    href="/auth/organization/login"
                                    className="block"
                                >
                                    <div className="px-6 py-3 hover:bg-white/10 transition-colors text-white border-t border-white/10">
                                        Log In
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
