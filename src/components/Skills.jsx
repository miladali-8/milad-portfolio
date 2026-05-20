import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code, Settings, Sparkles } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: 'Frontend Development',
    icon: Layout,
    desc: 'Core web building blocks and interface libraries.',
    skills: [
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'React', level: 'Beginner' }
    ]
  },
  {
    category: 'Programming Languages',
    icon: Code,
    desc: 'Scripting tools and core software logic.',
    skills: [
      { name: 'Python', level: 'Basic' }
    ]
  },
  {
    category: 'Other Tech Capabilities',
    icon: Settings,
    desc: 'Systems engineering, responsive layouts, and tools.',
    skills: [
      { name: 'Technology Systems', level: 'Intermediate' },
      { name: 'Shell Scripting', level: 'Basic' },
      { name: 'Responsive Design', level: 'Intermediate' },
      { name: 'Git & GitHub', level: 'Intermediate' },
      { name: 'Freelancing Basics', level: 'Basic' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#09090b] overflow-hidden spotlight-container">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] bg-indigo-500/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-blue-500 font-mono tracking-widest uppercase mb-2"
          >
            TECHNICAL_INVENTORY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Skills & Competencies
          </motion.h2>
          <div className="w-8 h-[2px] bg-zinc-700 mt-3" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {SKILLS_DATA.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.08, duration: 0.5 }}
                className="rounded-2xl p-6 bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-zinc-800/60 mb-5 select-none">
                    <div className="p-2 rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white uppercase tracking-wider font-sans">{cat.category}</h3>
                      <p className="text-[10px] text-zinc-500 mt-0.5">{cat.desc}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/30 transition-all duration-200"
                      >
                        <span className="text-xs text-zinc-300 font-sans tracking-wide font-medium">{skill.name}</span>
                        <span 
                          className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                            skill.level === 'Intermediate' 
                              ? 'text-blue-400 bg-blue-500/5 border-blue-500/10' 
                              : skill.level === 'Beginner'
                                ? 'text-indigo-400 bg-indigo-500/5 border-indigo-500/10'
                                : 'text-zinc-400 bg-zinc-800 border-zinc-700'
                          }`}
                        >
                          {skill.level.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-zinc-800/60 pt-4 mt-6 flex items-center justify-between text-[9px] text-zinc-500 font-mono select-none">
                  <span>VERIFIED STATUS</span>
                  <span className="flex items-center gap-1">
                    <Sparkles size={8} className="text-blue-400 animate-pulse" /> CURRENT_VALS
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
