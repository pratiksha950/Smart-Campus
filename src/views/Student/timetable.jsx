import React from "react";

export default function TimeTable() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-100 to-purple-100 px-3 py-4">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
        Class Timetable
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-xl">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3">Time</th>
              <th className="p-3">Monday</th>
              <th className="p-3">Tuesday</th>
              <th className="p-3">Wednesday</th>
              <th className="p-3">Thursday</th>
              <th className="p-3">Friday</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr><td className="p-3">9 - 10</td><td>Math</td><td>English</td><td>Physics</td><td>Computer</td><td>Math</td></tr>
            <tr><td className="p-3">10 - 11</td><td>Physics</td><td>Math</td><td>Chemistry</td><td>English</td><td>Computer</td></tr>
            <tr><td className="p-3">11 - 12</td><td>Chemistry</td><td>Computer</td><td>Math</td><td>Physics</td><td>English</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}