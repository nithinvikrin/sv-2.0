import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2400; // 2.4s loading
    const interval = 24;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Allow exit animation to play
          }, 400);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-bgDark"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Subtle moving blob in the background */}
          <div className="absolute w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />

          {/* Logo container */}
          <div className="relative flex flex-col items-center justify-center px-4 max-w-md text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-48 h-48 mb-6"
            >
              <img 
                src="/images/logo.png" 
                alt="SV Walls & Interiors" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(182,141,64,0.15)]"
              />
            </motion.div>
 
            {/* Brand Title reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="overflow-hidden"
            >
              <h2 className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold font-sans mb-1">
                Vertical Wall Printing &amp; Custom Interiors
              </h2>
            </motion.div>
 
            {/* Progress bar line */}
            <div className="w-48 h-[2px] bg-brand-border rounded-full overflow-hidden mt-6 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-gold to-brand-light"
                style={{ width: `${progress}%` }}
              />
            </div>
 
            {/* Percentage Display */}
            <motion.div 
              className="text-brand-secondaryText/60 text-sm font-sans mt-3 tracking-widest font-light"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
