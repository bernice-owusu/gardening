import React, { useEffect, useState } from "react";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { SITE_INFO } from "../data/siteData";

interface HeroSectionProps {
  onOpenVideo: () => void;
  onBookNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVideo,
  onBookNow,
}) => {
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 98;
    const duration = 1500;
    const increment = end / (duration / 25);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setSatisfactionCount(end);
        clearInterval(timer);
      } else {
        setSatisfactionCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[850px] lg:min-h-[920px] pt-36 pb-20 md:pt-44 md:pb-28 flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://dev266.kodesolution.com/landfixing/wp-content/uploads/2026/09/bg1.jpg')`,
        }}
      >
        {/* Soft gradient wash over the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#053627]/95 via-[#053627]/70 to-transparent lg:to-black/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left / Center Column Content */}
          <div className="lg:col-span-8 space-y-6 md:space-y-8 text-white">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] text-white max-w-3xl">
              Beautiful Landscaping for{" "}
              <span className="text-[#CEF17B]">Modern Outdoor</span> Living
            </h1>

            {/* Paragraph - Distinct & Engaging */}
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
              From bespoke 3D garden concepts to precision stone patios and turf
              restoration, we craft serene, durable outdoor sanctuaries tailored
              to your property's natural topography.
            </p>

            {/* Action Buttons & Counter Row */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={onBookNow}
                className="group inline-flex items-center space-x-3 px-7 py-4 rounded-xl bg-[#CEF17B] text-[#053627] font-bold text-sm uppercase tracking-wider hover:bg-[#bbec48] transition-all transform hover:-translate-y-0.5 shadow-xl hover:shadow-2xl"
              >
                <span>Book a Landscaper Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Counter Display */}
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/15">
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#CEF17B] flex items-baseline">
                    <span>{satisfactionCount}</span>
                    <span className="text-2xl text-white ml-0.5">%</span>
                  </div>
                  {/* Decorative curved line */}
                  <img
                    src={SITE_INFO.decorativeLine}
                    alt=""
                    className="h-2 w-auto my-1 object-contain brightness-200"
                  />
                  <p className="text-xs uppercase font-semibold tracking-wider text-gray-300">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Video Play Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div
              className="relative group cursor-pointer"
              onClick={onOpenVideo}
            >
              {/* Image Thumbnail with Rounded border */}
              <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm transform transition-transform group-hover:scale-[1.02]">
                <img
                  src="/src/assets/images/accra_team_1792067253706.jpg"
                  alt="Accra groundskeeping team showcase"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#053627]/90 via-[#053627]/30 to-transparent" />

                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="relative mb-4">
                    <span className="absolute -inset-2 rounded-full bg-[#CEF17B]/40 animate-ping opacity-75" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#CEF17B] text-[#053627] flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                    </div>
                  </div>
                  <span className="text-base sm:text-lg font-bold tracking-wide text-white drop-shadow">
                    Watch Our Video
                  </span>
                  <span className="text-xs text-[#CEF17B] font-medium tracking-wider uppercase mt-1">
                    Play Showcase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
