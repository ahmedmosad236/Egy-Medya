"use client";

import { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

const videos = [
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/1.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/2.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/3.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/4.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/5.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/6.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/7.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/8.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/9.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/10.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels//11.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels//12.mp4",
  "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels//14.mp4",
];

export default function PortfolioSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    vertical: true,
    loop: true,
    slides: {
      perView: 1,
    },
    rubberband: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const videoRefs = useRef([]);

  const handleFirstInteraction = () => {
    setHasInteracted(true);
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      currentVideo.muted = false;
      currentVideo.play().catch(() => {});
    }
  };

  useEffect(() => {
    const observers = [];

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (hasInteracted) {
              video.muted = false;
            }
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        { threshold: 0.6 }
      );
      observer.observe(video);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [hasInteracted]);

  return (
    <motion.section
      id="portfolio"
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-6">
        <span className="text-xs px-3 py-1 rounded-full bg-[#1c1c1e] border border-yellow-400">
          ✨ Latest Projects
        </span>
      </div>

      <div className="text-center mb-10 mt-16">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Creating Impactful Content,
          <br />
          <span>
            Inspiring{" "}
            <span className="relative inline-block mx-2">
              <span className="inline-block text-yellow-400 p-5 bg-yellow-400 rounded-full mt-5"></span>
              <span className="inline-block text-yellow-400 p-5 bg-white rounded-full mt-5"></span>{" "}
            </span>{" "}
            Possibilities
          </span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
        {/* Phone mockup with consistent borders */}
        <div className="relative mx-auto w-[280px] md:w-[300px] lg:w-[340px] aspect-[9/16] rounded-[2.5rem] bg-gray-800 border-[4px] border-white shadow-[0_0_0_1px_#4b5563,0_0_0_2px_#ffffff] p-2">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-16 md:w-20 h-6 md:h-7 bg-black rounded-full flex items-center justify-end pr-2">
              <div className="w-2.5 h-2.5 md:w-3 h-3 bg-gray-600 rounded-full relative">
                <div className="absolute inset-0.5 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Left side buttons */}
          <div className="h-[16px] md:h-[20px] w-[3px] bg-white absolute -left-[8px] md:-left-[10px] top-[60px] md:top-[72px] rounded-l-lg"></div>
          <div className="h-[24px] md:h-[32px] w-[3px] bg-white absolute -left-[8px] md:-left-[10px] top-[100px] md:top-[124px] rounded-l-lg"></div>
          <div className="h-[36px] md:h-[46px] w-[3px] bg-white absolute -left-[8px] md:-left-[10px] top-[140px] md:top-[170px] rounded-l-lg"></div>
          <div className="h-[36px] md:h-[46px] w-[3px] bg-white absolute -left-[4px] md:-left-[4px] top-[148px] md:top-[178px] rounded-l-lg"></div>

          {/* Right side button */}
          <div className="h-[50px] md:h-[64px] w-[3px] bg-white absolute -right-[8px] md:-right-[10px] top-[110px] md:top-[142px] rounded-r-lg"></div>

          {/* Screen - now with matching rounded corners */}
          <div
            ref={sliderRef}
            className="keen-slider rounded-[2rem] overflow-hidden w-full h-full bg-black"
          >
            {videos.map((src, i) => (
              <div
                key={i}
                className="keen-slider__slide flex items-center justify-center relative"
              >
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={src}
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full cursor-pointer"
                  onClick={handleFirstInteraction}
                />

                {!hasInteracted && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer"
                    onClick={handleFirstInteraction}
                  >
                    <div className="flex items-center gap-2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm md:text-base">
                      <svg
                        className="w-4 h-4 md:w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">اضغط للتشغيل بصوت</span>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 text-xs md:text-sm text-gray-200">
                  Reel for Personal Brand
                  <br />
                  <span className="text-gray-400">– Ryan Fischer</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video indicator - continuous bar */}
        <div className="relative ml-2 md:ml-4">
          <div
            className="w-0.5 md:w-1 bg-gray-600 rounded-full"
            style={{ height: `${videos.length * 30}px` }}
          ></div>

          <div
            className="absolute left-0 w-0.5 md:w-1 bg-yellow-400 rounded-full transition-all duration-500 ease-out"
            style={{
              height: "30px",
              top: `${currentSlide * 30}px`,
            }}
          ></div>

          {videos.map((_, index) => (
            <div
              key={index}
              className="absolute left-0 w-3 md:w-4 cursor-pointer"
              style={{
                height: "30px",
                top: `${index * 30}px`,
                marginLeft: "-5px",
              }}
              onClick={() => instanceRef.current?.moveToIdx(index)}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="#portfolio" className="text-yellow-400 underline">
          SEE ALL PORTFOLIO →
        </a>
      </div>
    </motion.section>
  );
}
