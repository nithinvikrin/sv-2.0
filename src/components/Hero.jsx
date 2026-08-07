import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, Sparkles, Shield, Printer } from 'lucide-react';

const FLOATING_STATS = [
  { icon: Printer, value: "500+", label: "Walls Printed" },
  { icon: Shield, value: "100%", label: "UV Resistant" },
  { icon: Sparkles, value: "Australia", label: "Wide Service" }
];

export default function Hero() {
  const containerRef = useRef(null);

  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configurations for smooth luxury feel
  const springConfig = { damping: 40, stiffness: 120, mass: 0.6 };
  const textX = useSpring(useMotionValue(0), springConfig);
  const textY = useSpring(useMotionValue(0), springConfig);
  const bgX = useSpring(useMotionValue(0), springConfig);
  const bgY = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const xVal = (e.clientX - width / 2) / (width / 2);
      const yVal = (e.clientY - height / 2) / (height / 2);

      textX.set(-xVal * 12);
      textY.set(-yVal * 12);
      bgX.set(xVal * 8);
      bgY.set(yVal * 8);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [textX, textY, bgX, bgY]);

  // Scroll Fade-out Transition Setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], [0, -40]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

  // Line-by-line heading reveal variants
  const lineVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bgDark"
    >
      {/* Background Video Layer */}
      <motion.div
        style={{
          opacity: videoOpacity,
          x: bgX,
          y: bgY
        }}
        className="absolute inset-0 w-full h-full pointer-events-none select-none scale-105"
      >
        {/* Ken Burns Effect - Slow Cinematic Scale */}
        <motion.div
          animate={{
            scale: [1.02, 1.08, 1.02],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover filter brightness-[1.12] contrast-[1.16] saturate-[1.18]"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Subtle black gradient overlay to keep the video visible while making the text readable */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.25))'
          }}
        />
      </motion.div>

      {/* Hero Content Panel (Positioned slightly upward for visual center) */}
      <motion.div
        style={{
          x: textX,
          y: textY,
          opacity: contentOpacity
        }}
        className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center select-none -translate-y-8 md:-translate-y-12"
      >
        {/* Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-[#C28A46]/25 text-[#B68D40] uppercase tracking-[0.25em] text-[10px] md:text-xs font-semibold mb-8 shadow-sm backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C28A46] animate-pulse" />
          Vanguard Vertical UV Printing Technology
        </motion.div>

        {/* Heading - Line-by-Line Staggered Reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            textShadow: '0 4px 18px rgba(0,0,0,.35)',
            fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif'
          }}
          className="text-[42px] md:text-[64px] lg:text-[84px] font-semibold text-[#F8F6F2] tracking-[-1px] leading-[1.05] mb-8 max-w-[1000px] text-center"
        >
          <span className="block overflow-hidden h-fit py-1">
            <motion.span variants={lineVariants} className="block">
              Transform Your Walls
            </motion.span>
          </span>
          <span className="block overflow-hidden h-fit py-1">
            <motion.span variants={lineVariants} className="block">
              Into <span style={{ color: '#C28A46' }}>Works of Art</span>
            </motion.span>
          </span>
        </motion.h1>

        {/* Subheading - Fades Up */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
          style={{ textShadow: '0 2px 12px rgba(0,0,0,.30)' }}
          className="text-white/92 text-lg md:text-[22px] max-w-[720px] font-normal tracking-wide mb-10 leading-relaxed"
        >
          Premium Vertical Wall Printing Solutions Across Australia
        </motion.p>

        {/* Buttons - Staggered Entry */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-md mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="block w-full sm:w-auto px-10 py-4.5 text-xs font-bold uppercase tracking-widest rounded-full text-center bg-[#2F3138] text-white hover:bg-[#C28A46] hover:scale-105 hover:shadow-[0_15px_40px_rgba(194,138,70,0.35)] transition-all duration-300 shadow-md"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full sm:w-auto"
          >
            <button
              onClick={() => {
                document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-10 py-4.5 border border-[#C28A46] text-[#2F3138] bg-white hover:bg-[#C28A46] hover:text-white hover:scale-105 transition-all duration-300 text-xs font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 shadow-sm"
            >
              View Our Projects
              <Play className="w-3.5 h-3.5 fill-current text-current" />
            </button>
          </motion.div>
        </div>

        {/* Statistics - Staggered Fade Up of White Glass Cards */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl w-full border-t border-brand-border/40 pt-10">
          {FLOATING_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + idx * 0.12, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex flex-col items-center p-4 rounded-2xl bg-white/75 border border-white/60 shadow-lg backdrop-blur-[16px] group cursor-pointer transition-all duration-300"
            >
              <stat.icon className="w-5 h-5 text-[#C28A46] mb-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl md:text-2xl font-serif text-[#1F2937] font-semibold mb-0.5">
                {stat.value}
              </span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#6F737A] font-semibold text-center leading-none">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Smooth Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#6F737A]/80 font-bold">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-brand-border/80 flex justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-2.5 bg-[#C28A46] rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
