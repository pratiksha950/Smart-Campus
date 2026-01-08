import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const FacultyDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Faculty Dashboard</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link to="/faculty/upload-marks" className="p-6 bg-white rounded-lg shadow hover:shadow-lg text-center">
            Upload Marks
          </Link>
          <Link to="/faculty/upload-attendance" className="p-6 bg-white rounded-lg shadow hover:shadow-lg text-center">
            Upload Attendance
          </Link>
          <Link to="/faculty/manage-subjects" className="p-6 bg-white rounded-lg shadow hover:shadow-lg text-center">
            Manage Subjects
          </Link>
          <Link to="/faculty/view-notices" className="p-6 bg-white rounded-lg shadow hover:shadow-lg text-center">
            View Notices
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FacultyDashboard;
