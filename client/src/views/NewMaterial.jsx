    import React, { useState, useEffect, useRef } from "react";
    import Navbar from "../components/Navbar";
    import Input2 from "../components/Input2";
    import Button from "../components/Button";
    import axios from "axios";
    import toast, { Toaster } from "react-hot-toast";
    import { getUserJwtToken } from "../utils";
    import { useNavigate } from "react-router";

    import {
    upload,
    ImageKitAbortError,
    ImageKitInvalidRequestError,
    ImageKitUploadNetworkError,
    ImageKitServerError,
    } from "@imagekit/react";
import Footer from "../components/Footer";

    // 🔐 AUTH
    const authenticator = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth`);
    return res.json();
    };

    function NewMaterial() {
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const [material, setMaterial] = useState({
        title: "",
        description: "",
        type: "PYQ",
        department: "",
        semester: "",
        subject: "",
        year: "",
        examType: "",
        size: "",
        fileUrl: "",
    });

    // 🔒 LOGIN CHECK
    useEffect(() => {
        if (!getUserJwtToken()) {
        toast.error("Please login first!");
        navigate("/login");
        }
    }, []);

    // 📤 UPLOAD FILE
    const handleUpload = async () => {
        const file = fileInputRef.current.files[0];

        if (!file) {
        toast.error("Select file first");
        return;
        }

        try {
        const { signature, expire, token, publicKey } =
            await authenticator();

        const res = await upload({
            expire,
            token,
            signature,
            publicKey,
            file,
            fileName: file.name,
            useUniqueFileName: true,
            folder: "/materials",
            onProgress: (e) =>
            setProgress((e.loaded / e.total) * 100),
        });

        setMaterial((prev) => ({
            ...prev,
            fileUrl: res.url,
            size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        }));

        toast.success("File uploaded ✅");
        setProgress(0);
        } catch (err) {
        toast.error("Upload failed ❌");
        }
    };

    // 🚀 SAVE
    const addMaterial = async () => {
    if (!material.title || !material.subject || !material.fileUrl) {
        toast.error("Fill all required fields & upload file");
        return;
    }

    try {
        const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/materials`,
        material,
        {
            headers: {
            Authorization: `Bearer ${getUserJwtToken()}`,
            },
        }
        );

        console.log(res.data);

        if (res.data.success) {
        toast.success("Material added 🎉");
        navigate("/StudyMaterial");
        } else {
        toast.error(res.data.message);
        }
    } catch (err) {
        console.log(err.response?.data || err.message);
        toast.error(err.response?.data?.message || "Error saving material");
    }
    };

    return (
        <>
        <Navbar />

        

        <div className="min-h-screen bg-[#F8FAFF]px-4">
            <div>
            <h1 className="text-4xl font-extrabold text-center mt-6 text-blue-500">
            Upload Study Material 
            </h1>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-8 mt-8">

            {/* GRID FORM */}
            <div className="grid md:grid-cols-2 gap-4 ">

                <Input2
                type="text"
                placeholder="Title"
                onChange={(e) =>
                    setMaterial({ ...material, title: e.target.value })
                }
                />

                <Input2
                type="text"
                placeholder="Subject"
                onChange={(e) =>
                    setMaterial({ ...material, subject: e.target.value })
                }
                />

                <Input2
                type="text"
                placeholder="Department (CS, ECE...)"
                onChange={(e) =>
                    setMaterial({
                    ...material,
                    department: e.target.value,
                    })
                }
                />

                <Input2
                type="text"
                placeholder="Semester (Sem 3, Sem 4)"
                onChange={(e) =>
                    setMaterial({
                    ...material,
                    semester: e.target.value,
                    })
                }
                />

                <Input2
                type="text"
                placeholder="Year"
                onChange={(e) =>
                    setMaterial({ ...material, year: e.target.value })
                }
                />

                <Input2
                type="text"
                placeholder="Exam Type (Mid/End)"
                onChange={(e) =>
                    setMaterial({
                    ...material,
                    examType: e.target.value,
                    })
                }
                />
            </div>

            {/* DESCRIPTION */}
            <textarea
                placeholder="Description"
                className="w-full border rounded-xl p-3 mt-4 text-sm"
                onChange={(e) =>
                setMaterial({
                    ...material,
                    description: e.target.value,
                })
                }
            />

            {/* TYPE */}
            <select
                className="w-full border rounded-xl p-2 mt-4"
                onChange={(e) =>
                setMaterial({ ...material, type: e.target.value })
                }
            >
                <option value="PYQ">PYQ</option>
                <option value="Notes">Notes</option>
            </select>

            {/* FILE */}
            <div className="mt-4">
                <input
                type="file"
                ref={fileInputRef}
                accept=".pdf,.doc,.docx,image/*"
                className="border p-2 rounded w-full"
                />
            </div>

            {/* UPLOAD BUTTON */}
            <div className="mt-4 flex gap-4">
                <Button title="Upload File" onClick={handleUpload} />
                <Button title="Save Material" onClick={addMaterial} />
            </div>

            {/* PROGRESS */}
            {progress > 0 && (
                <p className="mt-2 text-sm text-gray-500">
                Uploading: {progress.toFixed(0)}%
                </p>
            )}
            </div>

            </div>
            <Toaster />
            <Footer />

        </div>
        </>
    );
    }

    export default NewMaterial;