"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";

export default function Home() {
  // TypeScript Fix: Defining 'e' as any to pass build checks
  useEffect(() => {
    const handleScroll = (e: any) => {
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleScroll as EventListener));
    
    return () => {
      links.forEach((link) => link.removeEventListener("click", handleScroll as EventListener));
    };
  }, []);

  return (
    <main className="relative bg-[#020617] text-white selection:bg-orange-500/30 min-h-screen">
      {/* Dynamic Background Gradient */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Navigation Layer */}
      <Navbar />

      {/* Content Layers */}
      <div className="flex flex-col">
        <Hero />
        
        <section className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <About />
        </section>

        <section className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Courses />
        </section>

        <section className="relative bg-gradient-to-b from-transparent to-black/50">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Contact />
        </section>
      </div>

      {/* WeCode Professional Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-orange-500 font-bold uppercase tracking-wider">WeCode</span> x LPU Reimagined
          </p>
          <div className="flex justify-center gap-4 mt-4 text-[10px] text-gray-600 tracking-[0.2em] uppercase font-medium">
            <span>Next.js 14</span>
            <span>•</span>
            <span>Framer Motion</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </main>
  );
}