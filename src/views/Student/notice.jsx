import React, { useEffect, useState } from "react";
import NoticeCard from "./noticecard";

function Notice() {
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notices"));
    if (saved) setNotices(saved);
  }, []);

  const addNotice = () => {
    if (!newNotice.trim()) return;
    const updated = [newNotice, ...notices];
    setNotices(updated);
    localStorage.setItem("notices", JSON.stringify(updated));
    setNewNotice("");
  };

  const deleteNotice = (notice) => {
    const filtered = notices.filter((n) => n !== notice);
    setNotices(filtered);
    localStorage.setItem("notices", JSON.stringify(filtered));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
        Notice Board
      </h2>

      {notices.map((n, i) => (
        <NoticeCard key={i} task={n} deletTask={deleteNotice} />
      ))}

      <div className="flex gap-2 mt-4">
        <input
          value={newNotice}
          onChange={(e) => setNewNotice(e.target.value)}
          placeholder="Add notice"
          className="flex-1 p-2 border rounded"
        />
        <button onClick={addNotice} className="bg-indigo-600 text-white px-4 rounded">
          Add
        </button>
      </div>
    </div>
  );
}

export default Notice;