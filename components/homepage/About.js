"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";

export function AboutMeSection({
  name = "Dnyandeo Shekade",
  role = "Fullstack Developer",
  experience = "2 Years Experience",
description = "I’m a passionate Fullstack Developer who loves building modern and user-friendly web applications. I mainly work with Next.js and Tailwind CSS to create clean, responsive, and SEO-friendly websites that perform smoothly across all devices. I also enjoy working with APIs and turning ideas into fast, scalable digital experiences. My focus is always on writing clean code and creating products that feel simple and seamless for users.",
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

  skills = ["JavaScript", "CSS","HTML","SQL", "Next.js", "React", "Tailwind CSS", "MongoDB"],

  connectText = "Working on fullstack web applications including the BillingCart website. Ready to collaborate!",
  
  email = "shekadednyande@gmail.com",
  githubUrl = "https://github.com/dnyandeoShekade",
  linkedinUrl = "https://www.linkedin.com/in/dnyandeo-shekade-b75016334/",
  twitterUrl = "https://x.com/DnyandeoShekade",
}) {

  return (
    <section id="About" className="relative px-4 lg:px-8 py-20 bg-gradient-to-br from-[#0a0118] via-[#0f0728] to-[#1a0b2e] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-white text-4xl font-bold">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 mt-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 backdrop-blur-sm mb-3">
                  <span className="text-blue-300 text-xs font-semibold uppercase tracking-wider">
                    {role}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mt-3 mb-2">
                  <span className="text-white">Hey there! I'm </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{name}</span>
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaBriefcase className="w-3.5 h-3.5 text-blue-400" />
                  <span>{experience}</span>
                </div>
              </div>

              {/* Description */}
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Skills and Connect - Side by Side */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Skills */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-300 text-xs font-medium hover:bg-blue-600/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connect */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Connect
                  </h4>
                  {/* <p className="text-gray-300 text-sm mb-4">{connectText}</p> */}
                  
                  {/* Social Links */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-300 text-xs hover:bg-purple-600/20 transition-colors"
                    >
                      <MdEmail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </a>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-300 text-xs hover:bg-purple-600/20 transition-colors"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-300 text-xs hover:bg-purple-600/20 transition-colors"
                    >
                      <FaLinkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                    {/* <a
                      href={twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-300 text-xs hover:bg-purple-600/20 transition-colors"
                    >
                      <FaTwitter className="w-3.5 h-3.5" />
                      <span>Twitter</span>
                    </a> */}
                  </div>                
                </div>
              </div>
            </div>

            {/* Right Column - Experience */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                Experience
              </h4>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-3 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                      <FaBriefcase className="w-4 h-4 text-blue-400" />
                    </div>
                    
                    <div>
                      <h5 className="text-white font-medium text-sm">{exp.company}</h5>
                      <p className="text-gray-400 text-xs mt-0.5">{exp.position}</p>
                      <p className="text-gray-500 text-xs mt-1">{exp.period}</p>
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
