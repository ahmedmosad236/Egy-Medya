"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function ContactSection() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
          formRef.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="text-white py-20 px-6 md:px-16 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      style={{
        background:
          "linear-gradient(to bottom right, rgba(212, 175, 55, 0.4) 0%, rgba(212, 175, 55, 0.2) 25%, #000 50%, #000 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content container */}
        <div className="py-20 rounded-2xl border border-gray-800 px-16 bg-[#070707]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side: Header, Description, Contact Info */}
            <div className="md:pr-8">
              <h2 className="text-[48px] font-semibold text-white mb-4 leading-[64px]">
                Let&apos;s Create Something Bold.
              </h2>
              <p className="text-lg font-normal leading-7 pr-8 md:text-xl text-gray-400 mb-24">
                Got a project in mind or need scroll-stopping videos? Reach out
                — we&apos;re ready to bring your vision to life.
              </p>

              {/* Contact Info */}
              <div className="text-left text-gray-100 space-y-2">
                <div>
                  <p className="text-sm">Don&apos;t like forms?</p>
                </div>
                <div>
                  <a
                    href="mailto:egymedya@gmail.com"
                    className="text-[#D4AF37] hover:underline text-base font-normal hover:text-[#F1C40F] transition-colors"
                  >
                    Egymedya@gmail.com
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+19526070861"
                    className="text-[#D4AF37] hover:underline text-base font-normal hover:text-[#F1C40F] transition-colors"
                  >
                    +1 (952) 607-0861
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="bg-[#070707] rounded-xl shadow-lg">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-normal text-white mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      className="w-full bg-[#1c1b18] text-white placeholder-[#9D9FA1] py-4 px-7 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border border-gray-700"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-normal text-white mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="w-full bg-[#1c1b18] text-white placeholder-[#9D9FA1] py-4 px-7 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border border-gray-700"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-normal text-white mb-2"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email address"
                    className="w-full bg-[#1c1b18] text-white placeholder-[#9D9FA1] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border border-gray-700"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-normal text-white mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How We Can Help You ?"
                    className="w-full h-32 bg-[#1c1b18] text-white placeholder-[#9D9FA1] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border border-gray-700 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#D4AF37] text-black font-semibold py-3 px-10 rounded-full hover:bg-yellow-500 transition duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {success && (
                  <p className="text-green-500 mt-4">
                    Message sent successfully!
                  </p>
                )}
                {error && (
                  <p className="text-red-500 mt-4">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Updated Footer matching the screenshot */}
        <footer className="mt-20 pt-12 pb-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center mb-24 justify-between gap-8">
            {/* Logo and Tagline */}
            <div className="flex items-start flex-col gap-3">
              <div className="flex justify-center items-center gap-2">
                <Image
                  src="/images/EgyMedia-Transparent.png"
                  alt="EGY MEDYA Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div>
                  <h3 className="font-bold text-white text-lg">EGY MEDYA</h3>
                </div>
              </div>
              <div className="pr-10">
                <p className="text-gray-400 text-sm">
                  We Drive Real Result, More Traffic, More Leads, more Growth!
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/YOUR_PAGE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/YOUR_HANDLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://tiktok.com/@YOUR_HANDLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Social Links */}

            {/* Navigation Links */}
            <nav className="flex items-center gap-8 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Home
              </a>
              <a
                href="#about-us-section"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                About Us
              </a>

              <a
                href="#portfolio"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
            <p>© 2024 Orbit, Inc. All rights reserved</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>MINNESOTA STATE</span>
            </div>
          </div>
        </footer>
      </div>
    </motion.section>
  );
}
