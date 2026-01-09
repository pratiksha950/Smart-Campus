import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const UploadMarks = () => {
  const [subject, setSubject] = useState("");
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const [marksData, setMarksData] = useState(() => {
    const savedMarks = JSON.parse(localStorage.getItem("marks")) || {};
    const initialMarks = {};
    students.forEach((s) => {
      initialMarks[s.email] = savedMarks[s.email]?.marks || "";
    });
    return initialMarks;
  });

  // Handle input changes
  const handleMarksChange = (email, value) => {
    setMarksData({ ...marksData, [email]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject) {
      alert("Please enter subject name!");
      return;
    }

    // Save marks in localStorage
    const savedMarks = JSON.parse(localStorage.getItem("marks")) || {};
    const updatedMarks = { ...savedMarks, [subject]: {} };

    students.forEach((s) => {
      updatedMarks[subject][s.email] = {
        name: s.name,
        marks: marksData[s.email] || "0",
      };
    });

    localStorage.setItem("marks", JSON.stringify(updatedMarks));
    alert("Marks saved successfully!");
    setSubject("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Upload Marks</h1>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
          {/* Subject input */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Subject Name</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter subject"
              required
            />
          </div>

          {/* Students table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Marks</th>
                </tr>
              </thead>
              <tbody>
                {students.length === 0 && (
                  <tr>
                    <td colSpan="3" className="text-center py-4">
                      No students found. Add students first.
                    </td>
                  </tr>
                )}
                {students.map((s) => (
                  <tr key={s.email}>
                    <td className="border px-4 py-2">{s.name}</td>
                    <td className="border px-4 py-2">{s.email}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        value={marksData[s.email] || ""}
                        onChange={(e) => handleMarksChange(s.email, e.target.value)}
                        className="w-full border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="0"
                        max="100"
                        required
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Save Marks
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UploadMarks;
