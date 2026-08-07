import { motion } from 'framer-motion';
import { Layers, Printer, Sparkles, Zap, Award, ThumbsUp } from 'lucide-react';

const wallPrintingFeatures = [
  {
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
    title: "Vertical Wall Printing",
    description: "High-precision vertical printer printing vibrant, detailed murals directly on glass, plaster, brick, wood, and concrete."
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    title: "Custom Wall Murals",
    description: "Personalized photorealistic artwork, corporate graphics, and bespoke wall prints engineered to perfect scale."
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    title: "Commercial & Branding Prints",
    description: "High-impact vertical printing for retail spaces, hotel lobbies, cafes, offices, and architectural feature walls."
  }
];

const highlights = [
  {
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=150&q=80",
    title: "Vibrant & Long-Lasting",
    description: "UV-cured, eco-friendly inks that dry instantly and resist scratches, sunlight, and wear."
  },
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=150&q=80",
    title: "Clean & Efficient",
    description: "No messy paint drips or long drying times. Quick setup and perfect execution within hours."
  },
  {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=150&q=80",
    title: "Guaranteed Satisfaction",
    description: "Meticulous surface testing, alignment calibrations, and execution to match your design files."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-bgDark relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block"
          >
            Creative Printing Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6 font-light"
          >
            Innovative Vertical Wall Printing
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-[1px] bg-brand-gold mx-auto mb-8 origin-center"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-secondaryText font-light max-w-2xl mx-auto"
          >
            We merge cutting-edge vertical printing technology with premium design aesthetics to craft custom murals, architectural accents, and direct-to-wall artwork.
          </motion.p>
        </div>

        {/* Core Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {wallPrintingFeatures.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card glow-border rounded-3xl overflow-hidden group bg-white shadow-soft-card"
              >
                {/* Visual Image Header */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif text-brand-charcoal font-medium mb-4">{item.title}</h3>
                  <p className="text-brand-secondaryText text-sm font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Special Announcement Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative glass-card rounded-[32px] p-8 md:p-12 mb-24 border border-brand-border bg-white shadow-soft-card overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between"
        >
          {/* Subtle light streak */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_8s_infinite] pointer-events-none" />
          <div className="max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold text-[10px] uppercase font-semibold tracking-widest mb-4 inline-block">
              Precision Vertical UV Wall Printing
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal font-light mb-4">
              Direct-to-Surface High-Resolution Murals
            </h3>
            <p className="text-brand-secondaryText text-sm font-light leading-relaxed">
              Our advanced vertical UV printers deliver up to 2880 DPI photographic clarity directly on indoor and outdoor wall surfaces. From residential accent walls to large-scale commercial branding, we print flawlessly without wallpapers or stickers.
            </p>
          </div>
          <a
            href="#quote"
            className="btn-shine btn-secondary-custom whitespace-nowrap px-8 py-4 text-xs font-semibold uppercase tracking-widest rounded-full"
          >
            Request Wall Printing Quote
          </a>
        </motion.div>

        {/* Why Choose Us / Highlights Grid */}
        <div className="border-t border-brand-border pt-20">
          <h3 className="text-center text-xs uppercase tracking-[0.35em] text-brand-secondaryText/80 mb-16 font-semibold">
            The SV Signature Quality Standard
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            {highlights.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl overflow-hidden border border-brand-border">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-sans text-brand-charcoal font-medium mb-2">{item.title}</h4>
                    <p className="text-brand-secondaryText text-sm font-light leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
