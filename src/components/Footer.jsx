import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href) => {
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const offset = 80;
      const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#09090b] border-t border-zinc-900 py-12 overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and branding */}
        <div className="flex flex-col items-center md:items-start space-y-1.5">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center space-x-2 group"
          >
            <div className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center font-bold text-[9px] text-white bg-zinc-900 shadow-sm transition-all duration-300">
              CS
            </div>
            <span className="text-white font-sans text-xs tracking-widest font-bold uppercase">
              THE CYBER SENTINEL
            </span>
          </a>
          <span className="text-[10px] text-zinc-500 font-sans">
            Jammu & Kashmir, India
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] tracking-wider text-zinc-400 font-sans">
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }} className="hover:text-white transition-colors">ABOUT</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('#skills'); }} className="hover:text-white transition-colors">SKILLS</a>
          <a href="#journey" onClick={(e) => { e.preventDefault(); handleNavClick('#journey'); }} className="hover:text-white transition-colors">JOURNEY</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('#projects'); }} className="hover:text-white transition-colors">PROJECTS</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="hover:text-white transition-colors">CONTACT</a>
        </div>

        {/* Copyright */}
        <div className="text-right text-[10px] text-zinc-500 font-sans flex flex-col items-center md:items-end">
          <span>&copy; {currentYear} MILAD ALI. ALL RIGHTS RESERVED.</span>
          <span className="text-zinc-600 text-[9px] mt-0.5">Designed with absolute simplicity.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
