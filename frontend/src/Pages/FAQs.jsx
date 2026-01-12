import React from "react";
import Navbar from "../components/Navbar";

function FAQs() {
  return (
    <>
      <Navbar />

      <section className="w-full bg-white py-16 px-4 font-barlow">
        <div className="max-w-6xl mx-auto text-center">

          {/* PAGE HEADING */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#9F0202] mb-12">
            FAQ
          </h1>

          {/* FAQ CONTAINER */}
          <div className="bg-red-50 rounded-lg px-10 py-6 text-left mb-8">

            {/* SECTION TITLE */}
            <h2 className="text-lg font-bold text-[#9F0202] text-center mb-10">
              Campus & City Life
            </h2>

            {/* Q1 */}
            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                What is the transition to hostel life like?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                I would describe it as exciting yet slightly overwhelming at first. Living away from home teaches independence very quickly. You learn to manage your routine, make new friends and adjust to shared spaces. You’ll probably get the chance to create the most amazing and memorable set of memories for the rest of your life. You’ll possibly witness a complete change of perspective towards things after your college life.
              </p>
            </div>

            {/* Q2 */}
            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                What essentials should we bring to the hostel?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                You should be ready with all the essential documents (Aadhar,
                PAN, etc.) and other documents like income (if applicable).
                Besides that, you should also be having some basic medication
                requirements, some basic day-to-day equipment. However, you’ll
                get to purchase most of the daily useful equipment within the
                campus only.
              </p>
            </div>

            {/* Q3 */}
            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                How much should we study and how to know what to study?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed mb-3">
                <span className="font-medium">How much to study:</span> It
                actually depends on what is the pattern by which you study, how
                much you concentrate in class, how well you’re able to
                understand a particular topic etc. So for a student, studying
                regularly, 2–3 hours of daily self-study is more than sufficient
                to earn a good grade.
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                <span className="font-medium">What to study:</span> Please follow
                the class; most professors provide their notes for reference.
                Otherwise, you may refer to the textbook. Besides all these,
                there are various sites prepared by students which you may also
                refer to get to know topics going on in class.
              </p>
            </div>

            {/* Q4 */}
            <div>
              <p className="font-semibold text-md mb-2">
                What about Delhi and exploring, where can we go?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Delhi has something for every mood: historic spots like
                Humayun’s Tomb and India Gate, food hubs such as Chandni Chowk,
                Majnu Ka Tila and CP, and chill places like Hauz Khas, museums
                and art cafés. You may also go for late night bicycle rides to
                places like India Gate.
              </p>
            </div>

          </div>


          <div className="bg-red-50 rounded-lg px-10 py-6 text-left">

            {/* SECTION TITLE */}
            <h2 className="text-lg font-bold text-[#9F0202] text-center mb-10">
              Academics & Curriculum
            </h2>

            {/* Q1 */}
            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                How heavy are academics at IITD, where does it stand when compared to other IITs?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
So, from a grading perspective, IIT Delhi is considered quite hard to earn good grades, as compared to most other IITs. However, it totally depends on the course, professor etc. Academics here are a little heavy, but at the same time manageable also. You can quite conveniently manage your extra curriculars and your co curriculars with your academics, if you plan smartly and do adequate hardwork              </p>
            </div>

            {/* Q2 */}
            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                How can the academic pressure be reduced? Particularly what is senior students’ take on managing everything with such high academic pressure?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Best way to reduce the workload of the studies is to avoid keeping thing piled up for future. Try to do things as soon as you can, I agree it’s something inconsistent to natural human tendency, but in this way almost 70% of the workload is off burden. 
For managing other activities with studies, try to set your priorities. It’s recommended, not to go after everything you admire. Take at maximum 2 activities besides your academics (this is what seniors recommend). Keep yourself very disciplined and try to be do things as soon as possible. Once, this becomes a habit, you’ll smoothly get along with things.

              </p>
            </div>

            {/* Q3 */}
            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                How much should we study and how to know what to study?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed mb-3">
                <span className="font-medium">How much to study:</span> It
                actually depends on what is the pattern by which you study, how
                much you concentrate in class, how well you’re able to
                understand a particular topic etc. So for a student, studying
                regularly, 2–3 hours of daily self-study is more than sufficient
                to earn a good grade.
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                <span className="font-medium">What to study:</span> Please follow
                the class; most professors provide their notes for reference.
                Otherwise, you may refer to the textbook. Besides all these,
                there are various sites prepared by students which you may also
                refer to get to know topics going on in class.
              </p>
            </div>

            {/* Q4 */}
            <div>
              <p className="font-semibold text-md mb-2">
                What about Delhi and exploring, where can we go?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Delhi has something for every mood: historic spots like
                Humayun’s Tomb and India Gate, food hubs such as Chandni Chowk,
                Majnu Ka Tila and CP, and chill places like Hauz Khas, museums
                and art cafés. You may also go for late night bicycle rides to
                places like India Gate.
              </p>
            </div>
            </div>
            
        </div>
      </section>
    </>
  );
}

export default FAQs;
