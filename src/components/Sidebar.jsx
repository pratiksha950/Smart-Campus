import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-blue-700 text-white w-64 min-h-screen p-6 hidden md:block">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-3">
        <Link to="/admin" className="hover:bg-blue-600 px-3 py-2 rounded">Dashboard</Link>
        <Link to="/admin/students" className="hover:bg-blue-600 px-3 py-2 rounded">Manage Students</Link>
        <Link to="/admin/faculty" className="hover:bg-blue-600 px-3 py-2 rounded">Manage Faculty</Link>
        <Link to="/admin/attendance" className="hover:bg-blue-600 px-3 py-2 rounded">Attendance</Link>
        <Link to="/admin/notices" className="hover:bg-blue-600 px-3 py-2 rounded">Notices</Link>
        <Link to="/admin/reports" className="hover:bg-blue-600 px-3 py-2 rounded">Reports</Link>
        <Link to="/admin/store" className="hover:bg-blue-600 px-3 py-2 rounded">Store</Link>
      </nav>
    </div>
  );
};

export default Sidebar;


