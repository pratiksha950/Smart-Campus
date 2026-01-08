import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ManageFaculty = () => {
  const [faculty, setFaculty] = useState(() => JSON.parse(localStorage.getItem("faculty")) || []);
  const [form, setForm] = useState({ name: "", email: "", role: "faculty" });
  const [editingIndex, setEditingIndex] = useState(null);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("faculty", JSON.stringify(data));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Name and Email are required");
      return;
    }

    if (editingIndex !== null) {
      const updated = [...faculty];
      updated[editingIndex] = form;
      setFaculty(updated);
      saveToLocalStorage(updated);
      setEditingIndex(null);
    } else {
      const updated = [...faculty, form];
      setFaculty(updated);
      saveToLocalStorage(updated);
    }

    setForm({ name: "", email: "", role: "faculty" });
  };

  const handleEdit = (index) => {
    setForm(faculty[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this faculty?")) {
      const updated = faculty.filter((_, i) => i !== index);
      setFaculty(updated);
      saveToLocalStorage(updated);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-center">Manage Faculty</h1>

        {/* Form */}
        <div className="flex justify-center mb-6">
          <div className="bg-white p-6 rounded shadow max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">
              {editingIndex !== null ? "Edit Faculty" : "Add New Faculty"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Name"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
              >
                <option value="faculty">Faculty</option>
              </select>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                {editingIndex !== null ? "Update Faculty" : "Add Faculty"}
              </button>
            </form>
          </div>
        </div>

        {/* Table */}
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="border-b">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {faculty.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No faculty found.
                </td>
              </tr>
            )}
            {faculty.map((f, index) => (
              <tr key={f.email} className="border-b">
                <td className="p-2">{f.name}</td>
                <td className="p-2">{f.email}</td>
                <td className="p-2">{f.role}</td>
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default ManageFaculty;
