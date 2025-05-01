import React, { useState } from "react";
import { studentGeneralInformation } from "../data/dataMapping";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const OrganizationAccessKeyGeneration = () => {
  const [generalInfoDataPoints, setGeneralInfoDataPoints] = useState([]); // for showing in client side

  const [generalInfoDataPointValues, setGeneralInfoDataPointValues] = useState(
    []
  ); // for backend purpose

  const [accessKeyRes, setAccessKeyRes] = useState("");

  const [copied, setCopied] = useState(false);
  const handleGeneralInfoSelect = (e) => {
    const selectedValue = studentGeneralInformation[e.target.value];

    if (selectedValue && !generalInfoDataPoints.includes(selectedValue)) {
      setGeneralInfoDataPoints([...generalInfoDataPoints, selectedValue]);
      setGeneralInfoDataPointValues([
        ...generalInfoDataPointValues,
        e.target.value,
      ]);
    }
    e.target.value = "";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(generalInfoDataPointValues);
    await axios
      .post(`/api/organization/create-access-key`, {
        accessing_data: generalInfoDataPointValues,
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
    <div className="flex items-center justify-center bg-white mt-16">
      <div className="w-full max-w-lg p-8 shadow-lg border border-gray-400 rounded-lg">
        <div className="text-2xl font-bold text-center text-blue-700 mb-6">
          Generate Access Key
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 font-semibold">
            <label htmlFor="general_info" className="font-semibold text-lg">
              Select General Information Data Points:
            </label>
            <select
              id="general_info"
              className="py-2 px-4 border border-gray-400 rounded focus:outline-none"
              onChange={handleGeneralInfoSelect}
            >
              <option value="">--Select Data Points--</option>
              {(() => {
                const items = [];
                for (const key in studentGeneralInformation) {
                  if (
                    generalInfoDataPoints.length > 0 &&
                    generalInfoDataPoints.includes(
                      studentGeneralInformation[key]
                    )
                  ) {
                    continue;
                  }
                  items.push(
                    <option value={key} key={key}>
                      {studentGeneralInformation[key]}
                    </option>
                  );
                }
                return items;
              })()}
            </select>
            {generalInfoDataPoints.length > 0 && (
              <div className="bg-blue-100 p-2 rounded flex gap-2 flex-wrap">
                {generalInfoDataPoints.map((items, key) => {
                  return (
                    <div key={key} className="py-1 px-2 bg-white rounded">
                      {items}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-bold py-2 rounded mt-8 cursor-pointer"
          >
            Generate Access Key
          </button>
        </form>
      </div>
      <div
        className={`w-full h-screen fixed left-0 top-0 bg-gray-400 opacity-50 ${
          accessKeyRes ? "block" : "hidden"
        }`}
      ></div>
      {accessKeyRes && (
        <div className="fixed w-3/5 bg-white z-10 opacity-100 border border-gray-400 shadow-lg max-w-lg rounded p-8">
          <IoCloseSharp
            className="absolute right-4 top-4 text-2xl hover:text-red-700 cursor-pointer"
            title="Close"
            onClick={() => {
              window.location.reload();
            }}
          />
          <div className="text-center text-xl mt-4">{accessKeyRes.message}</div>
          <div className=" text-center my-4 font-bold">
            Copy the secret code
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className={`bg-gray-100 py-2 px-4 rounded`}>
              <div className={`${copied && "bg-blue-700 text-white"}`}>
                {accessKeyRes.access_key}
              </div>
            </div>
            <FaRegCopy
              className="text-2xl cursor-pointer"
              onClick={async () => {
                await window.navigator.clipboard.writeText(
                  accessKeyRes.access_key
                );
                setCopied(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationAccessKeyGeneration;
