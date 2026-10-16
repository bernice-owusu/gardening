import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Pin as Pinterest 
} from 'lucide-react';
import { SITE_INFO } from '../data/siteData';
import { bg7 } from '../assets/images';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-[#053627] text-white pt-20 pb-8 overflow-hidden">
      {/* Background with dark overlay matching original css */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('${bg7}')`,
        }}
      />
      <div className="absolute inset-0 bg-[#084734]/85" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Socials */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="inline-block">
              <img
                src={SITE_INFO.logoWhite}
                alt={SITE_INFO.brandName}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </a>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Pots and Palms is an industry-leading landscape design, irrigation, and lawn maintenance
              firm creating elevated outdoor sanctuaries with eco-friendly integrity.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={SITE_INFO.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#CEF17B] hover:text-[#053627] flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a
                href={SITE_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#CEF17B] hover:text-[#053627] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href={SITE_INFO.socialLinks.pinterest}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#CEF17B] hover:text-[#053627] flex items-center justify-center transition-all"
                aria-label="Pinterest"
              >
                <Pinterest className="w-4 h-4" />
              </a>
              <a
                href={SITE_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#CEF17B] hover:text-[#053627] flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-bold text-[#CEF17B] tracking-wide">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#CEF17B] shrink-0 mt-1" />
                <span>{SITE_INFO.addressSecondary}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#CEF17B] shrink-0" />
                <a href={SITE_INFO.phoneTel} className="hover:text-white transition-colors">
                  {SITE_INFO.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#CEF17B] shrink-0" />
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-lg font-bold text-[#CEF17B] tracking-wide">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {[
                "Hardscape & Patio Design",
                "Garden Installation",
                "Drainage Systems",
                "Design & Planning",
                "Seasonal Clean-Up",
              ].map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="hover:text-[#CEF17B] transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CEF17B]" />
                    <span>{svc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-lg font-bold text-[#CEF17B] tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {[
                { title: "Home", href: "#" },
                { title: "About Us", href: "#about" },
                { title: "Services", href: "#services" },
                { title: "Process", href: "#process" },
                { title: "Before & After", href: "#before-after" },
                { title: "Testimonials", href: "#testimonials" },
                { title: "Contact Us", href: "#faq" },
              ].map((lnk) => (
                <li key={lnk.title}>
                  <a
                    href={lnk.href}
                    className="hover:text-[#CEF17B] transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CEF17B]" />
                    <span>{lnk.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© Copyright 2026 by Pots and Palms. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
