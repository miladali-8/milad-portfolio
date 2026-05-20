import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, MapPin, Layers } from 'lucide-react';

const ACADEMIC_TRACK = [
  {
    phase: 'Semesters 01–02',
    title: 'Foundational Computing & Logic',
    desc: 'Focusing on Structured Programming, Mathematics, Fundamentals of Hardware, and Basic Internet Protocols.',
    status: 'ACTIVE'
  },
  {
    phase: 'Semesters 03–04',
    title: 'Core Systems & IoT Architectures',
    desc: 'Introduction to Data Structures, Database Systems, Linux Foundations, and IoT sensor network communication layouts.',
    status: 'UPCOMING'
  },
  {
    phase: 'Semesters 05–06',
    title: 'Advanced Networks & Cybersecurity',
    desc: 'Studying Network Security Protocols, Web Application Security, Applied Cryptography, and defensive scripts.',
    status: 'UPCOMING'
  },
  {
    phase: 'Semesters 07–08',
    title: 'Industry Capstone & Auditing',
    desc: 'Project implementation, practical cybersecurity auditing, risk evaluation models, and systems engineering.',
    status: 'UPCOMING'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-[#09090b] overflow-hidden spotlight-container">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[30%] right-[10%] w-[35vw] h-[35vw] bg-zinc-800/10 rounded-full filter blur-[100px]" />
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
            ACADEMIC_CREDENTIALS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Education Timeline
          </motion.h2>
          <div className="w-8 h-[2px] bg-zinc-700 mt-3" />
        </div>

        {/* Education grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Institution details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 flex flex-col justify-between shadow-lg relative overflow-hidden backdrop-blur-sm"
          >
            <div className="space-y-6">
              {/* Institution Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] text-blue-400 font-mono tracking-wider block uppercase">CURRENTLY PURSUING</span>
                  <h3 className="text-xl font-bold text-white tracking-wide font-sans">Gulzar Group of Institutes (GGI)</h3>
                  <p className="text-xs text-zinc-500 font-sans flex items-center gap-1.5 mt-1">
                    <MapPin size={12} /> Punjab, India
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-white text-xs select-none shadow-sm">
                  GGI
                </div>
              </div>

              {/* Major Details Box */}
              <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/60 space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Degree Course</span>
                  <span className="text-white font-semibold">B.Tech CSE (IoT & Cybersecurity)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Enrollment Year</span>
                  <span className="text-zinc-300 font-semibold">Joined 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">University Affiliation</span>
                  <span className="text-zinc-300 font-semibold">IKG Punjab Technical University</span>
                </div>
              </div>

              {/* Course Overview */}
              <div className="space-y-4 text-xs text-zinc-400 leading-relaxed font-sans">
                <p>
                  At GGI Campus, the Computer Science program specializing in Internet of Things (IoT) & Cybersecurity provides a strong background in web programming, software patterns, and network infrastructures. The curriculum bridges core computer engineering with modern security strategies, equipping students with practical coding labs and systems configuration knowledge.
                </p>
              </div>
            </div>

            <div className="border-t border-zinc-800/60 pt-4 mt-6 flex items-center justify-between text-[9px] text-zinc-500 font-mono select-none">
              <span>STATUS: ENROLLED</span>
              <span>VERIFIED: IKGPTU SCHEME</span>
            </div>
          </motion.div>

          {/* Right Side: Curriculum timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6 flex flex-col justify-between shadow-lg backdrop-blur-sm"
          >
            <div>
              <div className="flex items-center space-x-2 pb-3 border-b border-zinc-800/60 mb-5 select-none">
                <Layers className="text-blue-400" size={14} />
                <h4 className="text-xs font-bold text-white font-sans uppercase tracking-wider">Curriculum Path</h4>
              </div>

              <div className="relative pl-4 space-y-6 border-l border-zinc-800">
                {ACADEMIC_TRACK.map((item, idx) => (
                  <div key={idx} className="relative space-y-1">
                    {/* Circle Indicator */}
                    <span className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border-2 bg-[#09090b] ${
                      item.status === 'ACTIVE' 
                        ? 'border-blue-400 animate-pulse' 
                        : 'border-zinc-800'
                    }`} />

                    <div className="flex justify-between items-center text-[9px] select-none font-mono">
                      <span className="text-zinc-500 font-bold">{item.phase.toUpperCase()}</span>
                      <span className={`font-bold px-2 py-0.5 rounded-full border ${
                        item.status === 'ACTIVE' 
                          ? 'border-blue-500/10 text-blue-400 bg-blue-500/5' 
                          : 'border-zinc-800 text-zinc-600 bg-zinc-900/20'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <h5 className="text-[12px] font-bold text-white font-sans">{item.title}</h5>
                    <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-800/60 pt-4 mt-6 text-[9px] text-zinc-500 font-mono select-none text-right">
              <span>PATH PROGRESSION</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Education;
