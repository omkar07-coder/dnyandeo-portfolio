'use client';

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#project", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full px-3 sm:px-5 py-3 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Navbar */}
        <div className="relative flex items-center justify-between bg-[#0f1419]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 sm:px-6 py-3 shadow-xl overflow-hidden">

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-40" />

          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-sm">⚡</span>
            </motion.div>

            <h1 className="text-white font-bold text-base sm:text-lg md:text-xl whitespace-nowrap">
              <span className="text-blue-400">dnyandeo</span> Shekade
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2 relative z-10">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex relative z-10">
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lg"
              >
                Let’s Connect
                <HiSparkles className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-10 text-white p-2 rounded-lg hover:bg-white/10 transition"
          >
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-3 bg-[#0f1419]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <button className="w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg">
                    Let’s Connect
                    <HiSparkles className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}