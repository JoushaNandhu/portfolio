"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Chat-bot for Knowledge Base using Voiceflow",
    description: "Built a conversational AI chat-bot tailored for a knowledge base using Voiceflow. Integrated external logic to fetch relevant data and resolve user queries efficiently.",
    tech: ["Voiceflow", "AI/NLP", "API Integration"],
    github: "https://github.com/JoushaNandhu",
    demo: "#",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Weather Prediction using Serp API & Streamlit",
    description: "Developed an interactive weather prediction dashboard using Python. Fetched real-time data via Serp API and presented it through a responsive UI built with Streamlit.",
    tech: ["Python", "Streamlit", "Serp API", "Data Viz"],
    github: "https://github.com/JoushaNandhu",
    demo: "#",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Network Monitoring using Grafana Dashboard",
    description: "Set up a comprehensive monitoring solution using Grafana. Created real-time dashboards to track network traffic, system performance, and application health for proactive resolution.",
    tech: ["Grafana", "Prometheus", "Networking", "Linux"],
    github: "https://github.com/JoushaNandhu",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Real-time Network Setup and Configuration",
    description: "Designed and configured a real-time network topology. Implemented routing, switching protocols, and security policies to ensure robust and secure communication across the infrastructure.",
    tech: ["Networking", "TCP/IP", "Cisco", "Routing"],
    github: "https://github.com/JoushaNandhu",
    demo: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dockerized Web App on AWS EC2",
    description: "Built and managed Docker images and containers. Deployed a sample web application using Docker on AWS EC2 instances, ensuring environment consistency and simplified scaling.",
    tech: ["Docker", "AWS EC2", "Linux", "Bash"],
    github: "https://github.com/JoushaNandhu",
    demo: "#",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "GitHub Actions CI/CD Pipeline Workflow",
    description: "Practiced basic CI/CD workflows by building an automated continuous integration and continuous deployment pipeline using GitHub Actions for automated testing and deployment.",
    tech: ["GitHub Actions", "CI/CD", "Automation", "Shell"],
    github: "https://github.com/JoushaNandhu",
    demo: "#",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AWS Static Website Hosting",
    description: "Architected a highly available static website hosting solution using Amazon S3 for storage and Amazon CloudFront for content delivery network (CDN), achieving low latency.",
    tech: ["AWS S3", "CloudFront", "Route 53", "IAM"],
    github: "https://github.com/JoushaNandhu",
    demo: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_4px_30px_rgba(0,0,0,0.5)] group"
            >
              {/* Image Section */}
              <div className="md:w-5/12 relative h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Github size={100} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{project.title}</h3>
                
                <div className="glass-panel p-5 rounded-xl mb-6 relative z-10">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 border border-blue-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-6 relative z-10 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <Github className="w-5 h-5 mr-2 group-hover/link:text-blue-400 transition-colors" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <ExternalLink className="w-5 h-5 mr-2 group-hover/link:text-indigo-400 transition-colors" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
