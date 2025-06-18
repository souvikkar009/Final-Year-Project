import React from "react";
import { useOutletContext } from "react-router-dom";

const Institute = () => {
    const institute = useOutletContext();

    return (
        <div className="my-12 w-9/10 mx-auto shadow-lg border border-slate-400 shadow-slate-400 p-8 rounded-lg text-white">
            {/* Animated background elements */}
            {/* <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div> */}
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            {institute && (
                <div>
                    <div className="font-semibold text-2xl text-center text-teal-300">
                        {institute.institute_name}
                    </div>

                    <div
                        id="institute-id"
                        className="mt-4 flex flex-col justify-center gap-1.5"
                    >
                        <div className="data-title">Institute Id</div>
                        <div className="data-value grow">
                            {institute.institute_id}
                        </div>
                    </div>
                    <div
                        id="institute-name"
                        className="mt-4 flex flex-col justify-center gap-1.5"
                    >
                        <div className="data-title">Institute Name</div>
                        <div className="data-value grow">
                            {institute.institute_name}
                        </div>
                    </div>
                    <div
                        id="institute-general-details"
                        className="flex items-center gap-8 mt-4"
                    >
                        <div
                            id="institute-level"
                            className="data-container w-1/2"
                        >
                            <div className="data-title">Insitute Level</div>
                            <div className="data-value">
                                {institute.institute_level}
                            </div>
                        </div>
                        <div
                            id="institute-type"
                            className="data-container w-1/2"
                        >
                            <div className="data-title">Institute Type</div>
                            <div className="data-value">
                                {institute.institute_type}
                            </div>
                        </div>
                    </div>
                    {institute.institute_level === "higher_studies" && (
                        <div>
                            <div
                                id="institute-program-levels"
                                className="data-container w-full mt-4"
                            >
                                <div className="data-title">Program Levels</div>
                                <div className="flex items-center gap-2">
                                    {institute.program_levels?.map(
                                        (program_level, key) => (
                                            <div
                                                key={key}
                                                className="py-1 px-2 bg-slate-700 rounded font-bold text-slate-300"
                                            >
                                                {program_level}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div
                                id="institute-program-names"
                                className="data-container w-full mt-4"
                            >
                                <div className="data-title">Program Levels</div>
                                <div className="flex items-center gap-2">
                                    {institute.program_names?.map(
                                        (program_name, key) => (
                                            <div
                                                key={key}
                                                className="py-1 px-2 bg-slate-700 rounded font-bold text-slate-300"
                                            >
                                                {program_name}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Institute;
