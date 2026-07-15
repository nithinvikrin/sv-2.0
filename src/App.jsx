import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <SmoothScroll>
          <div className="bg-brand-bgDark min-h-screen relative selection:bg-brand-gold selection:text-brand-charcoal">
            
            {/* Global Ambient Glow Blobs - Slow Animated Lights */}
            <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <motion.div 
                animate={{
                  x: [0, 80, -40, 0],
                  y: [0, -60, 50, 0],
                  scale: [1, 1.15, 0.9, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[5%] w-[550px] h-[550px] bg-brand-glowPurple/10 rounded-full blur-[140px]" 
              />
              <motion.div 
                animate={{
                  x: [0, -70, 60, 0],
                  y: [0, 80, -60, 0],
                  scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-[-10%] right-[10%] w-[650px] h-[650px] bg-brand-glowBlue/10 rounded-full blur-[160px]" 
              />
              <motion.div 
                animate={{
                  x: [0, 40, -50, 0],
                  y: [0, 50, -40, 0],
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[130px]" 
              />
            </div>

            <Navbar />
            
            {/* Page transitions */}
            <AnimatePresence mode="wait">
              <motion.main 
                key={location.pathname}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </motion.main>
            </AnimatePresence>

            <Footer />
          </div>
        </SmoothScroll>
      )}
    </>
  );
}
