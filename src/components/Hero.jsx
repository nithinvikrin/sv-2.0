import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Printer, 
  ShieldCheck, 
  MapPin, 
  Sparkles 
} from 'lucide-react';

const STATS_DATA = [
  {
    icon: Printer,
    value: '500+',
    label: 'WALLS PRINTED'
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'UV RESISTANT'
  },
  {
    icon: MapPin,
    value: 'AUSTRALIA',
    label: 'WIDE SERVICE'
  },
  {
    icon: Sparkles,
    value: 'PREMIUM',
    label: 'QUALITY PRINTS'
  }
];

export default function Hero() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        typeof window !== 'undefined' && (
          window.innerWidth < 1024 || 
          ('ontouchstart' in window) || 
          (navigator.maxTouchPoints > 0)
        )
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth mouse subtle parallax on desktop
  const springConfig = { damping: 40, stiffness: 100, mass: 0.8 };
  const textX = useSpring(useMotionValue(0), springConfig);
  const textY = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const xVal = (e.clientX - width / 2) / (width / 2);
      const yVal = (e.clientY - height / 2) / (height / 2);
      textX.set(-xVal * 10);
      textY.set(-yVal * 10);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, textX, textY]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100vh] min-h-[100svh] w-full bg-[#0B0C0E] text-white flex flex-col justify-between overflow-hidden pt-28 pb-8 md:pt-36 md:pb-12"
    >
      {/* Photorealistic Background Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          <img
            src="/images/hero_bg.jpg"
            alt="Luxury Vertical Wall Printing"
            className="w-full h-full object-cover object-right md:object-center filter brightness-[0.9] contrast-[1.1]"
          />
        </motion.div>

        {/* Dark Left-to-Right Gradient Overlay for 100% Text Readability */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to right, 
              #0B0C0E 0%, 
              rgba(11,12,14,0.96) 35%, 
              rgba(11,12,14,0.75) 55%, 
              rgba(11,12,14,0.3) 80%, 
              rgba(11,12,14,0.15) 100%)`
          }}
        />

        {/* Ambient Top & Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E]/70 via-transparent to-[#0B0C0E] z-10 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex items-center my-auto">
        <motion.div
          style={{ x: textX, y: textY }}
          className="w-full lg:w-[48%] xl:w-[45%] text-left pt-6 pb-12"
        >
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 text-[#C28A46] text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.25em] mb-3"
          >
            <span className="w-5 h-[1.5px] bg-[#C28A46] inline-block" />
            <span>PREMIUM VERTICAL WALL PRINTING</span>
          </motion.div>

          {/* Main Editorial Heading - Scaled Down */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'Cinzel, "Playfair Display", Georgia, serif' }}
            className="text-[26px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[50px] font-medium text-white leading-[1.08] tracking-tight mb-4"
          >
            Transform Your<br />
            Walls Into<br />
            <span className="text-[#C28A46] italic font-serif drop-shadow-[0_4px_20px_rgba(194,138,70,0.3)]">
              Works of Art
            </span>
          </motion.h1>

          {/* Subheading / Description - Scaled Down */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            className="text-white/80 font-sans text-[11px] md:text-xs lg:text-sm font-normal leading-relaxed max-w-sm mb-6"
          >
            High-resolution vertical wall printing solutions that bring your imagination to life.
          </motion.p>

          {/* CTA Buttons - Scaled Down */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
          >
            {/* Primary CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#C28A46] hover:bg-[#d89b4f] text-[#0B0C0E] font-sans font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(194,138,70,0.25)] hover:shadow-[0_0_30px_rgba(194,138,70,0.4)] hover:scale-[1.02] group"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA */}
            <button
              onClick={() => {
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 border border-white/30 hover:border-white text-white font-sans font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] group"
            >
              <span>VIEW OUR PROJECTS</span>
              <Play className="w-2.5 h-2.5 fill-current text-white transition-transform duration-300 group-hover:scale-110" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust / Statistics Bar - Scaled Down */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0B0C0E]/75 backdrop-blur-xl border border-white/10 rounded-2xl p-3 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0 md:divide-x divide-white/10">
            {STATS_DATA.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col items-start ${idx !== 0 ? 'md:pl-5' : ''}`}
                >
                  <div className="flex items-center gap-2 mb-0.5">
                    <StatIcon className="w-3.5 h-3.5 text-[#C28A46] stroke-[1.5]" />
                    <span className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-white/60 font-semibold">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


