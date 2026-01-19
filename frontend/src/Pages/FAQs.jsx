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

          {/* ================= Campus & City Life ================= */}
          <div className="bg-red-50 rounded-lg px-10 py-6 text-left mb-8">
            <h2 className="text-lg font-bold text-[#9F0202] text-center mb-10">
              Campus & City Life
            </h2>

            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                What is the transition to hostel life like?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                I would describe it as exciting yet slightly overwhelming at first. Living away from home teaches independence very quickly. You learn to manage your routine, make new friends and adjust to shared spaces. You’ll probably get the chance to create the most amazing and memorable set of memories for the rest of your life. You’ll possibly witness a complete change of perspective towards things after your college life.
              </p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                What essentials should we bring to the hostel?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                You should be ready with all the essential documents (Aadhar, PAN, etc.) and other documents like income (if applicable). Besides that, you should also be having some basic medication requirements, some basic day-to-day equipment. However, you’ll get to purchase most of the daily useful equipment within the campus only.
              </p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                How much should we study and how to know what to study?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed mb-3">
                <span className="font-medium">How much to study:</span> It actually depends on what is the pattern by which you study, how much you concentrate in class, how well you’re able to understand a particular topic etc. So for a student, studying regularly, 2–3 hours of daily self-study is more than sufficient to earn a good grade.
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                <span className="font-medium">What to study:</span> Please follow the class; most professors provide their notes for reference. Otherwise, you may refer to the textbook. Besides all these, there are various sites prepared by students which you may also refer to get to know topics going on in class.
              </p>
            </div>

            <div>
              <p className="font-semibold text-md mb-2">
                What about Delhi and exploring, where can we go?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Delhi has something for every mood: historic spots like Humayun’s Tomb and India Gate, food hubs such as Chandni Chowk, Majnu Ka Tila and CP, and chill places like Hauz Khas, museums and art cafés. You may also go for late night bicycle rides to places like India Gate.
              </p>
            </div>
          </div>

          {/* ================= Academics & Curriculum ================= */}
          <div className="bg-red-50 rounded-lg px-10 py-6 text-left mb-8">
            <h2 className="text-lg font-bold text-[#9F0202] text-center mb-10">
              Academics & Curriculum
            </h2>

            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                How heavy are academics at IITD, where does it stand when compared to other IITs?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                So, from a grading perspective, IIT Delhi is considered quite hard to earn good grades, as compared to most other IITs. However, it totally depends on the course, professor etc. Academics here are a little heavy, but at the same time manageable also. You can quite conveniently manage your extra curriculars and your co curriculars with your academics, if you plan smartly and do adequate hardwork
              </p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                How can the academic pressure be reduced? Particularly what is senior students’ take on managing everything with such high academic pressure?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Best way to reduce the workload of the studies is to avoid keeping thing piled up for future. Try to do things as soon as you can, I agree it’s something inconsistent to natural human tendency, but in this way almost 70% of the workload is off burden. For managing other activities with studies, try to set your priorities. It’s recommended, not to go after everything you admire. Take at maximum 2 activities besides your academics (this is what seniors recommend). Keep yourself very disciplined and try to be do things as soon as possible. Once, this becomes a habit, you’ll smoothly get along with things.
              </p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                How do course credits work? (LTP structure)
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Course credit is actually the rough estimation of how much time the course demands to be taught, which in turn is an indication of how much efforts, we have to put in and hown bigger impact it might have on our grades. It is calculated as L+T+P/2 credits. For better understanding, you may refer to the course of study
              </p>
            </div>

            <div>
              <p className="font-semibold text-md mb-2">
                What is the course structure and grading system at IITD?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                So, courses here are designed such that the first year students have most of the courses same for all the departments, there are 1-2 department specific courses, which are done. After the first year, all the departments have their specific courses, with different credit weightage. Grading is done such that the grade for the semester is calculated as the weighted average of the grades earned in each course, where credit to the course is the weight used here. Besides that, if you earn an F grade, then grade you get in the course is 0. You may also audit and withdraw a course. For, more you may refer to the course of study.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-md mb-2">
                Is the recent curriculum change at par with international standards?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                To some extent, it can be said that the new curriculum is comparatively, quite more compatible to the international. IIT Delhi recently revamped its entire curriculum. The core load has been reduced, and students now get more flexibility through minors, honours tracks and open electives. There’s greater focus on hands-on learning, industry internships and outcome-based education — very similar to models followed by top global universities.
              </p>
            </div>
          </div>

          {/* ================= Placements & Careers ================= */}
          <div className="bg-red-50 rounded-lg px-10 py-6 text-left mb-8">
            <h2 className="text-lg font-bold text-[#9F0202] text-center mb-10">
              Placements & Careers
            </h2>

            <div>
              <p className="font-semibold text-md mb-2">
                Is the focus more on placements or research at IITD?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                At IIT Delhi, you’ll find a balance of both. Students are free to choose the path they want, whether that’s research, placements, or even entrepreneurship. On the research side, professors and facilities are top-notch, with personal guidance and strong support for projects and publications. On the placements side, we have a very active placement cell that organizes and manages the entire recruitment process. And if you’re interested in startups, there’s also a dedicated incubation hub where students get mentorship from alumni, industry experts, and even VCs. So while at IITD, you can explore all directions and decide what excites you the most.
              </p>
            </div>
          </div>

          {/* ================= Campus Facilities ================= */}
          <div className="bg-red-50 rounded-lg px-10 py-6 text-left mb-8">
            <h2 className="text-lg font-bold text-[#9F0202] text-center mb-10">
              Campus Facilities
            </h2>

            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                How is the mess food? Is it hygienic?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                The mess food is decent and edible,but, of course, you can’t compare it to home-cooked food, but it does have a fairly good taste with a variety of options. On special occasions, there are also special dinners. Hygiene protocols are followed carefully, so overall, the standard is maintained.
              </p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                What sports are there at IITD? Facilities, coaches?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Not really. In IITD, due to space constraints, first-year students are usually allotted double- or triple-sharing rooms. From the second year onwards, students typically get single or double rooms depending on the hostel. New hostels are also being built to improve living conditions in the coming years.
              </p>
            </div>

            <div>
              <p className="font-semibold text-md mb-2">
                Are the rooms spacious?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Not really. In IITD, due to space constraints, first-year students are usually allotted double- or triple-sharing rooms. From the second year onwards, students typically get single or double rooms depending on the hostel. New hostels are also being built to improve living conditions in the coming years
              </p>
            </div>
          </div>

          {/* ================= Research & Academics Focus ================= */}
          <div className="bg-red-50 rounded-lg px-10 py-6 text-left mb-8">
            <h2 className="text-lg font-bold text-[#9F0202] text-center mb-10">
              Research & Academics Focus
            </h2>

            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                What is the right time to do projects to aim for a research internship?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                There isn’t a single “perfect” time to start projects. In the first year, it’s better to focus on settling into college life, exploring your interests, and building your network. Starting from the 3rd semester is usually considered ideal if you’re aiming for a strong research profile. Don’t worry…seniors regularly conduct sessions on everything you need, from foreign research internships to corporate opportunities, so you’ll always have guidance along the way.
              </p>
            </div>

            <div>
              <p className="font-semibold text-md mb-2">
                How are dual degrees different from B.Tech degrees?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                For the first three years, dual degree and B.Tech students have almost identical courses and experiences. The difference starts from the fourth year the dual degree students take on additional coursework and research load. The main advantage is that you earn a Master’s degree with just one extra year, along with more research opportunities. The downside is, of course, that extra year of study. Many students find dual degrees give them better preparation overall, but B.Tech students also have the option to convert to a dual degree at the end of their 3rd year.
              </p>
            </div>
          </div>

          {/* ================= Miscellaneous / Fun ================= */}
          <div className="bg-red-50 rounded-lg px-10 py-6 text-left">
            <h2 className="text-lg font-bold text-[#9F0202] text-center mb-10">
              Miscellaneous / Fun
            </h2>

            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                By hearing the name Delhi, we often think about air pollution. How does pollution impact the students of IITD?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Not going to lie…Delhi’s pollution can be tough. But IITD’s campus has its own green ecosystem with plenty of trees and systems that make life on campus quite comfortable. Most of the year, you won’t feel the pollution as much. It’s mainly around November (the start of winter) when air quality dips, but even then it doesn’t affect day-to-day life inside campus too much.
              </p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-md mb-2">
                How much CG can I get by studying one night before an exam?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                Honestly, it depends on the person. At IIT, maintaining a decent CGPA is important for almost everything, so relying only on last-minute study is risky. Attending lectures and labs makes the load much lighter during exams. Some students do manage with a week’s preparation, while others study consistently throughout the semester and ace their exams. Ideally, try to build the habit of regular studying, especially in the first two years…because it really pays off later.
              </p>
            </div>

            <div>
              <p className="font-semibold text-md mb-2">
                When should I start coding?
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                The simple answer is start as early as you can. The sooner you begin, the more proficient you’ll become. In your first year, you’ll already have an introductory programming course to learn the basics. Many students start competitive programming during their first-year summer break, which gives plenty of time to learn and practice. So don’t wait too long…just start, and improve along the way.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default FAQs;
