import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "61400000000";
    const message = encodeURIComponent("Hello SV Walls! I'd like to get a quote for a vertical wall printing project.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-[#F3EFE7] border-t border-brand-border pt-20 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link to="/">
              <img 
                src="/images/logo.png" 
                alt="SV Walls" 
                className="h-28 w-auto mb-6 object-contain"
                style={{ filter: "drop-shadow(0 2px 8px rgba(194,138,70,0.15))" }}
              />
            </Link>
            <p className="text-brand-secondaryText font-light text-sm leading-relaxed mb-6">
              Transforming your walls with premium vertical wall printing technology and custom direct-to-wall murals.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-light text-brand-secondaryText">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-brand-secondaryText hover:text-brand-gold transition-colors text-sm font-light">
                <Mail className="w-4 h-4 text-brand-gold" />
                <a href="mailto:info@svwalls.com">info@svwalls.com</a>
              </li>
              <li className="flex items-center gap-3 text-brand-secondaryText hover:text-brand-gold transition-colors text-sm font-light">
                <Phone className="w-4 h-4 text-brand-gold" />
                <a href="tel:+61400000000">+61 400 000 000</a>
              </li>
              <li className="flex items-center gap-3 text-brand-secondaryText text-sm font-light">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Melbourne, VIC, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-secondaryText/70 text-xs font-light">
            &copy; {currentYear} SV Walls. All Rights Reserved.
          </p>
          <p className="text-brand-secondaryText/70 text-xs font-light">
            Designed and Developed by <a href="https://www.vikrin.com/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-charcoal transition-colors font-medium">Vikrin pvt ltd</a>
          </p>
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
