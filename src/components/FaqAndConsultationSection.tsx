import React, { useState } from 'react';
import { ChevronDown, Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import { FAQS, SITE_INFO } from '../data/siteData';

export const FaqAndConsultationSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Landscape Design',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F4F8F1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: FAQs Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#195D49]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#195D49]">
                  FAQS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#053627] leading-[1.2]">
                Frequently asked questions
              </h2>

              <p className="text-sm sm:text-base text-[#6D827C] leading-relaxed">
                Find answers to common questions about our landscaping techniques, timelines, cost
                factors, and ongoing groundskeeping packages.
              </p>
            </div>

            {/* Accordion Items */}
            <div className="space-y-3 pt-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-5 flex items-center justify-between text-base font-bold text-[#053627] hover:text-[#195D49] transition-colors"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                          isOpen ? 'bg-[#CEF17B] rotate-180 text-[#053627]' : 'bg-[#F4F8F1] text-gray-500'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-[#6D827C] leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Have Any Question on Your Minds? Consultation Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              {/* Card Header Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/src/assets/images/accra_garden_consultant_1792067448864.jpg"
                  alt="Accra landscape architecture consultant"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#053627]/75 flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#CEF17B]">
                    Get In Touch
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    Have Any Question on Your Minds?
                  </h3>
                </div>
              </div>

              {/* Consultation Form / Confirmation */}
              <div className="p-6 sm:p-8 space-y-6">
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-[#CEF17B] text-[#053627] flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#053627]">Appointment Requested!</h4>
                    <p className="text-sm text-[#6D827C]">
                      Thank you, {formData.name}. Our master landscaper will call you at{' '}
                      <span className="font-semibold text-[#053627]">{formData.phone}</span> shortly
                      to confirm your visit.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          service: 'Landscape Design',
                          message: '',
                        });
                      }}
                      className="mt-4 px-5 py-2 rounded-xl bg-[#053627] text-white text-xs font-bold uppercase tracking-wider"
                    >
                      Book Another Visit
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#053627] mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F8F1] border border-gray-200 text-sm text-[#053627] focus:outline-none focus:border-[#053627]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#053627] mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 0129"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F4F8F1] border border-gray-200 text-sm text-[#053627] focus:outline-none focus:border-[#053627]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#053627] mb-1">
                          Service Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F4F8F1] border border-gray-200 text-sm text-[#053627] focus:outline-none focus:border-[#053627]"
                        >
                          <option>Landscape Design</option>
                          <option>Lawn Maintenance</option>
                          <option>Turfing Services</option>
                          <option>Hardscape & Patio</option>
                          <option>Garden Installation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#053627] mb-1">
                        Short Project Note
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your yard dimensions and goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F4F8F1] border border-gray-200 text-sm text-[#053627] focus:outline-none focus:border-[#053627]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#053627] text-[#CEF17B] font-bold text-xs uppercase tracking-wider hover:bg-[#195D49] transition-all flex items-center justify-center space-x-2 shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Book an appointment</span>
                    </button>
                  </form>
                )}

                {/* Central Office Contact Details */}
                <div className="pt-4 border-t border-gray-100 space-y-2 text-xs text-[#6D827C]">
                  <p className="font-bold text-[#053627]">
                    Central Office:{' '}
                    <span className="font-normal text-[#6D827C]">
                      {SITE_INFO.addressCentralOffice}
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center text-[#053627]">
                      <Phone className="w-3.5 h-3.5 mr-1 text-[#195D49]" />
                      {SITE_INFO.phoneSecondary}
                    </span>
                    <span className="flex items-center text-[#053627]">
                      <Mail className="w-3.5 h-3.5 mr-1 text-[#195D49]" />
                      {SITE_INFO.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
