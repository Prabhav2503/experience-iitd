import React from "react";
import { Link } from "react-router-dom";

function Buttons() {
  const buttons = [
    { label: "Branches", path: "/branches" },
    { label: "Campus & Infra", path: "/campus-infra" },
    { label: "Fests", path: "/fests" },
    { label: "Academic Structure", path: "/academic-structure" },
    { label: "Facilities & Support", path: "/facilities-support" },
    { label: "FAQ", path: "/faq" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-4xl mx-auto px-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-6 place-items-center">

          {buttons.map((btn, index) => (
            <Link
              key={index}
              to={btn.path}
              className="w-60 h-40 bg-[#9F0202] text-white flex items-center justify-center rounded-xl text-lg font-semibold hover:bg-red-900 transition"
            >
              {btn.label}
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Buttons;
