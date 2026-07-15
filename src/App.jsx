import { useState } from 'react';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import QuoteCalculator from './components/QuoteCalculator';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Preloader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <SmoothScroll>
          <div className="bg-brand-bgDark min-h-screen relative selection:bg-brand-gold selection:text-brand-charcoal">
            {/* Ambient Background Spotlights */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
              <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[160px]" />
              <div className="absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[200px]" />
            </div>

            <Navbar />
            
            <main className="relative z-10">
              <Hero />
              <Services />
              <BeforeAfter />
              <Gallery />
              <QuoteCalculator />
              <Testimonials />
            </main>

            <Footer />
          </div>
        </SmoothScroll>
      )}
    </>
  );
}
