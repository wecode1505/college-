"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 tracking-tight">
          LPU <span className="text-white font-light">Reimagined</span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="#home" className="hover:text-white hover:scale-105 transition-all">Home</Link>
          <Link href="#about" className="hover:text-white hover:scale-105 transition-all">About</Link>
          <Link href="#courses" className="hover:text-white hover:scale-105 transition-all">Courses</Link>
          <Link href="#contact" className="hover:text-white hover:scale-105 transition-all">Contact</Link>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]">
          Apply Now
        </button>
      </div>
    </motion.nav>
  );
}