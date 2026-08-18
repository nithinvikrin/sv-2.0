import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'glass-navbar py-2 shadow-xl' 
            : 'bg-transparent py-3 border-b border-brand-border/0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between min-h-[44px]">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="h-10 md:h-12 flex items-center shrink-0">
              <img 
                src="/images/logo.png" 
                alt="SV Walls" 
                className="h-10 md:h-12 w-auto max-w-[160px] md:max-w-[200px] object-contain shrink-0 transition-transform duration-500 group-hover:scale-105"
                style={{ filter: "drop-shadow(0 2px 8px rgba(194,138,70,0.15))" }}
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-xs uppercase tracking-widest font-sans font-extrabold transition-colors py-2 inline-flex items-center justify-center leading-none ${
                    isActive ? 'text-brand-gold' : 'text-brand-charcoal/70 hover:text-brand-charcoal'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold shadow-[0_0_8px_#C28A46]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Call to Action button */}
          <div className="hidden lg:block shrink-0">
            <Link
              to="/contact"
              className="btn-shine btn-gold-glow inline-flex items-center justify-center gap-2 px-6 py-2.5 text-[10px] font-extrabold uppercase tracking-widest rounded-full leading-none"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-brand-charcoal/80 hover:text-brand-charcoal transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu panel overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bottom-0 top-[56px] md:top-[64px] bg-[#0B0C0E]/98 text-white backdrop-blur-2xl z-50 lg:hidden flex flex-col p-6 border-t border-white/10 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 mt-6 items-center">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-sans font-bold uppercase tracking-widest ${
                        isActive
                          ? 'text-[#C28A46]'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#C28A46] text-[#0B0C0E] hover:bg-[#d89b4f] inline-flex items-center gap-2 px-8 py-3 text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-md"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
