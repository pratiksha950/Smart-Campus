import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-16">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Smart Campus</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Smart Campus Management System is a digital platform designed
              to manage academic and administrative activities efficiently
              for colleges and universities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
              <li><Link to="/login" className="hover:text-yellow-300">Login</Link></li>
              <li><Link to="/signup" className="hover:text-yellow-300">Sign Up</Link></li>
              <li><Link to="/store" className="hover:text-yellow-300">Campus Store</Link></li>
            </ul>
          </div>

          {/* Campus Modules */}
          <div>
            <h3 className="text-lg font-bold mb-4">Campus Modules</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Student Dashboard</li>
              <li>Faculty Dashboard</li>
              <li>Attendance</li>
              <li>Exams & Results</li>
              <li>Library</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-xl mt-5">
              <a href="https://www.facebook.com/" className="hover:text-yellow-300"><FaFacebook /></a>
              <a href="https://x.com/" className="hover:text-yellow-300"><FaTwitter /></a>
              <a href="https://www.instagram.com/explore/?hl=en" className="hover:text-yellow-300"><FaInstagram /></a>
              <a href="https://www.linkedin.com/feed/" className="hover:text-yellow-300"><FaLinkedin /></a>
              <a href="https://github.com/" className="hover:text-yellow-300"><FaGithub /></a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-700 py-5 text-center text-sm text-gray-400">
        <p>© 2026 Smart Campus Management System</p>
        <p className="mt-1">Designed for Academic Excellence 🎓</p>
      </div>

    </footer>
  );
};

export default Footer;
