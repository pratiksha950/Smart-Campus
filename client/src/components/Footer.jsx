import { Link } from "react-router";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaUserTie
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white">
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Smart Campus</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Smart Campus Management System helps students, faculty, and
              administration manage academic workflows digitally with ease.
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
              <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
              <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
              <li><Link to="/pyq" className="hover:text-yellow-300">Materials</Link></li>
              <li> <Link to="/StudyMaterial" className="hover:text-yellow-300">StudyMaterial</Link></li>
              <li> <Link to="/Scholership" className="hover:text-yellow-300">Scholarship</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-bold mb-4">Departments</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Electronics And Computer </li>
              <li>Computer Engineering</li>
              <li>Information Technology</li>
              <li>Mechanical</li>
              <li>Civil</li>
              
           
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  Pravara Rural Engineering College,<br/>
                  Tal-Rahata, Dist. Ahmednagar - 413736<br/>
                  (DTE Code: EN5139)
                </span>
              </li>

              <li className="flex items-center gap-2">
                <FaPhone /> 02422-273204
              </li>

              <li className="flex items-center gap-2">
                <FaEnvelope /> principal.precloni@pravara.in
              </li>

              <li className="flex items-center gap-2">
                <FaUserTie /> Dr. S. M. Gulhane
              </li>

              <li className="flex items-center gap-2">
                <FaPhone /> +91 9423787338
              </li>

              <li className="flex items-center gap-2">
                <FaGlobe />
                <a href="https://www.pravara.in" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
                  www.pravara.in
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaGlobe />
                <a href="https://www.pravaraengg.org.in" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
                  www.pravaraengg.org.in
                </a>
              </li>

            </ul>
          </div>

          {/* Newsletter (no button) */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            
          
            {/* Social */}
            <div className="flex gap-3 text-xl mt-2">
              <a href="https://www.facebook.com/" className="hover:text-yellow-300"><FaFacebook /></a>
              <a href="https://x.com/" className="hover:text-yellow-300"><FaTwitter /></a>
              <a href="https://www.instagram.com/" className="hover:text-yellow-300"><FaInstagram /></a>
              <a href="https://www.linkedin.com/" className="hover:text-yellow-300"><FaLinkedin /></a>
              <a href="https://github.com/" className="hover:text-yellow-300"><FaGithub /></a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800 py-6 text-center text-sm text-gray-300">
        <p>© 2026 Smart Campus Management System</p>
        <p className="mt-1">Designed for Academic Excellence 🎓</p>
      </div>

    </footer>
  );
};

export default Footer;