// "use client";

// import { useEffect, useRef, useState } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

// const videos = [
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/1.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/2.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/3.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/4.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/5.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/6.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/7.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/8.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/9.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels/10.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels//11.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels//12.mp4",
//   "https://dliarbsxzmbyfjvarhhd.supabase.co/storage/v1/object/public/egy-medya-reels//14.mp4",
// ];

// export default function PortfolioSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const [sliderRef, instanceRef] = useKeenSlider({
//     vertical: true,
//     loop: true,
//     slides: {
//       perView: 1,
//     },
//     rubberband: false,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//   });

//   const videoRefs = useRef([]);

//   useEffect(() => {
//     const observers = [];

//     videoRefs.current.forEach((video) => {
//       if (!video) return;
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             video.play().catch(() => {});
//           } else {
//             video.pause();
//           }
//         },
//         { threshold: 0.6 }
//       );
//       observer.observe(video);
//       observers.push(observer);
//     });

//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, []);

//   return (
//     <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
//       <div className="absolute top-6">
//         <span className="text-xs px-3 py-1 rounded-full bg-[#1c1c1e] border border-yellow-400 ">
//           ✨ Latest Projects
//         </span>
//       </div>

//       <div className="text-center mb-10 mt-16">
//         <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//           Creating Impactful Content,
//           <br />
//           <span>
//             Inspiring{" "}
//             <span className="inline-block text-yellow-400 p-5 bg-yellow-400 rounded-full mt-5"></span>
//             <span className="inline-block text-yellow-400 p-5 bg-white rounded-full mt-5"></span>{" "}
//             Possibilities
//           </span>
//         </h1>
//       </div>

//       {/* Container for phone and indicator */}
//       <div className="flex items-center gap-6">
//         {/* Phone mockup */}
//         <div className="relative w-[280px] md:w-[320px] lg:w-[360px] aspect-[9/16] bg-gray-900 rounded-[2.5rem] shadow-xl overflow-hidden border-[8px] border-gray-800 flex justify-center items-center">
//           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-950 rounded-b-lg z-10"></div>

//           <div
//             ref={sliderRef}
//             className="keen-slider relative w-[calc(100%-16px)] h-[calc(100%-16px)] bg-black rounded-[2rem] overflow-hidden"
//           >
//             {videos.map((src, i) => (
//               <div
//                 key={i}
//                 className="keen-slider__slide flex items-center justify-center relative"
//               >
//                 <video
//                   ref={(el) => (videoRefs.current[i] = el)}
//                   src={src}
//                   // muted
//                   loop
//                   playsInline
//                   className="object-cover w-full h-full"
//                 />
//                 {/* <div className="absolute inset-0 flex items-end justify-center pb-16 px-4 text-center">
//                   <h2 className="text-xl font-extrabold">
//                     <span className="bg-red-600 px-2">TO START</span> YOUR{" "}
//                     <br /> CAREER
//                   </h2>
//                 </div> */}
//                 <div className="absolute bottom-4 left-4 right-4 text-sm text-gray-200">
//                   Reel for Personal Brand
//                   <br />
//                   <span className="text-gray-400">– Ryan Fischer</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gray-700 rounded-full z-10"></div>
//         </div>

//         {/* Video indicator - continuous bar */}
//         <div className="relative ml-4">
//           {/* Background bar */}
//           <div
//             className="w-1 bg-gray-600 rounded-full"
//             style={{ height: `${videos.length * 40}px` }}
//           ></div>

//           {/* Active indicator */}
//           <div
//             className="absolute left-0 w-1 bg-yellow-400 rounded-full transition-all duration-500 ease-out"
//             style={{
//               height: "40px",
//               top: `${currentSlide * 40}px`,
//             }}
//           ></div>

//           {/* Clickable sections */}
//           {videos.map((_, index) => (
//             <div
//               key={index}
//               className="absolute left-0 w-4 cursor-pointer"
//               style={{
//                 height: "40px",
//                 top: `${index * 40}px`,
//                 marginLeft: "-6px",
//               }}
//               onClick={() => instanceRef.current?.moveToIdx(index)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* <div className="mt-12">
//         <a
//           href="#portfolio"
//           className="text-xs tracking-wide border-b border-white hover:opacity-70"
//         >
//           SEE ALL PORTFOLIO →
//         </a>
//       </div> */}
//     </section>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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

  // Handle first interaction
  const handleFirstInteraction = () => {
    setHasInteracted(true);
    // Play current video with sound
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
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="absolute top-6">
        <span className="text-xs px-3 py-1 rounded-full bg-[#1c1c1e] border border-yellow-400 ">
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
              <span className="inline-block w-4 h-4 bg-yellow-400 rounded-full"></span>
              <span className="inline-block w-4 h-4 bg-white rounded-full absolute -top-2 left-2"></span>
            </span>{" "}
            Possibilities
          </span>
        </h1>
      </div>

      {/* Container for phone and indicator */}
      <div className="flex items-center gap-6">
        {/* Phone mockup */}
        <div className="relative w-[280px] md:w-[320px] lg:w-[360px] aspect-[9/16] bg-gray-900 rounded-[2.5rem] shadow-xl overflow-hidden border-[8px] border-gray-800 flex justify-center items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-950 rounded-b-lg z-10"></div>

          <div
            ref={sliderRef}
            className="keen-slider relative w-[calc(100%-16px)] h-[calc(100%-16px)] bg-black rounded-[2rem] overflow-hidden"
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
                    <div className="flex items-center gap-2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
                      <svg
                        className="w-5 h-5"
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

                <div className="absolute bottom-4 left-4 right-4 text-sm text-gray-200">
                  Reel for Personal Brand
                  <br />
                  <span className="text-gray-400">– Ryan Fischer</span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gray-700 rounded-full z-10"></div>
        </div>

        {/* Video indicator - continuous bar */}
        <div className="relative ml-4">
          {/* Background bar */}
          <div
            className="w-1 bg-gray-600 rounded-full"
            style={{ height: `${videos.length * 40}px` }}
          ></div>

          {/* Active indicator */}
          <div
            className="absolute left-0 w-1 bg-yellow-400 rounded-full transition-all duration-500 ease-out"
            style={{
              height: "40px",
              top: `${currentSlide * 40}px`,
            }}
          ></div>

          {/* Clickable sections */}
          {videos.map((_, index) => (
            <div
              key={index}
              className="absolute left-0 w-4 cursor-pointer"
              style={{
                height: "40px",
                top: `${index * 40}px`,
                marginLeft: "-6px",
              }}
              onClick={() => instanceRef.current?.moveToIdx(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
