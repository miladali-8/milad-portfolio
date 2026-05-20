import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Code, Terminal, Sparkles, BookOpen, GraduationCap } from 'lucide-react';

const TIMELINE_DATA = [
  {
    year: '2021',
    title: 'Technology Exploration',
    desc: 'Started learning computer basics, exploring operating systems, and understanding the core mechanics of technology.',
    icon: Laptop,
    side: 'left'
  },
  {
    year: '2022',
    title: 'Introduction to Web Dev',
    desc: 'Began learning the foundation blocks of the web, studying HTML and CSS structure and styling rules.',
    icon: Code,
    side: 'right'
  },
  {
    year: '2023',
    title: 'Interactive Scripting & Shells',
    desc: 'Learned JavaScript for interactive web scripting. Explored basic Linux commands, technology systems, and shell scripting.',
    icon: Terminal,
    side: 'left'
  },
  {
    year: '2024',
    title: 'Freelancing & Frontend Focus',
    desc: 'Started offering technology assistance on Fiverr. Improved frontend layouts, mastered responsive configurations, and studied Git structures.',
    icon: Sparkles,
    side: 'right'
  },
  {
    year: '2025',
    title: 'Academic Milestone & Projects',
    desc: 'Completed 12th standard studies. Continued refining frontend coding styles, experimenting with APIs, and learning React frameworks.',
    icon: BookOpen,
    side: 'left'
  },
  {
    year: '2026',
    title: 'GGI Admission (B.Tech CSE)',
    desc: 'Took admission at Gulzar Group of Institutes (GGI), Punjab, specializing in IoT & Cybersecurity to merge frontend expertise with secure systems.',
    icon: GraduationCap,
    side: 'right'
  }
];

const Timeline = () => {
  return (
    <section id="journey" className="py-24 relative bg-[#09090b] overflow-hidden spotlight-container">
      {/* Background radial effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[40%] left-[10%] w-[35vw] h-[35vw] bg-zinc-800/10 rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-blue-500 font-mono tracking-widest uppercase mb-2"
          >
            LEARNING_JOURNEY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Milestones Timeline
          </motion.h2>
          <div className="w-8 h-[2px] bg-zinc-700 mt-3" />
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center Connection Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[1px] bg-zinc-800 transform -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {TIMELINE_DATA.map((item, idx) => {
              const Icon = item.icon;
              const isLeft = item.side === 'left';

              return (
                <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:items-center">
                  
                  {/* Left Column (Desktop) */}
                  <div className={`w-full sm:w-1/2 pr-0 sm:pr-10 pl-12 sm:pl-0 flex sm:justify-end ${
                    isLeft ? 'sm:order-1' : 'sm:order-3 sm:hidden'
                  }`}>
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        className="w-full p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 shadow-md relative overflow-hidden hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm"
                      >
                        <span className="text-xs text-blue-400 font-mono tracking-wider font-bold block mb-1">{item.year}</span>
                        <h4 className="text-sm font-bold text-white mb-2 font-sans tracking-wide">{item.title}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">{item.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Icon Checkpoint Circle Center */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-950 z-10 sm:order-2 group-hover:border-zinc-500 transition-all duration-300">
                    <Icon className="text-zinc-400" size={13} />
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-10 flex sm:justify-start ${
                    !isLeft ? 'sm:order-3' : 'sm:order-1 sm:hidden'
                  }`}>
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        className="w-full p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 shadow-md relative overflow-hidden hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm"
                      >
                        <span className="text-xs text-blue-400 font-mono tracking-wider font-bold block mb-1">{item.year}</span>
                        <h4 className="text-sm font-bold text-white mb-2 font-sans tracking-wide">{item.title}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">{item.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Mobile-Only fallback (displays both side cards correctly as blocks on mobile) */}
                  <div className="sm:hidden w-full pl-12 pr-2 block">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="w-full p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 shadow-md"
                    >
                      <span className="text-xs text-blue-400 font-mono tracking-wider font-bold block mb-1">{item.year}</span>
                      <h4 className="text-sm font-bold text-white mb-2 font-sans tracking-wide">{item.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans">{item.desc}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;
