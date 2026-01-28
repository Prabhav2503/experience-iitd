import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {askquestion} from "../utility/api.jsx";

function AskDialog({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    question: "",
    name: "",
    email: "",
    number: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = () => {
    // Validate first page fields
    if (!formData.category || !formData.question.trim()) {
      alert("Please fill in all fields");
      return;
    }
    setCurrentPage(2);
  };

  const handleSubmit = async () => {
    // Validate second page fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.number.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await askquestion(formData);

      if (response.ok) {
        alert("Question submitted successfully!");
        // Reset form and close dialog
        setFormData({
          category: "",
          question: "",
          name: "",
          email: "",
          phone: "",
        });
        setCurrentPage(1);
        onClose();
      } else {
        alert("Failed to submit question. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setCurrentPage(1);
    setFormData({
      category: "",
      question: "",
      name: "",
      email: "",
      number: "",
    });
    onClose();
  }; 

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={handleClose}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="relative w-full max-w-2xl min-h-[500px] bg-white rounded-lg shadow-xl p-12">

          {/* CLOSE BUTTON */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
          >
            <IoClose />
          </button>

          {/* TITLE */}
          <h2 className="text-2xl font-poppins font-semibold text-center mb-8">
            {currentPage === 1 ? "Ask us anything!" : "Your Details"}
          </h2>

          {/* PAGE 1: CATEGORY & QUESTION */}
          {currentPage === 1 && (
            <>
              {/* CATEGORY */}
              <div className="mb-4">
                <label className="block text-sm font-poppins font-medium text-gray-600 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full border text-[#706D6D] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
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
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  rows="7"
                  placeholder="Type your question here..."
                  className="w-full border border-gray-300 rounded-md px-2 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* CONTINUE BUTTON */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleContinue}
                  className="w-56 font-poppins bg-orange-400 hover:bg-orange-500 text-xl text-white font-semibold py-3 rounded-lg transition"
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {/* PAGE 2: NAME, EMAIL, PHONE */}
          {currentPage === 2 && (
            <>
              {/* NAME */}
              <div className="mb-4">
                <label className="block text-sm font-poppins font-medium text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* EMAIL */}
              <div className="mb-4">
                <label className="block text-sm font-poppins font-medium text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* PHONE */}
              <div className="mb-6">
                <label className="block text-sm font-poppins font-medium text-gray-600 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-56 font-poppins bg-orange-400 hover:bg-orange-500 text-xl text-white font-semibold py-3 rounded-lg transition disabled:bg-orange-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
}

export default AskDialog;
