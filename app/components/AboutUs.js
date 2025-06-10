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
      className="relative bg-black text-white py-20 px-20 group transition duration-300 hover:ring-2 hover:shadow-xl font-poppins"
    >
      <span className="absolute top-[122px] left-35 border border-[#D4AF37] text-white text-sm font-medium px-4 py-1 rounded-full inline-flex items-center space-x-1">
        <span className="text-xl">
          <WiStars />
        </span>
        <span>About Us</span>
      </span>

      <motion.div
        ref={textRef}
        variants={textVariants}
        initial="initial"
        animate={textInView ? "animate" : "initial"}
        className="max-w-4xl ml-auto mt-6"
      >
        <h1 className="text-3xl sm:text-5xl font-semibold leading-[48px] ">
          We are a premium video production agency helping influencers,
          <br />
          entrepreneurs, and businesses craft scroll-stopping short-form content
          <br />
          that turns viewers into loyal clients. From ideation and scripting
          <br />
          to shooting and editing —{" "}
          <span className=" font-medium text-gray-400">
            we handle it all with style, speed, and precision.
          </span>
        </h1>
      </motion.div>

      <motion.div
        ref={statsRef}
        variants={statVariants}
        initial="initial"
        animate={statsInView ? "animate" : "initial"}
        className="mt-16 flex justify-end gap-14 flex-wrap ml-auto pr-32"
      >
        <div className="flex flex-col items-start transition transform hover:scale-105">
          <div className="bg-[#D4AF37] text-slate-200 p-3 rounded-xl mb-6">
            <FiEye />
          </div>
          <p className="font-semibold mb-2">300+ Videos Delivered</p>
          <p className="text-sm ">End-to-end content production</p>
        </div>
        <div className="flex flex-col items-start transition transform hover:scale-105">
          <div className="bg-[#D4AF37] text-slate-200 p-3 rounded-xl mb-6">
            <FiDollarSign />
          </div>
          <p className="font-semibold mb-2">Millions of Views</p>
          <p className="text-sm ">Content that connects and converts</p>
        </div>
        <div className="flex flex-col items-start transition transform hover:scale-105">
          <div className="bg-[#D4AF37] text-slate-200 p-3 rounded-xl mb-6">
            <FiFeather />
          </div>
          <p className="font-semibold mb-2">Trusted by Top Clients</p>
          <p className="text-sm ">Influencers, founders & real estate pros</p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
