import { motion } from 'framer-motion';
import { Eye, Shield, Users, Compass, HelpCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    question: "What surfaces can you print on?",
    answer: "Our vertical printer can print on almost any flat or textured surface including plasterboard, concrete, brick, glass, acrylic, wood panels, metal, and ceramic tiles. We perform surface preparation checks during our consultation."
  },
  {
    question: "How long does the wall printing process take?",
    answer: "Most medium-sized residential wall prints (under 10m²) are completed in a single day. Setup takes about an hour, printing ranges from 1-3 square meters per hour depending on complexity, and cleanup is minimal as the UV ink cures instantly."
  },
  {
    question: "Are the inks safe and environmentally friendly?",
    answer: "Yes, we use advanced eco-friendly, UV-cured inks. They do not emit toxic fumes or VOCs, make zero mess, and dry instantly under ultraviolet light, making them perfect for child care centers, restaurants, and hospitals."
  },
  {
    question: "Can I choose my own custom image?",
    answer: "Absolutely. You can choose any high-resolution image, artwork, logo, or design. We recommend images over 300 DPI at full print size. Our design team will inspect and calibrate your file to ensure perfect alignment."
  },
  {
    question: "How durable is the print? Can it be cleaned?",
    answer: "Our prints are scratch-resistant and highly durable. You can wipe them down with a damp microfiber cloth. Indoors, the prints last 10-15+ years without fading. Outdoors, they last up to 5 years (or longer if a UV-protective coating is applied)."
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-brand-glowPurple/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-brand-glowBlue/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* About Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
            Our Identity
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-light tracking-tight leading-tight mb-8">
            Pioneering Vertical Artistry &amp; Interior Architecture
          </h1>
          <p className="text-white/60 font-light text-base md:text-lg leading-relaxed">
            At SV Walls &amp; Interiors, we exist to redefine spaces. Combining high-resolution German vertical printing technology with premium design and custom fluted wood paneling, we translate digital dreams into physical, structural luxury.
          </p>
        </div>

        {/* Brand values / Philosophy */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: Eye, title: "Our Vision", desc: "To eliminate the limitations of wallpaper and hand-painted murals, offering flawless scale, precision, and longevity directly onto the structural elements of modern architecture." },
            { icon: Compass, title: "Our Process", desc: "From calibration proofing, surface priming, to UV printing and carpentry installation, every millimeter is aligned with elite execution guidelines." },
            { icon: Users, title: "Our Promise", desc: "We coordinate directly with interior designers, commercial developers, and private homeowners to ensure high-end aesthetic compatibility." }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="glass-card glow-border p-8 rounded-[24px] border border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/25">
                <val.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-sans font-semibold text-lg mb-3">{val.title}</h3>
              <p className="text-white/40 font-light text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology Highlight */}
        <div className="relative glass-card rounded-[32px] p-8 md:p-16 border border-brand-gold/15 mb-32 overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-4 inline-block">
                Precision Tech Specs
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white font-light mb-6">
                Next-Gen Vertical Printing Tech
              </h2>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
                Unlike traditional vinyl stickers or wallpapers that peel, trap moisture, or bubble, our printing head works directly against the wall. Using multi-axis laser tracking sensors, the print nozzle automatically adjusts to surface contours, maintaining a constant 1mm printing distance over textured brick, fluted timber panels, or rough plaster.
              </p>
              <ul className="space-y-3 mb-8 text-xs font-light text-white/50">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  Eco-friendly, VOC-free UV cured pigments with instant solidification
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  Print resolution scale: 720 / 1080 / 1440 / 2880 DPI
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  Multi-surface capability: Glass, acrylic, drywall, metal, tile, wood
                </li>
              </ul>
              <Link to="/gallery" className="btn-shine inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-charcoal text-xs font-bold uppercase tracking-widest rounded-full">
                See Print Precision
              </Link>
            </div>
            <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80" 
                alt="Technology Close-up" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
              Information Center
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-light text-glow-gold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {FAQS.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="glass-card p-8 rounded-2xl border border-white/5 hover:border-brand-gold/15 transition-all"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold text-xs font-bold flex-shrink-0 mt-1">
                    ?
                  </div>
                  <div>
                    <h4 className="text-white font-sans font-semibold text-base mb-2">{faq.question}</h4>
                    <p className="text-white/50 font-light text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
