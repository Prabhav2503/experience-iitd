import { useEffect, useState } from "react";
import FAQSection from "../Components/FAQSection";
import {fetchAllQuestion} from "../utility/api.jsx";
import { useAuth } from "../context/AuthContext";

const categoryConfig = [
  { title: "Campus & City Life" },
  { title: "Placements & Careers" },
  { title: "Departments & Branches" },
  { title: "Academics & Curriculum" },
  { title: "Student Life & Activities" },
  { title: "Cultural & Fests Life" },
  { title: "Campus Facilities" },
  { title: "Research & Academic Focus" },
  { title: "Others" },
];

function Answeredfaqs() {
  const { user } = useAuth();
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchAllQuestion();
        const data = await response.json();
        setFaqData(data.data || []);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Filter data by category
  const getFilteredData = (category) => {
    return faqData.filter((item) => item.category === category);
  };

  if (loading) {
    return (
      <section className="w-full bg-white py-20 px-4 font-barlow">
        <h1 className="text-4xl font-bold text-center mb-6">FAQ</h1>
        <p className="text-center text-gray-500">Loading...</p>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-20 px-4 font-barlow">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-center mb-6">FAQ</h1>

      {/* SECTIONS - Only render if category has data */}
      {categoryConfig.map(({ title }, idx) => {
        const filteredData = getFilteredData(title);
        if (filteredData.length === 0) return null;
        
        return (
          <FAQSection
            key={idx}
            title={title}
            category={title}
            data={filteredData}
            user={user}
          />
        );
      })}

      {faqData.length === 0 && (
        <p className="text-center text-gray-500">No FAQs available.</p>
      )}
    </section>
  );
}

export default Answeredfaqs;
