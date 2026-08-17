import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
  const location = useLocation();

  return (
    <>
      <SmoothScroll>
        <div className="bg-brand-bgDark min-h-screen relative selection:bg-brand-gold selection:text-white">
          
          {/* Global Ambient Glow Blobs - Slow Animated Lights (Optimized for Mobile WebKit GPU performance) */}
          <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <motion.div 
              animate={{
                x: [0, 40, -20, 0],
                y: [0, -30, 25, 0],
                scale: [1, 1.1, 0.95, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-[-10%] left-[5%] w-[280px] h-[280px] md:w-[550px] md:h-[550px] bg-brand-glowPurple/3 rounded-full blur-[60px] md:blur-[140px] transform-gpu" 
            />
            <motion.div 
              animate={{
                x: [0, -40, 30, 0],
                y: [0, 40, -30, 0],
                scale: [1, 1.08, 0.95, 1],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] md:w-[650px] md:h-[650px] bg-brand-glowBlue/3 rounded-full blur-[70px] md:blur-[160px] transform-gpu" 
            />
            <motion.div 
              animate={{
                x: [0, 20, -25, 0],
                y: [0, 25, -20, 0],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-[40%] right-[10%] md:right-[20%] w-[220px] h-[220px] md:w-[400px] md:h-[400px] bg-brand-gold/2 rounded-full blur-[50px] md:blur-[130px] transform-gpu" 
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
    </>
  );
}
