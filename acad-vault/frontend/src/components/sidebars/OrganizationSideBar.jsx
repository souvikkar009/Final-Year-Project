import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// const OrganizationSideBar = () => {
//     const pathname = useLocation().pathname;
//     return (
//         <aside className="flex flex-col">
//             {pathname !== "/organization" && (
//                 <NavLink to={"/organization"}>
//                     <div className="bg-slate-700 text-slate-300 mt-12 mx-8 py-2 rounded cursor-pointer font-semibold block text-center">
//                         Organization Page
//                     </div>
//                 </NavLink>
//             )}
//             {pathname !== "/organization/get-accesskey" && (
//                 <NavLink to={"/organization/get-accesskey"}>
//                     <div className="bg-slate-700 text-slate-300 mt-12 mx-8 py-2 rounded cursor-pointer font-semibold block text-center">
//                         Generate Access Key
//                     </div>
//                 </NavLink>
//             )}
//         </aside>
//     );
// };


import { Building2, KeyRound, ChevronRight } from 'lucide-react';

const OrganizationSideBar = () => {
    const pathname = useLocation().pathname;
    return (
        <aside className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700/50 shadow-2xl">
            <div className="p-6">
                <div className="flex items-center mb-8">
                    <Building2 className="w-8 h-8 text-purple-400 mr-3" />
                    <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Organization
                    </h2>
                </div>
                
                <div className="space-y-4">
                    {pathname !== "/organization" && (
                        <NavLink to={"/organization"} className="group">
                            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 rounded-xl p-4 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-500/30 transition-colors duration-300">
                                            <Building2 className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white text-sm">
                                                Organization Page
                                            </div>
                                            <div className="text-xs text-slate-400">
                                                View details
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </NavLink>
                    )}
                    
                    {pathname !== "/organization/get-accesskey" && (
                        <NavLink to={"/organization/get-accesskey"} className="group">
                            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 rounded-xl p-4 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors duration-300">
                                            <KeyRound className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white text-sm">
                                                Generate Access Key
                                            </div>
                                            <div className="text-xs text-slate-400">
                                                Create new keys
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </NavLink>
                    )}
                </div>
            </div>
            
            {/* Decorative bottom element */}
            <div className="mt-auto p-6">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                <div className="mt-4 text-center">
                    <div className="text-xs text-slate-500">
                        Organization Portal
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default OrganizationSideBar;
