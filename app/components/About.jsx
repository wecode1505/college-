"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-slate-900 rounded-2xl p-8 border border-white/10">
            <h2 className="text-4xl font-bold mb-6">About Our <span className="text-orange-500">Vision</span></h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Lovely Professional University is more than just a campus; it's a global hub of innovation. We reimagine traditional education by integrating AI-driven learning and industry-first practicals.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h4 className="text-2xl font-bold text-orange-400">30,000+</h4>
                <p className="text-xs text-gray-500">Global Students</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h4 className="text-2xl font-bold text-orange-400">200+</h4>
                <p className="text-xs text-gray-500">Programs</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-orange-500/10 h-[400px] rounded-3xl border border-orange-500/20 flex items-center justify-center text-8xl"
        >
          🏛️
        </motion.div>
      </div>
    </section>
  );
}