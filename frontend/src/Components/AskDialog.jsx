import React from "react";
import { IoClose } from "react-icons/io5";

function AskDialog({ isOpen, onClose }) {
  if (!isOpen) return null; 

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="relative w-full max-w-2xl min-h-[500px] bg-white rounded-lg shadow-xl p-12">

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
          >
            <IoClose />
          </button>

          {/* TITLE */}
          <h2 className="text-2xl font-poppins font-semibold text-center mb-8">
            Ask us anything!
          </h2>

          {/* CATEGORY */}
          <div className="mb-4">
            <label className="block text-sm font-poppins font-medium text-gray-600 mb-1">
              Category
            </label>
            <select className="w-full border text-[#706D6D] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
              <option value="">Topic of your question</option>
              <option>Campus & City Life</option>
              <option>Placements & Careers</option>
              <option>Departments & Branches</option>
              <option>Academics & Curriculum</option>
              <option>Student Life & Activities</option>
                <option>Cultural & Fests Life</option>
                <option>Campus Facilities</option>
                <option>Research & Academic Focus</option>
                <option>Others</option>

            </select>
          </div>

          {/* QUESTION */}
          <div className="mb-6">
            <textarea
              rows="7"
              placeholder="Type your question here..."
              className="w-full border border-gray-300 rounded-md px-2 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* SUBMIT */}
          <div className="flex justify-center mt-6">
            <button className="w-56 font-poppins bg-orange-400 hover:bg-orange-500 text-xl text-white font-semibold py-3 rounded-lg transition">
                Submit question
            </button>
          </div>


        </div>
      </div>
    </>
  );
}

export default AskDialog;
