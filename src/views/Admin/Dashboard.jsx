import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ManageStudents from "./ManageStudents";          
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
     
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link to="/admin/manage-students" className="p-6 bg-white rounded-lg shadow hover:shadow-lg text-center">Manage Students</Link>
          <Link to="/admin/manage-faculty" className="p-6 bg-white rounded-lg shadow hover:shadow-lg text-center">Manage Faculty</Link>
          <Link to="/admin/reports" className="p-6 bg-white rounded-lg shadow hover:shadow-lg text-center">Reports</Link>
          <Link to="/admin/settings" className="p-6 bg-white rounded-lg shadow hover:shadow-lg text-center">Settings</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
