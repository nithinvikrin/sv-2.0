import { motion } from 'framer-motion';
import { Layers, Printer, Sparkles, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: Printer,
    title: "Vertical Wall Printing",
    description: "High-precision vertical printing, deploying vibrant UV-curable pigments directly onto flat or textured surfaces.",
    features: [
      "No stickers or paper alignment lines",
      "Scratch-resistant & water-resistant finish",
      "720 DPI to 2880 DPI photographic detail",
      "Dry instantly with dual UV lamps"
    ],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Sparkles,
    title: "Custom Murals & Residential Art",
    description: "Photorealistic fine art murals, nature scenes, and personalized family artwork printed direct to bedroom or living room walls.",
    features: [
      "Tailor-made photographic scale adjustment",
      "Vibrant eco-friendly, odorless UV inks",
      "Adds rich tactile visual depth to flat walls",
      "Finished with long-lasting UV protection"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Layers,
    title: "Commercial & Corporate Branding",
    description: "High-impact vertical printing for corporate logos, mission statements, lobby accents, retail feature walls, and hospitality themes.",
    features: [
      "Exact Pantone & corporate color matching",
      "High-speed execution with minimal workplace downtime",
      "Durable print withstands commercial cleaning",
      "Scalable to oversized feature wall dimensions"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
  }
];

const SURFACES = [
  { surface: "Plasterboard", printing: "Excellent compatibility, smooth texture, highest DPI print density.", finish: "Smooth texture, standard priming." },
  { surface: "Glass & Acrylic", printing: "Requires clear primer bonding coat, prints mirror-reverse, backlights look beautiful.", finish: "Clear bonding coat, flawless mirror-printing." },
  { surface: "Brick & Stone", printing: "Sensors track deep grooves, creates beautiful industrial-chic art.", finish: "Surface grooving tracking, rustic finish." },
  { surface: "Wood & Veneers", printing: "Excellent ink absorption, highlights wood grains naturally.", finish: "Highlights natural wood grain textures." }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-brand-glowPurple/5 rounded-full blur-[60px] md:blur-[140px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-brand-glowBlue/5 rounded-full blur-[60px] md:blur-[160px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
            Craftsmanship &amp; Tech
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal mb-8 font-light tracking-tight leading-tight">
            Bespoke Services for Elite Spaces
          </h1>
          <p className="text-brand-secondaryText font-light text-base md:text-lg leading-relaxed">
            From direct vertical UV printing to custom-calibrated graphic wall murals, we bring master-class finishing standards to every vertical surface.
          </p>
        </div>

        {/* Detailed Service Grid */}
        <div className="space-y-24 mb-32">
          {SERVICES.map((srv, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-12 items-center justify-between ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Image */}
                <div className="w-full lg:w-1/2 aspect-[16/10] rounded-[28px] overflow-hidden border border-brand-border shadow-soft-card relative group">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="w-full lg:w-[45%]">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
                    <srv.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal font-light mb-4">{srv.title}</h3>
                  <p className="text-brand-secondaryText font-light text-sm leading-relaxed mb-8">{srv.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {srv.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-xs text-brand-charcoal/80">
                        <div className="w-4 h-4 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="btn-shine btn-secondary-custom inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest rounded-full"
                  >
                    Inquire About This Service
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Surfaces Matrix Table */}
        <div className="border-t border-brand-border pt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
              Architectural Compatibility
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal font-light">
              Surface Engineering &amp; Preparation
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-brand-border text-brand-secondaryText text-xs uppercase tracking-widest">
                  <th className="py-4 px-6 font-semibold">Surface Material</th>
                  <th className="py-4 px-6 font-semibold">UV Printing Compatibility</th>
                  <th className="py-4 px-6 font-semibold">Surface Preparation &amp; Finish</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border font-light text-brand-secondaryText">
                {SURFACES.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#F5F1EA]/30 transition-colors">
                    <td className="py-5 px-6 font-medium text-brand-charcoal">{item.surface}</td>
                    <td className="py-5 px-6 leading-relaxed">{item.printing}</td>
                    <td className="py-5 px-6 leading-relaxed">{item.finish}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
