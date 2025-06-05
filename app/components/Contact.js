"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

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
              <p className="text-lg md:text-xl text-gray-400 mb-24">
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
                      className="w-full bg-[#1c1b18] text-white placeholder-[#9D9FA1] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border border-gray-700"
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
                      className="w-full bg-[#1c1b18] text-white placeholder-[#9D9FA1] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] border border-gray-700"
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
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
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors p-2"
                  aria-label="Twitter/X"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors p-2"
                  aria-label="Email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors p-2"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors p-2"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297L6.391 14.5c.652.652 1.555 1.058 2.548 1.058 1.984 0 3.595-1.611 3.595-3.595S10.923 8.368 8.939 8.368c-.993 0-1.896.406-2.548 1.058L5.125 8.235c.876-.807 2.027-1.297 3.324-1.297 2.711 0 4.909 2.198 4.909 4.909s-2.198 4.909-4.909 4.909zM17.34 12.963c0 .993-.406 1.896-1.058 2.548l-1.191-1.266c.652-.652 1.058-1.555 1.058-2.548 0-1.984-1.611-3.595-3.595-3.595-.993 0-1.896.406-2.548 1.058L8.74 7.894c.807-.876 1.984-1.431 3.324-1.431 2.711 0 4.909 2.198 4.909 4.909-.001 1.326-.555 2.519-1.431 3.324z" />
                  </svg>
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
                href="#"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#"
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
