"use client";

import { FiArrowDown } from "react-icons/fi"
import { HiSparkles } from "react-icons/hi2"
import { FaUsers, FaStar, FaRocket, FaCode } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection({
  title = "Design. Code.",
  subtitle = "Innovation.",
  badge = "Creative Developer & AI Specialist",
  name = "Dnyandeo Shekade",
  description = "I craft modern, intuitive and visually stunning digital experiences that make an impact.",
  primaryButtonText = "View My Work",
  secondaryButtonText = "Get In Touch",
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0118] via-[#0f0728] to-[#1a0b2e] py-16 sm:py-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-20 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm text-xs sm:text-sm"
              initial={{ 
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                opacity: 0,
                scale: 0,
                rotate: Math.random() * 720 - 360
              }}
              animate={{ 
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                rotate: 0
              }}
              transition={{ 
                duration: 1.5,
                ease: "easeOut",
                delay: 0.1
              }}
            >
              <HiSparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs sm:text-sm font-medium">{badge}</span>
            </motion.div>

            {/* Title with Scatter Animation */}
            <div className="overflow-hidden">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                {title.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block text-white"
                    initial={{
                      x: Math.random() * 600 - 300,
                      y: Math.random() * 600 - 300,
                      opacity: 0,
                      scale: 0,
                      rotate: Math.random() * 720 - 360
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      rotate: 0
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: 0.3 + index * 0.03
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                {subtitle.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{
                      x: Math.random() * 600 - 300,
                      y: Math.random() * 600 - 300,
                      opacity: 0,
                      scale: 0,
                      rotate: Math.random() * 720 - 360
                    }}
                    animate={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      rotate: 0
                    }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: 0.7 + index * 0.03
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Description */}
            <motion.div 
              className="border-l-2 sm:border-l-4 border-blue-500 pl-2 sm:pl-3 md:pl-4"
              initial={{ 
                x: -100,
                opacity: 0
              }}
              animate={{ 
                x: 0,
                opacity: 1
              }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut",
                delay: 1.5
              }}
            >
              <p className="text-blue-400 text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                Hi! I'm <span className="text-white">{name}</span>
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 pt-1 sm:pt-2 md:pt-4">
              <Link href="#project" className="w-full sm:w-auto">
                <motion.button
                  className="w-full group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {primaryButtonText}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </Link>
              <Link href="#contact" className="w-full sm:w-auto">
                <motion.button
                  className="w-full group relative bg-transparent border-2 border-white/20 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:border-blue-500 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {secondaryButtonText}
                  <HiSparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Glowing Circle Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
            
            {/* Animated 3D Elements Container */}
            <div className="relative z-10">
              <motion.div
                className="relative w-full aspect-square max-w-lg mx-auto"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Central Glowing Orb */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-40"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Rotating Rings */}
                <motion.div
                  className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute inset-8 border-2 border-purple-500/30 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute inset-16 border border-cyan-500/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Floating Geometric Shapes */}
                <motion.div
                  className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg opacity-80"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-80"
                  animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute top-1/2 right-5 w-10 h-10 border-2 border-cyan-400 rotate-45 opacity-60"
                  animate={{
                    rotate: [45, 225, 405],
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />

                {/* Center Animated SVG Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-80 h-80" viewBox="0 0 365 365">
                    {/* H Letter */}
                    <g id="H-letter">
                      <line className="H-left-stroke" x1="17" y1="0" x2="17" y2="124" stroke="#60A5FA" fill="none" strokeWidth="34" />
                      <line className="H-mid-stroke" x1="33" y1="62" x2="68" y2="62" stroke="#60A5FA" fill="none" strokeWidth="34" />
                      <line className="H-right-stroke" x1="84" y1="0" x2="84" y2="124" stroke="#60A5FA" fill="none" strokeWidth="34" />
                    </g>
                    
                    {/* E Letter */}
                    <g id="E-letter">
                      <line className="E-left-stroke" x1="138" y1="0" x2="138" y2="124" stroke="#818CF8" fill="none" strokeWidth="34" />
                      <line className="E-top-stroke" x1="154" y1="17" x2="201" y2="17" stroke="#818CF8" fill="none" strokeWidth="34" />
                      <line className="E-mid-stroke" x1="154" y1="62" x2="196" y2="62" stroke="#818CF8" fill="none" strokeWidth="34" />
                      <line className="E-bottom-stroke" x1="154" y1="107" x2="201" y2="107" stroke="#818CF8" fill="none" strokeWidth="34" />
                    </g>
                    
                    {/* L One Letter */}
                    <g id="L-one-letter">
                      <line className="L-one-long-stroke" x1="17" y1="153" x2="17" y2="277" stroke="#A78BFA" fill="none" strokeWidth="34" />
                      <line className="L-one-short-stroke" x1="33" y1="260" x2="77" y2="260" stroke="#A78BFA" fill="none" strokeWidth="34" />
                    </g>
                    
                    {/* L Two Letter */}
                    <g id="L-two-letter">
                      <line className="L-two-long-stroke" x1="104" y1="153" x2="104" y2="277" stroke="#C084FC" fill="none" strokeWidth="34" />
                      <line className="L-two-short-stroke" x1="120" y1="260" x2="164" y2="260" stroke="#C084FC" fill="none" strokeWidth="34" />
                    </g>
                    
                    {/* O Letter */}
                    <g id="O-letter">
                      <circle className="O-stroke" cx="231" cy="215" r="48" stroke="#E879F9" fill="none" strokeWidth="31" />
                    </g>
                    
                    {/* Red Dot */}
                    <g id="red-dot">
                      <line x1="325" y1="260" x2="325" y2="260" stroke="#F472B6" className="red-dot" />
                    </g>
                  </svg>
                </div>
                
                {/* Floating Code Snippet */}
                <motion.div
                  className="absolute top-10 -right-10 bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 shadow-xl"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [2, -2, 2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <pre className="text-xs text-blue-400 font-mono">
                    <code>{`const dnyandeo = {\n  passion: "Create",\n  focus: "Build",\n  goal: "Inspire"\n};`}</code>
                  </pre>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute bottom-10 -left-10 bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 shadow-xl"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <p className="text-white text-sm font-semibold">Turning Ideas</p>
                  <p className="text-purple-400 text-sm">Into Reality ✨</p>
                </motion.div>

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full"
                    style={{
                      left: `${20 + (i * 10)}%`,
                      top: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + (i * 0.5),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-gray-400 text-xs sm:text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
