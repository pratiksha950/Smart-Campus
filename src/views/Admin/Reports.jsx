import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Reports = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Reports</h1>
        <p className="text-gray-700 mb-4">
          This is a placeholder for Admin Reports. You can integrate charts, 
          student analytics, attendance statistics, and other reports here in the future.
        </p>

        <div className="w-full max-w-4xl bg-white p-6 rounded shadow text-center">
          <p className="text-gray-500">Charts and data visualization will appear here.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reports;
