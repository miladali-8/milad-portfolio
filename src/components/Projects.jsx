import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Shield, Layers, Dumbbell, BookOpen, Terminal, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const PROJECTS_DATA = [
  {
    title: 'Cybersecurity Toolkit Website',
    desc: 'An interactive, terminal-inspired toolkit presenting network diagnostic tools, hash calculators, and port scanner simulations in a sleek cyber dashboard UI.',
    category: 'Security',
    icon: Shield,
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Web Crypto API'],
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    title: 'Bug Bounty Notes Platform',
    desc: 'A markdown-powered web portal enabling security researchers to write, index, and tag vulnerabilities, CVE notes, and custom exploitation payloads.',
    category: 'Security',
    icon: Terminal,
    tech: ['React', 'Node.js', 'Express', 'Markdown-it'],
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    title: 'Modern Gym Website',
    desc: 'A highly aesthetic gym and fitness club landing page featuring interactive schedules, class filters, coach logs, and modern glassmorphic pricing models.',
    category: 'Web Apps',
    icon: Dumbbell,
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    title: 'Educational School Website',
    desc: 'A robust campus web dashboard mapping academic catalogs, staff structures, and interactive student calendar schedules with smooth, fluid layouts.',
    category: 'Web Apps',
    icon: BookOpen,
    tech: ['HTML', 'CSS', 'JavaScript', 'AOS Library'],
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    title: 'Personal Dashboard Hub',
    desc: 'A customizable system-style workspace providing weather stats, note logs, CPU scan simulations, and active network connections.',
    category: 'Dashboards',
    icon: Cpu,
    tech: ['React', 'Vite', 'Tailwind CSS', 'ApexCharts'],
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    title: 'Futuristic Portfolio Website',
    desc: 'A high-end personal developer and security portfolio. Equipped with matrix particles, responsive command lines, and premium responsive cards.',
    category: 'Dashboards',
    icon: Layers,
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://github.com'
  }
];

const FILTERS = ['All', 'Security', 'Web Apps', 'Dashboards'];

const ProjectCard = ({ project }) => {
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ProjectIcon = project.icon;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Subtle 3D tilt (max 4 degrees)
    const rotateX = -(mouseY / (height / 2)) * 4;
    const rotateY = (mouseX / (width / 2)) * 4;
    
    setCoords({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        transform: `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg)`,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'transform 0.5s ease',
      }}
      className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between h-72 shadow-lg cursor-default overflow-hidden backdrop-blur-sm"
    >
      {/* Soft spotlight highlight inside card */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(150px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), #ffffff, transparent 60%)`,
            mixBlendMode: 'screen'
          }}
        />
      )}

      {/* Content wrapper */}
      <div className="space-y-4" style={{ transform: 'translateZ(5px)' }}>
        {/* Header */}
        <div className="flex justify-between items-start select-none">
          <span className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase">{project.category}</span>
          <div className="p-2 rounded-lg bg-zinc-800/60 text-zinc-400 group-hover:text-white transition-colors duration-300">
            <ProjectIcon size={14} />
          </div>
        </div>

        {/* Title & Desc */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-white tracking-wide font-sans group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h4>
          <p className="text-[11px] text-zinc-400 leading-relaxed font-sans line-clamp-3">
            {project.desc}
          </p>
        </div>
      </div>

      {/* Tech stack & Action Buttons */}
      <div className="space-y-4 pt-3 border-t border-zinc-800/60" style={{ transform: 'translateZ(10px)' }}>
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 text-[9px]">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="px-2 py-0.5 rounded-md bg-zinc-950 text-zinc-400 border border-zinc-800/80"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3.5 select-none text-[10px]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-mono text-zinc-500 hover:text-white transition-colors duration-300"
          >
            <GithubIcon size={10} className="mr-1.5" /> REPO_CODE
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-mono text-zinc-300 hover:text-white transition-colors duration-300"
          >
            <ExternalLink size={10} className="mr-1.5" /> LIVE_DEMO
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#09090b] overflow-hidden spotlight-container">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[40%] left-[20%] w-[35vw] h-[35vw] bg-zinc-800/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-blue-500 font-mono tracking-widest uppercase mb-2"
          >
            PORTFOLIO_WORKS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans uppercase"
          >
            Selected Projects
          </motion.h2>
          <div className="w-8 h-[2px] bg-zinc-700 mt-3" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 select-none">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-lg text-xs tracking-wider transition-all duration-300 font-sans ${
                activeFilter === filter
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800/60 hover:border-zinc-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
