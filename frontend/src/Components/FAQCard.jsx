import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";

function FAQCard({ faq }) {
    // 1️⃣ Local state for likes
  const [likes, setLikes] = useState(faq.likes);
  const [liked, setLiked] = useState(faq.likedByUser);

  // 2️⃣ Handle click
  const handleLike = () => {
    if (liked) return; // prevent multiple likes

    setLikes(prev => prev + 1);   // UI update
    setLiked(true);               // mark as liked

    // 3️⃣ Backend call (placeholder)
    /*
    axios.post(`/api/faq/${faq.id}/like`);
    */
  };

  return (
    <div className="bg-[#f2ffff] border border-cyan-200 rounded-lg p-6">

      {/* QUESTION */}
      <h3 className="font-bold mb-2">
        {faq.question}
      </h3>

      {/* ANSWER */}
      <p className="text-sm leading-relaxed mb-4">
        {faq.answer}
      </p>

      {/* ANSWERED BY */}
      <p className="text-xs italic text-right mb-4">
        {faq.answeredBy}
      </p>

      {/* LIKES */}
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
        <FaThumbsUp />
        <span>{faq.likes}</span>
      </div>

      {/* REPLIES */}
      {faq.replies.map((rep, idx) => (
        <div
          key={idx}
          className="bg-white border rounded-md p-3 mb-3"
        >
          <p className="text-xs font-semibold mb-1">
            {rep.user} replied
          </p>
          <p className="text-sm">{rep.text}</p>
        </div>
      ))}

      {/* REPLY INPUT (UI ONLY) */}
      <input
        type="text"
        placeholder="Reply"
        className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none"
      />
    </div>
  );
}

export default FAQCard;
