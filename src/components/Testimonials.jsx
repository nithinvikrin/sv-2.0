import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Marcus Vance",
    role: "Luxe Living Residential",
    rating: 5,
    text: "The precision of the printing is unbelievable. We printed an detailed forest scene in our master bedroom, and it looks like a hand-painted masterpiece. Highly recommended!"
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

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-bgDark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
          Client Stories
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal font-light">
          What Our Clients Say
        </h2>
      </div>
 
      {/* Testimonials Infinite Marquee container */}
      <div className="flex overflow-hidden select-none no-select [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        {/* Double array to achieve infinite loop scroll */}
        <div className="flex gap-8 py-4 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((rev, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[350px] md:w-[420px] glass-card rounded-2xl p-8 border border-brand-border bg-white shadow-soft-card hover:shadow-soft-card-hover relative group transition-all duration-500"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4 text-brand-gold">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold" />
                ))}
              </div>
              <p className="text-brand-secondaryText text-sm font-light leading-relaxed mb-6 italic">
                "{rev.text}"
              </p>
              <div>
                <h4 className="text-brand-charcoal font-semibold text-sm tracking-wide font-sans">{rev.name}</h4>
                <span className="text-brand-gold text-xs font-light tracking-wider uppercase">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee CSS injection inside react component to prevent configuration complexity */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
