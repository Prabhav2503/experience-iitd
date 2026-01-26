import React from "react";
import { Link } from "react-router-dom";

function Buttons() {
  const buttons = [
    { label: "Campus & City Life", hash: "campus-life" },
    { label: "Placements & Careers", hash: "placements" },
    { label: "Departments & Branches", hash: "academics" },
    { label: "Academics & Curriculum", hash: "academics" },
    { label: "Student Life & Activities", hash: "campus-life" },
    { label: "Cultural & Fests Life", hash: "misc" },
    { label: "Campus Facilities", hash: "facilities" },
    { label: "Research & Academic Focus", hash: "research" },
    { label: "Miscellaneous / Fun", hash: "misc" },
  ];

  return (
    <section className="w-full bg-[#F2FEFF] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-center font-poppins text-3xl md:text-4xl font-bold text-[#3F3F3F] mb-12">
          Students’ Life at a <span className="text-[#FB923C]">Glance</span>
        </h2>

        <div className="bg-[#FB923C] rounded-2xl p-8 md:p-12 flex justify-center max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-8">

            {buttons.map((btn, index) => (
              <Link
                key={index}
                to={`/faq#${btn.hash}`}
                className="
                  w-[220px]
                  min-h-[90px]
                  bg-[#FFD1A3]
                  rounded-md
                  shadow-md
                  px-4
                  py-4
                  text-left
                  text-[#5A5A5A]
                  font-medium
                  font-poppins
                  text-lg
                  flex
                  items-center
                  hover:shadow-lg
                  hover:scale-[1.02]
                  transition
                "
              >
                {btn.label}
              </Link>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Buttons;
