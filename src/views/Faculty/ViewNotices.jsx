import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const UploadNotes = () => {
  const [note, setNote] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note.title || !note.description) {
      alert("Please enter both title and description");
      return;
    }

    // Get existing notes
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // Add new note
    savedNotes.push(note);

    // Save back to localStorage
    localStorage.setItem("notes", JSON.stringify(savedNotes));

    alert("Note uploaded successfully!");

    // Clear form
    setNote({ title: "", description: "", link: "" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-12">
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Upload Notes</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Note Title"
              value={note.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <textarea
              name="description"
              placeholder="Note Description"
              value={note.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <input
              type="text"
              name="link"
              placeholder="Optional Link (PDF, Drive, etc.)"
              value={note.link}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UploadNotes;
