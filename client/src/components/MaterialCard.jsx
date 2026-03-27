import { Trash2 } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { getUserJwtToken } from "../utils";

function MaterialCard({
  _id,
  title,
  description,
  type,
  department,
  semester,
  subject,
  year,
  examType,
  downloads,
  size,
  fileUrl,
  onDelete, // 👈 parent refresh
}) {

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/materials/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${getUserJwtToken()}`,
          },
        }
      );

      if (res.data.success) {
        toast.success("Deleted successfully 🗑️");

        // refresh list
        onDelete && onDelete(_id);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Delete failed ❌");
    }
  };

  return (
    <div className="relative w-full sm:w-80 bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition">

      {/* 🗑️ DELETE ICON */}
      <button
        onClick={handleDelete}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
      >
        <Trash2 size={18} />
      </button>

      <span className="text-xs font-semibold border px-2 py-1 rounded-md">
        {type}
      </span>

      <h3 className="font-semibold text-lg mt-3">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        <span className="bg-gray-100 px-2 py-1 text-xs rounded">{department}</span>
        <span className="bg-gray-100 px-2 py-1 text-xs rounded">{semester}</span>
        <span className="bg-gray-100 px-2 py-1 text-xs rounded">{subject}</span>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded">{year}</span>
        <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">{examType}</span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          {downloads} downloads · {size}
        </p>

        <a
          href={fileUrl}
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default MaterialCard;