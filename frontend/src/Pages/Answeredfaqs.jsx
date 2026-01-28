import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import FAQSection from "../Components/FAQSection";
import FAQCard from "../Components/FAQCard";

/* -------------------- SAMPLE DATA --------------------
   Replace this with backend API data later
---------------------------------------------------- */

const faqData = [
  {
    id: 1,
    category: "campus",
    question: "What is the transition to hostel life like?",
    
    answeredBy: "2nd yr BTech Mech. Engg",
    likes: 3,
    replies: [
        {
        user: "userid45",
        text:
          "You should be ready with all the essential documents (Aadhar, PAN, etc.) and other documents like income (if applicable)...",
        likes: 3,
      },
    ],
  },
  {
    id: 2,
    category: "campus",
    question: "What essentials should we bring to the hostel?",
    
    answeredBy: "1st yr BTech Civil Engg",
    likes: 9,
    replies: [
      {
        user: "userid45",
        text:
          "You should be ready with all the essential documents (Aadhar, PAN, etc.) and other documents like income (if applicable)...",
        likes: 3,
      },
    ],
  },
  {
    id: 3,
    category: "placements",
    question: "What is the transition to hostel life like?",
    answeredBy: "2nd yr BTech Mech. Engg",
    likes: 3,
    replies: [
        {
        user: "userid45",
        text:
          "You should be ready with all the essential documents (Aadhar, PAN, etc.) and other documents like income (if applicable)...",
        likes: 3,
      },
    ],
  },
];

/* -------------------- COMPONENT -------------------- */

function Answeredfaqs() {
  return (
    <section className="w-full bg-white py-20 px-4 font-barlow">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-center mb-6">FAQ</h1>

      {/* SECTIONS */}
      <FAQSection
        title="Campus & City Life"
        category="campus"
        data={faqData}
      />

      <FAQSection
        title="Placements & Careers"
        category="placements"
        data={faqData}
      />

      <FAQSection
        title="Academics & Curriculum"
        category="academics"
        data={faqData}
      />

      <FAQSection
        title="Miscellaneous / Fun"
        category="misc"
        data={faqData}
      />
    </section>
  );
}

export default Answeredfaqs;
