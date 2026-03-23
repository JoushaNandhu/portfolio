import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-white/5 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden glass border border-white/5">
              <Image 
                src="/black-logo.svg" 
                alt="Logo" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <span className="text-lg font-bold tracking-tighter">
              <span className="text-gradient">Nandha</span>
              <span className="text-white">kumar.</span>
            </span>
          </div>
          <p className="text-sm">
            &copy; {currentYear} Nandhakumar. All rights reserved.
          </p>
          <p className="text-xs mt-1 text-gray-500">
            DevOps & Cloud Engineer Portfolio
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a
            href="https://github.com/JoushaNandhu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/nandhakumars"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:nandha@example.com"
            className="hover:text-white transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
