"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-20">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Animated Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Think Big. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              Transform Tomorrow.
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            Experience world-class education with cutting-edge technology. Welcome to the digital future of Lovely Professional University.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all"
          >
            Explore Campus
          </motion.button>
        </motion.div>

        {/* Right Side: 3D Floating Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* The actual floating element */}
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-3xl bg-gradient-to-tr from-orange-500/10 to-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-2xl overflow-hidden"
          >
            <div className="text-center z-10">
              <div className="text-8xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">🎓</div>
              <h3 className="text-3xl font-black tracking-widest text-white">LPU</h3>
            </div>
            
            {/* Inner rotating glow for that 3D tech feel */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(249,115,22,0.3)_360deg)] opacity-50"
            />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}