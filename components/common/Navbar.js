'use client';
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi2"
import { motion } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { href: "#home", label: "Home", isActive: true },
    { href: "#project", label: "Projects", isActive: false },
    { href: "#About", label: "About Me", isActive: false },
    { href: "#skills", label: "Skills", isActive: false },
    { href: "#contact", label: "Contact", isActive: false }
  ]

  return (
    <nav className="w-full px-4 sm:px-6 py-4 relative z-50">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated Snake Border */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ padding: '-2px' }}>
          <rect
            className="snake-border"
            x="2"
            y="2"
            width="calc(100% - 4px)"
            height="calc(100% - 4px)"
            rx="16"
            fill="none"
            stroke="url(#snakeGradient)"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <defs>
            <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative bg-[#0f1419]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Animated Logo Text */}
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">⚡</span>
                </div>
              </motion.div>
              <Link href="/" className="group">
                <motion.div className="flex items-center gap-1">
                  {['D', 'n', 'y', 'a', 'n', 'd', 'e', 'o'].map((letter, index) => (
                    <motion.span
                      key={index}
                      className="text-blue-400 font-bold text-lg inline-block"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ 
                        y: -5,
                        color: "#60A5FA",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  <span className="text-white font-bold text-lg ml-1">Shekade</span>
                </motion.div>
              </Link>
              
              {/* Vertical Divider - Desktop Only */}
              <motion.div 
                className="hidden lg:block w-px h-8 bg-gradient-to-b from-transparent via-blue-500 to-transparent ml-4"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    scroll={true}
                    className="relative group"
                  >
                    <motion.div
                      className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                        item.isActive
                          ? 'text-white'
                          : 'text-gray-400'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                      {item.isActive && (
                        <motion.span
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {!item.isActive && (
                        <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
            >
              <Link href="#contact">
                <motion.button
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/30 overflow-hidden flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Let's Connect</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <HiSparkles className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors relative"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <FaTimes className="w-5 h-5" />
                ) : (
                  <FaBars className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden mt-4 pt-4 border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      scroll={true}
                      onClick={closeMenu}
                      className={`block px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                        item.isActive
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Link href="#contact" onClick={closeMenu}>
                    <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg flex items-center justify-center gap-2">
                      Let's Connect
                      <HiSparkles className="w-4 h-4" />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  )
}
