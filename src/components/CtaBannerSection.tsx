import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface CtaBannerSectionProps {
  onGetQuote: () => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({ onGetQuote }) => {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background Image with Dark Green Wash */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://dev266.kodesolution.com/landfixing/wp-content/uploads/2026/09/bg6.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#053627]/85 backdrop-blur-xs" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center text-white space-y-6">
        <div className="inline-flex items-center space-x-2 bg-white/10 px-5 py-2 rounded-full border border-white/20">
          <Sparkles className="w-4 h-4 text-[#CEF17B]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#CEF17B]">
            Complimentary On-Site Design Audit
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-3xl mx-auto leading-tight">
          Ready to Bring Your Dream Landscape to Life?
        </h2>

        <p className="text-base sm:text-lg text-gray-200 max-w-xl mx-auto font-light leading-relaxed">
          Schedule your on-site topography and design consultation today. We provide fixed-price
          line-item bids with zero surprise fees.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onGetQuote}
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-[#CEF17B] text-[#053627] font-extrabold text-sm uppercase tracking-wider hover:bg-[#bbec48] transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            <span>Book Your Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-gray-300">
          <span className="flex items-center">
            <ShieldCheck className="w-4 h-4 mr-1 text-[#CEF17B]" />
            No Obligation Estimates
          </span>
          <span className="flex items-center">
            <ShieldCheck className="w-4 h-4 mr-1 text-[#CEF17B]" />
            5-Year Stonework Warranty
          </span>
          <span className="flex items-center">
            <ShieldCheck className="w-4 h-4 mr-1 text-[#CEF17B]" />
            Licensed &amp; Insured Artisans
          </span>
        </div>
      </div>
    </section>
  );
};
