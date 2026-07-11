'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoaderOverlay() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 700); // fade delay
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 3;
        return next > 100 ? 100 : next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#08080a] flex flex-col items-center justify-center font-sans"
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
        >
          <div className="text-center space-y-4 px-6">
            <motion.h1 
              className="text-xs uppercase tracking-[0.6em] text-white/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Initializing Spatial Portfolio Core
            </motion.h1>
            <motion.div 
              className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gradient-purple"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              {progress}%
            </motion.div>
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden mx-auto relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan"
                style={{ width: `${progress}%` }}
                layoutId="loaderBar"
              />
            </div>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] pt-2">
              Syncing WebGL Shaders & Materials
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
