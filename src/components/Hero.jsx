import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

const Hero = () => {
  const handleDownloadCV = () => {
    alert("CV file link loaded. (Placeholder alert for download trigger)");
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden spotlight-container"
    >
      {/* Subtle background radial glows */}
      <div className="absolute top-[20%] left-[25%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[25%] w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-sans select-none"
          >
            <Sparkles size={11} className="text-blue-400" />
            <span>Welcome to my professional space</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans uppercase leading-tight"
            >
              THE <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-white bg-clip-text text-transparent">CYBER SENTINEL</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-sm sm:text-base font-semibold text-zinc-300 font-sans tracking-wide"
            >
              B.Tech CSE (IoT & Cybersecurity) Student | Frontend Learner | Tech Enthusiast
            </motion.h2>
          </div>

          {/* Short Intro */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-zinc-400 font-sans max-w-xl text-sm sm:text-[15px] leading-relaxed"
          >
            I’m Milad Ali, a passionate technology student focused on frontend development, modern web experiences, and continuously learning new technologies while pursuing B.Tech CSE with specialization in IoT & Cybersecurity at GGI Punjab.
          </motion.p>

          {/* Social Icons row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex items-center space-x-3.5 select-none"
          >
            <a 
              href="https://github.com/miladali-8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-zinc-800 rounded-md bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300"
              title="Github"
            >
              <GithubIcon size={15} />
            </a>
            <a 
              href="https://www.linkedin.com/in/milad-ali" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-zinc-800 rounded-md bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300"
              title="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>
            <a 
              href="https://www.instagram.com/miladali01/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-zinc-800 rounded-md bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300"
              title="Instagram"
            >
              <InstagramIcon size={15} />
            </a>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto select-none"
          >
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-300 group"
            >
              Get In Touch 
              <ArrowRight size={12} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            
            <button 
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-semibold border border-zinc-800 text-white bg-zinc-900/55 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
            >
              Download CV 
              <Download size={12} className="ml-1.5" />
            </button>
          </motion.div>
        </div>

        {/* Right Side Column: Minimalist Tech Specs card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="lg:col-span-5 w-full flex justify-center items-center relative"
        >
          <div className="w-full max-w-[340px] rounded-2xl bg-zinc-900/40 border border-zinc-800 p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group select-none">
            
            {/* Visual element decorator */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full filter blur-xl" />

            <div className="space-y-6 relative z-10">
              
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-zinc-800/80">
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">MILAD ALI</h3>
                  <p className="text-[10px] text-zinc-500">Student Profile Index</p>
                </div>
                <span className="text-[9px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full border border-zinc-700">
                  SYS_ONLINE
                </span>
              </div>

              {/* Specs Rows */}
              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-500">Academic Target</span>
                  <span className="text-zinc-200 font-medium">B.Tech CSE (IoT & Cybersecurity)</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-500">Affiliation</span>
                  <span className="text-zinc-200 font-medium">GGI Campus, Punjab</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-500">Interests</span>
                  <span className="text-zinc-200 font-medium">Frontend Dev, Tech Systems</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-500">Current Semester</span>
                  <span className="text-zinc-200 font-medium">Active (Entry 2026)</span>
                </div>
              </div>

              {/* Graphic representation */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[9px] text-zinc-500 font-mono">
                <span>LOC: JAMMU & KASHMIR</span>
                <span>VER: 2026.05.20</span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
