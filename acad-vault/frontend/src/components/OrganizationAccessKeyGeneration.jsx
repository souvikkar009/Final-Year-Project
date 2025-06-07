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
        // console.log(generalInfoDataPointValues);
        // console.log(generalInfoDataPoints);
        // console.log(secondaryDataPoints);
        // console.log(secondaryDataPointValues);
        // console.log(higherSecondaryDataPoints);
        // console.log(higherSecondaryDataPointValues);
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
        <div className="flex items-center justify-center mt-16">
            <div className="w-full max-w-lg p-8 shadow-lg shadow-slate-400 border border-slate-400 rounded-lg">
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
            <div
                className={`w-full h-screen fixed left-0 top-0 bg-slate-900 ${
                    accessKeyRes ? "block" : "hidden"
                }`}
            ></div>
            {accessKeyRes && (
                <div className="fixed w-3/5 z-10 bg-slate-900 border border-gray-400 shadow-lg max-w-lg rounded p-8">
                    <IoCloseSharp
                        className="absolute right-4 top-4 text-2xl text-white hover:text-red-700 cursor-pointer"
                        title="Close"
                        onClick={() => {
                            window.location.reload();
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
            )}
        </div>
    );
};

export default OrganizationAccessKeyGeneration;
