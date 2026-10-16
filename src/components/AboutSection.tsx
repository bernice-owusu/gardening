import React from 'react';
import { Check, PhoneCall, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';
import { leaf, flo1, leaf2, accraLandscapingTeam } from '../assets/images';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onBookNow?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore, onBookNow }) => {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decorative floating leaves in the background */}
      <img
        src={leaf}
        alt=""
        className="absolute top-10 right-4 lg:right-16 w-20 lg:w-32 opacity-30 pointer-events-none animate-float"
      />
      <img
        src={flo1}
        alt=""
        className="absolute bottom-10 left-4 w-16 lg:w-24 opacity-30 pointer-events-none animate-float"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Experience Badge & Overlays */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo with rounded corners and decorative outline */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F4F8F1]">
                <img
                  src={accraLandscapingTeam}
                  alt="Our Accra-based master landscaping team in Cantonments"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Experience Badge (Floating Card) */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 z-20 bg-[#053627] text-white p-6 sm:p-7 rounded-2xl shadow-2xl border-2 border-[#CEF17B]/40 max-w-[240px] transform hover:scale-105 transition-all">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#CEF17B]">25</span>
                  <span className="text-3xl font-black text-[#CEF17B]">+</span>
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mt-1">
                  Years of Work Experience
                </h4>
                <p className="text-xs text-gray-300 mt-1">
                  Trusted by thousands of home and estate owners
                </p>
              </div>

              {/* Decorative Leaf on top-right of image */}
              <img
                src={leaf2}
                alt=""
                className="absolute -top-6 -right-6 w-20 h-20 object-contain z-20 pointer-events-none drop-shadow"
              />
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-6 space-y-7">
            {/* Subtitle Pill */}
            <div className="inline-flex items-center space-x-2 bg-[#F4F8F1] px-4 py-1.5 rounded-full border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-[#195D49]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#195D49]">
                Who We Are
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#053627] leading-[1.2]">
              Crafting beautiful outdoor spaces with passion & precision
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#6D827C] leading-relaxed">
              We design and build stunning landscapes that enhance beauty, comfort, and
              functionality for lasting outdoor enjoyment. Our team combines innovative design with
              sustainable planting and artisan stone craftsmanship.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {[
                "Certified Ecological Design & Native Botany",
                "Hand-Selected Quarried Natural Stone",
                "Transparent Itemized Pricing with No Surprises",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#CEF17B] text-[#053627] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-base font-bold text-[#053627]">{item}</span>
                </div>
              ))}
            </div>

            {/* Two highlight feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F4F8F1] border border-gray-100 flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#053627] text-[#CEF17B] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#053627]">Reliable Support</h4>
                  <p className="text-xs text-[#6D827C] mt-1 leading-snug">
                    Dedicated assistance and timely service you can trust.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4F8F1] border border-gray-100 flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#053627] text-[#CEF17B] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#053627]">Expert Landscaping</h4>
                  <p className="text-xs text-[#6D827C] mt-1 leading-snug">
                    Providing precision, creativity, and quality in every project.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA and Call banner */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100">
              <button
                onClick={onLearnMore || onBookNow}
                className="group inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-[#053627] text-white hover:bg-[#195D49] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-[#CEF17B] text-[#053627] flex items-center justify-center shadow-sm">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-semibold text-[#6D827C]">
                    Make A Call:
                  </span>
                  <a
                    href={SITE_INFO.phoneTel}
                    className="text-base font-bold text-[#053627] hover:text-[#195D49]"
                  >
                    {SITE_INFO.phonePrimary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
