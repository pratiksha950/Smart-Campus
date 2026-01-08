function MaterialCard({
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
  fileUrl
}) {
  return (
    <div className="w-full sm:w-80  bg-white rounded-xl border-white p-5 shadow-sm hover:shadow-xl transition">
      
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
        <p className="text-sm text-gray-500">{downloads} downloads · {size}</p>
        <a href={fileUrl} download className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          Download
        </a>
      </div>
    </div>
  );
}

export default MaterialCard;
