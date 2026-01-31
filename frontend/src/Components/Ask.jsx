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
        <div className="flex-1 flex flex-col items-center  justify-center text-center -mt-10 px-6">
          <h1 className="text-5xl font-poppins mt-4 md:text-7xl mt-20 font-bold leading-tight">
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
        <div className="px-6 py-12 md:py-8">
          <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:justify-between gap-8 md:gap-2">

            <p className="font-medium font-akatab text-2xl text-center md:text-left">
              Connect with us on:
            </p>

            {/* MOBILE: Grid with 2 columns, centered items. 
                DESKTOP: Flex row with gap-12 as per your original design.
            */}
            <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-items-center md:justify-end gap-y-8 gap-x-4 md:gap-12 font-akatab font-medium w-full md:w-auto">
              
              <a href="https://www.linkedin.com/company/academic-outreach-iitd/" className="flex items-center gap-2">
                <FaLinkedinIn className="text-[#0A66C2] text-2xl shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a href="https://www.instagram.com/outreach_iitd?igsh=bzl4ejV4bDkybzc=" className="flex items-center gap-2">
                <FaInstagram className="text-[#E1306C] text-2xl shrink-0" />
                <span>Instagram</span>
              </a>

              <a href="https://whatsapp.com/channel/0029Vb994QoLtOjByAcUQW3n" className="flex items-center gap-2">
                <FaWhatsapp className="text-[#25D366] text-2xl shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a href="mailto:adoni@iitd.ac.in" className="flex items-center gap-2">
                <MdEmail className="text-[#EA4335] text-2xl shrink-0" />
                <span>adoni@iitd.ac.in</span>
              </a>

              {/* The 5th item: centered across both columns on mobile */}
              <a href="https://academicoutreach.iitd.ac.in" className="flex items-center gap-2 col-span-2 md:col-span-1 mt-2 md:mt-0">
                <FaGlobe className="text-[#3B82F6] text-2xl shrink-0" />
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