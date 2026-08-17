import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import QuoteCalculator from '../components/QuoteCalculator';

export default function Contact() {
  const handleWhatsApp = () => {
    const phoneNumber = "61400000000";
    const message = encodeURIComponent("Hello SV Walls! I'd like to get a quote/consultation for a vertical wall printing project.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/3 w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-brand-glowPurple/5 rounded-full blur-[60px] md:blur-[140px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-brand-glowBlue/5 rounded-full blur-[60px] md:blur-[140px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal mb-8 font-light tracking-tight leading-tight">
            Let's Collaborate On Your Walls
          </h1>
          <p className="text-brand-secondaryText font-light text-base md:text-lg leading-relaxed">
            Have questions about surface preparation, layouts, pricing, or high-resolution printing? Use our estimator below, send us a project request, or contact us directly via WhatsApp.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Mail, title: "Email Inquiry", desc: "For artwork files, layout proofs, or general partnerships.", link: "mailto:info@svwalls.com", action: "info@svwalls.com" },
            { icon: Phone, title: "Phone Support", desc: "Speak directly with our technical installation lead.", link: "tel:+61400000000", action: "+61 400 000 000" },
            { icon: MapPin, title: "Service Area", desc: "Melbourne metro and surrounding regions in Victoria.", link: "#", action: "Melbourne, Victoria, Australia" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="glass-card p-8 rounded-[24px] border border-brand-border bg-white shadow-soft-card hover:shadow-soft-card-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-brand-charcoal font-sans font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-brand-secondaryText font-light text-xs leading-relaxed mb-6">{item.desc}</p>
              <a href={item.link} className="text-brand-gold text-xs font-semibold uppercase tracking-widest hover:text-brand-charcoal transition-colors">
                {item.action}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Calculator and Consultation Form */}
        <div className="border-t border-brand-border pt-20">
          <QuoteCalculator />
        </div>

        {/* WhatsApp Lead Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card rounded-[32px] p-8 md:p-12 mt-24 border border-brand-border bg-white shadow-soft-card flex flex-col md:flex-row gap-8 items-center justify-between"
        >
          <div>
            <span className="px-3 py-1 rounded-full bg-[#25D366]/15 text-[#25D366] text-[10px] uppercase font-bold tracking-widest mb-4 inline-block">
              Direct Communication
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal font-light mb-4">
              Need immediate design answers?
            </h3>
            <p className="text-brand-secondaryText text-sm font-light leading-relaxed max-w-xl">
              Tap the button to start a secure WhatsApp chat. You can send us photographs of your walls, dimensions, and reference design layouts directly.
            </p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="whitespace-nowrap px-8 py-4 bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#20ba59] transition-all duration-300 shadow-lg shadow-[#25d366]/20 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            Chat via WhatsApp
          </button>
        </motion.div>

      </div>
    </div>
  );
}
