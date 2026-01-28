import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { likeaquestion, dislikeaquestion, repltoquestion, getallreply, answerQuestion } from "../utility/api.jsx";

function FAQCard({ faq, user }) {
  // State for likes
  const [likes, setLikes] = useState(faq.likes || 0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  
  // State for answer (for logged in users)
  const [answer, setAnswer] = useState(faq.answer || "");
  const [answeredBy, setAnsweredBy] = useState(faq.answeredBy || "");
  
  // State for replies
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [replyName, setReplyName] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const [replyNumber, setReplyNumber] = useState("");
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [submittingReply, setSubmittingReply] = useState(false);
  const [showReplyDialog, setShowReplyDialog] = useState(false);

  // Fetch replies on mount
  useEffect(() => {
    fetchReplies();
  }, []);

  const fetchReplies = async () => {
    try {
      setLoadingReplies(true);
      const response = await getallreply(faq.id);
      const data = await response.json();
      setReplies(data.data || []);
    } catch (error) {
      console.error("Error fetching replies:", error);
    } finally {
      setLoadingReplies(false);
    }
  };

  // Handle like
  const handleLike = async () => {
    if (liked) return;
    
    try {
      const response = await likeaquestion(faq.id);
      if (response.ok) {
        const data = await response.json();
        const updatedQuestion = data.data;
        setLikes(updatedQuestion.likes);
        setLiked(true);
        if (disliked) {
          setDisliked(false);
        }
      }
    } catch (error) {
      console.error("Error liking question:", error);
    }
  };

  // Handle dislike
  const handleDislike = async () => {
    if (disliked) return;
    
    try {
      const response = await dislikeaquestion(faq.id);
      if (response.ok) {
        const data = await response.json();
        const updatedQuestion = data.data;
        setLikes(updatedQuestion.likes);
        setLiked(false);
        setDisliked(true);
      }
    } catch (error) {
      console.error("Error disliking question:", error);
    }
  };

  // Handle reply/answer submission
  const handleReplySubmit = async (e) => {
    e.preventDefault();
    
    try {
      setSubmittingReply(true);
      
      if (user) {
        // User is logged in - use answerQuestion API
        if (!replyText.trim()) return;
        
        const response = await answerQuestion(faq.id, replyText);
        
        if (response.ok) {
          const data = await response.json();
          // Update the answer state with the new answer
          setAnswer(replyText);
          setAnsweredBy(user.name || user.username || "Admin");
          setReplyText("");
          setShowReplyDialog(false);
        }
      } else {
        // User is not logged in - use repltoquestion API
        if (!replyText.trim() || !replyName.trim() || !replyEmail.trim() || !replyNumber.trim()) return;
        
        const response = await repltoquestion({
          questionId: faq.id,
          reply: replyText,
          name: replyName,
          email: replyEmail,
          number: replyNumber,
        });
        
        if (response.ok) {
          setReplyText("");
          setReplyName("");
          setReplyEmail("");
          setReplyNumber("");
          setShowReplyDialog(false);
          // Refresh replies after successful submission
          fetchReplies();
        }
      }
    } catch (error) {
      console.error("Error submitting reply:", error);
    } finally {
      setSubmittingReply(false);
    }
  };

  // Close dialog
  const closeDialog = () => {
    setShowReplyDialog(false);
    setReplyText("");
    setReplyName("");
    setReplyEmail("");
    setReplyNumber("");
  };

  return (
    <div className="bg-[#f2ffff] border border-cyan-200 rounded-lg p-6">

      {/* QUESTION */}
      <h3 className="font-bold mb-2">
        {faq.question}
      </h3>

      {/* ANSWER - Displayed at top if exists */}
      {answer && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
          <p className="text-xs font-semibold text-green-700 mb-2">Official Answer:</p>
          <p className="text-sm leading-relaxed text-gray-800">
            {answer}
          </p>
          {answeredBy && (
            <p className="text-xs italic text-green-600 text-right mt-2">
              — {answeredBy}
            </p>
          )}
        </div>
      )}

      {/* LIKES / DISLIKES */}
      <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
        <button 
          onClick={handleLike}
          className={`flex items-center gap-1 transition-colors ${liked ? 'text-blue-500' : 'hover:text-blue-500'}`}
          disabled={liked}
        >
          <FaThumbsUp />
          <span>{likes}</span>
        </button>
        <button 
          onClick={handleDislike}
          className={`flex items-center gap-1 transition-colors ${disliked ? 'text-red-500' : 'hover:text-red-500'}`}
          disabled={disliked}
        >
          <FaThumbsDown />
        </button>
      </div>

      {/* REPLIES */}
      {loadingReplies ? (
        <p className="text-xs text-gray-400 mb-3">Loading replies...</p>
      ) : (
        replies.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-600 mb-2">Replies:</p>
            {replies.map((rep, idx) => (
              <div
                key={rep.id || idx}
                className="bg-white border rounded-md p-3 mb-3"
              >
                <p className="text-xs font-semibold mb-1">
                  {rep.name || rep.user || "Anonymous"} replied
                </p>
                <p className="text-sm">{rep.reply || rep.text}</p>
              </div>
            ))}
          </div>
        )
      )}

      {/* ADD REPLY BUTTON */}
      <button
        onClick={() => setShowReplyDialog(true)}
        className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
      >
        + {user ? "Add Answer" : "Add a Reply"}
      </button>

      {/* REPLY DIALOG */}
      {showReplyDialog && (
        <>
          {/* BACKDROP */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeDialog}
          />

          {/* MODAL */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl px-12 py-5">

              {/* CLOSE BUTTON */}
              <button
                onClick={closeDialog}
                className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
              >
                <IoClose />
              </button>

              {/* TITLE */}
              <h2 className="text-2xl font-poppins font-semibold text-center mb-8">
                {user ? "Add Official Answer" : "Add a Reply"}
              </h2>

              {/* Question Preview */}
              <div className="bg-gray-50 rounded-md p-4 mb-6">
                <p className="text-sm font-poppins font-medium text-gray-600 mb-1">Question:</p>
                <p className="text-base font-medium">{faq.question}</p>
              </div>

              <form onSubmit={handleReplySubmit}>
                {/* Show user info fields only for non-logged in users */}
                {!user && (
                  <>
                    {/* NAME */}
                    <div className="mb-4">
                      <label className="block text-sm font-poppins font-medium text-gray-600 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        value={replyName}
                        onChange={(e) => setReplyName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        disabled={submittingReply}
                        required
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="mb-4">
                      <label className="block text-sm font-poppins font-medium text-gray-600 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={replyEmail}
                        onChange={(e) => setReplyEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        disabled={submittingReply}
                        required
                      />
                    </div>

                    {/* PHONE */}
                    <div className="mb-4">
                      <label className="block text-sm font-poppins font-medium text-gray-600 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={replyNumber}
                        onChange={(e) => setReplyNumber(e.target.value)}
                        placeholder="Your phone number"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        disabled={submittingReply}
                        required
                      />
                    </div>
                  </>
                )}

                {/* Reply/Answer text */}
                <div className="mb-6">
                  <label className="block text-sm font-poppins font-medium text-gray-600 mb-1">
                    {user ? "Your Answer" : "Your Reply"}
                  </label>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    rows="5"
                    placeholder={user ? "Type your answer here..." : "Type your reply here..."}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                    disabled={submittingReply}
                    required
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={
                      submittingReply || 
                      !replyText.trim() || 
                      (!user && (!replyName.trim() || !replyEmail.trim() || !replyNumber.trim()))
                    }
                    className="w-56 font-poppins bg-orange-400 hover:bg-orange-500 text-xl text-white font-semibold py-3 rounded-lg transition disabled:bg-orange-300 disabled:cursor-not-allowed"
                  >
                    {submittingReply ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FAQCard;
