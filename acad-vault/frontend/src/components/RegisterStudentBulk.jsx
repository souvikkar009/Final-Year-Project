import axios from "axios";
import React, { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useOutletContext } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;

const RegisterStudentBulk = () => {
    const institute = useOutletContext();

    const [file, setFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleBtnClick = () => {
        fileInputRef.current.click();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles && droppedFiles.length > 0) {
            setFile(droppedFiles[0]);
        }
    };

    const handleFileUpload = async () => {
        if (!file) return alert("No file selected");

        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(
                `/api/institute/${institute.institute_level}/register-bulk`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            alert(response.data.message);
            setFile(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = null;
            }
        } catch (error) {
            console.error("Upload error:", error);
        } finally {
            setIsUploading(false);
        }
    };

    const removeFile = () => {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    return (
        <div className="my-12 w-full max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600/50 shadow-2xl rounded-2xl p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        Register Student In Bulk
                    </h2>
                    <p className="text-slate-400 text-sm">
                        Upload your student data file in JSON format
                    </p>
                </div>

                {/* File Upload Area */}
                <div
                    className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 cursor-pointer ${
                        isDragOver
                            ? "border-teal-400 bg-teal-400/10 scale-102"
                            : file
                            ? "border-emerald-400 bg-emerald-400/5"
                            : "border-slate-600 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-800/50"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleBtnClick}
                >
                    <input
                        id="file-uploader"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".csv,.xlsx,.xls, .json"
                        className="hidden"
                    />

                    {!file ? (
                        <div className="text-center">
                            <div className="mb-4">
                                <svg
                                    className="w-16 h-16 text-slate-400 mx-auto"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {isDragOver
                                    ? "Drop your file here"
                                    : "Choose file or drag & drop"}
                            </h3>
                            <p className="text-slate-400 text-sm mb-4">
                                JSON files up to 10MB
                            </p>
                            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-medium rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Browse Files
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <div className="mb-4">
                                <svg
                                    className="w-16 h-16 text-emerald-400 mx-auto"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                                File Selected Successfully
                            </h3>
                            <p className="text-slate-300 text-sm">
                                Click to choose a different file
                            </p>
                        </div>
                    )}
                </div>

                {/* Selected File Info */}
                {file && (
                    <div className="mt-6 bg-slate-800/50 border border-slate-600 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white text-lg">
                                        {file.name}
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        {formatFileSize(file.size)}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile();
                                }}
                                className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200"
                            >
                                <IoCloseSharp className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Upload Button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleFileUpload}
                        disabled={!file || isUploading}
                        className={`relative px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                            !file || isUploading
                                ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                                : "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
                        }`}
                    >
                        {isUploading ? (
                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-5 h-5 animate-spin"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                </svg>
                                Uploading...
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
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
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 12l3 3m0 0l3-3m0 0V9"
                                    />
                                </svg>
                                Upload Data
                            </div>
                        )}
                    </button>
                </div>

                {/* Help text */}
                <div className="mt-6 text-center">
                    <p className="text-slate-500 text-xs">
                        Supported formats: JSON • Maximum file size: 10MB
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterStudentBulk;
