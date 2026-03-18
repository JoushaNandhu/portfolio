"use client";

import { motion } from "framer-motion";
import { Terminal, Server, Cloud } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Cloud Architecture",
      icon: <Cloud className="w-8 h-8 text-blue-400 mb-4" />,
      description: "Designing and deploying highly available, fault-tolerant infrastructure on AWS.",
    },
    {
      title: "CI/CD & Automation",
      icon: <Terminal className="w-8 h-8 text-purple-400 mb-4" />,
      description: "Streamlining development workflows with GitHub Actions and containerization.",
    },
    {
      title: "System Reliability",
      icon: <Server className="w-8 h-8 text-pink-400 mb-4" />,
      description: "Ensuring uptime, performance monitoring, and efficient resource utilization.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            I am a passionate DevOps Engineer focused on bridging the gap between development and operations. 
            My primary goal is to become a leading Cloud & DevOps Engineer by building resilient, scalable, 
            and automated systems. I thrive on solving complex infrastructure challenges and optimizing workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              {card.icon}
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            My <span className="text-blue-500">Certifications</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "SOC 2 (CISCO)",
              "Computer Networks & Cloud Essentials (CISCO & AWS)",
              "HIPAA Compliance (ALISON)",
              "Full Stack Dev using Python (GUVI)",
              "DevOps Engineering - In Progress (GUVI)",
            ].map((cert, i) => (
              <span
                key={i}
                className="px-5 py-2.5 glass-panel border border-white/10 rounded-full text-sm font-medium text-gray-300 shadow-sm"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
