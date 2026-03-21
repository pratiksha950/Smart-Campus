import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Input2 from "../components/Input2.jsx";
import MultiSelect from "../components/MultiSelect.jsx";
import Button from "../components/Button.jsx";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { getUserJwtToken } from "../utils.jsx";
import { useNavigate } from "react-router";
import PhotoViewer from "../components/PhotoViewer.jsx";
import img from "../assets/tour.png";

import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/react";

// 🔐 AUTH FUNCTION
const authenticator = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth`);
  const data = await res.json();
  return data;
};

function NewTour() {
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [newTour, setNewTour] = useState({
    title: "",
    Description: "",
    cities: [],
    startDate: "",
    endDate: "",
    photos: [],
  });

  // 🔒 LOGIN CHECK
  useEffect(() => {
    if (!getUserJwtToken()) {
      toast.error("Please login first!");
      navigate("/login");
    }
  }, []);

  // 📤 UPLOAD FUNCTION (FIXED)
  const handleUpload = async () => {
    const fileInput = fileInputRef.current;

    if (!fileInput || fileInput.files.length === 0) {
      toast.error("Select file first");
      return;
    }

    const file = fileInput.files[0];

    try {
      const { signature, expire, token, publicKey } =
        await authenticator();

      const uploadResponse = await upload({
        expire,
        token,
        signature,
        publicKey,
        file,
        fileName: file.name,

        // ✅ FIX FOR FILE BREAK ISSUE
        useUniqueFileName: true,
        folder: "/tours",
        isPrivateFile: false,

        onProgress: (e) => {
          setProgress((e.loaded / e.total) * 100);
        },
      });

      // ✅ SAFE STATE UPDATE
      setNewTour((prev) => ({
        ...prev,
        photos: [...prev.photos, uploadResponse.url],
      }));

      toast.success("Upload successful");

      setProgress(0);
      fileInput.value = "";
    } catch (error) {
      console.error(error);

      if (error instanceof ImageKitAbortError) {
        console.log("Aborted");
      } else if (error instanceof ImageKitInvalidRequestError) {
        console.log("Invalid");
      } else if (error instanceof ImageKitUploadNetworkError) {
        console.log("Network");
      } else if (error instanceof ImageKitServerError) {
        console.log("Server");
      }

      toast.error("Upload failed");
    }
  };

  // 🚀 ADD TOUR
  const addTour = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/tours`,
        newTour,
        {
          headers: {
            Authorization: `Bearer ${getUserJwtToken()}`,
          },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/dashboard");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Error saving tour");
    }
  };

  return (
    <>
      <Navbar />

      <div className="my-10 px-4">
        <h1 className="text-3xl font-bold text-center">
          Add New Tour
        </h1>

        <div className="flex justify-center mt-6">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-5xl grid md:grid-cols-2 gap-6">

            {/* LEFT IMAGE */}
            <img src={img} className="rounded-xl hidden md:block" />

            {/* FORM */}
            <div className="space-y-4">

              <Input2
                type="text"
                placeholder="Title"
                value={newTour.title}
                onChange={(e) =>
                  setNewTour({ ...newTour, title: e.target.value })
                }
              />

              <Input2
                type="text"
                placeholder="Description"
                value={newTour.Description}
                onChange={(e) =>
                  setNewTour({
                    ...newTour,
                    Description: e.target.value,
                  })
                }
              />

              <MultiSelect
                selectedItems={newTour.cities}
                placeholder="City"
                onAddItem={(val) =>
                  setNewTour({
                    ...newTour,
                    cities: [...newTour.cities, val],
                  })
                }
                onRemoveItem={(val) =>
                  setNewTour({
                    ...newTour,
                    cities: newTour.cities.filter((c) => c !== val),
                  })
                }
              />

              <div className="grid grid-cols-2 gap-2">
                <Input2
                  type="date"
                  value={newTour.startDate}
                  onChange={(e) =>
                    setNewTour({
                      ...newTour,
                      startDate: e.target.value,
                    })
                  }
                />
                <Input2
                  type="date"
                  value={newTour.endDate}
                  onChange={(e) =>
                    setNewTour({
                      ...newTour,
                      endDate: e.target.value,
                    })
                  }
                />
              </div>

              {/* 📸 PREVIEW */}
              <div className="flex gap-3 flex-wrap">
                {newTour.photos.map((file, i) => (
                  <div key={i}>
                    {file.match(/\.(jpeg|jpg|png|gif)$/) ? (
                      <PhotoViewer
                        imgUrl={file}
                        index={i}
                        showDelete
                        onDelete={(index) =>
                          setNewTour((prev) => ({
                            ...prev,
                            photos: prev.photos.filter(
                              (_, idx) => idx !== index
                            ),
                          }))
                        }
                      />
                    ) : (
                      <a
                        href={file}
                        target="_blank"
                        download
                        className="text-blue-600 underline"
                      >
                        Download File
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* 📤 FILE INPUT */}
              <input
                type="file"
                ref={fileInputRef}
                accept=".pdf,.doc,.docx,image/*"
                className="border p-2 rounded"
              />

              <Button title="Upload File" onClick={handleUpload} />

              {progress > 0 && (
                <p>Uploading {progress.toFixed(0)}%</p>
              )}

              <Button title="Add Tour" onClick={addTour} />
            </div>
          </div>
        </div>

        <Toaster />
      </div>
    </>
  );
}

export default NewTour;