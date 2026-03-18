"use client";

import { motion } from "framer-motion";

export function BackgroundEffect() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#030014]">
      {/* Abstract gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-pink-600/15 blur-[120px] mix-blend-screen animate-blob animation-delay-4000" />
      
      {/* Dark overlay for grid/texture if needed */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
}
