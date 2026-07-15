import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';

const IMAGES = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1920&q=80"
];

export default function Hero() {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-scroll images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Parallax / Zoom effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Character reveal setup for heading
  const headingText = "Transforming Ordinary Walls Into Standout Masterpieces";
  const words = headingText.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } 
    }
  };

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bgDark"
    >
      {/* Background Image Carousel Layer */}
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bgDark via-brand-bgDark/45 to-brand-bgDark/20 z-10" />
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Extra contrast Overlay */}
        
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={IMAGES[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Hero Background"
          />
        </AnimatePresence>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          style={{ y: textY, opacity }}
          className="flex flex-col items-center"
        >
          {/* Subheading Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Vanguard Vertical Printing Technology
          </motion.div>

          {/* Title Word-by-Word Animation */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[1.1] mb-8"
          >
            {words.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-3 md:mr-4">
                <motion.span
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white/60 text-base md:text-lg max-w-2xl font-light tracking-wide mb-12 font-sans"
          >
            Using advanced vertical wall printing, we print stunning full-color designs directly onto wood, plaster, glass, acrylic, brick, tiles, and concrete with unmatched precision.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          >
            <a
              href="#quote"
              className="btn-shine w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-charcoal text-sm font-semibold uppercase tracking-widest rounded-full shadow-lg shadow-brand-gold/20 hover:bg-brand-light hover:shadow-brand-light/35 transition-all duration-500 text-center"
            >
              Calculate Quote
            </a>
            <a
              href="#gallery"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-colors duration-500 text-sm font-semibold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 group"
            >
              Explore Gallery
              <Play className="w-4 h-4 fill-white/10 group-hover:fill-brand-gold/10 transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements / Micro Parallax Effect */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none no-select">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1.5"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-2 bg-brand-gold rounded-full" 
          />
        </motion.div>
      </div>
    </section>
  );
}
