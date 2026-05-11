"use client";
import { motion } from "framer-motion";

const courses = [
  { title: "Computer Science", icon: "💻", desc: "AI, ML, and Full-Stack Development." },
  { title: "Business Mgmt", icon: "📊", desc: "Leadership and Global Entrepreneurship." },
  { title: "Fashion Design", icon: "🎨", desc: "Creative arts and modern styling." }
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">Explore Our <span className="text-orange-500">Programs</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10, rotateZ: 1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-orange-500/50 transition-all cursor-pointer group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{course.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
              <p className="text-gray-400 mb-6">{course.desc}</p>
              <span className="text-orange-500 font-bold group-hover:underline">Learn More →</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}