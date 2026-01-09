import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '../src/views/Home.jsx'
import Login from '../src/views/Login.jsx'
import Signup from '../src/views/Signup.jsx'
import AboutUs from '../src/views/AboutUs.jsx'
import Cart from '../src/views/Cart.jsx'
import Contact from '../src/views/Contact.jsx'
import StationaryStore from '../src/views/StationaryStore.jsx'
import Material from '../src/views/Material.jsx'
import StudentDashboard from '../src/views/Student/StudentDashboard.jsx'
import FacultyDashboard from '../src/views/Faculty/FacultyDashboard.jsx'
import Dashboard from '../src/views/Admin/Dashboard.jsx'
import ManageStudents from '../src/views/Admin/ManageStudents.jsx'
import ManageFaculty from '../src/views/Admin/ManageFaculty.jsx'
import Reports from '../src/views/Admin/Reports.jsx'
import Settings from '../src/views/Admin/Settings.jsx'
import UploadMarks from '../src/views/Faculty/UploadMarks.jsx'
import UploadAttendance from '../src/views/Faculty/UploadAttendance.jsx'
import ManageSubjects from '../src/views/Faculty/ManageSubjects.jsx'
import ViewNotices from '../src/views/Faculty/ViewNotices.jsx'
import {BrowserRouter,Routes,Route} from 'react-router'


const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/faculty/upload-marks" element={<UploadMarks />} />
        <Route path="/faculty/upload-attendance" element={<UploadAttendance />} />
        <Route path="/faculty/manage-subjects" element={<ManageSubjects />} />
        <Route path="/faculty/view-notices" element={<ViewNotices />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/manage-students" element={<ManageStudents />} />
        <Route path="/admin/manage-faculty" element={<ManageFaculty />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<StationaryStore />} />
        <Route path="/m" element={<Material />} />
      </Routes>
    </BrowserRouter>
  </>
)
