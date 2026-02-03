import React, { useEffect, useRef, useState } from "react";
import test from "../assets/test.mp4";
import comingsoon from "../assets/comingsoon.svg";

// The array can now contain both video and image imports
const carouselItems = [comingsoon, comingsoon, comingsoon, comingsoon, comingsoon];

function Voices() {
  const [activeIndex, setActiveIndex] = useState(2);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const mediaRefs = useRef([]);
  const [offset, setOffset] = useState(0);

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselItems.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Calculate perfect centering offset
  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const cards = trackRef.current.children;
    const activeCard = cards[activeIndex];

    if (!activeCard) return;

    const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
    const containerCenter = containerWidth / 2;

    setOffset(containerCenter - cardCenter);
  }, [activeIndex]);

  // Play only if the active item is a video
  useEffect(() => {
    mediaRefs.current.forEach((el, index) => {
      if (!el || !(el instanceof HTMLVideoElement)) return; // Check if it's a video

      if (index === activeIndex) {
        el.play().catch(() => {});
      } else {
        el.pause();
        el.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <section className="relative w-full bg-white py-16 md:py-28 overflow-hidden">
      <h2 className="text-center font-barlow text-3xl md:text-3xl font-bold text-[#FB923C] mb-10 md:mb-10 px-4">
        Voices from the campus
      </h2>

      <div className="absolute bottom-0 left-0 w-full h-[35%] md:h-[42%] bg-[#F2FEFF]" />

      <div ref={containerRef} className="relative z-10 w-full">
        <div
          ref={trackRef}
          className="flex items-center gap-6 md:gap-14 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {carouselItems.map((src, index) => {
            const isActive = index === activeIndex;
            
            // Determine if the file is an image based on extension
            const isImage = typeof src === "string" && (
              src.includes(".svg") || 
              src.includes(".png") || 
              src.includes(".jpg") || 
              src.includes(".jpeg")
            );

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
                {isImage ? (
                  <img
                    src={src}
                    alt={`Campus voice ${index}`}
                    className="w-6px h-6px object-cover"
                  />
                ) : (
                  <video
                    ref={(el) => (mediaRefs.current[index] = el)}
                    src={src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Voices;