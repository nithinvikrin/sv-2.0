import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // WhatsApp click handler
  const handleWhatsAppRedirect = () => {
    // Replace with target business WhatsApp number
    const phoneNumber = "61400000000"; // Example AU number
    const message = encodeURIComponent("Hello SV Walls & Interiors! I'd like to get a quote for a vertical wall printing project.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-20 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-4 flex flex-col items-start">
            <img 
              src="/images/logo.png" 
              alt="SV Walls & Interiors" 
              className="h-16 w-auto mb-6 object-contain filter drop-shadow-[0_0_12px_rgba(197,168,128,0.15)]"
              style={{ filter: "invert(1) hue-rotate(180deg) brightness(1.3)" }}
            />
            <p className="text-white/50 font-light text-sm leading-relaxed mb-6">
              Transforming your walls with premium vertical wall printing technology and bespoke luxury interior designs.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 md:col-start-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm font-light">
                <Mail className="w-4 h-4 text-brand-gold" />
                <a href="mailto:info@svwallsandinteriors.com">info@svwallsandinteriors.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm font-light">
                <Phone className="w-4 h-4 text-brand-gold" />
                <a href="tel:+61400000000">+61 400 000 000</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm font-light">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Melbourne, VIC, Australia</span>
              </li>
            </ul>
          </div>

          {/* Socials / Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-6">
              Stay Connected
            </h4>
            <p className="text-white/50 font-light text-xs leading-relaxed mb-4">
              Subscribe to get updates on our latest vertical wall printing designs and custom interior portfolios.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/60 w-full"
              />
              <button className="bg-brand-gold text-brand-charcoal px-4 py-2.5 rounded-xl hover:bg-brand-light transition-colors flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-light">
            &copy; {currentYear} SV Walls &amp; Interiors. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs font-light">
            Designed and Developed by <a href="https://www.vikrin.com/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-light transition-colors font-medium">Vikrin pvt ltd</a>
          </p>
          <div className="flex gap-6 text-white/30 text-xs font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <motion.button
        onClick={handleWhatsAppRedirect}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group focus:outline-none"
        style={{ boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)' }}
        aria-label="Contact us on WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs font-bold uppercase tracking-widest pl-0 group-hover:pl-2 group-hover:pr-2">
          Chat With Us
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        
        {/* Radar Pulse Effect */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-60 pointer-events-none" />
      </motion.button>
    </footer>
  );
}
