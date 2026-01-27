import React, { useState } from "react";
import AskDialog from "../Components/AskDialog.jsx";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Ask() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      {/* DIALOG */}
      <AskDialog
        isOpen={openDialog}
        onClose={() => setOpenDialog(false)}
      />

      <section className="w-full min-h-[80vh] flex flex-col justify-between bg-gradient-to-b from-[#5a5a5a] via-[#3d3d3d] to-[#1f1f1f] text-white">

        {/* ================= CENTER CONTENT ================= */}
        <div className="flex-1 flex flex-col items-center justify-center text-center -mt-10 px-6">

          <h1 className="text-5xl font-poppins md:text-7xl font-bold leading-tight">
            Looking for
            <br />
            something else!
          </h1>

          {/* ASK BUTTON */}
          <button
            onClick={() => setOpenDialog(true)}
            className="mt-10 font-poppins bg-[#FB923C] hover:bg-[#f97316] text-white font-bold text-2xl px-14 py-3 rounded-xl shadow-md transition"
          >
            Ask
          </button>

          <p className="mt-4 font-poppins text-sm text-gray-300">
            Get the answers you need.
          </p>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="px-6 py-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm">

            <p className="font-medium font-akatab text-2xl">
              Connect with us on:
            </p>

            <div className="flex flex-wrap items-center gap-12 font-akatab font-medium">
              <a href="#" className="flex items-center gap-2">
                <FaLinkedinIn className="text-[#0A66C2] text-2xl" />
                <span>LinkedIn</span>
              </a>

              <a href="#" className="flex items-center gap-2">
                <FaInstagram className="text-[#E1306C] text-2xl" />
                <span>Instagram</span>
              </a>

              <a href="#" className="flex items-center gap-2">
                <FaWhatsapp className="text-[#25D366] text-2xl" />
                <span>WhatsApp</span>
              </a>

              <a href="#" className="flex items-center gap-2">
                <MdEmail className="text-[#EA4335] text-2xl" />
                <span>adoni@iitd.ac.in</span>
              </a>

              <a href="#" className="flex items-center gap-2">
                <FaGlobe className="text-[#3B82F6] text-2xl" />
                <span>academicoutreach.iitd.ac.in</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Ask;
