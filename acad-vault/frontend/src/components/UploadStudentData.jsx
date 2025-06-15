import axios from "axios";
import React, { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useOutletContext } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const UploadStudentData = () => {
    const institute = useOutletContext();

    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const [uploadStatus, setUploadStatus] = useState("");

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleBtnClick = () => {
        fileInputRef.current.click();
    };

    const handleFileUpload = async () => {
        if (!file) return alert("No file selected");

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(
                `/api/institute/${institute.institute_level}/upload-data`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setUploadStatus("✅ Upload successful!");
            console.log(response.data);
            setFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = null;
            }
        } catch (error) {
            console.error("Upload error:", error);
            setUploadStatus("❌ Upload failed.");
        }
    };

    return (
        <div className="my-12 w-9/10 mx-auto shadow-lg border border-slate-400 shadow-slate-400 p-8 rounded-lg text-white">
            <div className="text-teal-400 text-2xl font-semibold text-center">
                Upload Student Bulk Data
            </div>
            <div className="mt-12 flex items-center justify-center">
                <button className="my-file-upload" onClick={handleBtnClick}>
                    {file ? "Choose Other" : "Choose File"}
                </button>
                <input
                    id="file-uploader"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </div>
            {file && (
                <div className="flex gap-2 items-center mt-4">
                    <span className="font-semibold text-xl">
                        Selected File:
                    </span>
                    <span className="italic font-light">{file.name}</span>
                    <span
                        onClick={() => {
                            setFile(null);
                            if (fileInputRef.current) {
                                fileInputRef.current.value = null;
                            }
                        }}
                    >
                        <IoCloseSharp className="text-xl text-red-500 cursor-pointer" />
                    </span>
                </div>
            )}
            <div className="flex items-center justify-center mt-8">
                <button
                    onClick={handleFileUpload}
                    className="font-semibold text-xl bg-teal-600 rounded-xl px-16 py-2 cursor-pointer hover:bg-teal-700"
                >
                    Upload Data
                </button>
            </div>
        </div>
    );
};

export default UploadStudentData;
