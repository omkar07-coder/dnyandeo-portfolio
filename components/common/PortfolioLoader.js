"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PortfolioLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete && onComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  const text = "dnyandeo shekade";

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0a0118] via-[#0f0728] to-[#1a0b2e]"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 text-center px-4">
        {/* Animated Portfolio Text */}
        <div className="relative mb-12">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block relative"
                style={{ perspective: "1000px" }}
              >
                {/* Shadow layers for depth effect */}
                {[...Array(3)].map((_, layerIndex) => (
                  <motion.span
                    key={layerIndex}
                    className="absolute inset-0"
                    style={{
                      color: layerIndex === 0 ? 'rgba(59, 130, 246, 0.3)' : 
                             layerIndex === 1 ? 'rgba(147, 51, 234, 0.3)' : 
                             'rgba(236, 72, 153, 0.3)',
                      textShadow: `${layerIndex * 2}px ${layerIndex * 2}px ${layerIndex * 4}px rgba(0,0,0,0.5)`,
                      zIndex: 3 - layerIndex,
                    }}
                    initial={{
                      opacity: 0,
                      y: -30 * layerIndex,
                      rotateX: -45,
                    }}
                    animate={{
                      opacity: 1,
                      y: layerIndex * 2,
                      rotateX: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05 + layerIndex * 0.03,
                      ease: "easeOut"
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}

                {/* Front layer with white text */}
                <motion.span
                  className="relative text-white"
                  style={{ 
                    zIndex: 10,
                    textShadow: '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(96, 165, 250, 0.3)',
                    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))'
                  }}
                  initial={{
                    opacity: 0,
                    y: -50,
                    rotateX: -45,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05 + 0.2,
                    ease: "easeOut"
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              </motion.span>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-72 max-w-full mx-auto">
          <div className="bg-white/10 rounded-full h-2.5 overflow-hidden backdrop-blur-sm border border-white/20">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-blue-500/50"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <motion.p
            className="text-blue-300 text-base mt-4 font-semibold"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {progress < 100 ? `Loading... ${Math.round(progress)}%` : 'Ready!'}
          </motion.p>
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${10 + i * 6}%`,
              top: `${20 + (i % 4) * 20}%`,
              background: i % 3 === 0 ? 'rgba(96, 165, 250, 0.6)' : 
                         i % 3 === 1 ? 'rgba(147, 51, 234, 0.6)' : 
                         'rgba(236, 72, 153, 0.6)',
              boxShadow: i % 3 === 0 ? '0 0 10px rgba(96, 165, 250, 0.8)' : 
                        i % 3 === 1 ? '0 0 10px rgba(147, 51, 234, 0.8)' : 
                        '0 0 10px rgba(236, 72, 153, 0.8)',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
