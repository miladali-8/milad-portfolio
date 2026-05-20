import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Layers, Target, MapPin, GraduationCap } from 'lucide-react';

const VALUES = [
  {
    label: 'Learning Mindset',
    desc: 'Driven by curiosity. I believe in understanding the fundamentals of how things work under the hood rather than just copying templates.',
    icon: Compass,
    color: 'text-blue-400 border-blue-500/10'
  },
  {
    label: 'Frontend Focus',
    desc: 'Passionate about crafting clean, modern user interfaces that feel smooth and natural on all screen sizes, using HTML, CSS, JS, and React.',
    icon: Layers,
    color: 'text-indigo-400 border-indigo-500/10'
  },
  {
    label: 'Continuous Growth',
    desc: 'Constantly writing code, scripting automation pipelines, practicing layout designs, and looking for ways to improve code quality.',
    icon: BookOpen,
    color: 'text-emerald-400 border-emerald-500/10'
  },
  {
    label: 'Future Horizons',
    desc: 'Aspiring to bridge frontend development with systems security, exploring how IoT ecosystems and secure web protocols interact.',
    icon: Target,
    color: 'text-purple-400 border-purple-500/10'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-[#09090b] overflow-hidden spotlight-container">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[30%] left-[20%] w-[35vw] h-[35vw] bg-zinc-800/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-blue-500 font-mono tracking-widest uppercase mb-2"
          >
            SYSTEM_PROFILE
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans uppercase"
          >
            About Me
          </motion.h2>
          <div className="w-8 h-[2px] bg-zinc-700 mt-3" />
        </div>

        {/* Bios and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Summary Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-xl font-bold text-white tracking-wide font-sans">
              Milad Ali <span className="text-zinc-500 font-normal text-sm">/ Aspiring Frontend Developer & CSE Student</span>
            </h3>
            
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              I am a technology student hailing from the state of <strong>Jammu & Kashmir, India</strong>, currently pursuing my <strong>B.Tech in Computer Science Engineering (IoT & Cybersecurity)</strong> at the <strong>Gulzar Group of Institutes (GGI), Punjab</strong>.
            </p>
            
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              My technology journey revolves around a passion for creating clean and responsive web interfaces. Over the last couple of years, I have dedicated myself to mastering the core stack of web development—HTML, CSS, and JavaScript—while steadily diving into modern libraries like React. 
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              I believe in keeping my approach humble, realistic, and growth-oriented. Every day is an opportunity to learn a new scripting technique, research security protocols, study IoT configurations, or design a better user flow. My goal is to build reliable software while continuously expanding my technical skill set.
            </p>

            {/* Quick stats items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 shadow-md">
                <MapPin className="text-zinc-400" size={16} />
                <div>
                  <p className="text-[10px] text-zinc-500 font-mono tracking-wider">LOCATION</p>
                  <p className="text-xs text-white font-medium font-sans">Jammu & Kashmir, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 shadow-md">
                <GraduationCap className="text-zinc-400" size={16} />
                <div>
                  <p className="text-[10px] text-zinc-500 font-mono tracking-wider">EDUCATION</p>
                  <p className="text-xs text-white font-medium font-sans">GGI Punjab (IoT & Cyber)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Core Values Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className={`group relative p-5 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between h-52`}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <Icon className={val.color.split(' ')[0]} size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-white tracking-wide font-sans">{val.label}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed font-sans">{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
