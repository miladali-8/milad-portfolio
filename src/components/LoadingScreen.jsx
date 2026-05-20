import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Smooth percent progression
    const pctInterval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(pctInterval);
          setTimeout(() => {
            setCompleted(true);
            setTimeout(onComplete, 500); // Wait for fadeout animation
          }, 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + step, 100);
      });
    }, 100);

    return () => clearInterval(pctInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!completed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 bg-[#09090b] z-50 flex flex-col items-center justify-center select-none"
        >
          <div className="flex flex-col items-center space-y-6 max-w-sm w-full px-8">
            {/* Title / Brand logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center space-y-1"
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-widest text-white font-sans uppercase">
                THE CYBER SENTINEL
              </h2>
              <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                MILAD ALI // PROFESSIONAL PORTFOLIO
              </p>
            </motion.div>

            {/* Fine Line Loader */}
            <div className="w-48 flex flex-col items-center space-y-2 pt-4">
              <div className="w-full h-[2px] bg-zinc-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  style={{ width: `${percent}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider">
                {percent}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
