/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { WorkingProcessSection } from './components/WorkingProcessSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqAndConsultationSection } from './components/FaqAndConsultationSection';
import { CtaBannerSection } from './components/CtaBannerSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#053627] relative selection:bg-[#CEF17B] selection:text-[#053627]">
      {/* Primary Header Navigation (Direct Links, No Dropdowns, No Pages) */}
      <Navbar
        onBookNow={() => setIsBookingOpen(true)}
      />

      {/* Main Page Layout Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onOpenVideo={() => setIsVideoOpen(true)}
          onBookNow={() => setIsBookingOpen(true)}
        />

        {/* About Section */}
        <AboutSection
          onLearnMore={() => setIsBookingOpen(true)}
          onBookNow={() => setIsBookingOpen(true)}
        />

        {/* Services Section */}
        <ServicesSection
          onBookNow={() => setIsBookingOpen(true)}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Working Process / 4-Step How It Works */}
        <WorkingProcessSection />

        {/* Interactive Before & After Comparison Slider */}
        <BeforeAfterSection />

        {/* Customer Testimonials & Reviews */}
        <TestimonialsSection />


        {/* FAQs & Consultation Appointment Form */}
        <FaqAndConsultationSection />

        {/* Call to Action Banner */}
        <CtaBannerSection
          onGetQuote={() => setIsBookingOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#053627] text-[#CEF17B] hover:bg-[#195D49] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border border-[#CEF17B]/30"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}
