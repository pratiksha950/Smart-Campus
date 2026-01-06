function MaterialCard({ data }) {
  return (
    <div className="w-full sm:w-80 max-w-[22rem] bg-white rounded-xl border-white p-5 shadow-sm hover:shadow-xl transition">
      
      <span className="text-xs font-semibold border px-2 py-1 rounded-md">
        {data.type}
      </span>

      <h3 className="font-semibold text-lg mt-3">{data.title}</h3>
      <p className="text-gray-500 text-sm mt-1">{data.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        <span className="bg-gray-100 px-2 py-1 text-xs rounded">
          {data.department}
        </span>
        <span className="bg-gray-100 px-2 py-1 text-xs rounded">
          {data.semester}
        </span>
        <span className="bg-gray-100 px-2 py-1 text-xs rounded">
          {data.subject}
        </span>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded">
          {data.year}
        </span>
        <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
          {data.examType}
        </span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          {data.downloads} downloads · {data.size}
        </p>
        <a
          href={data.fileUrl}
          download
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default MaterialCard;
