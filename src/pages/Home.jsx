import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Zap, 
  Shield, 
  Sparkles, 
  Printer, 
  ImageIcon, 
  Building, 
  Home as HomeIcon, 
  Coffee, 
  GraduationCap, 
  HeartPulse, 
  Store, 
  Landmark, 
  Share2, 
  Ruler, 
  CheckCircle2, 
  Flame,
  Droplets,
  Leaf,
  Clock,
  Layers,
  ChevronDown,
  MessageCircle,
  Paintbrush
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BeforeAfter from '../components/BeforeAfter';

const TRUST_BADGES = [
  { icon: Sparkles, label: "High Resolution Printing" },
  { icon: Droplets, label: "Waterproof Inks" },
  { icon: Shield, label: "Durable Finish" },
  { icon: Leaf, label: "Eco-Friendly" },
  { icon: Clock, label: "Fast Installation" }
];

const WHAT_WE_DO = [
  {
    icon: Printer,
    title: "Vertical Wall Printing",
    desc: "Direct-to-surface vertical printing on concrete, brick, wood, glass, plaster, and metal walls with extreme precision.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Sparkles,
    title: "Custom Wall Murals",
    desc: "Enlarge and print your custom high-resolution photographs, digital artwork, or custom graphics onto focal walls.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Building,
    title: "Office Branding",
    desc: "Transform corporate spaces with high-impact logos, company mission murals, and custom decorative graphics.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: HomeIcon,
    title: "Residential Accent Walls",
    desc: "Add personalized art, patterns, or educational graphics in living rooms, master bedrooms, and children's rooms.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Store,
    title: "Commercial Spaces",
    desc: "Elevate hotels, cafes, retail stores, and commercial lobbies to create unique, photogenic visual atmospheres.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Landmark,
    title: "Religious & Artistic Designs",
    desc: "Bespoke high-fidelity printing of intricate religious motifs, temples, and traditional fine art direct to surface.",
    image: "/images/religious_art.png"
  }
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Share Your Design",
    desc: "Upload or send your preferred high-resolution image, or work with our design team to pick a custom artwork.",
    icon: Share2
  },
  {
    step: "02",
    title: "Site Inspection & Measurement",
    desc: "Our field team inspects the target wall's material, texture, and exact dimensions to calibrate our hardware.",
    icon: Ruler
  },
  {
    step: "03",
    title: "Direct Wall Printing",
    desc: "We set up our specialized vertical printing rig and apply eco-friendly UV-cured inks directly to the wall surface.",
    icon: Printer
  },
  {
    step: "04",
    title: "Final Quality Check",
    desc: "We perform a thorough color and resolution scan and apply an optional protective finish for lifetime durability.",
    icon: CheckCircle2
  }
];

const WHY_CHOOSE_US = [
  { 
    icon: Award, 
    title: "1440 DPI High Resolution", 
    desc: "Razor-sharp details and smooth gradients matching your design proof perfectly.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Flame, 
    title: "UV Resistant", 
    desc: "Sunlight-proof inks that will not fade or wash out over time.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Droplets, 
    title: "Waterproof", 
    desc: "Easily cleanable with a damp cloth; moisture and damp resistant.",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Leaf, 
    title: "Eco-Friendly Ink", 
    desc: "Non-toxic, low VOC, completely odorless inks safe for schools and hospitals.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Clock, 
    title: "Fast Installation", 
    desc: "Rig setup and printing completes within hours. Zero mess, zero odors.",
    image: "/images/fast_installation.png"
  },
  { 
    icon: Sparkles, 
    title: "Long Lasting Colors", 
    desc: "UV curing technology binds paint instantly to guarantee long-lasting brightness.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Layers, 
    title: "Any Wall Surface", 
    desc: "Prints flawlessly on wood, glass, brick, concrete, drywall, and acrylic.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
  },
  { 
    icon: Paintbrush, 
    title: "Custom Designs", 
    desc: "No size limits or color boundaries. Anything you can imagine can be printed.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80"
  }
];

const APPLICATIONS = [
  { title: "Home", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80" },
  { title: "Bedroom", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80" },
  { title: "Living Room", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80" },
  { title: "Kids Room", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600&q=80" },
  { title: "Office", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
  { title: "Café", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80" },
  { title: "Restaurant", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" },
  { title: "Hotel", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" },
  { title: "School", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" },
  { title: "Hospital", image: "/images/hospital.png" },
  { title: "Retail Store", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" },
  { title: "Temple", image: "/images/temple.png" }
];

const REVIEWS = [
  {
    name: "Marcus Vance",
    role: "Luxe Living Residential",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    text: "The precision of the printing is unbelievable. We printed a detailed forest scene in our master bedroom, and it looks like a hand-painted masterpiece. Highly recommended!"
  },
  {
    name: "Elena Rostova",
    role: "CEO, Roasters Café",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    text: "SV Walls did a feature wall print in our lobby, as well as customized artwork behind our counter. The process was fast, completely clean, and transformed our branding."
  },
  {
    name: "David K.",
    role: "Melbourne Boutique Hotel",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    text: "Remarkable service. We had several custom feature wall murals printed across our suites, and they look stunning. The attention to detail in the printing is outstanding."
  },
  {
    name: "Sarah Jenkins",
    role: "Design Consultant",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    text: "As a designer, I need perfection. SV Walls delivered exactly that. The UV colors are extremely vibrant and matches our print proof precisely."
  }
];

const FAQS = [
  {
    q: "How durable is vertical wall printing?",
    a: "Indoors, prints last virtually indefinitely (up to 15+ years) without any fading or degradation. For outdoor applications under direct weather conditions, they remain vibrant for 5 to 8 years before requiring a fresh clear coat."
  },
  {
    q: "What types of walls or surfaces can be printed on?",
    a: "Our vertical UV printer can print on almost any rigid material. This includes plaster, drywall, brick, raw concrete, wood panels, glass, acrylic, metal sheet, tiles, and wallpaper."
  },
  {
    q: "How long does a typical installation and print take?",
    a: "Setting up our printer rig takes about 30-45 minutes. The actual print speed is roughly 2 to 4 square meters per hour depending on the resolution. Most residential single accent walls are completed in a single morning or afternoon."
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing is based primarily on the total square footage/meterage of the print, the complexity of the design calibration, and the surface material preparation requirements. Get in touch with us to receive a free, exact quote."
  },
  {
    q: "Are the inks waterproof and easy to clean?",
    a: "Yes! The UV inks cure instantly under high-power lamps, forming a waterproof, scratch-resistant surface. You can clean the walls with a damp microfiber cloth and mild soap without worrying about damaging the print."
  },
  {
    q: "Are there any strong chemical odors during or after printing?",
    a: "Not at all. Our UV-curable inks are certified eco-friendly, non-toxic, and low-VOC. There is no offensive odor, making our printing perfectly safe for sensitive environments like children's bedrooms, schools, and hospitals."
  }
];

// Simple Animated Counter Helper
function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(value, 10);
          if (start === end) return;

          const totalMiliseconds = duration;
          const incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
              clearInterval(timer);
            }
          }, Math.max(incrementTime, 16));
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [value, duration, hasAnimated]);

  return <span ref={elementRef}>{count}</span>;
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Autoplay for Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden bg-brand-bgDark">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. WHAT WE DO SECTION */}
      <section className="py-24 md:py-32 relative z-20 bg-brand-bgDark/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold mb-4 block">
              Our Core Services
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6 font-light leading-tight">
              High-Fidelity Wall Customization
            </h2>
            <div className="w-20 h-[1px] bg-brand-gold/60 mx-auto mt-6" />
            <p className="text-brand-secondaryText font-light mt-4 leading-relaxed text-sm md:text-base">
              Explore our specialization in direct wall printing technology, tailored to match both premium branding needs and elegant residential design aesthetics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHAT_WE_DO.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.8 }}
                className="glass-card rounded-2xl border border-brand-border bg-white shadow-soft-card hover:shadow-soft-card-hover flex flex-col overflow-hidden transition-all group"
              >
                {/* Card Image Header with Zoom Effect */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                </div>

                {/* Card Body */}
                <div className="pt-6 px-6 pb-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-brand-charcoal font-sans font-semibold text-lg mb-3 tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-brand-secondaryText font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section className="py-24 md:py-32 relative z-20 bg-[#F5F1EA] border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold mb-4 block">
              Seamless Process
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6 font-light leading-tight">
              From Artwork to Finished Wall in 4 Steps
            </h2>
            <div className="w-20 h-[1px] bg-brand-gold/60 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Background connecting lines for desktop */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-brand-gold/0 via-brand-gold/20 to-brand-gold/0 z-0" />

            {HOW_IT_WORKS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full glass-card bg-white border border-brand-border flex items-center justify-center text-brand-gold mb-6 relative group-hover:border-brand-gold/40 transition-colors duration-500 shadow-soft-card">
                  <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                  <step.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-500 text-brand-gold" />
                </div>
                <h4 className="text-brand-charcoal font-semibold text-lg mb-3 tracking-wide">{step.title}</h4>
                <p className="text-brand-secondaryText font-light text-xs md:text-sm leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE SV WALLS */}
      <section className="py-24 md:py-32 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold mb-4 block">
              Engineered Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6 font-light leading-tight">
              Why Choose SV Walls
            </h2>
            <div className="w-20 h-[1px] bg-brand-gold/60 mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.8 }}
                className="glass-card rounded-2xl border border-brand-border bg-white shadow-soft-card hover:shadow-soft-card-hover flex flex-col overflow-hidden transition-all group"
              >
                {/* Card Image Header with Zoom Effect */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                </div>

                {/* Card Body */}
                <div className="pt-5 px-5 pb-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-brand-charcoal font-sans font-semibold text-sm mb-2 flex items-center gap-2 tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                      <item.icon className="w-4 h-4 text-brand-gold flex-shrink-0" />
                      {item.title}
                    </h4>
                    <p className="text-brand-secondaryText font-light text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. APPLICATIONS SECTION */}
      <section id="applications" className="py-24 md:py-32 relative z-20 bg-[#F5F1EA] border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold mb-4 block">
              Versatile Printing Applications
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6 font-light leading-tight">
              Transforming Diverse Architectural Spaces
            </h2>
            <div className="w-20 h-[1px] bg-brand-gold/60 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {APPLICATIONS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-brand-border hover:border-brand-gold/40 transition-all duration-500 cursor-pointer shadow-soft-card"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent z-10 transition-opacity animate-pulse-slow" />
                <div className="absolute bottom-4 left-4 z-20">
                  <h4 className="text-brand-charcoal font-semibold text-sm md:text-base font-sans tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER SHOWCASE */}
      <section className="py-24 md:py-32 relative z-20 bg-brand-bgDark border-t border-brand-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold mb-4 block">
              Interactive Transformation
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6 font-light leading-tight">
              Before &amp; After Showcase
            </h2>
            <p className="text-brand-secondaryText font-light mt-4 leading-relaxed text-sm md:text-base">
              Drag the center divider left and right to witness the direct-printing mural transformation on a raw wall.
            </p>
            <div className="w-20 h-[1px] bg-brand-gold/60 mx-auto mt-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfter />
          </div>
        </div>
      </section>

      {/* 7. STATISTICS SECTION */}
      <section className="py-20 bg-[#F5F1EA] relative border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "500", label: "Projects Completed", suffix: "+" },
              { value: "350", label: "Happy Clients", suffix: "+" },
              { value: "8", label: "Years Experience", suffix: "+" },
              { value: "15", label: "Cities Served", suffix: "" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal tracking-tight mb-2 font-light">
                  <AnimatedCounter value={stat.value} />
                  <span className="text-brand-gold font-sans font-normal">{stat.suffix}</span>
                </div>
                <div className="text-brand-secondaryText text-[10px] md:text-xs uppercase tracking-widest font-semibold font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER TESTIMONIALS CAROUSEL */}
      <section className="py-24 md:py-32 bg-brand-bgDark relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-20">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-16 font-light">
            What Our Clients Say
          </h2>

          <div className="relative glass-card rounded-[32px] p-8 md:p-16 border border-brand-border bg-white shadow-soft-card overflow-hidden max-w-4xl mx-auto">
            <div className="absolute top-6 left-6 w-24 h-24 bg-brand-gold/5 rounded-full blur-xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border border-brand-gold/30">
                  <img 
                    src={REVIEWS[testimonialIndex].image} 
                    alt={REVIEWS[testimonialIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex gap-1 mb-6 text-brand-gold">
                  {[...Array(REVIEWS[testimonialIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold" />
                  ))}
                </div>

                <p className="text-brand-secondaryText text-base md:text-lg font-light leading-relaxed mb-8 italic max-w-2xl">
                  "{REVIEWS[testimonialIndex].text}"
                </p>

                <div>
                  <h4 className="text-brand-charcoal font-semibold text-base tracking-wide font-sans">
                    {REVIEWS[testimonialIndex].name}
                  </h4>
                  <span className="text-brand-gold text-xs font-light tracking-wider uppercase">
                    {REVIEWS[testimonialIndex].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)}
                className="p-3 border border-brand-border rounded-full hover:border-brand-gold hover:text-brand-gold text-brand-charcoal bg-white shadow-sm transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % REVIEWS.length)}
                className="p-3 border border-brand-border rounded-full hover:border-brand-gold hover:text-brand-gold text-brand-charcoal bg-white shadow-sm transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-24 md:py-32 relative z-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold mb-4 block">
              Have Questions?
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6 font-light leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-[1px] bg-brand-gold/60 mx-auto mt-6" />
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="glass-card rounded-2xl border border-brand-border bg-white shadow-soft-card overflow-hidden transition-all duration-300 hover:border-brand-border/85"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 font-semibold text-brand-charcoal hover:text-brand-gold transition-colors duration-300"
                  >
                    <span className="font-sans text-sm md:text-base font-medium">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-gold' : 'text-brand-secondaryText/60'}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 md:p-8 pt-0 text-brand-secondaryText text-xs md:text-sm font-light leading-relaxed border-t border-brand-border">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-card rounded-[32px] p-8 md:p-16 border border-brand-border bg-white shadow-soft-card relative overflow-hidden"
          >
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-glowBlue/3 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-glowPurple/3 rounded-full blur-[80px]" />
            
            <span className="text-xs uppercase tracking-[0.35em] text-brand-gold font-semibold mb-6 block">
              Start Your Transformation
            </span>
            <h3 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-8 font-light leading-tight">
              Ready to Transform Your Walls?
            </h3>
            <p className="text-brand-secondaryText font-light max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
              Contact us today to schedule your on-site measurement, request a custom digital design proof, or discuss pricing calculation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="btn-gold-glow w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-full text-center"
              >
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/919999999999?text=Hello%20SV%20Walls%2C%20I%20am%20interested%20in%20direct%20wall%20printing%20services.%20Please%20provide%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-custom w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-green-500 fill-green-500" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
