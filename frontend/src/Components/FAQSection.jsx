import React from "react";
import FAQCard from "./FAQCard";


function FAQSection({ title, category, data }) {
  const filteredFAQs = data.filter(item => item.category === category);

  if (filteredFAQs.length === 0) return null;

  return (
    <div className="max-w-5xl mx-auto mb-16">

      {/* SECTION HEADING */}
      <h2 className="text-center text-xl font-poppins text-orange-500 font-semibold mb-10">
        {title}
      </h2>

      {/* QUESTIONS */}
      <div className="space-y-10">
        {filteredFAQs.map(faq => (
          <FAQCard key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
