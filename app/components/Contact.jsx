"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 flex justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="w-full max-w-2xl px-6"
      >
        <div className="bg-gradient-to-b from-slate-900 to-black p-10 rounded-3xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Connect with <span className="text-orange-500">Admissions</span></h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none transition-all" />
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none transition-all" />
            </div>
            <textarea rows="4" placeholder="Your Message" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-orange-500 outline-none transition-all"></textarea>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}