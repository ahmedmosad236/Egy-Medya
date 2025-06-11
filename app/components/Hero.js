// "use client";

// import { motion } from "framer-motion";
// import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// // import Link from "next/link";

// const Hero = () => {
//   const serviceTags = [
//     "Content Management",
//     "Social Strategy",
//     "Logo Design",
//     "Content Creation",
//     "Content Research",
//     "Script Writing",
//     "Video Shooting",
//     "Editing & Captions",
//     "Brand Development",
//     "Motion Graphics",
//     "Color Grading",
//     "Sound Design",
//   ];

//   return (
//     <section
//       className="relative min-h-screen flex items-center overflow-hidden pt-24"
//       style={{
//         background:
//           "linear-gradient(to bottom right, #000 0%, #000 40%, #0e1e2a 60%, #d4af37 100%)",
//       }}
//     >
//       {/* Content */}
//       <div className="w-full relative z-10">
//         <div className="max-w-7xl text-left px-6 sm:px-10 md:px-16 lg:px-24">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             // className="text-[85px] md:text-6xl font-semibold text-white mb-4 leading-tight"
//             className="text-[14px] md:text-[80px] font-semibold text-white mb-4 leading-[85px] tracking-[-0.03em] font-poppins"
//           >
//             We Craft High-Impact Videos More Views, More Clients, More Growth!
//           </motion.h1>

//           {/* <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-2xl md:text-3xl text-amber-500 font-semibold mb-6 leading-tight"
//           >
//             More Views, More Clients, More Growth!
//           </motion.h2> */}

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
//           >
//             Your brand deserves content that stands out — we create videos that
//             capture attention and drive real results.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <motion.button
//               onClick={() => {
//                 document
//                   .getElementById("contact")
//                   .scrollIntoView({ behavior: "smooth" });
//               }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#D4AF37] text-black px-6 py-2 mb-10 rounded-full font-semibold text-lg hover:bg-amber-400 transition-all inline-flex items-center space-x-2"
//             >
//               <span>GET IN TOUCH</span>
//               <FiArrowRight className="w-10 h-10 p-2 bg-white rounded-3xl text-black" />
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Service Tags Swiper */}
//       <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
//         <div className="w-full">
//           {/* <Swiper
//             modules={[Autoplay]}
//             spaceBetween={16}
//             slidesPerView="auto"
//             // freeMode={true}
//             loop={true}
//             autoplay={{
//               delay: 0,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: false,
//               reverseDirection: false,
//             }}
//             speed={3000}
//             allowTouchMove={false}
//             className="service-tags-swiper"
//             breakpoints={{
//               320: {
//                 spaceBetween: 12,
//               },
//               768: {
//                 spaceBetween: 16,
//               },
//             }}
//           >
//             {[...serviceTags, ...serviceTags].map((tag, index) => (
//               <SwiperSlide key={`${tag}-${index}`} className="!w-auto">
//                 <motion.span
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
//                   className="bg-transparent border border-white/30 text-white px-4 py-2 rounded-full whitespace-nowrap inline-flex items-center space-x-2 hover:border-amber-500/50 transition-colors duration-300"
//                 >
//                   <FiCheckCircle className="w-4 h-4 text-amber-500" />
//                   <span>{tag}</span>
//                 </motion.span>
//               </SwiperSlide>
//             ))}
//           </Swiper> */}
//           <Swiper
//             modules={[Autoplay]}
//             spaceBetween={16}
//             slidesPerView="auto"
//             loop={true}
//             autoplay={{
//               delay: 0,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: false,
//             }}
//             speed={10000}
//             allowTouchMove={false}
//             grabCursor={false}
//             className="service-tags-swiper"
//             breakpoints={{
//               320: {
//                 spaceBetween: 12,
//               },
//               768: {
//                 spaceBetween: 16,
//               },
//             }}
//           >
//             {[...serviceTags, ...serviceTags, ...serviceTags].map(
//               (tag, index) => (
//                 <SwiperSlide key={`${tag}-${index}`} className="!w-auto">
//                   <motion.span
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.8 + index * 0.02 }}
//                     className="bg-transparent border border-white/30 text-white px-4 py-2 rounded-full whitespace-nowrap inline-flex items-center space-x-2 hover:border-amber-500/50 transition-colors duration-300"
//                   >
//                     <FiCheckCircle className="w-4 h-4 text-amber-500" />
//                     <span>{tag}</span>
//                   </motion.span>
//                 </SwiperSlide>
//               )
//             )}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// "use client";

// import { FiCheckCircle } from "react-icons/fi";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const serviceTags = [
//     "Content Management",
//     "Social Strategy",
//     "Logo Design",
//     "Content Creation",
//     "Content Research",
//     "Script Writing",
//     "Video Shooting",
//     "Editing & Captions",
//     "Brand Development",
//     "Motion Graphics",
//     "Color Grading",
//     "Sound Design",
//   ];

//   return (
//     <section
//       className="relative min-h-screen flex items-center overflow-hidden pt-24"
//       style={{
//         background:
//           "linear-gradient(to bottom right, #000 0%, #000 40%, #0e1e2a 60%, #d4af37 100%)",
//       }}
//     >
//       <div className="w-full relative z-10">
//         <div className="max-w-7xl text-left px-6 sm:px-10 md:px-16 lg:px-24">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-[14px] md:text-[80px] font-semibold text-white mb-4 leading-[85px] tracking-[-0.03em] font-poppins"
//           >
//             We Craft High-Impact Videos More Views, More Clients, More Growth!
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
//           >
//             Your brand deserves content that stands out — we create videos that
//             capture attention and drive real results.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <motion.button
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   .scrollIntoView({ behavior: "smooth" })
//               }
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#D4AF37] text-black px-6 py-2 mb-10 rounded-full font-semibold text-lg hover:bg-amber-400 transition-all inline-flex items-center space-x-2"
//             >
//               <span>GET IN TOUCH</span>
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Custom Marquee Style Tags */}
//       <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
//         <div className="whitespace-nowrap animate-marquee flex gap-4 px-4">
//           {[...serviceTags, ...serviceTags].map((tag, index) => (
//             <span
//               key={`${tag}-${index}`}
//               className="bg-transparent border border-white/30 text-white px-4 py-2 rounded-full whitespace-nowrap inline-flex items-center space-x-2 hover:border-amber-500/50 transition-colors duration-300"
//             >
//               <FiCheckCircle className="w-4 h-4 text-amber-500" />
//               <span>{tag}</span>
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* CSS Animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;
// "use client";

// import { FiCheckCircle } from "react-icons/fi";
// import { motion } from "framer-motion";

// const Hero = () => {
//   const serviceTags = [
//     "Content Management",
//     "Social Strategy",
//     "Logo Design",
//     "Content Creation",
//     "Content Research",
//     "Script Writing",
//     "Video Shooting",
//     "Editing & Captions",
//     "Brand Development",
//     "Motion Graphics",
//     "Color Grading",
//     "Sound Design",
//   ];

//   return (
//     <section
//       className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
//       style={{
//         background:
//           "linear-gradient(to bottom right, #000 0%, #000 40%, #0e1e2a 60%, #d4af37 100%)",
//       }}
//     >
//       <div className="w-full relative z-10">
//         <div className="max-w-7xl text-left px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-semibold text-white mb-4 leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[85px] tracking-[-0.03em] font-poppins"
//           >
//             We Craft High-Impact Videos More Views, More Clients, More Growth!
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl"
//           >
//             Your brand deserves content that stands out — we create videos that
//             capture attention and drive real results.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <motion.button
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-[#D4AF37] text-black px-5 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-10 rounded-full font-semibold text-base sm:text-lg hover:bg-amber-400 transition-all inline-flex items-center space-x-2"
//             >
//               <span>GET STARTED</span>
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Custom Marquee Style Tags */}
//       <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 overflow-hidden">
//         <div className="whitespace-nowrap animate-marquee flex gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4">
//           {[...serviceTags, ...serviceTags].map((tag, index) => (
//             <span
//               key={`${tag}-${index}`}
//               className="bg-transparent border border-white/30 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap inline-flex items-center space-x-1.5 sm:space-x-2 hover:border-amber-500/50 transition-colors duration-300 text-sm sm:text-base"
//             >
//               <FiCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 flex-shrink-0" />
//               <span>{tag}</span>
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* CSS Animation */}
//       <style>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 15s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;
"use client";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  const serviceTags = [
    "Content Management",
    "Social Strategy",
    "Logo Design",
    "Content Creation",
    "Content Research",
    "Script Writing",
    "Video Shooting",
    "Editing & Captions",
    "Brand Development",
    "Motion Graphics",
    "Color Grading",
    "Sound Design",
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
      style={{
        background:
          "linear-gradient(to bottom right, #000 0%, #000 40%, #0e1e2a 60%, #d4af37 100%)",
      }}
    >
      <div className="w-full relative z-10">
        <div className="max-w-7xl text-left px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-semibold text-white mb-4 leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[85px] tracking-[-0.03em] font-poppins"
          >
            We Craft High-Impact Videos More Views, More Clients, More Growth!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl"
          >
            Your brand deserves content that stands out — we create videos that
            capture attention and drive real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-black px-5 sm:px-6 py-2 sm:py-3 mb-44 sm:mb-10 rounded-full font-semibold text-base sm:text-lg hover:bg-amber-400 transition-all inline-flex items-center space-x-2"
            >
              <span>GET STARTED</span>
              <FiArrowRight className="w-10 h-10 ml-7 p-2 bg-white rounded-3xl text-black" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Tags Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10 py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {/* First set of tags */}
            {serviceTags.map((tag, index) => (
              <span
                key={`set1-${index}`}
                className="inline-flex items-center bg-transparent border border-white/20 text-white px-3 py-1.5 rounded-full text-sm whitespace-nowrap mx-2 hover:border-amber-500/50 transition-colors duration-300"
              >
                <FiCheckCircle className="w-3 h-3 text-amber-500 mr-1.5 flex-shrink-0" />
                {tag}
              </span>
            ))}
            {/* Second set of tags for seamless loop */}
            {serviceTags.map((tag, index) => (
              <span
                key={`set2-${index}`}
                className="inline-flex items-center bg-transparent border border-white/20 text-white px-3 py-1.5 rounded-full text-sm whitespace-nowrap mx-2 hover:border-amber-500/50 transition-colors duration-300"
              >
                <FiCheckCircle className="w-3 h-3 text-amber-500 mr-1.5 flex-shrink-0" />
                {tag}
              </span>
            ))}
            {/* Third set of tags for extra smoothness */}
            {serviceTags.map((tag, index) => (
              <span
                key={`set3-${index}`}
                className="inline-flex items-center bg-transparent border border-white/20 text-white px-3 py-1.5 rounded-full text-sm whitespace-nowrap mx-2 hover:border-amber-500/50 transition-colors duration-300"
              >
                <FiCheckCircle className="w-3 h-3 text-amber-500 mr-1.5 flex-shrink-0" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }
        
        .marquee-content {
          display: inline-block;
          animation: marquee 45s linear infinite;
          white-space: nowrap;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 640px) {
          .marquee-content {
            animation-duration: 35s;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
