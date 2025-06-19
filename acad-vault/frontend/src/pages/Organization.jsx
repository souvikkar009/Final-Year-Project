import { useOutletContext } from "react-router-dom";

// const Organization = () => {
//     const organization = useOutletContext();
//     return (
//         <div className="my-12 w-9/10 mx-auto shadow-lg border border-slate-400 shadow-slate-400 p-8 rounded-lg text-white">
//             {organization && (
//                 <div>
//                     <div className="text-4xl text-center text-teal-400 font-bold">
//                         {organization.organization_name}
//                     </div>
//                     <div
//                         id="details-org-name"
//                         className="mt-8 flex flex-col justify-center gap-2"
//                     >
//                         <div className="data-title">Organization Name</div>
//                         <div className="data-value grow">
//                             {organization.organization_name}
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-8 mt-4">
//                         <div
//                             id="details-org-email"
//                             className="data-container w-1/2"
//                         >
//                             <div className="data-title">Organization Email</div>
//                             <div className="data-value">
//                                 {organization.email}
//                             </div>
//                         </div>
//                         <div
//                             id="details-org-id"
//                             className="data-container w-1/2"
//                         >
//                             <div className="data-title">Organization Id</div>
//                             <div className="data-value">
//                                 {organization.org_id}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="data-title mt-6 text-center">
//                         Access Keys
//                     </div>
//                     <div className="mt-4">
//                         {(() => {
//                             const items = [];
//                             const orgAccessKeys = organization.access_keys;
//                             for (const key in orgAccessKeys) {
//                                 if (key.length < 1) {
//                                     continue;
//                                 }
//                                 let access_key_data =
//                                     orgAccessKeys[key].join(", ");

//                                 items.push(
//                                     <div key={key} className="mt-4">
//                                         <span className="font-semibold text-lg">{key}</span> :{" "}
//                                         <span className="italic text-slate-300">{access_key_data}</span>
//                                     </div>
//                                 );
//                             }
//                             return items;
//                         })()}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

import { Building2, Mail, Hash, Key } from "lucide-react";

const Organization = () => {
    const organization = useOutletContext();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
            {organization && (
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-6">
                        <div className="flex items-center justify-center mb-4">
                            <Building2 className="w-12 h-12 text-purple-400 mr-4" />
                            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                {organization.organization_name}
                            </h1>
                        </div>
                    </div>

                    {/* Organization Details Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Organization Name Card */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center mb-3">
                                <Building2 className="w-5 h-5 text-purple-400 mr-2" />
                                <span className="text-purple-300 font-medium text-sm uppercase tracking-wider">
                                    Organization Name
                                </span>
                            </div>
                            <div className="text-white text-xl font-semibold">
                                {organization.organization_name}
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center mb-3">
                                <Mail className="w-5 h-5 text-blue-400 mr-2" />
                                <span className="text-blue-300 font-medium text-sm uppercase tracking-wider">
                                    Organization Email
                                </span>
                            </div>
                            <div className="text-white text-xl font-semibold">
                                {organization.email}
                            </div>
                        </div>

                        {/* Organization ID Card */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 md:col-span-2">
                            <div className="flex items-center mb-3">
                                <Hash className="w-5 h-5 text-green-400 mr-2" />
                                <span className="text-green-300 font-medium text-sm uppercase tracking-wider">
                                    Organization ID
                                </span>
                            </div>
                            <div className="text-white text-xl font-semibold font-mono">
                                {organization.org_id}
                            </div>
                        </div>
                    </div>

                    {/* Access Keys Section */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                        <div className="flex items-center justify-center mb-8">
                            <Key className="w-6 h-6 text-yellow-400 mr-3" />
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                                Access Keys
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {(() => {
                                const items = [];
                                const orgAccessKeys = organization.access_keys;
                                for (const key in orgAccessKeys) {
                                    if (key.length < 1) {
                                        continue;
                                    }
                                    let access_key_data =
                                        orgAccessKeys[key].join(", ");

                                    items.push(
                                        <div
                                            key={key}
                                            className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center mb-2">
                                                        <Key className="w-4 h-4 text-yellow-400 mr-2" />
                                                        <span className="font-bold text-lg text-white">
                                                            {key}
                                                        </span>
                                                    </div>
                                                    <div className="text-slate-300 font-mono text-sm bg-black/20 p-3 rounded border break-all">
                                                        {access_key_data}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                return items;
                            })()}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Organization;
