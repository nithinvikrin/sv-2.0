import { useState, useRef } from 'react';
import { Sparkles, Home, Building2, Heart } from 'lucide-react';

const SAMPLES = [
  {
    id: 'living',
    name: 'Living Room Wall',
    icon: Home,
    beforeLabel: 'Before: Plain Blank Wall',
    afterLabel: 'After: SV 3D Printed Wall Art',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'spiritual',
    name: 'Devotional & Spiritual',
    icon: Heart,
    beforeLabel: 'Before: Empty Wall',
    afterLabel: 'After: Printed Divine Mural',
    beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    afterImage: '/images/religious_art.png',
  },
  {
    id: 'corporate',
    name: 'Corporate Office',
    icon: Building2,
    beforeLabel: 'Before: Standard Office Wall',
    afterLabel: 'After: Custom Brand Wall Print',
    beforeImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  }
];

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const currentSample = SAMPLES[activeTab];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="space-y-6">
      {/* Category selector tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {SAMPLES.map((sample, idx) => {
          const Icon = sample.icon;
          const isActive = activeTab === idx;
          return (
            <button
              key={sample.id}
              onClick={() => setActiveTab(idx)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-brand-gold text-white shadow-gold-glow scale-105'
                  : 'bg-white text-brand-charcoal/70 border border-brand-border hover:border-brand-gold hover:text-brand-charcoal'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sample.name}</span>
            </button>
          );
        })}
      </div>

      <div className="relative">
        {/* Decorative Glow Ring around comparison slider */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-gold/15 via-brand-light to-brand-gold/10 rounded-[34px] blur-md opacity-50" />
        
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-[32px] overflow-hidden shadow-soft-card border border-brand-border select-none no-select cursor-ew-resize bg-white"
        >
          {/* Before Image (Plain wall) */}
          <div className="absolute inset-0 w-full h-full bg-[#f0ebd9]">
            <img 
              src={currentSample.beforeImage} 
              alt={currentSample.beforeLabel} 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500"
            />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md border border-brand-border rounded-lg text-brand-charcoal font-sans text-[10px] md:text-xs uppercase tracking-widest font-extrabold shadow-sm">
              {currentSample.beforeLabel}
            </div>
          </div>

          {/* After Image (Printed wall) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src={currentSample.afterImage} 
              alt={currentSample.afterLabel} 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500"
            />
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-brand-gold/90 backdrop-blur-md border border-brand-gold/20 rounded-lg text-white font-sans text-[10px] md:text-xs uppercase tracking-widest font-extrabold shadow-gold-glow flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentSample.afterLabel}</span>
            </div>
          </div>

          {/* Sliding Divider Line */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-brand-gold z-20 pointer-events-none shadow-[0_0_15px_#C28A46]"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Draggable Circle Center Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-brand-gold rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
              <div className="flex gap-1 text-brand-gold font-bold text-xs select-none">
                <span>&#8592;</span>
                <span>&#8594;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
