import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Smart Campus</h1>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              Smart Campus is a comprehensive educational platform designed to streamline campus management
              and enhance the learning experience for students, faculty, and administrators.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
                <p className="text-gray-600">
                  To provide an integrated digital solution that simplifies administrative tasks,
                  improves communication, and fosters a better learning environment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Features</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Student Management System</li>
                  <li>• Faculty Dashboard</li>
                  <li>• Attendance Tracking</li>
                  <li>• Online Store</li>
                  <li>• Academic Materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;