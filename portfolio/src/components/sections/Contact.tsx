"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-pink-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Open for opportunities, collaborations, or just a chat about Cloud & DevOps!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <a href="mailto:nandhanandhu72618@gmail.com" className="flex items-center group glass-panel p-6 rounded-2xl hover:border-pink-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mr-6 group-hover:bg-pink-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Email</h4>
                  <p className="text-white text-lg">nandhanandhu72618@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/-s-nandhakumar/" target="_blank" rel="noopener noreferrer" className="flex items-center group glass-panel p-6 rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-6 group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">LinkedIn</h4>
                  <p className="text-white text-lg">linkedin.com/in/-s-nandhakumar</p>
                </div>
              </a>

              <a href="https://github.com/JoushaNandhu" target="_blank" rel="noopener noreferrer" className="flex items-center group glass-panel p-6 rounded-2xl hover:border-gray-400/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-gray-500/10 flex items-center justify-center mr-6 group-hover:bg-gray-500/20 transition-colors">
                  <Github className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">GitHub</h4>
                  <p className="text-white text-lg">github.com/JoushaNandhu</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all resize-none"
                  placeholder="Hello Nandha, I'd like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-4 bg-pink-600 hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors group"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
