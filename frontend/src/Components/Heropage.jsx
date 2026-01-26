import React from "react";
import iitdlogo from "../assets/iitdlogo.png";
import outreachlogo from "../assets/outreachlogo.png";

function Heropage() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden font-sans">

      {/* ================= LOGOS ================= */}
      <div className="absolute top-4 left-4 md:top-6 md:left-8 flex items-center gap-3 z-20">
        <img
          src={outreachlogo}
          alt="Outreach Logo"
          className="h-8 md:h-12 w-auto"
        />
        <img
          src={iitdlogo}
          alt="IITD Logo"
          className="h-8 md:h-12 w-auto"
        />
      </div>

      {/* ================= RIGHT GRADIENT CIRCLE ================= */}
      <div className="absolute top-[-30%] right-[-5%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#4DB6B6] to-[#BFF5F7]" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 pt-32 md:pt-40 px-6 md:px-12">
        <div className="max-w-4xl">

          {/* MAIN HEADING */}
          <h1 className="text-[42px] font-alumni md:text-[66px] font-bold text-[#565656] leading-tight">
            #ExperienceIITD
          </h1>

          {/* SUBTEXT */}
          <p className="mt-2 font-poppins text-sm md:text-base font-semibold text-[#565656]">
            An initiative by the
          </p>

          {/* HIGHLIGHT TEXT */}
          <p className="mt-1 font-poppins text-base md:text-2xl font-bold text-[#FB923C]">
            Office of Academic Outreach &amp; New Initiatives
          </p>

        </div>
      </div>
    </section>
  );
}

export default Heropage;
