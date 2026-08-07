import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import BeforeAfter from '../components/BeforeAfter';

const CATEGORIES = ["All", "Wall Printing", "Commercial Murals", "Feature Walls", "Residential Murals"];

const PORTFOLIO = [
  {
    id: 1,
    title: "Jesus Christ Wall Printing",
    category: "Wall Printing",
    image: "https://images.unsplash.com/photo-1548625361-185e786b8c8d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Kids Room – Doraemon Wall Printing",
    category: "Wall Printing",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Hall – Custom Wall Design Printing",
    category: "Wall Printing",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Corporate Lobby Geometric Accent Wall",
    category: "Commercial Murals",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Luxury Feature Wall Print with Gold Accents",
    category: "Feature Walls",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Cozy Bedroom Accent Wall Print",
    category: "Residential Murals",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Corporate Boardroom Accent Wall Printing",
    category: "Commercial Murals",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Retail Boutique Brand Mural Printing",
    category: "Commercial Murals",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === "All" 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-glowPurple/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-glowBlue/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal mb-8 font-light tracking-tight leading-tight">
            Our Gallery of Transformations
          </h1>
          <p className="text-brand-secondaryText font-light text-base md:text-lg leading-relaxed">
            Witness how we reshape homes, cafés, boardrooms, and boutique retail layouts. Scroll to compare the raw surfaces with their final high-end designs.
          </p>
        </div>

        {/* Before After slider comparison */}
        <div className="mb-32">
          <BeforeAfter />
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
                filter === cat
                  ? "bg-brand-gold text-white border-brand-gold shadow-gold-glow"
                  : "bg-white text-brand-secondaryText border-brand-border hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand-cardDark border border-brand-border cursor-pointer shadow-soft-card hover:shadow-soft-card-hover"
                onClick={() => setLightbox(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay description */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" >
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-3">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-brand-charcoal text-sm font-serif font-light leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white hover:text-brand-gold transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-brand-border"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={lightbox.image} 
                alt={lightbox.title} 
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <div className="bg-white p-6 border-t border-brand-border">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                  {lightbox.category}
                </span>
                <h3 className="text-brand-charcoal text-lg font-serif font-light mt-1">
                  {lightbox.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
