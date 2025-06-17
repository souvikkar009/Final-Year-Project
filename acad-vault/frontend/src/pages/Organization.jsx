import { useOutletContext } from "react-router-dom";

const Organization = () => {
    const organization = useOutletContext();
    return (
        <div className="my-12 w-9/10 mx-auto shadow-lg border border-slate-400 shadow-slate-400 p-8 rounded-lg text-white">
            {organization && (
                <div>
                    <div className="text-4xl text-center text-teal-400 font-bold">
                        {organization.organization_name}
                    </div>
                    <div
                        id="details-org-name"
                        className="mt-8 flex flex-col justify-center gap-2"
                    >
                        <div className="data-title">Organization Name</div>
                        <div className="data-value grow">
                            {organization.organization_name}
                        </div>
                    </div>
                    <div className="flex items-center gap-8 mt-4">
                        <div
                            id="details-org-email"
                            className="data-container w-1/2"
                        >
                            <div className="data-title">Organization Email</div>
                            <div className="data-value">
                                {organization.email}
                            </div>
                        </div>
                        <div
                            id="details-org-id"
                            className="data-container w-1/2"
                        >
                            <div className="data-title">Organization Id</div>
                            <div className="data-value">
                                {organization.org_id}
                            </div>
                        </div>
                    </div>
                    <div className="data-title mt-6 text-center">
                        Access Keys
                    </div>
                    <div className="mt-4">
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
                                    <div key={key} className="mt-4">
                                        <span className="font-semibold text-lg">{key}</span> :{" "}
                                        <span className="italic text-slate-300">{access_key_data}</span>
                                    </div>
                                );
                            }
                            return items;
                        })()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Organization;
