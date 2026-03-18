"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Server, Cloud, ExternalLink, Github, Mail, Linkedin, Briefcase, GraduationCap, Code2, Phone } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

  const scrollTo = (id: string) => {
    setActiveSection(id.toLowerCase());
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#030014] text-gray-200 relative selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-pink-600/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 py-4 px-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-[#030014]/50">
        <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => scrollTo("home")}>
          <span className="text-gradient">Nandha</span>
          <span className="text-white">kumar S.</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-sm tracking-wide transition-colors ${
                activeSection === link.toLowerCase() ? "text-blue-400 font-medium" : "text-gray-400 hover:text-white"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col gap-32 pb-32">
        
        {/* --- HERO SECTION --- */}
        <section id="home" className="min-h-[85vh] flex flex-col lg:flex-row justify-center items-center lg:justify-between relative mt-10 gap-16">
          
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start z-10 w-full max-w-full">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight w-full">
              <span className="text-white block whitespace-nowrap">DevOps Engineer</span>
              <span className="text-gradient block mt-2 text-[4vw] sm:text-2xl md:text-3xl lg:text-4xl pb-1 whitespace-nowrap">Cloud, System & Network Specialist</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              I build resilient, scalable, and automated systems. With hands-on experience in system administration, networking, and AWS cloud services, I bridge the gap between infrastructure and smooth operational workflows.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button onClick={() => scrollTo("projects")} className="px-8 py-4 rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-all font-medium shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:-translate-y-1">
                View My Work
              </button>
              <button onClick={() => scrollTo("contact")} className="px-8 py-4 rounded-lg glass-panel hover:bg-white/5 transition-all font-medium text-white transform hover:-translate-y-1">
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Profile Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="w-full max-w-sm lg:max-w-md relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 glass-panel border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.2)] group flex-shrink-0 overflow-hidden">
              <div className="absolute inset-[-50%] bg-gradient-to-tr from-blue-500/30 via-transparent to-purple-500/30 animate-[spin_8s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden bg-[#030014] z-10">
                <Image 
                  src="/profile.jpg" 
                  alt="Nandhakumar S" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- ABOUT & CERTIFICATIONS --- */}
        <section id="about" className="scroll-mt-32">
          <SectionHeading title="About Me" subtitle="Who I am & What I do" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-50px" }} className="glass-panel p-8 rounded-3xl">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                I am a passionate <strong className="text-white">DevOps & System Engineer</strong> focused on bridging the gap between development and operations. My primary goal is to become a leading Cloud & DevOps Engineer by building resilient, scalable, and automated systems.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Currently, I am heavily focused on upskilling in <span className="text-blue-400">Kubernetes, Terraform, and advanced CI/CD pipelines</span> to architect production-ready cloud environments.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-50px" }} className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Cloud className="text-blue-400" /> Licenses & Certifications
              </h3>
              <ul className="space-y-4">
                {[
                  "SOC 2 - (CISCO)",
                  "Computer Networks & Cloud Essentials - (CISCO & AWS)",
                  "HIPAA Compliance: A Complete Guide - (ALISON)",
                  "Full Stack Development Using Python - (GUVI)",
                  "Installation & Servicing of CCTV Cameras - (Govt of India)",
                  "DevOps Engineering - In Progress (GUVI)"
                ].map((cert, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-blue-400" />
                    </span>
                    <span className="text-gray-300">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* --- EXPERIENCE --- */}
        <section id="experience" className="scroll-mt-32">
          <SectionHeading title="Experience & Education" subtitle="My Journey" />
          <div className="mt-12 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {experiences.map((exp, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: index * 0.1 }} className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#030014] shrink-0 md:order-1 shadow-[0_0_15px_rgba(59,130,246,0.2)] z-10 my-4 md:my-0">
                  {exp.icon}
                </div>
                <div className="w-full md:w-[calc(50%-2.5rem)] glass-panel p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
                  <div className="flex flex-col mb-4 gap-2">
                    <h3 className="font-bold text-xl text-white leading-tight">{exp.title}</h3>
                    <div className="text-gray-400 text-sm font-medium">{exp.org}</div>
                    <span className="text-sm font-mono text-blue-400 px-3 py-1 bg-blue-500/10 rounded-full w-fit mt-1">{exp.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- SKILLS --- */}
        <section id="skills" className="scroll-mt-32">
          <SectionHeading title="Technical Skills" subtitle="Technologies I work with" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {skills.map((category, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: idx * 0.1 }} className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="scroll-mt-32">
          <SectionHeading title="Featured Projects" subtitle="Recent Work" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {projects.map((project, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: idx * 0.1 }} className="glass-panel rounded-3xl p-8 flex flex-col h-full group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                    <Terminal size={24} />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="scroll-mt-32 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="max-w-3xl w-full glass-panel p-12 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
            <p className="text-gray-400 mb-10 text-lg">
              I am currently looking for new opportunities as a System/Network Engineer or entry-level DevOps Engineer. Whether you have a question or just want to collaborate on a project, I&apos;ll try my best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
              <a href="mailto:nandhanandhu72618@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors w-full sm:w-auto justify-center">
                <Mail size={20} /> Drop an Email
              </a>
              <a href="https://wa.me/919788147432" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-medium transition-colors w-full sm:w-auto justify-center">
                <Phone size={20} /> +91 9788147432
              </a>
              <a href="https://www.linkedin.com/in/-s-nandhakumar/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 glass-panel border border-white/10 hover:bg-white/5 text-white rounded-xl font-medium transition-colors w-full sm:w-auto justify-center">
                <Linkedin size={20} /> Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm relative z-10 w-full mb-0 mt-32">
        <p>Built cleanly with Next.js, Tailwind CSS & Framer Motion.</p>
        <p className="mt-2 text-blue-500">© {new Date().getFullYear()} Nandhakumar S.</p>
      </footer>
    </div>
  );
}

// --- Helper Components & Data Objects ---

function SectionHeading({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="flex flex-col gap-3">
      <span className="text-blue-500 font-mono text-sm tracking-wider uppercase bg-blue-500/10 w-fit px-4 py-1.5 rounded-full border border-blue-500/20">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
    </motion.div>
  );
}

const experiences = [
  {
    title: "Implementation Engineer (DevOps)",
    org: "Keel Xpert Technology, Chennai",
    date: "Jan 2026 - Present",
    desc: "Hosting front-end and back-end applications on AWS using Docker containers. Implementing CI/CD pipelines, automating infrastructure deployment, and ensuring system reliability.",
    icon: <Cloud size={20} className="text-blue-500" />
  },
  {
    title: "Desktop Support Engineer",
    org: "Necurity Solutions Network Security Private Ltd, Chennai",
    date: "Apr 2025 - Dec 2025",
    desc: "Performed OS installation, system configuration, and hardware troubleshooting. Managed routers, switches, and VPN connectivity. Implemented basic security practices to prevent unauthorized access.",
    icon: <Briefcase size={20} className="text-blue-400" />
  },
  {
    title: "System Administrator",
    org: "KLM SOLUTIONS, Erode",
    date: "Aug 2024 - Mar 2025",
    desc: "Provided L1/L2 technical support for desktops, laptops, printers, and network devices. Installed and maintained Windows OS, applications, and security updates. Troubleshot LAN connectivity, DNS/DHCP issues, and VPN access.",
    icon: <Server size={20} className="text-purple-400" />
  },
  {
    title: "Freelance Network & System Support",
    org: "Self-Employed, Erode",
    date: "2018 - 2024 (During Diploma & B.Tech)",
    desc: "Assisted small businesses and residential clients with basic network setup and troubleshooting. Performed system installation, cabling, and connectivity testing. Provided on-call technical support.",
    icon: <Code2 size={20} className="text-pink-400" />
  },
  {
    title: "B.Tech Information Technology",
    org: "Government College of Engineering, Erode",
    date: "2021 - 2024",
    desc: "Graduated with a strong foundation in computer science, software engineering principles, networking, and system design.",
    icon: <GraduationCap size={20} className="text-green-400" />
  },
  {
    title: "Diploma in Computer Science Engineering",
    org: "Al-Ameen Polytechnic College, Erode",
    date: "2018 - 2021",
    desc: "Gained core fundamentals in computer science, programming basics, and networking concepts.",
    icon: <GraduationCap size={20} className="text-green-400" />
  }
];

const skills = [
  {
    title: "Core Infrastructure",
    items: ["TCP/IP", "DNS/DHCP", "VPN", "Routing & Switching", "Linux", "Windows OS", "Hardware Troubleshooting"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3, VPC, IAM, CloudWatch)", "Docker", "Git & GitHub", "CI/CD Concepts", "Python (Basics)", "Shell Scripting"]
  },
  {
    title: "Currently Learning",
    items: ["Kubernetes", "Jenkins", "Terraform", "Advanced Automation"]
  }
];

const projects = [
  {
    title: "Chat-bot for Knowledge Base",
    desc: "Built a conversational AI chat-bot tailored for a knowledge base using Voiceflow. Integrated external logic to fetch relevant data and resolve user queries efficiently.",
    tags: ["Voiceflow", "AI/NLP", "API Integration"],
    github: "https://github.com/JoushaNandhu", live: "#"
  },
  {
    title: "Weather Prediction Dashboard",
    desc: "Developed an interactive weather prediction dashboard using Python. Fetched real-time data via Serp API and presented it through a responsive UI built with Streamlit.",
    tags: ["Python", "Streamlit", "Serp API"],
    github: "https://github.com/JoushaNandhu", live: "#"
  },
  {
    title: "Real-time Network Setup",
    desc: "Designed and configured a real-time network topology. Implemented routing, switching protocols, and security policies to ensure robust communication.",
    tags: ["Networking", "Cisco", "TCP/IP"],
    github: "https://github.com/JoushaNandhu", live: "#"
  },
  {
    title: "Network Monitoring via Grafana",
    desc: "Set up a comprehensive monitoring solution. Created real-time dashboards to track network traffic, system performance, and application health.",
    tags: ["Grafana", "Prometheus", "Linux"],
    github: "https://github.com/JoushaNandhu", live: "#"
  },
  {
    title: "Dockerized Web App on AWS EC2",
    desc: "Built and managed Docker images and containers. Deployed a sample web application using Docker on AWS EC2 instances, ensuring simplified scaling.",
    tags: ["Docker", "AWS EC2", "Bash"],
    github: "https://github.com/JoushaNandhu", live: "#"
  },
  {
    title: "AWS Static Website Hosting",
    desc: "Architected a highly available static website using Amazon S3 for storage and CloudFront for CDN context delivery, achieving low latency.",
    tags: ["AWS S3", "CloudFront", "IAM"],
    github: "https://github.com/JoushaNandhu", live: "#"
  }
];
