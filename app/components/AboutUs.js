"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiDollarSign, FiEye, FiFeather } from "react-icons/fi";
import { WiStars } from "react-icons/wi";

const AboutUs = () => {
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: "-100px 0px" });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px 0px" });

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const statVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="about-us-section"
      className="relative bg-black text-white py-10 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-20 group transition duration-300 hover:ring-2 hover:shadow-xl font-poppins"
    >
      <span className="absolute top-8 sm:top-16 lg:top-[122px] left-4 sm:left-16 lg:left-35 border border-[#D4AF37] text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full inline-flex items-center space-x-1">
        <span className="text-lg sm:text-xl">
          <WiStars />
        </span>
        <span>About Us</span>
      </span>

      <motion.div
        ref={textRef}
        variants={textVariants}
        initial="initial"
        animate={textInView ? "animate" : "initial"}
        className="mt-16 sm:mt-20 lg:mt-6 lg:max-w-4xl lg:ml-auto"
      >
        <h1 className="text-2xl sm:text-2xl lg:text-3xl xl:text-5xl font-semibold leading-tight ml-3 sm:leading-relaxed lg:leading-[48px]">
          We are a premium video production agency helping influencers,
          <span className="hidden lg:inline">
            <br />
          </span>
          <span className="lg:hidden"> </span>
          entrepreneurs, and businesses craft scroll-stopping short-form content
          <span className="hidden lg:inline">
            <br />
          </span>
          <span className="lg:hidden"> </span>
          that turns viewers into loyal clients. From ideation and scripting
          <span className="hidden lg:inline">
            <br />
          </span>
          <span className="lg:hidden"> </span>
          to shooting and editing —{" "}
          <span className="font-medium text-gray-400">
            we handle it all with style, speed, and precision.
          </span>
        </h1>
      </motion.div>

      <motion.div
        ref={statsRef}
        variants={statVariants}
        initial="initial"
        animate={statsInView ? "animate" : "initial"}
        className="mt-12 sm:mt-14 lg:mt-16 ml-3 flex flex-col sm:flex-row lg:justify-end gap-8 sm:gap-10 lg:gap-14 lg:ml-auto lg:pr-32"
      >
        <motion.div
          custom={0}
          variants={statVariants}
          className="flex flex-col items-start transition transform hover:scale-105"
        >
          <div className="bg-[#D4AF37] text-slate-200 p-3 rounded-xl mb-6 sm:mb-6">
            <FiEye className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <p className="font-semibold mb-2 text-xl sm:text-base">
            300+ Videos Delivered
          </p>
          <p className="text-sm sm:text-sm text-gray-300">
            End-to-end content production
          </p>
        </motion.div>

        <motion.div
          custom={1}
          variants={statVariants}
          className="flex flex-col items-start transition transform hover:scale-105"
        >
          <div className="bg-[#D4AF37] text-slate-200 p-3 rounded-xl mb-6 sm:mb-6">
            <FiDollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <p className="font-semibold mb-2 text-xl sm:text-base">
            Thousands of views
          </p>
          <p className="text-sm sm:text-sm text-gray-300">
            Content that connects and converts
          </p>
        </motion.div>

        <motion.div
          custom={2}
          variants={statVariants}
          className="flex flex-col items-start transition transform hover:scale-105"
        >
          <div className="bg-[#D4AF37] text-slate-200 p-3 rounded-xl mb-6 sm:mb-6">
            <FiFeather className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <p className="font-semibold mb-2 text-xl sm:text-base">
            Trusted by Top Clients
          </p>
          <p className="text-sm sm:text-sm text-gray-300">
            Influencers, founders & real estate pros
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
