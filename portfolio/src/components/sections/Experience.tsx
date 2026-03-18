"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Server } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      year: "Apr 2025 - Dec 2025",
      title: "Desktop Support Engineer",
      institution: "Necurity Solutions Network Security Private Ltd, Chennai",
      description: "Performed OS installation, system configuration, and hardware troubleshooting. Managed routers, switches, and VPN connectivity.",
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
    },
    {
      year: "Aug 2024 - Mar 2025",
      title: "System Administrator",
      institution: "KLM SOLUTIONS, Erode",
      description: "Provided L1/L2 technical support, managed Windows OS, user accounts, and troubleshot LAN/DNS/DHCP and VPN access issues.",
      icon: <Server className="w-5 h-5 text-purple-400" />,
    },
    {
      year: "2021 - 2024",
      title: "B.Tech Information Technology",
      institution: "Government College of Engineering, Erode",
      description: "Graduated with a strong foundation in computer science, software engineering principles, networking, and system design.",
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
    },
    {
      year: "2018 - 2024",
      title: "Freelance Network & System Support",
      institution: "Part-Time, Erode",
      description: "Assisted small businesses and residential clients with network setup, system installation, cabling, and on-call technical support.",
      icon: <Code className="w-5 h-5 text-pink-400" />,
    },
    {
      year: "2018 - 2021",
      title: "Diploma in Computer Science Enginereing",
      institution: "Al-Ameen Polytechnic College, Erode",
      description: "Built a solid technical foundation in computer science fundamentals and networking fundamentals.",
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-indigo-500">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-6 w-10 h-10 rounded-full glass flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                {item.icon}
              </div>

              <div className="glass-panel p-6 md:p-8 rounded-2xl relative group hover:border-indigo-500/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <span className="text-indigo-400 font-mono text-sm mt-2 md:mt-0">{item.year}</span>
                </div>
                <h4 className="text-gray-400 font-medium mb-4">{item.institution}</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CloudIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>
  );
}
