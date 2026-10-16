import React from 'react';
import { CLIENT_LOGOS } from '../data/siteData';

export const ClientsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#F4F8F1] py-10 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative">
          {/* Logo row with responsive wrapping / smooth continuous display */}
          <div className="flex items-center justify-between flex-wrap gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-9 md:h-12 w-auto max-w-[130px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
