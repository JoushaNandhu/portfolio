"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Skills",
    skills: [
      { name: "Cloud (AWS EC2, S3, VPC, IAM)", level: 85 },
      { name: "Networking (TCP/IP, DNS, VPN)", level: 80 },
      { name: "Sys Admin (Linux, Windows)", level: 85 },
      { name: "Troubleshooting", level: 90 },
    ],
  },
  {
    title: "DevOps & Automation",
    skills: [
      { name: "Docker Containers", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD Workflows", level: 80 },
      { name: "Python & Shell Scripting", level: 75 },
    ],
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "Terraform", level: 70 },
      { name: "Kubernetes", level: 65 },
      { name: "Jenkins", level: 60 },
      { name: "Advanced AWS Logging", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-purple-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass p-8 rounded-2xl relative group"
            >
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2 mt-4 text-sm font-medium text-gray-300">
                      <span>{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
