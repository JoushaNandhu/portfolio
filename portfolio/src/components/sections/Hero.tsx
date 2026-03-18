"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative">
        
        {/* Glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[100px] rounded-full -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Available for Opportunities</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I&apos;m <span className="text-gradient">Nandha</span>kumar
          <br className="hidden md:block" />
          <span className="text-3xl md:text-5xl text-gray-400 mt-2 block">DevOps Engineer</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Building scalable, automated, and reliable systems. Passionate about Cloud Architecture, CI/CD, and system reliability.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="#projects"
            className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          >
            View Projects
            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </Link>
          
          <Link
            href="#contact"
            className="inline-flex justify-center items-center px-8 py-3.5 border border-white/10 glass hover:bg-white/10 transition-colors text-base font-medium rounded-lg text-white"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
