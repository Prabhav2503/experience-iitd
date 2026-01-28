import React from "react";
// import Navbar from "../components/Navbar";
import iitdhome from "../assets/iitdhome.png";

function Campus() {
  return (
    <>
      {/* <Navbar /> */}

      <section className="w-full bg-white py-16 px-4 font-barlow">
        <div className="max-w-5xl mx-auto text-center">

          {/* PAGE HEADING */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#9F0202] mb-6">
            CAMPUS & INFRA
          </h1>

          {/* DESCRIPTION */}
          <p className="text-2px md:text-base text-gray-800 leading-relaxed">
            The Indian Institute of Technology Delhi campus spans approximately
            325 acres in the heart of New Delhi, offering a unique blend of
            academic excellence, natural surroundings, and vibrant student life.
            Designed as a self-sustained academic township, the campus houses
            state-of-the-art academic buildings, advanced research laboratories,
            hostels, libraries, sports facilities, and dedicated spaces for
            cultural, technical, and entrepreneurial activities.
          </p>

          <p className="text-[6px] md:text-base text-gray-800 leading-relaxed mb-16">
            With expansive green areas, tree-lined avenues, and thoughtfully
            planned infrastructure, the campus provides an environment that
            encourages focused learning while supporting creativity,
            collaboration, and well-being. Beyond classrooms and laboratories,
            IIT Delhi’s campus fosters innovation through research centers,
            startup ecosystems, student clubs, and industry interaction spaces.
            This dynamic and inclusive setting enables students, faculty, and
            researchers to learn, live, and innovate together, making the
            campus an integral part of the holistic educational experience at
            IIT Delhi.
          </p>

          {/* IMAGE SECTION */}
          
          <div className="w-150 h-50 md:h-80 bg-gray-300 rounded-md mb-24 mx-auto">
            <img
              src={iitdhome}
              alt="IIT Delhi Campus"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 text-left">
            <div>
              <h3 className="text-lg font-bold text-[#9F0202] mb-4">
                LHC (LECTURE HALL COMPLEX)
              </h3>
              <p className="text-sm text-[#504F4F] leading-relaxed">
                The LHC (Lecture Hall Complex) at the Indian Institute of Technology Delhi is one of the most dynamic academic spaces on campus, where ideas, discussions, and learning come together. Designed to host large lectures, talks, and academic events, the LHC combines modern infrastructure with an energetic atmosphere, making it a central hub for classroom learning, guest lectures, and campus-wide academic interactions. From first-year lectures to institute-level events, the LHC plays a key role in shaping the everyday academic experience at IIT Delhi.
              </p>
            </div>

            <img src={iitdhome} className="w-full h-48 object-cover rounded-md" />

          </div>
          
          {/* LABS */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-left">
            <img src={iitdhome} className="w-full h-48 object-cover rounded-md" />


            <div>
              <h3 className="text-lg font-bold text-[#9F0202] mb-4">
                LABS
              </h3>
              <p className="text-sm text-[#504F4F] leading-relaxed">
                The laboratories at the Indian Institute of Technology Delhi form the backbone of hands-on learning and research on campus. Equipped with modern instruments and advanced facilities, these labs enable students to translate theoretical concepts into practical understanding through experimentation, analysis, and innovation. From foundational undergraduate experiments to advanced research and interdisciplinary projects, the lab ecosystem at IIT Delhi fosters curiosity, technical skill development, and a strong culture of scientific inquiry.
              </p>
            </div>
          </div>

          {/* MITTAL SPORTS COMPLEX */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 text-left">
            <div>
              <h3 className="text-lg font-bold text-[#9F0202] mb-4">
                MITTAL SPORTS COMPLEX
              </h3>
              <p className="text-sm text-[#504F4F] leading-relaxed">
                The Mittal Sports Complex at the Indian Institute of Technology
                Delhi is a central hub for fitness, sports, and recreation on
                campus. Equipped with modern indoor and outdoor facilities, the
                complex supports a wide range of sporting activities and
                training programs, promoting physical well-being, teamwork, and
                a balanced student life.It plays a key role in encouraging active participation in sports alongside academic pursuits.
              </p>
            </div>

            <img src={iitdhome} className="w-full h-48 object-cover rounded-md" />

          </div>

          {/* SAC */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 text-left">
            <img src={iitdhome} className="w-full h-48 object-cover rounded-md" />


            <div>
              <h3 className="text-lg font-bold text-[#9F0202] mb-4">
                SAC (STUDENT ACTIVITY CENTRE)
              </h3>
              <p className="text-sm text-[#504F4F] leading-relaxed">
                The laboratories at the Indian Institute of Technology Delhi form the backbone of hands-on learning and research on campus. Equipped with modern instruments and advanced facilities, these labs enable students to translate theoretical concepts into practical understanding through experimentation, analysis, and innovation. From foundational undergraduate experiments to advanced research and interdisciplinary projects, the lab ecosystem at IIT Delhi fosters curiosity, technical skill development, and a strong culture of scientific inquiry.
              </p>
            </div>
          </div>

          {/* RNI PARK */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-10 text-left">
            <div>
              <h3 className="text-lg font-bold text-[#9F0202] mb-4">
                RNI (RESEARCH AND INNOVATION) PARK
              </h3>
              <p className="text-sm text-[#504F4F] leading-relaxed">
                The RNI (Research and Innovation) Park at the Indian Institute of Technology Delhi serves as a dynamic ecosystem that bridges academic research with entrepreneurship and industry engagement. Designed to support startups, innovators, and research-driven enterprises, the park provides a collaborative space where ideas evolve into impactful solutions. By fostering close interaction between students, faculty, startups, and industry partners, RNI Park strengthens technology transfer, encourages innovation-led ventures, and builds meaningful connections between the institute and the broader innovation ecosystem.
              </p>
            </div>

            <img src={iitdhome} className="w-full h-48 object-cover rounded-md" />

          </div>

         
        </div>
      </section>
    </>
  );
}

export default Campus;
