import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Input2 from "../components/Input2";
import Button from "../components/Button";

function NewUpload() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    department: "CS",
    semester: "Sem 3",
    subject: "",
    year: "2024",
    examType: "Mid Sem",
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Uploaded Successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F8FAFF] flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg space-y-3"
        >
          <h2 className="text-2xl font-bold text-center mb-2">
            Upload Material
          </h2>

          {/* Title */}
          <Input2
            type="text"
            name="title"
            placeholder="Enter Title"
            value={formData.title}
            onChange={handleChange}
          />

          {/* Description */}
          <Input2
            type="text"
            name="description"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleChange}
          />

          {/* Subject */}
          <Input2
            type="text"
            name="subject"
            placeholder="Enter Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          {/* Department */}
          <select
            name="department"
            onChange={handleChange}
            className="border rounded-xl h-8 w-full text-sm text-center"
          >
            <option>CS</option>
            <option>ECE</option>
            <option>ME</option>
            <option>Civil</option>
            <option>Chemical</option>
          </select>

          {/* Semester */}
          <select
            name="semester"
            onChange={handleChange}
            className="border rounded-xl h-8 w-full text-sm text-center"
          >
            <option>Sem 3</option>
            <option>Sem 4</option>
          </select>

          {/* Year */}
          <select
            name="year"
            onChange={handleChange}
            className="border rounded-xl h-8 w-full text-sm text-center"
          >
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>

          {/* Exam Type */}
          <select
            name="examType"
            onChange={handleChange}
            className="border rounded-xl h-8 w-full text-sm text-center"
          >
            <option>Mid Sem</option>
            <option>End Sem</option>
          </select>

          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full text-sm"
          />

          <div className="flex justify-center mt-4">
  <Button
    type="submit"
    title="Upload"
  />
</div>

        </form>
      </div>

      <Footer />
    </>
  );
}

export default NewUpload;