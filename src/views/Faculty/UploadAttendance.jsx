import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const UploadAttendance = () => {
  const [date, setDate] = useState("");
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const [attendanceData, setAttendanceData] = useState(() => {
    const savedAttendance = JSON.parse(localStorage.getItem("attendance")) || {};
    const initialAttendance = {};
    students.forEach((s) => {
      initialAttendance[s.email] = savedAttendance[s.email]?.status || "Present";
    });
    return initialAttendance;
  });

  const handleAttendanceChange = (email, value) => {
    setAttendanceData({ ...attendanceData, [email]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert("Please select a date!");
      return;
    }

    // Save attendance in localStorage
    const savedAttendance = JSON.parse(localStorage.getItem("attendance")) || {};
    const updatedAttendance = { ...savedAttendance, [date]: {} };

    students.forEach((s) => {
      updatedAttendance[date][s.email] = {
        name: s.name,
        status: attendanceData[s.email] || "Present",
      };
    });

    localStorage.setItem("attendance", JSON.stringify(updatedAttendance));
    alert("Attendance saved successfully!");
    setDate("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Upload Attendance</h1>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
          {/* Date input */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <th className="border px-4 py-2">Attendance</th>
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
                      <select
                        value={attendanceData[s.email] || "Present"}
                        onChange={(e) => handleAttendanceChange(s.email, e.target.value)}
                        className="w-full border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                        <option value="Leave">Leave</option>
                      </select>
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
            Save Attendance
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UploadAttendance;
