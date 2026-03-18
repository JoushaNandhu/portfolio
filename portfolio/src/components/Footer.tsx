import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-white/5 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <div className="mb-4 md:mb-0 text-center md:text-left">
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
