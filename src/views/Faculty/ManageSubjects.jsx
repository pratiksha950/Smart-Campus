import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ManageSubjects = () => {
  const [subjects, setSubjects] = useState(() => JSON.parse(localStorage.getItem("subjects")) || []);
  const [newSubject, setNewSubject] = useState("");

  // Add new subject
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newSubject.trim()) return;

    const updatedSubjects = [...subjects, newSubject.trim()];
    setSubjects(updatedSubjects);
    localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
    setNewSubject("");
  };

  // Delete subject
  const handleDelete = (subject) => {
    const updatedSubjects = subjects.filter((s) => s !== subject);
    setSubjects(updatedSubjects);
    localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Manage Subjects</h1>

        {/* Add Subject Form */}
        <form onSubmit={handleAdd} className="max-w-md mx-auto mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Enter Subject Name"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        {/* Subjects List */}
        <div className="max-w-md mx-auto bg-white rounded shadow p-4">
          {subjects.length === 0 && (
            <p className="text-center text-gray-600">No subjects found. Add a subject above.</p>
          )}
          <ul>
            {subjects.map((subject) => (
              <li
                key={subject}
                className="flex justify-between items-center border-b py-2"
              >
                <span>{subject}</span>
                <button
                  onClick={() => handleDelete(subject)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageSubjects;
