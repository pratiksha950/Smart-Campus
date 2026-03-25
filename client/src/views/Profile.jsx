import { useState, useEffect, useRef } from "react";
import { getUserData } from "../utils";
import Navbar from "../components/Navbar"
import Input2 from "../components/Input2";
import Button from "../components/Button";
import axios from "axios";
import ProfileImg from "../assets/profileUpdate.png"
import { Link } from "react-router";
import Heading from "../components/Heading";
import Footer from "../components/Footer"
import { setPageTitle } from "../utils.jsx"
import SubHeading from "../components/SubHeading.jsx"


import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/react";

function Profile() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    whatsapp: "",
    address: "",
    city: "",
    pincode: "",
    country: "",
    photos: []
  });
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef();

  const authenticator = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth`);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      const { signature, expire, token, publicKey } = data;
      return { signature, expire, token, publicKey };
    } catch (error) {
      console.error("Authentication error:", error);
      throw new Error("Authentication request failed");
    }
  };

  const handleUpload = async () => {
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert("Please select a file to upload");
      return;
    }

    const file = fileInput.files[0];

    let authParams;
    try {
      authParams = await authenticator();
    } catch (authError) {
      console.error("Failed to authenticate for upload:", authError);
      return;
    }
    const { signature, expire, token, publicKey } = authParams;
    try {
      const uploadResponse = await upload({
        expire,
        token,
        signature,
        publicKey,
        file,
        fileName: file.name,
        onProgress: (event) => {
          setProgress((event.loaded / event.total) * 100);
        },
      });

      setUserData((prev) => {
        const updatedData = {
          ...prev,
          photos: [uploadResponse.url]
        };

        localStorage.setItem("userData", JSON.stringify(updatedData));

        return updatedData;
      });

      console.log("Upload response:", uploadResponse);
    } catch (error) {
      if (error instanceof ImageKitAbortError) {
        console.error("Upload aborted:", error.reason);
      } else if (error instanceof ImageKitInvalidRequestError) {
        console.error("Invalid request:", error.message);
      } else if (error instanceof ImageKitUploadNetworkError) {
        console.error("Network error:", error.message);
      } else if (error instanceof ImageKitServerError) {
        console.error("Server error:", error.message);
      } else {
        console.error("Upload error:", error);
      }
    }
  };

  useEffect(() => {
    setPageTitle("GiftForYou- Profile");
  }, []);

  useEffect(() => {
    const data = getUserData();
    console.log("USER DATA:", data);
    setUserData(prev => ({ ...prev, ...data }));
  }, []);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const updateProfile = async () => {
    try {
      const token = localStorage.getItem("userJwtToken");

      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/profile`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const updatedUser = {
        ...response.data.data,
        photos: userData.photos
      };

      localStorage.setItem("userData", JSON.stringify(updatedUser));
      window.dispatchEvent(new Event("storage"));

      alert("Profile Updated Successfully");

      window.location.reload();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />

      <Heading text="Update Profile" />
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl mx-auto overflow-hidden mt-10">
        <div className="flex flex-col items-center">
          <img src={ProfileImg} alt="Profile" className="h-full w-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 p-4 sm:p-6 my-2">
          <SubHeading text="Welcome Back" />

          <p className="text-xs sm:text-sm text-center text-gray-500 mb-3">
            Update your profile information
          </p>

          <div className="w-full mx-2 my-2 space-y-4">

            <div className="flex justify-center">
              {userData.photos?.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Profile Photo`}
                  className="w-16 h-16 object-cover rounded-full"
                />
              ))}
            </div>

            <input type="file" ref={fileInputRef}
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  handleUpload();
                }
              }}
              className="border rounded h-8 block w-full text-sm text-center px-13 md:px-25 cursor-pointer"
            />

            <Input2 name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="Name"
            />

            <Input2 name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-10"
            />

            <Input2 name="mobile"
              value={userData.mobile}
              onChange={handleChange}
              placeholder="Mobile" />

            <Input2 name="whatsapp"
              value={userData.whatsapp}
              onChange={handleChange}
              placeholder="Whatsapp" />

            <Input2 name="address"
              value={userData.address}
              onChange={handleChange}
              placeholder="Address" />

            <Input2 name="city"
              value={userData.city}
              onChange={handleChange}
              placeholder="City" />

            <Input2 name="pincode"
              value={userData.pincode}
              onChange={handleChange}
              placeholder="Pincode" />

            <Input2 name="country"
              value={userData.country}
              onChange={handleChange}
              placeholder="Country" />

            <Link to="/" className="flex justify-center">
              <Button title="Update Profile" varient="primary" onClick={updateProfile} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;