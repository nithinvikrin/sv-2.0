import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryCategories = ["All", "Wall Printing", "Commercial", "3D Panels & TV Units", "Residential"];

const galleryItems = [
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
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Luxury TV Console with Gold Traced 3D Panels",
    category: "3D Panels & TV Units",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Cozy Bedroom Accent Fluted Backdrop",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Corporate Boardroom Sleek Wood Panels",
    category: "3D Panels & TV Units",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Retail Boutique Brand Mural Printing",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-bgDark relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6 font-light">
            Completed Projects
          </h2>
          <p className="text-brand-secondaryText font-light">
            Take a look at how we transform homes, businesses, and retail environments with detailed printing and structural panels.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-brand-gold text-white shadow-md shadow-brand-gold/10"
                  : "bg-white text-brand-secondaryText border border-brand-border hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand-cardDark border border-brand-border shadow-soft-card hover:shadow-soft-card-hover cursor-pointer"
                onClick={() => setActiveImage(item)}
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Light Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" >
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-3">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-brand-charcoal text-base font-serif font-light leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setActiveImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:text-brand-gold transition-colors"
              onClick={() => setActiveImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-brand-border"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeImage.image} 
                alt={activeImage.title} 
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <div className="bg-white p-6 border-t border-brand-border">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                  {activeImage.category}
                </span>
                <h3 className="text-brand-charcoal text-lg font-serif font-light mt-1">
                  {activeImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
