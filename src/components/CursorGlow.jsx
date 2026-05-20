import React, { useState, useEffect } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHidden, setIsHidden] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    // Check if device supports coarse pointer (mobile touch screens)
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setHasPointer(!mediaQuery.matches);

    if (mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
      setIsHidden(false);

      // Feed variables to document root for spotlight styling in CSS
      document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!hasPointer || isHidden) return null;

  return (
    <>
      {/* Outer glow aura */}
      <div
        className={`fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out mix-blend-screen opacity-40 ${
          isClicking ? 'scale-75 bg-blue-500/10' : 'scale-100 bg-indigo-500/5'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          boxShadow: isClicking 
            ? 'inset 0 0 15px rgba(59, 130, 246, 0.3), 0 0 25px rgba(59, 130, 246, 0.2)' 
            : 'inset 0 0 15px rgba(99, 102, 241, 0.2), 0 0 25px rgba(99, 102, 241, 0.1)',
        }}
      />
      {/* Inner precise dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 mix-blend-screen ${
          isClicking ? 'bg-blue-400' : 'bg-white'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          boxShadow: isClicking 
            ? '0 0 6px rgba(96, 165, 250, 0.8)' 
            : '0 0 6px rgba(255, 255, 255, 0.8)',
        }}
      />
    </>
  );
};

export default CursorGlow;
