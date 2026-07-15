import { useState, useRef } from 'react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

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
    <div className="relative">
      {/* Decorative Glow Ring around comparison slider */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-gold/20 via-brand-glowBlue/15 to-brand-glowPurple/20 rounded-[34px] blur-md opacity-70" />
      
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative aspect-[16/9] w-full rounded-[32px] overflow-hidden shadow-2xl border border-white/10 select-none no-select cursor-ew-resize"
      >
        {/* Before Image (Plain brick wall) */}
        <div className="absolute inset-0 w-full h-full bg-[#1e1e1e]">
          <img 
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80" 
            alt="Before - Plain Wall" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute bottom-6 left-6 px-4 py-2 bg-brand-charcoal/80 backdrop-blur-md border border-white/10 rounded-lg text-white font-sans text-[10px] uppercase tracking-widest font-semibold">
            Before: Raw Concrete
          </div>
        </div>

        {/* After Image (Printed/Custom panel wall) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80" 
            alt="After - Custom Print Wall" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute bottom-6 right-6 px-4 py-2 bg-brand-gold/90 border border-brand-gold/25 rounded-lg text-brand-charcoal font-sans text-[10px] uppercase tracking-widest font-bold shadow-gold-glow">
            After: SV Custom Print
          </div>
        </div>

        {/* Sliding Divider Line */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-brand-gold z-20 pointer-events-none shadow-[0_0_15px_#D4AF37]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Circle Center Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-charcoal border-2 border-brand-gold rounded-full flex items-center justify-center shadow-2xl">
            <div className="flex gap-1 text-brand-gold font-bold text-[10px] select-none">
              <span>&#8592;</span>
              <span>&#8594;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
