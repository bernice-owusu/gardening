import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';
import { after1_1, befor1_1, flowerDash2 } from '../assets/images';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // URLs accurately paired:
  // "after1-1.jpg" is the messy unkempt yard with fallen branches & broken pots (BEFORE)
  // "befor1-1.jpg" is the manicured, lush green garden with paved stones & red flower planters (AFTER)
  const beforeImageUrl = after1_1;
  const afterImageUrl = befor1_1;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="py-20 lg:py-28 bg-[#F4F8F1] relative overflow-hidden">
      {/* Decorative leaf/flower in background */}
      <img
        src={flowerDash2}
        alt=""
        className="absolute top-10 right-4 w-28 lg:w-40 opacity-20 pointer-events-none animate-float"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header matching Elementor style */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-white px-5 py-1.5 rounded-full border border-gray-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#195D49]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#053627]">
              Before & After
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#053627]">
            Before & after landscape transformations
          </h2>

          <p className="text-sm sm:text-base text-[#6D827C] leading-relaxed max-w-xl mx-auto">
            Slide horizontally to experience the dramatic transformation our team delivers —
            clearing debris, laying manicured turf, and installing architectural perimeter beds.
          </p>
        </div>

        {/* Interactive TwentyTwenty-style Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[460px] md:h-[520px] rounded-[25px] overflow-hidden shadow-2xl select-none cursor-ew-resize border-4 border-white bg-gray-100"
          >
            {/* BASE LAYER: AFTER (Finished Manicured Landscape) */}
            <img
              src={afterImageUrl}
              alt="After Landscape Transformation (Lush Green Manicured Garden)"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* After Tag (Right side) */}
            <div className="absolute top-6 right-6 z-10 bg-[#053627]/90 text-[#CEF17B] font-extrabold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-xs flex items-center space-x-1.5 border border-[#CEF17B]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#CEF17B]" />
              <span>After</span>
            </div>

            {/* CLIPPED TOP LAYER: BEFORE (Unkempt Yard With Debris & Fallen Branches) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={beforeImageUrl}
                alt="Before Landscape Transformation (Yard With Debris)"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  maxWidth: 'none',
                }}
                draggable={false}
              />

              {/* Before Tag (Left side) */}
              <div className="absolute top-6 left-6 z-10 bg-white/90 text-[#053627] font-extrabold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg backdrop-blur-xs border border-gray-200">
                <span>Before</span>
              </div>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(0,0,0,0.6)]"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#053627] text-[#CEF17B] border-[3px] border-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95">
                <ChevronsLeftRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick preset percentage buttons */}
          <div className="flex items-center justify-center space-x-3 mt-6">
            <span className="text-xs font-semibold text-[#6D827C]">Quick Compare:</span>
            {[
              { label: 'Before Only', val: 95 },
              { label: '50/50 Split', val: 50 },
              { label: 'After Only', val: 5 },
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={() => setSliderPosition(btn.val)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
                  sliderPosition === btn.val
                    ? 'bg-[#053627] text-[#CEF17B] shadow-sm'
                    : 'bg-white text-[#053627] hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
