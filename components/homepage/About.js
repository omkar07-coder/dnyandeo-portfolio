"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";

export function AboutMeSection({
  name = "Dnyandeo Shekade",
  role = "Fullstack Developer",
  experience = "2 Years Experience",
  description = "I'm a passionate Fullstack Developer who loves building modern and user-friendly web applications. I mainly work with Next.js and Tailwind CSS to create clean, responsive, and SEO-friendly websites that perform smoothly across all devices. I also enjoy working with APIs and turning ideas into fast, scalable digital experiences. My focus is always on writing clean code and creating products that feel simple and seamless for users.",
  
  experiences = [
    {
      company: "Yuva Nexus Tech",
      position: "Fullstack Developer",
      period: "Jan 2023 - Present",
    },
    {
      company: "innovins technologies",
      position: "Fullstack Developer",
      period: "Jul 2021 - Dec 2022",
    },
  ],

  skills = ["JavaScript", "CSS", "HTML", "SQL", "Next.js", "React", "Tailwind CSS", "MongoDB"],

  connectText = "Working on fullstack web applications including the BillingCart website. Ready to collaborate!",
  
  email = "shekadednyande@gmail.com",
  githubUrl = "https://github.com/dnyandeoShekade",
  linkedinUrl = "https://www.linkedin.com/in/dnyandeo-shekade-b75016334/",
  twitterUrl = "https://x.com/DnyandeoShekade",
}) {

  return (
    <section id="About" className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0a0118] via-[#0f0728] to-[#1a0b2e] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 mt-2 sm:mt-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-6 sm:gap-8 lg:gap-10">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm mb-2 sm:mb-3">
                  <span className="text-blue-300 text-xs font-semibold uppercase tracking-wider">
                    {role}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-3 mb-1 sm:mb-2">
                  <span className="text-white">Hey there! I'm </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{name}</span>
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                  <FaBriefcase className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-400" />
                  <span>{experience}</span>
                </div>
              </div>

              {/* Description */}
              <div className="border-l-2 sm:border-l-4 border-blue-500 pl-3 sm:pl-4">
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Skills and Connect - Side by Side on Desktop, Stacked on Mobile */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                {/* Skills */}
                <div>
                  <h4 className="text-white text-sm sm:text-base font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-300 text-xs font-medium hover:bg-blue-600/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connect */}
                <div>
                  <h4 className="text-white text-sm sm:text-base font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Connect
                  </h4>
                  
                  {/* Social Links */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-300 text-xs hover:bg-purple-600/20 transition-colors"
                    >
                      <MdEmail className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      <span>Email</span>
                    </a>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-300 text-xs hover:bg-purple-600/20 transition-colors"
                    >
                      <FaGithub className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-300 text-xs hover:bg-purple-600/20 transition-colors"
                    >
                      <FaLinkedin className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Experience */}
            <div>
              <h4 className="text-white text-sm sm:text-base font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                Experience
              </h4>
              
              <div className="space-y-3 sm:space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-2.5 sm:gap-3 group">
                    <div className="flex-shrink-0 w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                      <FaBriefcase className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blue-400" />
                    </div>
                    
                    <div>
                      <h5 className="text-white font-medium text-xs sm:text-sm">{exp.company}</h5>
                      <p className="text-gray-400 text-xs mt-0.5">{exp.position}</p>
                      <p className="text-gray-500 text-xs mt-0.5 sm:mt-1">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
