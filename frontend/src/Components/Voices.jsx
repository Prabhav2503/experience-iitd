import React, { useEffect, useRef, useState } from "react";
import test from "../assets/test.mp4";

// Cleaned up the array to use strings directly
const videos = [test, test, test, test, test, test];

function Voices() {
  const [activeIndex, setActiveIndex] = useState(2);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [offset, setOffset] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // calculate perfect centering offset
  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const cards = trackRef.current.children;
    const activeCard = cards[activeIndex];

    if (!activeCard) return;

    // The math remains the same, but card sizes change via CSS
    const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
    const containerCenter = containerWidth / 2;

    setOffset(containerCenter - cardCenter);
  }, [activeIndex]);

  // play only center video
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <section className="relative w-full bg-white py-16 md:py-28 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center font-barlow text-3xl md:text-2xl font-bold text-[#FB923C] mb-10 md:mb-20 px-4">
        Voices from the campus
      </h2>

      {/* Mint bottom background */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] md:h-[42%] bg-[#F2FEFF]" />

      {/* Carousel container */}
      <div
        ref={containerRef}
        className="relative z-10 w-full"
      >
        <div
          ref={trackRef}
          className="flex items-center gap-6 md:gap-14 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {videos.map((src, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`bg-[#CFFBFF] rounded-[30px] md:rounded-[40px] overflow-hidden flex-shrink-0 flex items-center justify-center transition-all duration-700
                  ${
                    isActive
                      ? "w-[260px] h-[380px] md:w-[240px] md:h-[340px] scale-100 shadow-lg opacity-100"
                      : "w-[220px] h-[320px] scale-90 md:scale-95 opacity-50 md:opacity-70"
                  }
                `}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Voices;