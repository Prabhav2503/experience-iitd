import React from "react";
import iitdhome from "../assets/iitdhome.png";

function Facilities() {
  return (
    <>
     

      <section className="w-full bg-white py-16 px-4 font-barlow">
        <div className="max-w-6xl mx-auto">

          {/* PAGE TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#9F0202] text-center mb-20">
            FACILITIES
          </h1>

          {/* ================= IIT HOSPITAL ================= */}
          <div className="mb-24">
            <h2 className="text-lg font-bold text-[#9F0202] ">
              IIT HOSPITAL
            </h2>
            <div className="h-[1px] bg-[#9F0202] mb-10"></div>

            <div className="grid md:grid-cols-3 gap-10 items-start">

              {/* IMAGES (LEFT) */}
              
              <div className="flex flex-col gap-6">
                <img
                        src={iitdhome}
                        className="w-full h-50 object-cover"
                        />
                <img
                        src={iitdhome}
                        className="w-full h-50 object-cover"
                        />
              </div>
             

              {/* TEXT 1 */}
              <p className="text-sm text-gray-800 leading-relaxed">
                The IIT Delhi Hospital is a vital healthcare facility dedicated to serving the medical needs of students, faculty, staff, and residents of the Indian Institute of Technology Delhi campus. Located within the institute premises, the hospital provides accessible primary healthcare services, medical consultations, and emergency support, ensuring timely care in a familiar and convenient environment.
              </p>

              {/* TEXT 2 */}
              <p className="text-sm text-gray-800 leading-relaxed">
                Staffed by qualified medical professionals and supported by essential diagnostic and treatment facilities, the hospital focuses on both curative and preventive healthcare. In addition to addressing routine and emergency medical needs, it plays an important role in promoting health awareness, wellness initiatives, and student well-being. By offering reliable medical support around the clock, the IIT Delhi Hospital contributes to a safe, healthy, and supportive campus life, enabling the institute community to focus on learning, research, and daily activities with confidence.
              </p>
            </div>
          </div>

          {/* ================= SHOPS ================= */}
          <div className="mb-24">
            <h2 className="text-lg font-bold text-[#9F0202] ">
              SHOPS
            </h2>
            <div className="h-[1px] bg-[#9F0202] mb-10"></div>

            <div className="grid md:grid-cols-3 gap-10 items-start">

              {/* TEXT 1 */}
              <p className="text-sm text-gray-800 leading-relaxed">
                Every hostel at the Indian Institute of Technology Delhi is equipped with its own convenience shop to support the daily needs of students. These hostel shops provide easy access to essential items such as groceries, stationery, snacks, toiletries, and basic utilities, ensuring comfort and convenience within walking distance. By operating close to student residences, the hostel shops play an important role in making campus life more self-sufficient, saving time, and enhancing the overall living experience at IIT Delhi.
              </p>

              {/* TEXT 2 */}
              <p className="text-sm text-gray-800 leading-relaxed">
                Beyond convenience, the hostel shops also serve as informal social spaces where students often interact during daily routines. With flexible operating hours and a student-friendly setup, these shops help create a comfortable and connected residential environment. By meeting everyday requirements within the hostel premises, they contribute to a smoother, more independent, and well-supported living experience for students across the IIT Delhi campus.
              </p>

              {/* IMAGES (RIGHT) */}
              
              <div className="flex flex-col gap-6">
                <img
                        src={iitdhome}
                        className="w-full h-50 object-cover "
                        />

                <img
  src={iitdhome}
  className="w-full h-50 object-cover "
/>

              </div>
             
            </div>
          </div>

          {/* ================= IIT MARKET ================= */}
          <div className="mb-24">
            <h2 className="text-lg font-bold text-[#9F0202] ">
              IIT MARKET
            </h2>
            <div className="h-[1px] bg-[#9F0202] mb-10"></div>

            <div className="grid md:grid-cols-3 gap-10 items-start">

              {/* IMAGES (LEFT) */}
              
              <div className="flex flex-col gap-6">
                <img
                        src={iitdhome}
                        className="w-full h-50 object-cover"
                        />
                <img
                        src={iitdhome}
                        className="w-full h-50 object-cover"
                        />
              </div>
             

              {/* TEXT 1 */}
              <p className="text-sm text-gray-800 leading-relaxed">
The IIT Market at the Indian Institute of Technology Delhi serves as a central convenience and social hub for students, faculty, staff, and campus residents. It houses a variety of grocery stores, daily-need shops, and essential services that cater to the everyday requirements of the campus community. From fresh groceries and household items to stationery and basic utilities, the market ensures easy access to necessities within the campus, contributing to a comfortable and self-sustained living environment.              </p>

              {/* TEXT 2 */}
              <p className="text-sm text-gray-800 leading-relaxed">
In addition to grocery and utility outlets, the IIT Market features popular food and dining options, including well-known outlets such as Bikanervala, Chicago, Tealogy along with other eateries and service outlets. These spaces offer convenient dining choices, quick snacks, and informal gathering spots, making the market a lively area beyond its functional role. By combining essential services with food, retail, and social spaces, the IIT Market plays an important role in enhancing everyday campus life at IIT Delhi.              </p>
            </div>
          </div>

          {/*=================NIGHT CANTEEN ================= */}
          <div className="mb-24">
            <h2 className="text-lg font-bold text-[#9F0202] ">
              NIGHT CANTEEN
            </h2>
            <div className="h-[1px] bg-[#9F0202] mb-10"></div>

            <div className="grid md:grid-cols-3 gap-10 items-start">

              {/* TEXT 1 */}
              <p className="text-sm text-gray-800 leading-relaxed">
The night canteens at the Indian Institute of Technology Delhi play an important role in supporting campus life beyond regular hours. Located at accessible points across the campus, these canteens provide late-night food and refreshments for students, researchers, and staff, especially during long study hours, project work, and exam periods. They ensure that essential dining options remain available even after most campus facilities have closed.              </p>

              {/* TEXT 2 */}
              <p className="text-sm text-gray-800 leading-relaxed">
Offering a variety of quick meals, snacks, and beverages, the night canteens serve as informal gathering spaces where students can relax, interact, and take breaks from academic routines. Whether for a late-night discussion, a post-study refreshment, or a casual meet-up with friends, these canteens contribute to the vibrant and inclusive campus culture at IIT Delhi by keeping the campus active, connected, and welcoming around the clock.              </p>

              {/* IMAGES (RIGHT) */}
              
              <div className="flex flex-col gap-6">
                <img
                        src={iitdhome}
                        className="w-full h-50 object-cover "
                        />

                <img
  src={iitdhome}
  className="w-full h-50 object-cover "
/>

              </div>
             
            </div>
          </div>

          {/* ================= BUS/RICKSHAW/YULU ================= */}
          <div className="mb-24">
            <h2 className="text-lg font-bold text-[#9F0202] ">
              BUS/RICKSHAW/YULU
            </h2>
            <div className="h-[1px] bg-[#9F0202] mb-10"></div>

            <div className="grid md:grid-cols-3 gap-10 items-start">

              {/* IMAGES (LEFT) */}
              
              <div className="flex flex-col gap-6">
                <img
                        src={iitdhome}
                        className="w-full h-50 object-cover"
                        />
                <img
                        src={iitdhome}
                        className="w-full h-50 object-cover"
                        />
              </div>
             

              {/* TEXT 1 */}
              <p className="text-sm text-gray-800 leading-relaxed">
The IIT Market at the Indian Institute of Technology Delhi serves as a central convenience and social hub for students, faculty, staff, and campus residents. It houses a variety of grocery stores, daily-need shops, and essential services that cater to the everyday requirements of the campus community. From fresh groceries and household items to stationery and basic utilities, the market ensures easy access to necessities within the campus, contributing to a comfortable and self-sustained living environment.              </p>

              {/* TEXT 2 */}
              <p className="text-sm text-gray-800 leading-relaxed">
In addition to grocery and utility outlets, the IIT Market features popular food and dining options, including well-known outlets such as Bikanervala, Chicago, Tealogy along with other eateries and service outlets. These spaces offer convenient dining choices, quick snacks, and informal gathering spots, making the market a lively area beyond its functional role. By combining essential services with food, retail, and social spaces, the IIT Market plays an important role in enhancing everyday campus life at IIT Delhi.              </p>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Facilities;
