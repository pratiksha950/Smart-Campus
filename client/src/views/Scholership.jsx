import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScholarshipCard from "../components/ScholarshipCard";
import scholarships from "../configs/scholership";

function Scholarship() {
  return (
    <>
      <Navbar />

      <div className="pt-4 px-5">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            Scholarship <span className="text-blue-600">Opportunities</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Discover funding opportunities to support your educational journey.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {scholarships.map((sch) => (
            <ScholarshipCard key={sch.id} scholarship={sch} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Scholarship;