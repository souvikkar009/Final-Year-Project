import React, { useState } from "react";
import {
    studentGeneralInformationMap,
    studentHigherSecondaryMap,
    studentSecondaryMap,
} from "../data/dataMapping";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const OrganizationAccessKeyGeneration = () => {
    const [generalInfoDataPoints, setGeneralInfoDataPoints] = useState([]);
    const [generalInfoDataPointValues, setGeneralInfoDataPointValues] =
        useState([]);

    const [secondaryDataPoints, setSecondaryDataPoints] = useState([]);
    const [secondaryDataPointValues, setSecondaryDataPointValues] = useState(
        []
    );

    const [higherSecondaryDataPoints, setHigherSecondaryDataPoints] = useState(
        []
    );
    const [higherSecondaryDataPointValues, setHigherSecondaryDataPointValues] =
        useState([]);

    const [accessKeyRes, setAccessKeyRes] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleGeneralInfoSelect = (e) => {
        const selectedValue = studentGeneralInformationMap[e.target.value];

        if (selectedValue && !generalInfoDataPoints.includes(selectedValue)) {
            setGeneralInfoDataPoints([...generalInfoDataPoints, selectedValue]);
            setGeneralInfoDataPointValues([
                ...generalInfoDataPointValues,
                e.target.value,
            ]);
        }
        e.target.value = "";
    };
    const handleSecondarySelect = (e) => {
        const selectedValue = studentSecondaryMap[e.target.value];

        if (selectedValue && !secondaryDataPoints.includes(selectedValue)) {
            setSecondaryDataPoints([...secondaryDataPoints, selectedValue]);
            setSecondaryDataPointValues([
                ...secondaryDataPointValues,
                e.target.value,
            ]);
        }
        e.target.value = "";
    };
    const handleHigherSecondarySelect = (e) => {
        const selectedValue = studentHigherSecondaryMap[e.target.value];

        if (
            selectedValue &&
            !higherSecondaryDataPoints.includes(selectedValue)
        ) {
            setHigherSecondaryDataPoints([
                ...higherSecondaryDataPoints,
                selectedValue,
            ]);
            setHigherSecondaryDataPointValues([
                ...higherSecondaryDataPointValues,
                e.target.value,
            ]);
        }
        e.target.value = "";
    };
    const handleGeneralInfoDeselect = (item) => {
        console.log(item);

        setGeneralInfoDataPoints(
            generalInfoDataPoints.filter((info) => info !== item)
        );
        setGeneralInfoDataPointValues(
            generalInfoDataPointValues.filter(
                (infoValue) =>
                    infoValue !==
                    Object.keys(studentGeneralInformationMap).filter(
                        (info) => studentGeneralInformationMap[info] === item
                    )[0]
            )
        );
    };
    const handleSecondaryDeselect = (item) => {
        console.log(item);

        setSecondaryDataPoints(
            secondaryDataPoints.filter((info) => info !== item)
        );
        setSecondaryDataPointValues(
            secondaryDataPointValues.filter(
                (infoValue) =>
                    infoValue !==
                    Object.keys(studentSecondaryMap).filter(
                        (info) => studentSecondaryMap[info] === item
                    )[0]
            )
        );
    };
    const handleHigherSecondaryDeselect = (item) => {
        console.log(item);

        setHigherSecondaryDataPoints(
            higherSecondaryDataPoints.filter((info) => info !== item)
        );
        setHigherSecondaryDataPointValues(
            higherSecondaryDataPointValues.filter(
                (infoValue) =>
                    infoValue !==
                    Object.keys(studentHigherSecondaryMap).filter(
                        (info) => studentHigherSecondaryMap[info] === item
                    )[0]
            )
        );
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const allDataPoints = [
            ...generalInfoDataPointValues,
            ...secondaryDataPointValues,
            ...higherSecondaryDataPointValues,
        ];
        if (allDataPoints <= 0) {
            alert("Select Data Points");
            return;
        }

        console.log(allDataPoints);

        // setAccessKeyRes("lnjvgu9675fc");

        await axios
            .post(`/api/organization/create-access-key`, {
                accessing_data: allDataPoints,
            })
            .then((response) => {
                console.log(response.data);
                setAccessKeyRes(response.data);
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
            <div className="w-3/4 p-8 shadow-lg shadow-slate-400 border border-slate-400 rounded-lg">
                <div className="text-2xl font-bold text-center text-teal-400 mb-6">
                    Generate Access Key
                </div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 font-semibold">
                        <label
                            htmlFor="general_info"
                            className="font-semibold text-lg text-white"
                        >
                            General Information Data Points:
                        </label>
                        <select
                            id="general_info"
                            className="py-2 px-4 border cursor-pointer border-slate-400 rounded focus:outline-none text-white bg-slate-900"
                            onChange={handleGeneralInfoSelect}
                        >
                            <option value="">--Select Data Points--</option>
                            {(() => {
                                const items = [];
                                for (const key in studentGeneralInformationMap) {
                                    if (
                                        generalInfoDataPoints.length > 0 &&
                                        generalInfoDataPoints.includes(
                                            studentGeneralInformationMap[key]
                                        )
                                    ) {
                                        continue;
                                    }
                                    items.push(
                                        <option value={key} key={key}>
                                            {studentGeneralInformationMap[key]}
                                        </option>
                                    );
                                }
                                return items;
                            })()}
                        </select>
                        {generalInfoDataPoints.length > 0 && (
                            <div className="p-2 flex gap-2 flex-wrap">
                                {generalInfoDataPoints.map((item, key) => {
                                    return (
                                        <div
                                            key={key}
                                            className="py-1 px-2 bg-slate-700 text-slate-300 font-semibold rounded flex gap-1 items-center"
                                        >
                                            <span>{item}</span>
                                            <IoCloseSharp
                                                className="cursor-pointer text-lg text-red-400"
                                                onClick={() =>
                                                    handleGeneralInfoDeselect(
                                                        item
                                                    )
                                                }
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4 font-semibold mt-4">
                        <label
                            htmlFor="secondary_info"
                            className="font-semibold text-lg text-white"
                        >
                            Secondary Examination Data Points:
                        </label>
                        <select
                            id="secondary_info"
                            className="py-2 px-4 border cursor-pointer border-slate-400 rounded focus:outline-none text-white bg-slate-900"
                            onChange={handleSecondarySelect}
                        >
                            <option value="">--Select Data Points--</option>
                            {(() => {
                                const items = [];
                                for (const key in studentSecondaryMap) {
                                    if (
                                        secondaryDataPoints.length > 0 &&
                                        secondaryDataPoints.includes(
                                            studentSecondaryMap[key]
                                        )
                                    ) {
                                        continue;
                                    }
                                    items.push(
                                        <option value={key} key={key}>
                                            {studentSecondaryMap[key]}
                                        </option>
                                    );
                                }
                                return items;
                            })()}
                        </select>
                        {secondaryDataPoints.length > 0 && (
                            <div className="p-2 flex gap-2 flex-wrap">
                                {secondaryDataPoints.map((item, key) => {
                                    return (
                                        <div
                                            key={key}
                                            className="py-1 px-2 bg-slate-700 text-slate-300 font-semibold rounded flex gap-1 items-center"
                                        >
                                            <span>{item}</span>
                                            <IoCloseSharp
                                                className="cursor-pointer text-lg text-red-400"
                                                onClick={() =>
                                                    handleSecondaryDeselect(
                                                        item
                                                    )
                                                }
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4 font-semibold mt-4">
                        <label
                            htmlFor="higher_secondary_info"
                            className="font-semibold text-lg text-white"
                        >
                            Higher Secondary Examination Data Points:
                        </label>
                        <select
                            id="higher_secondary_info"
                            className="py-2 px-4 border cursor-pointer border-slate-400 rounded focus:outline-none text-white bg-slate-900"
                            onChange={handleHigherSecondarySelect}
                        >
                            <option value="">--Select Data Points--</option>
                            {(() => {
                                const items = [];
                                for (const key in studentHigherSecondaryMap) {
                                    if (
                                        higherSecondaryDataPoints.length > 0 &&
                                        higherSecondaryDataPoints.includes(
                                            studentHigherSecondaryMap[key]
                                        )
                                    ) {
                                        continue;
                                    }
                                    items.push(
                                        <option value={key} key={key}>
                                            {studentHigherSecondaryMap[key]}
                                        </option>
                                    );
                                }
                                return items;
                            })()}
                        </select>
                        {higherSecondaryDataPoints.length > 0 && (
                            <div className="p-2 flex gap-2 flex-wrap">
                                {higherSecondaryDataPoints.map((item, key) => {
                                    return (
                                        <div
                                            key={key}
                                            className="py-1 px-2 bg-slate-700 text-slate-300 font-semibold rounded flex gap-1 items-center"
                                        >
                                            <span>{item}</span>
                                            <IoCloseSharp
                                                className="cursor-pointer text-lg text-red-400"
                                                onClick={() =>
                                                    handleHigherSecondaryDeselect(
                                                        item
                                                    )
                                                }
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-700 text-white font-bold py-2 rounded mt-8 cursor-pointer"
                    >
                        Generate Access Key
                    </button>
                </form>
            </div>
            {/* <div
                className={`w-full h-screen fixed left-0 top-0 bg-slate-900 ${
                    accessKeyRes ? "block" : "hidden"
                }`}
            ></div>
            {accessKeyRes && (
                <div className="fixed right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 tran w-3/5 z-10 bg-slate-900 border border-gray-400 shadow-lg max-w-lg rounded p-8">
                    <IoCloseSharp
                        className="absolute right-4 top-4 text-2xl text-white hover:text-red-700 cursor-pointer"
                        title="Close"
                        onClick={() => {
                            window.location.replace("/organization");
                        }}
                    />
                    <div className="text-center text-xl mt-4 text-teal-400 font-semibold">
                        {accessKeyRes.message}
                    </div>
                    <div className=" text-center my-4 font-bold text-white">
                        Copy the secret code
                    </div>
                    <div className="flex items-center gap-4">
                        <div
                            className={`bg-slate-700 py-2 px-4 rounded text-slate-300 font-semibold grow`}
                        >
                            <span
                                className={`${
                                    copied && "bg-blue-700 text-white"
                                }`}
                            >
                                {accessKeyRes.access_key}
                            </span>
                        </div>
                        <FaRegCopy
                            className="text-2xl text-white cursor-pointer"
                            onClick={async () => {
                                await window.navigator.clipboard.writeText(
                                    accessKeyRes.access_key
                                );
                                setCopied(true);
                                setTimeout(() => {
                                    setCopied(false);
                                }, 300);
                            }}
                        />
                    </div>
                </div>
            )} */}

            {/* Backdrop with blur effect */}
            <div
                className={`w-full h-screen fixed left-0 top-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
                    accessKeyRes ? "block" : "hidden"
                }`}
            ></div>

            {accessKeyRes && (
                <div className="fixed right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 w-11/12 max-w-md z-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600 shadow-2xl rounded-2xl p-6 animate-in fade-in-0 zoom-in-95 duration-300">
                    {/* Close button */}
                    <IoCloseSharp
                        className="absolute right-4 top-4 text-xl text-slate-400 hover:text-red-500 hover:rotate-90 cursor-pointer transition-all duration-200"
                        title="Close"
                        onClick={() => {
                            window.location.replace("/organization");
                        }}
                    />

                    {/* Success icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Title */}
                    <div className="text-center text-2xl font-bold text-white mb-2">
                        Access Key Generated
                    </div>

                    {/* Message */}
                    <div className="text-center text-lg text-teal-400 font-medium mb-6">
                        {accessKeyRes.message}
                    </div>

                    {/* Instructions */}
                    <div className="text-center text-sm text-slate-300 mb-4 font-medium">
                        Copy your secret access code below
                    </div>

                    {/* Access key display and copy */}
                    <div className="relative">
                        <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-4 mb-4">
                            <div className="flex items-center justify-between gap-3">
                                <div className="font-mono text-sm text-slate-200 break-all flex-1 bg-slate-800/50 px-3 py-2 rounded-lg">
                                    <span
                                        className={`transition-all duration-200 ${
                                            copied
                                                ? "text-emerald-400"
                                                : "text-slate-200"
                                        }`}
                                    >
                                        {accessKeyRes.access_key}
                                    </span>
                                </div>

                                <button
                                    className={`p-2 rounded-lg transition-all duration-200 ${
                                        copied
                                            ? "bg-emerald-600 text-white"
                                            : "bg-slate-600 text-slate-300 hover:bg-slate-500"
                                    }`}
                                    onClick={async () => {
                                        await window.navigator.clipboard.writeText(
                                            accessKeyRes.access_key
                                        );
                                        setCopied(true);
                                        setTimeout(() => {
                                            setCopied(false);
                                        }, 300);
                                    }}
                                >
                                    {copied ? (
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    ) : (
                                        <FaRegCopy className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Copy feedback */}
                        <div
                            className={`text-center text-sm font-medium transition-all duration-200 ${
                                copied
                                    ? "text-emerald-400 opacity-100"
                                    : "text-transparent opacity-0"
                            }`}
                        >
                            ✓ Copied to clipboard!
                        </div>
                    </div>

                    {/* Security notice */}
                    <div className="mt-6 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                        <div className="flex items-start gap-2">
                            <svg
                                className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                />
                            </svg>
                            <p className="text-xs text-amber-200">
                                Keep this access key for securely getting
                                academic data
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrganizationAccessKeyGeneration;
