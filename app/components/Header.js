"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about-us-section" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 z-20">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/EgyMedia-Transparent.png"
                alt="EGY MEDYA Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-white text-base font-bold">EGY MEDYA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 flex-grow justify-center z-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Get in Touch Button (Desktop) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all items-center space-x-2 z-20"
          >
            <span>GET IN TOUCH</span>
            <FiArrowRight className="w-4 h-4" />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 border-t border-gray-700 z-10"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all w-full flex items-center justify-center space-x-2"
              >
                <span>GET IN TOUCH</span>
                <FiArrowRight className="w-4 h-4" />
              </motion.button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
