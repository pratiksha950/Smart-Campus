import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const StudentDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
        <p>View your attendance, timetable, results, and notices here.</p>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;
