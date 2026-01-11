import React from "react";
import iitdhome from "../assets/iitdhome.png";
import iitdhome2 from "../assets/iitdhome2.png";

function Heropage() {
  return (
    <section className="w-full bg-white py-16">
      {/* TOP TEXT */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-bold  text-[#9F0202]">
          EXPERIENCE IITD
        </h1>

        <p className="mt-4 text-sm uppercase tracking-widest text-gray-600">
          An Initiative By
        </p>

        <p className="mt-1 text-base font-medium tracking-wide text-black">
          ACADEMIC OUTREACH & NEW INTIATIVES
        </p>
      </div>

      {/* MIDDLE SECTION */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/4">
          
          <img
            src={iitdhome2}
            alt="IIT Delhi Campus"
            className="w-full h-auto object-cover"
          />
         
        </div>

        {/* CENTER VIDEO CARD */}
        <div className="w-full md:w-2/4">
          <div className="bg-gray-200 rounded-md h-56 md:h-64 flex flex-col items-center justify-center text-center px-4">
            <p className="text-sm font-semibold tracking-wider text-gray-800 mb-4">
              EXPERIENCE IT BEFORE YOU JOIN
            </p>

            {/* 
            <video
              src="/intro-video.mp4"
              controls
              className="w-full h-full rounded-md"
            />
            */}

            {/* Play button placeholder */}
            <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[12px] border-l-gray-500 border-y-[8px] border-y-transparent ml-1"></div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/4">
          
          <img
            src={iitdhome}
            alt="IIT Delhi Campus"
            className="w-full h-auto object-cover"
          />
         
        </div>
      </div>

      {/* FOOTER TEXT */}
      <div className="text-center mt-10">
        <p className="text-md font-bold text-gray-600">
          Academic Outreach IIT Delhi
        </p>
      </div>
    </section>
  );
}

export default Heropage;
