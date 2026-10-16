import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';
import { bg9 } from '../assets/images';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-[#053627] text-white overflow-hidden">
      {/* Background with texture overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('${bg9}')`,
        }}
      />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#195D49]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#CEF17B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#CEF17B]">
                Client Endorsements
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2]">
              Loved by Estate Owners &amp; Residential Homeowners
            </h2>
          </div>

          {/* Google Review Score Badge */}
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/15 flex items-center space-x-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#CEF17B] text-[#053627] flex items-center justify-center font-black text-2xl shrink-0">
              4.9
            </div>
            <div>
              <div className="flex items-center space-x-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="block text-xs uppercase tracking-wider text-gray-300 font-semibold">
                3,200+ Verified Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Revamped Interactive Testimonial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Client Selector Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            {TESTIMONIALS.map((t, idx) => {
              const isSelected = currentIndex === idx;
              return (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border flex items-center space-x-4 ${
                    isSelected
                      ? 'bg-white text-[#053627] border-white shadow-2xl scale-[1.02]'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#CEF17B] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm font-extrabold truncate ${isSelected ? 'text-[#053627]' : 'text-white'}`}>
                        {t.name}
                      </h4>
                      <span className={`text-[11px] font-semibold ${isSelected ? 'text-[#195D49]' : 'text-[#CEF17B]'}`}>
                        ★ 5.0
                      </span>
                    </div>
                    <p className={`text-xs truncate mt-0.5 ${isSelected ? 'text-[#6D827C]' : 'text-gray-400'}`}>
                      {t.project}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Quick Guarantees Box */}
            <div className="bg-[#195D49]/40 rounded-2xl p-5 border border-white/10 space-y-2 mt-4 text-xs text-gray-200">
              <div className="flex items-center space-x-2 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#CEF17B]" />
                <span>Our Customer Commitments</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Every project includes on-site daily supervisors, bonded labor, and our 5-year stone
                warranty.
              </p>
            </div>
          </div>

          {/* Right Column: Big Featured Quotation Card */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl relative">
            <Quote className="w-20 h-20 text-[#CEF17B]/15 absolute top-6 right-8 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Rating & Project Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-1 text-[#CEF17B]">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-sm font-bold text-white ml-2">5.0 / 5.0 Rating</span>
                </div>

                <div className="inline-flex items-center space-x-1.5 bg-[#CEF17B] text-[#053627] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{activeTestimonial.project}</span>
                </div>
              </div>

              {/* Quotation Body */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-100 font-light leading-relaxed italic">
                "{activeTestimonial.quote}"
              </blockquote>

              <p className="text-xs uppercase tracking-widest text-[#CEF17B] font-semibold">
                {activeTestimonial.date}
              </p>
            </div>

            {/* Author Footer & Controls */}
            <div className="pt-8 border-t border-white/15 flex items-center justify-between mt-8 relative z-10">
              <div className="flex items-center space-x-4">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#CEF17B]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-xs text-gray-300 font-medium">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>

              {/* Carousel Next / Prev Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#CEF17B] hover:text-[#053627] text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#CEF17B] hover:text-[#053627] text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
