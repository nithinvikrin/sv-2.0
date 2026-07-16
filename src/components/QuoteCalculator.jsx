import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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
    <div className="relative">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Info Showcase */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-4 block">
            Pricing Estimate
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6 font-light tracking-tight leading-tight">
            Calculate Project Investment
          </h2>
          <p className="text-brand-secondaryText font-light mb-8 leading-relaxed text-sm">
            Ready to transform your space? Use our instant estimator to calibrate your project layout. Minimum vertical print space requirement is <strong className="text-brand-charcoal font-medium">3m²</strong>, with standard luxury rates beginning at <strong className="text-brand-charcoal font-medium">$250 AUD per m²</strong>.
          </p>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-brand-border shadow-soft-card relative group">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
              alt="SV Luxury Interior Showcase" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bgDark/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right: Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-[32px] p-8 md:p-12 border border-brand-border bg-white shadow-soft-card relative">
            <div className="absolute top-0 right-12 -translate-y-1/2 bg-brand-gold text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full shadow-gold-glow">
              Estimated Cost: ${totalCost} AUD
            </div>
            
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
                      <label className="text-[9px] uppercase tracking-widest text-brand-secondaryText mb-2 font-bold">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="bg-brand-bgDark border border-brand-border rounded-xl px-4 py-3.5 text-brand-charcoal placeholder-brand-secondaryText/40 text-xs focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all"
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-[9px] uppercase tracking-widest text-brand-secondaryText mb-2 font-bold">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="info@svwallsandinteriors.com"
                        className="bg-brand-bgDark border border-brand-border rounded-xl px-4 py-3.5 text-brand-charcoal placeholder-brand-secondaryText/40 text-xs focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex flex-col">
                      <label className="text-[9px] uppercase tracking-widest text-brand-secondaryText mb-2 font-bold">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +61 400 000 000"
                        className="bg-brand-bgDark border border-brand-border rounded-xl px-4 py-3.5 text-brand-charcoal placeholder-brand-secondaryText/40 text-xs focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all"
                      />
                    </div>

                    {/* Surface Type */}
                    <div className="flex flex-col">
                      <label className="text-[9px] uppercase tracking-widest text-brand-secondaryText mb-2 font-bold">Surface Type / Material</label>
                      <select 
                        value={surfaceType}
                        onChange={(e) => setSurfaceType(e.target.value)}
                        className="bg-brand-bgDark border border-brand-border rounded-xl px-4 py-3.5 text-brand-charcoal text-xs focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all"
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

                  {/* Area Slider */}
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-[9px] uppercase tracking-widest text-brand-secondaryText font-bold">
                        Print Area Size (m²)
                      </label>
                      <span className="text-xs font-semibold text-brand-gold">{area} m²</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <input 
                        type="range" 
                        min={MIN_AREA} 
                        max="100" 
                        value={area}
                        onChange={(e) => setArea(Number(e.target.value))}
                        className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-gold"
                      />
                      <input 
                        type="number"
                        min={MIN_AREA}
                        value={area}
                        onChange={(e) => setArea(Number(e.target.value))}
                        className="w-20 bg-brand-bgDark border border-brand-border rounded-xl p-2 text-center text-brand-charcoal text-xs focus:outline-none focus:border-brand-gold/60 focus:ring-0"
                      />
                    </div>
                    {error && <span className="text-red-500 text-xs mt-2">{error}</span>}
                  </div>

                  {/* Project details */}
                  <div className="flex flex-col">
                    <label className="text-[9px] uppercase tracking-widest text-brand-secondaryText mb-2 font-bold">Design details / Dimensions</label>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="3"
                      placeholder="Tell us about the design concept, custom colors, or specific interior millwork needed..."
                      className="bg-brand-bgDark border border-brand-border rounded-xl px-4 py-3.5 text-brand-charcoal placeholder-brand-secondaryText/40 text-xs focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/60 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-shine btn-gold-glow w-full py-4 text-xs font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-2"
                  >
                    Submit Quote &amp; Design Enquiry
                    <ArrowRight className="w-3.5 h-3.5" />
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
                  <div className="w-16 h-16 bg-brand-gold/10 border-2 border-brand-gold rounded-full flex items-center justify-center text-brand-gold mx-auto mb-8 shadow-gold-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal font-light mb-4">
                    Quote Request Received
                  </h3>
                  <p className="text-brand-secondaryText text-xs font-light max-w-md mx-auto mb-10 leading-relaxed">
                    Thank you <strong className="text-brand-charcoal font-medium">{name}</strong>. Our team will review your project details and contact you within 24 hours to schedule a consultation and finalize the design.
                  </p>
                  <button
                    onClick={resetForm}
                    className="btn-secondary-custom px-8 py-3.5 text-[10px] font-bold uppercase tracking-widest rounded-full"
                  >
                    Calculate Another Space
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
