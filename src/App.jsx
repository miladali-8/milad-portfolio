import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Back to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-cyber-bg min-h-screen text-cyber-text selection:bg-cyber-accent/20 selection:text-white overflow-x-hidden">
      {/* Loading Screen Overlay */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Screen bootup content */}
      {!loading && (
        <div className="flex flex-col min-h-screen relative z-10">
          {/* Custom Glowing Cursor Follower */}
          <CursorGlow />

          {/* Floating Subtle Gradient Background Blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full filter blur-[120px] animate-blob" />
            <div className="absolute top-[60%] right-[5%] w-[35vw] h-[35vw] bg-indigo-500/5 rounded-full filter blur-[120px] animate-blob [animation-delay:4s]" />
          </div>

          {/* Navigation Bar */}
          <Navbar />

          {/* Page Sections */}
          <main className="flex-grow relative z-10">
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>

          {/* Footer details */}
          <Footer />

          {/* Back to Top Button */}
          {showScrollTop && (
            <button
              onClick={handleScrollTop}
              className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full border border-zinc-800 text-white bg-zinc-950/80 hover:bg-white hover:text-black hover:border-white shadow-xl transition-all duration-300 animate-bounce select-none"
              title="Return to System Root"
            >
              <ChevronUp size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
