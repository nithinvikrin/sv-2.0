import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

export default function QuoteCalculator() {
  const [area, setArea] = useState(3);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [surfaceType, setSurfaceType] = useState('Plaster Wall');
  const [message, setMessage] = useState('');
  const [totalCost, setTotalCost] = useState(750);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const RATE_PER_M2 = 250;
  const MIN_AREA = 3;

  useEffect(() => {
    const calculated = Math.max(MIN_AREA, Number(area)) * RATE_PER_M2;
    setTotalCost(calculated);
  }, [area]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (area < MIN_AREA) {
      setError(`Minimum area required is ${MIN_AREA}m²`);
      return;
    }
    setError('');
    // Mocking API call
    setSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setArea(3);
    setSurfaceType('Plaster Wall');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section id="quote" className="py-24 md:py-32 bg-brand-bgDark/50 relative overflow-hidden">
      {/* Glow Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Info & High Quality Showcase Image */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
              Consultation
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-light tracking-tight leading-tight mb-6">
              Get a Quote &amp; Design Consultation
            </h2>
            <p className="text-white/60 font-light mb-8 leading-relaxed">
              Ready to transform your space? Fill out the enquiry form to get in touch. Please specify your approximate print area—the minimum space requirement for a project is <strong>3m²</strong>, with pricing starting at <strong>$250 AUD per m²</strong>.
            </p>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="SV Luxury Interior Showcase" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bgDark/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right: Enquiry Form / Success dialog */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-[32px] p-8 md:p-12 border border-white/5 shadow-2xl">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2 font-medium">Your Name</label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all"
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2 font-medium">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="info@svwallsandinteriors"
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2 font-medium">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +61 400 000 000"
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all"
                        />
                      </div>

                      {/* Surface Type */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2 font-medium">Surface Type</label>
                        <select 
                          value={surfaceType}
                          onChange={(e) => setSurfaceType(e.target.value)}
                          className="bg-brand-charcoal border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all"
                        >
                          <option>Plaster Wall</option>
                          <option>Wood Panel</option>
                          <option>Concrete / Brick</option>
                          <option>Glass / Acrylic</option>
                          <option>Tiles / Ceramic</option>
                          <option>Interior 3D Panel Work</option>
                        </select>
                      </div>
                    </div>

                    {/* Area Slider & Input */}
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-[10px] uppercase tracking-widest text-white/50 font-medium">
                          Area Size (m²) <span className="text-brand-gold">(Min: 3m²)</span>
                        </label>
                        <span className="text-sm font-semibold text-brand-gold">{area} m²</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <input 
                          type="range" 
                          min={MIN_AREA} 
                          max="100" 
                          value={area}
                          onChange={(e) => setArea(Number(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                        />
                        <input 
                          type="number"
                          min={MIN_AREA}
                          value={area}
                          onChange={(e) => setArea(Number(e.target.value))}
                          className="w-20 bg-white/5 border border-white/10 rounded-xl p-2 text-center text-white text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-0"
                        />
                      </div>
                      {error && <span className="text-red-500 text-xs mt-2">{error}</span>}
                    </div>

                    {/* Project details */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase tracking-widest text-white/50 mb-2 font-medium">Project details / Design description</label>
                      <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="3"
                        placeholder="Tell us about the design, custom colors, or specific interior works needed..."
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn-shine w-full py-4 bg-brand-gold text-brand-charcoal text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/15"
                    >
                      Submit Quote Request
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="w-20 h-20 bg-brand-gold/10 border-2 border-brand-gold rounded-full flex items-center justify-center text-brand-gold mx-auto mb-8 shadow-[0_0_20px_rgba(197,168,128,0.2)]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white font-light mb-4">
                      Quote Request Received
                    </h3>
                    <p className="text-white/60 text-sm font-light max-w-md mx-auto mb-10 leading-relaxed">
                      Thank you <strong className="text-white font-medium">{name}</strong>. Our team will review your project details and contact you within 24 hours to schedule a consultation and finalize the design.
                    </p>
                    <button
                      onClick={resetForm}
                      className="px-8 py-3.5 border border-white/10 text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:border-brand-gold hover:text-brand-gold transition-colors duration-500"
                    >
                      Calculate Another Wall
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
