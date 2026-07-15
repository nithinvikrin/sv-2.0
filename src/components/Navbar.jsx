import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Before & After', href: '#before-after' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Get a Quote', href: '#quote' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link checking
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'glass-navbar py-4 shadow-xl' 
            : 'bg-transparent py-6 border-b border-white/0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-10 md:h-12 overflow-hidden">
              <img 
                src="/images/logo.png" 
                alt="SV Walls & Interiors" 
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                style={{ filter: "invert(1) hue-rotate(180deg) brightness(1.3)" }}
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm uppercase tracking-widest font-sans font-medium text-white/80 hover:text-white transition-colors py-2"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Call to Action button */}
          <div className="hidden lg:block">
            <a
              href="#quote"
              className="btn-shine inline-flex items-center gap-2 px-6 py-2.5 border border-brand-gold/60 text-xs font-semibold uppercase tracking-widest text-brand-gold bg-brand-gold/5 hover:bg-brand-gold hover:text-brand-charcoal rounded-full transition-all duration-500"
            >
              Get Free Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors focus:outline-none"
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
            className="fixed inset-0 top-[72px] bg-brand-bgDark/98 backdrop-blur-2xl z-30 lg:hidden flex flex-col p-8 border-t border-white/5"
          >
            <div className="flex flex-col gap-6 mt-12 items-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className={`text-xl font-sans uppercase tracking-widest ${
                    activeSection === link.href.substring(1)
                      ? 'text-brand-gold font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#quote"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-brand-gold text-brand-charcoal text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-brand-light transition-colors"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
