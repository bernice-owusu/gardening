import React from 'react';
import { Check } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/siteData';
import { chooseShape1_1, chooseShape1_2, maskImg, flower2 } from '../assets/images';

// Authentic 4-leaf clover botanical SVG icon from the Landfixing theme
const BotanicalCloverIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 28 28"
    fill="none"
    className="w-6 h-6 shrink-0"
  >
    <path
      d="M14.0014 0C12.1547 0 10.3672 1.13263 10.3672 5.00482C10.3672 8.87702 14.0014 14 14.0014 14C14.0014 14 17.6356 8.87702 17.6356 5.00482C17.6356 1.13263 15.848 0 14.0014 0Z"
      fill="#CEF17B"
    />
    <path
      d="M14.0014 28C12.1547 28 10.3672 26.8674 10.3672 22.9952C10.3672 19.123 14.0014 14 14.0014 14C14.0014 14 17.6356 19.123 17.6356 22.9952C17.6356 26.8674 15.848 28 14.0014 28Z"
      fill="#CEF17B"
    />
    <path
      d="M28 13.9992C28 12.1525 26.8674 10.365 22.9952 10.365C19.123 10.365 14 13.9992 14 13.9992C14 13.9992 19.123 17.6334 22.9952 17.6334C26.8674 17.6334 28 15.8458 28 13.9992Z"
      fill="#CEF17B"
    />
    <path
      d="M0 13.9992C0 12.1525 1.13263 10.365 5.00482 10.365C8.87702 10.365 14 13.9992 14 13.9992C14 13.9992 8.87702 17.6334 5.00482 17.6334C1.13263 17.6334 0 15.8458 0 13.9992Z"
      fill="#CEF17B"
    />
  </svg>
);

export const WhyChooseUsSection: React.FC = () => {
  // Left 2 items (style2) and Right 2 items (style3)
  const leftItems = WHY_CHOOSE_US_ITEMS.slice(0, 2);
  const rightItems = WHY_CHOOSE_US_ITEMS.slice(2, 4);

  return (
    <section id="why-choose-us" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background soft ambient pattern */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#F4F8F1]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header with Subtitle and Separator */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#F4F8F1] px-4 py-1.5 rounded-full border border-[#CEF17B]/40">
            <span className="w-2 h-2 rounded-full bg-[#195D49]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#195D49]">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#053627] leading-[1.2]">
            Why homeowners trust our landscaping expertise
          </h2>

          {/* Decorative Divider Line with Center Leaf Accent */}
          <div className="flex items-center justify-center space-x-3 pt-2">
            <span className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#CEF17B]" />
            <span className="w-2 h-2 rounded-full bg-[#CEF17B]" />
            <span className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#CEF17B]" />
          </div>
        </div>

        {/* 3-Column Symmetrical Layout (Left Features, Center Arched Mask Image, Right Features) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: 2 Features (features-block-style2) */}
          <div className="lg:col-span-4 space-y-6">
            {leftItems.map((item) => (
              <div key={item.id} className="features-block-style2 group">
                <div className="inner-block">
                  <div className="features-icon-box">
                    <BotanicalCloverIcon />
                  </div>

                  <div className="content-block flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-[#053627] group-hover:text-[#195D49] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6D827C] leading-relaxed mt-1.5">
                      {item.desc}
                    </p>
                  </div>

                  {/* Corner decorative shape */}
                  <img
                    src={chooseShape1_1}
                    alt=""
                    className="absolute top-2 right-2 w-12 h-12 opacity-25 group-hover:opacity-60 transition-opacity pointer-events-none hidden sm:block"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Arched Mask Image with Floating Flower & Badge */}
          <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
            <div className="relative max-w-[340px] sm:max-w-[380px] w-full">
              {/* Outer decorative arched mask container matching Landfixing */}
              <div className="relative rounded-[48px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl border-4 border-white ring-8 ring-[#F4F8F1]">
                <img
                  src={maskImg}
                  alt="Lush manicured landscape garden design"
                  className="w-full h-[400px] sm:h-[430px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#053627]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Flower Decoration */}
              <img
                src={flower2}
                alt=""
                className="absolute -top-7 -right-6 sm:-top-8 sm:-right-8 w-24 h-24 object-contain animate-float pointer-events-none drop-shadow-xl z-20"
              />

              {/* Floating Quality Assurance Badge */}
              <div className="absolute -bottom-6 -left-3 sm:-bottom-7 sm:-left-5 bg-white py-3.5 px-5 rounded-2xl shadow-2xl border border-gray-100 flex items-center space-x-3.5 z-20 hover:scale-105 transition-transform">
                <div className="w-11 h-11 rounded-xl bg-[#053627] text-[#CEF17B] flex items-center justify-center font-black text-lg shadow-inner shrink-0">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <span className="block text-sm font-extrabold text-[#053627] leading-tight">
                    100% Quality
                  </span>
                  <span className="text-xs text-[#6D827C] font-medium">
                    Craftsmanship Assured
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Features (features-block-style3) */}
          <div className="lg:col-span-4 space-y-6">
            {rightItems.map((item) => (
              <div key={item.id} className="features-block-style3 group">
                <div className="inner-block">
                  <div className="features-icon-box">
                    <BotanicalCloverIcon />
                  </div>

                  <div className="content-block flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-[#053627] group-hover:text-[#195D49] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6D827C] leading-relaxed mt-1.5">
                      {item.desc}
                    </p>
                  </div>

                  {/* Corner decorative shape */}
                  <img
                    src={chooseShape1_2}
                    alt=""
                    className="absolute top-2 left-2 w-12 h-12 opacity-25 group-hover:opacity-60 transition-opacity pointer-events-none hidden sm:block"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
