import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import TimeTable from "./timetable";
import Notice from "./notice";
import LeaveApplication from "./leaveapplication";

const StudentDashboard = () => {
  const [student, setStudent] = useState(null);
  const [activeView, setActiveView] = useState("dashboard"); // 👈 default

  useEffect(() => {
    const storedStudent = localStorage.getItem("user");
    if (storedStudent) setStudent(JSON.parse(storedStudent));
  }, []);

  if (!student) {
    return (
      <h2 className="text-center text-lg font-semibold mt-10">
        Loading Student Data...
      </h2>
    );
  }

  return (
    <>
      <Navbar />

      {/* ===== DASHBOARD VIEW ===== */}
      {activeView === "dashboard" && (
        <div className="min-h-screen bg-gray-100 p-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Student Dashboard
          </h1>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-10">
            <div className="flex items-center gap-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Student"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <p><b>Name:</b> {student.name}</p>
              </div>
            </div>
          </div>

       
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <button
              onClick={() => setActiveView("timetable")}
              className="p-6 bg-white rounded-xl shadow hover:scale-105 transition font-semibold"
            >
              Class Timetable
            </button>

            <button
              onClick={() => setActiveView("notice")}
              className="p-6 bg-white rounded-xl shadow hover:scale-105 transition font-semibold"
            >
              Notices
            </button>

            <button
              onClick={() => setActiveView("leave")}
              className="p-6 bg-white rounded-xl shadow hover:scale-105 transition font-semibold"
            >
              Leave Application
            </button>
          </div>
        </div>
      )}

    
      {activeView === "timetable" && (
        <>
          <TimeTable />
          <BackButton setActiveView={setActiveView} />
        </>
      )}

    
      {activeView === "notice" && (
        <>
          <Notice />
          <BackButton setActiveView={setActiveView} />
        </>
      )}

      {activeView === "leave" && (
        <>
          <LeaveApplication />
          <BackButton setActiveView={setActiveView} />
        </>
      )}

      <Footer />
    </>
  );
};


const BackButton = ({ setActiveView }) => (
  <div className="flex justify-center my-6">
    <button
      onClick={() => setActiveView("dashboard")}
      className="px-6 py-2 rounded-xl bg-gray-700 text-white hover:bg-gray-800 transition"
    >
      ⬅ Back to Dashboard
    </button>
  </div>
);

export default StudentDashboard;