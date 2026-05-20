import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for nav blur and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      setScrolled(window.scrollY > 20);

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Highlight active section on scroll
      const sections = NAV_ITEMS.map(item => item.href.slice(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section top is above middle of the screen
          if (rect.top <= 120) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const offset = 80; // offset to account for navbar height
      const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-zinc-950 z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center space-x-2.5 select-none group"
            >
              <div className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center font-bold text-[10px] text-white bg-zinc-900 shadow-md group-hover:border-zinc-500 transition-all duration-300">
                CS
              </div>
              <span className="text-white font-sans text-xs tracking-widest font-bold uppercase transition-colors duration-300 group-hover:text-zinc-300">
                THE CYBER SENTINEL
              </span>
            </a>

            {/* Desktop Navbar Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`relative px-3 py-1.5 font-sans text-xs tracking-wider transition-colors duration-300 rounded-md ${
                      isActive 
                        ? 'text-white font-medium bg-zinc-900/50' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div 
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[1px] bg-white"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-zinc-400 hover:text-white p-2 rounded focus:outline-none"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-lg select-none"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`block px-3 py-2.5 rounded-md font-sans text-xs tracking-wider border-l-2 transition-all duration-300 ${
                        isActive 
                          ? 'border-white text-white bg-zinc-900/50 font-medium' 
                          : 'border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/20'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
