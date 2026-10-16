import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowRight, MapPin, Mail, Clock } from "lucide-react";
import { SITE_INFO } from "../data/siteData";

interface NavbarProps {
  onBookNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Service", href: "#services" },
    { title: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      {/* Top Header Floating Container */}
      <header
        className={`w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-md py-3"
            : "absolute top-0 left-0 pt-4 md:pt-6 px-4 sm:px-6 lg:px-12"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Card Style Header Container */}
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled
                ? "bg-transparent border-none"
                : "bg-white rounded-xl shadow-lg border border-[#0C2F250A] px-5 lg:px-8 py-3.5"
            }`}
          >
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 shrink-0">
              <img
                src={SITE_INFO.logo}
                alt={SITE_INFO.brandName}
                className="h-20 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation Links (Direct Links, No Dropdowns, No Pages) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              {navLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="px-3.5 py-2 text-[15px] font-semibold text-[#053627] hover:text-[#195D49] hover:bg-[#F4F8F1] transition-all rounded-lg"
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* Right Side: Phone + Get Quote */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Call Anytime Info */}
              <div className="hidden xl:flex items-center space-x-3 pl-2 pr-1 border-l border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#CEF17B]/40 flex items-center justify-center text-[#053627]">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-[#6D827C] font-semibold">
                    Call Anytime
                  </span>
                  <a
                    href={SITE_INFO.phoneTel}
                    className="text-sm font-bold text-[#053627] hover:text-[#195D49] transition-colors"
                  >
                    {SITE_INFO.phonePrimary}
                  </a>
                </div>
              </div>

              {/* Book Appointment CTA Button */}
              <button
                onClick={onBookNow}
                className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-[#CEF17B] hover:bg-[#bbec48] text-[#053627] font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow"
              >
                <span>Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#053627] hover:bg-[#F4F8F1] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 space-y-3 max-h-[80vh] overflow-y-auto">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 px-3 text-[#053627] font-semibold text-base hover:bg-[#F4F8F1] rounded-lg transition-colors"
              >
                {item.title}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-100 flex flex-col space-y-3">
              <a
                href={SITE_INFO.phoneTel}
                className="flex items-center space-x-3 text-sm font-semibold text-[#053627] px-3"
              >
                <Phone className="w-4 h-4 text-[#195D49]" />
                <span>{SITE_INFO.phonePrimary}</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookNow();
                }}
                className="w-full py-3 rounded-xl bg-[#053627] text-white font-bold text-sm tracking-wide text-center"
              >
                Book a Landscaper Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
