import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, ChevronLeft, ChevronRight, Award, Zap, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1920&q=80"
];

const REVIEWS = [
  {
    name: "Marcus Vance",
    role: "Luxe Living Residential",
    rating: 5,
    text: "The precision of the printing is unbelievable. We printed a detailed forest scene in our master bedroom, and it looks like a hand-painted masterpiece. Highly recommended!"
  },
  {
    name: "Elena Rostova",
    role: "CEO, Roasters Café",
    rating: 5,
    text: "SV Walls did a feature wall print in our lobby, as well as customized 3D panels behind our counter. The process was fast, completely clean, and transformed our branding."
  },
  {
    name: "David K.",
    role: "Melbourne Boutique Hotel",
    rating: 5,
    text: "Remarkable service. We had several custom TV entertainment units built with 3D panels, and they look stunning. The attention to detail in the craftsmanship is outstanding."
  },
  {
    name: "Sarah Jenkins",
    role: "Interior Designer",
    rating: 5,
    text: "As a designer, I need perfection. SV Walls delivered exactly that. The UV colors are extremely vibrant and matches our print proof precisely."
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headingText = "Transforming Ordinary Walls Into Standout Masterpieces";
  const words = headingText.split(" ");

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 w-full h-full">
          {/* Transparent bottom gradient to blend into dark site body */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bgDark via-transparent to-transparent z-10" />
          
          <AnimatePresence mode="wait">
            <motion.img
              key={heroIndex}
              src={HERO_IMAGES[heroIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Luxury Interior Background"
            />
          </AnimatePresence>
        </motion.div>

        {/* Ambient Glows specific to Hero */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-glowPurple/10 rounded-full blur-[120px] z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-glowBlue/10 rounded-full blur-[150px] z-10 pointer-events-none" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <motion.div style={{ y: textY, opacity }} className="flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold uppercase tracking-[0.25em] text-[10px] md:text-xs font-semibold mb-6 shadow-gold-glow"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              Advanced Vertical Printing &amp; Custom Millwork
            </motion.div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[1.1] mb-8"
            >
              {words.map((word, idx) => (
                <span key={idx} className="inline-block overflow-hidden mr-3 md:mr-4">
                  <motion.span variants={wordVariants} className="inline-block hover:text-brand-gold transition-colors duration-300">
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-white/70 text-base md:text-lg max-w-2xl font-light tracking-wide mb-12 font-sans leading-relaxed"
            >
              Using cutting-edge vertical UV printing technology and master carpentry, we bring bespoke masterpieces directly onto wood, glass, plaster, masonry, and acrylic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
            >
              <Link
                to="/contact"
                className="btn-gold-glow w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-full text-center"
              >
                Request Consultation
              </Link>
              <Link
                to="/gallery"
                className="btn-shine w-full sm:w-auto px-8 py-4 border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-colors duration-500 text-xs font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-2"
              >
                Explore Portfolio
                <Play className="w-3.5 h-3.5 fill-white/10 group-hover:fill-brand-gold/10" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none no-select">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-semibold">
            Scroll to discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-9 rounded-full border border-white/20 flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-brand-gold rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* 2. VALUE SPOTLIGHT (BRAND SIGNATURE) */}
      <section className="py-24 md:py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5"
            >
              <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold mb-4 block">
                The Luxury Standard
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white font-light leading-tight mb-8">
                Uncompromising Quality. Absolute Precision.
              </h2>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                SV Walls &amp; Interiors bridges the gap between high-tech customization and traditional architectural aesthetics. We print directly onto structural surfaces with UV-curing inks, maintaining high definition and rich color depth that lasts a lifetime.
              </p>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                From residential focal points to large-scale commercial murals, our prints dry instantly, are completely odor-free, scratch-resistant, and certified eco-safe.
              </p>
              <Link 
                to="/about"
                className="btn-shine inline-flex items-center gap-2 px-6 py-3 border border-brand-gold/40 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal rounded-full transition-all duration-500"
              >
                Learn More About Us
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { icon: Award, title: "Precision Crafted", desc: "Calibrated micro-nozzles deliver 720 to 2880 DPI photo-quality prints directly onto rigid vertical structures." },
                { icon: Zap, title: "UV Instant Curing", desc: "Integrated high-power ultraviolet lamps freeze and cure paint instantly. Ready to enjoy immediately." },
                { icon: Shield, title: "Extreme Longevity", desc: "Chemical and water-resistant. Prints won't peel, fade, or degrade under direct indoor or partial outdoor sunlight." },
                { icon: Sparkles, title: "Premium Finishes", desc: "We overlay matte, semi-gloss, or protective varnish coatings tailored specifically to your chosen wall texture." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="glass-card glow-border p-8 rounded-2xl border border-white/5 hover:border-brand-gold/20"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-sans font-semibold text-base mb-2">{item.title}</h4>
                  <p className="text-white/40 font-light text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS MARQUEE */}
      <section className="py-24 bg-[#090909] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-light text-glow-gold">
            What Our Clients Say
          </h2>
        </div>

        <div className="flex overflow-hidden select-none no-select [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex gap-8 py-4 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
            {[...REVIEWS, ...REVIEWS].map((rev, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[350px] md:w-[420px] glass-card rounded-2xl p-8 border border-white/5 relative group hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="flex gap-1 mb-4 text-brand-gold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold" />
                  ))}
                </div>
                <p className="text-white/70 text-sm font-light leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
                <div>
                  <h4 className="text-white font-semibold text-sm tracking-wide font-sans">{rev.name}</h4>
                  <span className="text-brand-gold/70 text-xs font-light tracking-wider uppercase">{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION - TRANSFORMATION PROMISE */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-card rounded-[32px] p-8 md:p-16 border border-brand-gold/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-glowBlue/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-glowPurple/10 rounded-full blur-[80px]" />
            
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold mb-6 block">
              Start Your Design Journey
            </span>
            <h3 className="text-3xl md:text-5xl font-serif text-white font-light leading-tight mb-8">
              Ready to redefine your space with vertical art?
            </h3>
            <p className="text-white/60 font-light max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
              Enquire today to receive your custom quote calculation, explore panel options, and book a comprehensive layout proof alignment with our design team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-gold-glow px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-full"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-white/10 text-white hover:border-brand-gold hover:text-brand-gold transition-colors duration-500 text-xs font-bold uppercase tracking-widest rounded-full"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
