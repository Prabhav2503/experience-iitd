import React from "react";
import iitdlogo from "../assets/iitdlogo.png";

function Description() {
  return (
    <section className="w-full bg-white py-5 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#9F0202] mb-8">
          What is Experience IITD?
        </h2>

        {/* DESCRIPTION TEXT */}
        <p className="text-sm md:text-base text-[#030303] leading-relaxed">
          Experience IITD is an academic outreach initiative designed to provide
          students with a first-hand exposure to the learning environment,
          research culture, and academic life at the Indian Institute of
          Technology Delhi. The program offers structured interactions through
          lectures, laboratory demonstrations, campus experiences, and
          engagements with faculty and students, enabling participants to
          explore disciplines, understand academic pathways, and develop
          informed aspirations for higher education. By bridging classroom
          learning with real-world research and innovation, Experience IITD aims
          to inspire curiosity, critical thinking, and a deeper appreciation of
          scientific and technological inquiry.
        </p>

        {/* BOTTOM LOGO */}
        
        <div className="mt-16 flex justify-center">
          <img
            src={iitdlogo}
            alt="IIT Delhi Logo"
            className="w-48 opacity-20"
          />
        </div>

        {/* BACKGROUND SECTION */}
        <div className="mt-24">
          <h3 className="text-xl md:text-2xl font-bold text-[#9F0202] mb-6">
            Background
          </h3>

          <p className="text-sm md:text-base text-[#030303] leading-relaxed mb-6">
            Indian Institute of Technology Delhi, established in 1961 and located
            in Hauz Khas, New Delhi.
          </p>

          <p className="text-sm md:text-base text-[#030303] leading-relaxed">
            The institute offers a vibrant academic environment shaped by
            world-class faculty, advanced infrastructure, and a strong culture
            of inquiry and collaboration.
          </p>
        </div>

        {/* EXPERTISE SECTION */}
        <div className="mt-15">
          <h3 className="text-xl md:text-2xl font-bold text-[#9F0202] mb-6">
            Expertise
          </h3>

          <div className="space-y-1 text-sm md:text-base text-[#030303]">
            <p>Engineering and Technology Education</p>
            <p>Interdisciplinary Research and Innovation</p>
            <p>Advanced Laboratories and Research Centers</p>
            <p>Industry Collaboration and Consultancy</p>
            <p>Entrepreneurship and Startup Ecosystem</p>
            <p>Global Academic Partnerships</p>
          </div>
        </div>

      
       
      </div>
    </section>
  );
}

export default Description;