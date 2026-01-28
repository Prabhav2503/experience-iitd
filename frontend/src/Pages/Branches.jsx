import React from "react";
// import Navbar from "../components/Navbar";

function Branches() {
  return (
    <>
      {/* <Navbar /> */}

      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">

          {/* PAGE HEADING */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#9F0202]">
            BRANCHES
          </h1>
          <p className="text-xs text-black font-bold mt-1 ">
            CHOOSE YOUR BRANCH
          </p>

          {/* CARDS */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* B.TECH CARD */}
            <div className="bg-[#9F02020D] p-8 text-left">
              <h2 className="text-xl font-bold text-[#9F0202] mb-4">
                B.TECH
              </h2>

              <ul className="space-y-2 text-sm font-semibold text-gray-900">
                <li>COMPUTER SCIENCE AND ENGINEERING (CS1)</li>
                <li>CHEMICAL ENGINEERING (CH1)</li>
                <li>CIVIL ENGINEERING (CE1)</li>
                <li>ELECTRICAL ENGINEERING (EE1)</li>
                <li>MECHANICAL ENGINEERING (ME1)</li>
                <li>MATHEMATICS AND COMPUTING (MT1)</li>
                <li>MATERIAL ENGINEERING (ME1)</li>
              </ul>
            </div>

            {/* M.TECH CARD */}
            <div className="bg-[#9F02020D] p-8 text-left">
              <h2 className="text-xl font-bold text-[#9F0202] mb-4">
                M.TECH & OTHER PG
              </h2>

              <ul className="space-y-2 text-sm font-semibold text-gray-900">
                <li>COMPUTER SCIENCE AND ENGINEERING (MCS)</li>
                <li>COMPUTER TECHNOLOGY (EET)</li>
                <li>POWER ELECTRONICS, MACHINES & DRIVES (EEP)</li>
                <li>MECHANICAL DESIGN (MEM)</li>
                <li>THERMAL ENGINEERING (MET)</li>
                <li>MATERIALS ENGINEERING (MSM)</li>
                <li>MACHINE INTELLIGENCE AND DATA SCIENCE (AI)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Branches;
