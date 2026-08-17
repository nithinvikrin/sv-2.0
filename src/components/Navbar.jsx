import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'TECHNOLOGY', href: '/#technology' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0B0C0E]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' 
            : 'bg-transparent py-6 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Brand Logo & Subtitle */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="h-10 md:h-12 flex items-center">
              <img 
                src="/images/logo.png" 
                alt="SV Walls" 
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ filter: "drop-shadow(0 2px 8px rgba(194,138,70,0.25))" }}
              />
            </div>
            <div className="flex flex-col border-l border-white/20 pl-3">
              <span className="text-white font-bold tracking-[0.2em] text-sm leading-none">
                SIV
              </span>
              <span className="text-[#C28A46] font-medium tracking-[0.25em] text-[9px] mt-1 leading-none">
                WALLS & INTERIORS
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href === '/' && location.pathname === '/');
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-[11px] font-sans uppercase tracking-[0.2em] font-semibold transition-colors duration-300 py-2.5 ${
                    isActive ? 'text-[#C28A46]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C28A46] shadow-[0_0_10px_#C28A46]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Outlined Gold Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#C28A46] text-[#C28A46] hover:bg-[#C28A46] hover:text-[#0B0C0E] transition-all duration-300 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full group shadow-[0_0_15px_rgba(194,138,70,0.15)]"
            >
              <span>GET FREE QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/90 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#C28A46]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-[#0B0C0E]/98 backdrop-blur-2xl z-40 lg:hidden flex flex-col p-8 border-t border-white/10 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 mt-8 items-center">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-sans uppercase tracking-[0.25em] font-medium transition-colors ${
                        isActive
                          ? 'text-[#C28A46] font-bold'
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
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-6 w-full max-w-xs"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#C28A46] text-[#C28A46] bg-transparent hover:bg-[#C28A46] hover:text-[#0B0C0E] transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em] rounded-full"
                >
                  GET FREE QUOTE →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

