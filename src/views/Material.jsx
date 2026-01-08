import { useState } from "react";
import materialdata from "../configs/materialdata";
import MaterialCard from "../components/MaterialCard";

function Material() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [semester, setSemester] = useState("All");
  const [year, setYear] = useState("All");

  const filteredMaterials = materialdata.filter(item =>
    (department === "All" || item.department === department) &&
    (semester === "All" || item.semester === semester) &&
    (year === "All" || item.year === year) &&
    (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.subject.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="p-6  bg-[#F8FAFF] font-sans">
      <h1 className="text-black-600 font-extrabold text-4xl md:text-4xl justify-center item-center">
        Previous Year Question Papers
      </h1>
      <p className="text-gray-500 mt-1">
        Download university previous year question papers (PYQs)
      </p>


      <div className="flex flex-wrap gap-4 mt-6">
        <input
          type="text"
          placeholder="Search by subject or title..."
          className="flex-1 border rounded-lg px-4 py-2 border-blue-900"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-2 border-blue-900"
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option>CS</option>
          <option>ECE</option>
          <option>ME</option>
          <option>Chemical</option>
          <option>Civil</option>
        </select>

        <select
          className="border rounded-lg px-4 py-2 border-blue-900"
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="All">All Years</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          
        </select>

        <select
          className="border rounded-lg px-4 py-2 bg-red-199 border-blue-900"
          onChange={(e) => setSemester(e.target.value)}
        >
          <option value="All">All Semesters</option>
          <option>Sem 3</option>
          <option>Sem 4</option>
        </select>
      </div>


    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-10 w-full">
  {filteredMaterials.map(item => (
    <MaterialCard
      key={item.id}
      title={item.title}
      description={item.description}
      type={item.type}
      department={item.department}
      semester={item.semester}
      subject={item.subject}
      year={item.year}
      examType={item.examType}
      downloads={item.downloads}
      size={item.size}
      fileUrl={item.fileUrl}
    />
  ))}
</div>



    </div>
  );
}

export default Material;
