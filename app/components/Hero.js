"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

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
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      style={{
        background:
          "linear-gradient(to bottom right, #000 0%, #000 40%, #0e1e2a 60%, #d4af37 100%)",
      }}
    >
      {/* Content */}
      <div className="w-full relative z-10">
        <div className="max-w-5xl text-left px-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            We Craft High-Impact Videos More Views, More Clients, More Growth!
          </motion.h1>

          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-amber-500 font-semibold mb-6 leading-tight"
          >
            More Views, More Clients, More Growth!
          </motion.h2> */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 transition-all inline-flex items-center space-x-2"
            >
              <span>GET IN TOUCH</span>
              <FiArrowRight className="w-10 h-10 p-2 bg-white rounded-3xl text-black" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Service Tags Swiper */}
      <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView="auto"
            // freeMode={true}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: false,
            }}
            speed={3000}
            allowTouchMove={false}
            className="service-tags-swiper"
            breakpoints={{
              320: {
                spaceBetween: 12,
              },
              768: {
                spaceBetween: 16,
              },
            }}
          >
            {/* Duplicate the tags array to ensure smooth looping */}
            {[...serviceTags, ...serviceTags].map((tag, index) => (
              <SwiperSlide key={`${tag}-${index}`} className="!w-auto">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  className="bg-transparent border border-white/30 text-white px-4 py-2 rounded-full whitespace-nowrap inline-flex items-center space-x-2 hover:border-amber-500/50 transition-colors duration-300"
                >
                  <FiCheckCircle className="w-4 h-4 text-amber-500" />
                  <span>{tag}</span>
                </motion.span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
