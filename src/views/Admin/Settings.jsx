import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [password, setPassword] = useState("");

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSave = () => {
    alert("Settings saved! (Placeholder)");
    // Future: Save theme/password to localStorage or backend
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        <div className="w-full max-w-md bg-white p-6 rounded shadow space-y-4">
          {/* Theme Selection */}
          <div>
            <label className="block mb-1 font-medium">Theme</label>
            <select
              value={theme}
              onChange={handleThemeChange}
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          {/* Change Password */}
          <div>
            <label className="block mb-1 font-medium">Change Admin Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="New Password"
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
