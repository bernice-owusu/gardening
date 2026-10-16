import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';
import { SERVICES, ServiceItem, SITE_INFO } from '../data/siteData';
import { leaf3, leaf4 } from '../assets/images';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
  onBookNow?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onBookNow }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive items count matching Elementor settings: xxl=4, lg=3, md=2, sm=1
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1400) {
        setItemsPerPage(4);
      } else if (w >= 1024) {
        setItemsPerPage(3);
      } else if (w >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto advance carousel every 4.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % SERVICES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const maxIndex = SERVICES.length - 1;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const handleCardClick = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service);
    }
    setActiveModalService(service);
  };

  // Build visible list for carousel
  const visibleCards: { service: ServiceItem; originalIndex: number }[] = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const idx = (startIndex + i) % SERVICES.length;
    visibleCards.push({ service: SERVICES[idx], originalIndex: idx });
  }

  // Bespoke, guaranteed inline SVGs for all 5 services
  const renderServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        // Landscape Design & Planning (Architectural blueprint & compass)
        return (
          <svg
            className="w-13 h-13 text-[#053627] transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Blueprint Grid Board */}
            <rect x="8" y="10" width="48" height="44" rx="4" className="stroke-[#053627]" fill="#CEF17B" fillOpacity="0.2" />
            <path d="M8 24h48M24 24v30M40 24v30" stroke="#053627" strokeDasharray="3 3" />
            {/* Drafting Compass */}
            <circle cx="32" cy="18" r="3" fill="#053627" />
            <path d="M32 21l-9 22M32 21l9 22M25 36h14" stroke="#053627" strokeWidth="3" />
          </svg>
        );
      case 1:
        // Lawn Care & Maintenance (Smart mower & grass blades)
        return (
          <svg
            className="w-13 h-13 text-[#053627] transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Mower Body */}
            <rect x="14" y="24" width="28" height="18" rx="5" fill="#CEF17B" fillOpacity="0.3" stroke="#053627" strokeWidth="2.5" />
            {/* Mower Wheels */}
            <circle cx="18" cy="46" r="6" fill="#053627" />
            <circle cx="38" cy="46" r="6" fill="#053627" />
            <circle cx="18" cy="46" r="2" fill="#CEF17B" />
            <circle cx="38" cy="46" r="2" fill="#CEF17B" />
            {/* Handle */}
            <path d="M40 28l14-14M52 14h6" stroke="#053627" strokeWidth="3" />
            {/* Cut grass blades */}
            <path d="M8 48l2-6M12 48l-1-7M48 48l2-6M54 48l-1-7" stroke="#195D49" strokeWidth="2" />
          </svg>
        );
      case 2:
        // Professional Turfing Services (Fresh turf sod rollout & roots)
        return (
          <svg
            className="w-13 h-13 text-[#053627] transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Rolled Sod Spiral */}
            <ellipse cx="20" cy="30" rx="10" ry="14" fill="#CEF17B" fillOpacity="0.4" stroke="#053627" strokeWidth="2.5" />
            <ellipse cx="20" cy="30" rx="5" ry="7" fill="#053627" />
            {/* Unrolled Grass Mat */}
            <path d="M20 44c12 0 34 0 34 0s-2-12-14-12H20" fill="#CEF17B" fillOpacity="0.2" stroke="#053627" strokeWidth="2.5" />
            {/* Grass Blades top */}
            <path d="M26 32l3-6M33 32l2-7M40 32l3-6M47 32l2-7" stroke="#053627" strokeWidth="2.5" />
            {/* Water Drops */}
            <path d="M50 14c0 3-3 6-3 6s-3-3-3-6a3 3 0 0 1 6 0z" fill="#195D49" stroke="none" />
          </svg>
        );
      case 3:
        // Garden Installation (Blooming botanical flower & trowel)
        return (
          <svg
            className="w-13 h-13 text-[#053627] transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Planter Pot */}
            <path d="M20 38l4 18h16l4-18H20z" fill="#053627" stroke="#053627" strokeWidth="2" />
            <rect x="18" y="34" width="28" height="5" rx="2" fill="#CEF17B" stroke="#053627" strokeWidth="2" />
            {/* Sprouting Plant Stems & Petals */}
            <path d="M32 34V18" stroke="#053627" strokeWidth="3" />
            <path d="M32 26c-6-6-14-3-12 5 8 2 12-5 12-5z" fill="#CEF17B" stroke="#053627" strokeWidth="2" />
            <path d="M32 22c6-6 14-3 12 5-8 2-12-5-12-5z" fill="#CEF17B" stroke="#053627" strokeWidth="2" />
            <circle cx="32" cy="14" r="5" fill="#CEF17B" stroke="#053627" strokeWidth="2" />
          </svg>
        );
      case 4:
      default:
        // Hardscape & Patio Design (Interlocking stone pavers & masonry)
        return (
          <svg
            className="w-13 h-13 text-[#053627] transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Paver 1 */}
            <rect x="10" y="14" width="20" height="16" rx="3" fill="#CEF17B" fillOpacity="0.4" stroke="#053627" strokeWidth="2.5" />
            {/* Paver 2 */}
            <rect x="34" y="14" width="20" height="16" rx="3" fill="#CEF17B" fillOpacity="0.2" stroke="#053627" strokeWidth="2.5" />
            {/* Paver 3 (Offset) */}
            <rect x="10" y="34" width="26" height="16" rx="3" fill="#CEF17B" fillOpacity="0.3" stroke="#053627" strokeWidth="2.5" />
            {/* Paver 4 (Offset) */}
            <rect x="40" y="34" width="14" height="16" rx="3" fill="#053627" stroke="#053627" strokeWidth="2.5" />
            {/* Level line */}
            <path d="M4 54h56" stroke="#053627" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        );
    }
  };

  // Formatted titles with line breaks as in the original Elementor template
  const getFormattedTitle = (title: string) => {
    if (title.includes('&')) {
      const parts = title.split('&');
      return (
        <>
          {parts[0].trim()} <br /> &amp; {parts[1].trim()}
        </>
      );
    }
    if (title.includes(' ')) {
      const words = title.split(' ');
      const mid = Math.ceil(words.length / 2);
      return (
        <>
          {words.slice(0, mid).join(' ')} <br /> {words.slice(mid).join(' ')}
        </>
      );
    }
    return title;
  };

  return (
    <section id="services" className="py-12 lg:py-20 bg-white overflow-hidden">
      {/* Outer wrapper matching .elementor-element-6fe31c1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Inner container with rounded-2xl, background #F4F8F1 and original decorative leaves */}
        <div className="relative rounded-[28px] bg-[#F4F8F1] py-20 px-6 sm:px-10 lg:px-14 overflow-hidden border border-[#0C2F250A] shadow-xs">
          {/* Top-Left Leaf Background */}
          <img
            src={leaf3}
            alt=""
            className="absolute top-0 left-0 w-44 md:w-60 pointer-events-none select-none z-0 opacity-80"
          />

          {/* Top-Right Leaf Background */}
          <img
            src={leaf4}
            alt=""
            className="absolute top-0 right-0 w-44 md:w-60 pointer-events-none select-none z-0 opacity-80"
          />

          {/* Section Header */}
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16 space-y-4">
            {/* White Subtitle Pill */}
            <div className="inline-flex items-center justify-center bg-white px-6 py-2 rounded-full shadow-xs border border-gray-100">
              <span className="text-xs font-bold uppercase tracking-wider text-[#053627]">
                Service Area
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#053627] leading-[1.2] tracking-tight">
              What we are offering to our potential client
            </h2>
            <p className="text-sm sm:text-base text-[#6D827C] max-w-xl mx-auto">
              Comprehensive exterior solutions engineered for enduring botanical health, pristine
              turf vitality, and bespoke masonry craftsmanship.
            </p>
          </div>

          {/* Carousel Slider Holder */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative z-10 max-w-6xl mx-auto"
          >
            {/* Grid of Active Visible Slides with Exact Theme Styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 justify-center items-stretch">
              {visibleCards.map(({ service, originalIndex }) => (
                <div
                  key={`${service.id}-${originalIndex}`}
                  onClick={() => handleCardClick(service)}
                  className="service-block-style2 group cursor-pointer flex flex-col justify-between"
                  style={{
                    borderRadius: '50px 80px 50px 80px',
                  }}
                >
                  {/* Content (Guaranteed Icon + Title) */}
                  <div className="content">
                    {/* Icon with 24px dot behind */}
                    <div className="service-icon-box flex items-center justify-center min-h-[64px]">
                      {renderServiceIcon(originalIndex)}
                    </div>

                    {/* Service Title */}
                    <h4 className="service-title text-xl font-extrabold text-[#053627] group-hover:text-[#053627] transition-colors leading-snug">
                      <span className="hover:underline decoration-2 underline-offset-4">
                        {getFormattedTitle(service.title)}
                      </span>
                    </h4>
                  </div>

                  {/* Circular Thumbnail with 3D Flip */}
                  <div className="thumb">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>

                  {/* Service Shape Below Thumb */}
                  <div className="service-shape">
                    <img
                      src={SITE_INFO.serviceShape1}
                      alt="Service Shape"
                      className="shape-default"
                    />
                    <img
                      src={SITE_INFO.serviceShape2}
                      alt="Service Shape"
                      className="shape-hover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Swiper Arrow Navigation Controls */}
            <div className="flex items-center justify-center space-x-4 mt-12">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white text-[#053627] hover:bg-[#CEF17B] border border-gray-200 shadow-md flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Pagination Dots */}
              <div className="flex items-center space-x-2">
                {SERVICES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setStartIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      startIndex === idx
                        ? 'w-8 bg-[#053627]'
                        : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white text-[#053627] hover:bg-[#CEF17B] border border-gray-200 shadow-md flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-scaleUp">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-60 relative overflow-hidden">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#CEF17B]">
                    {activeModalService.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    {activeModalService.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-[#053627] leading-relaxed">
                {activeModalService.details}
              </p>
              <p className="text-xs text-[#6D827C]">
                {activeModalService.excerpt}
              </p>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveModalService(null);
                    if (onBookNow) onBookNow();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#053627] text-[#CEF17B] font-bold text-xs uppercase tracking-wider hover:bg-[#195D49] transition-all shadow-md flex items-center space-x-1"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
