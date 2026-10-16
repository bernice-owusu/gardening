import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Phone, User, Mail, Sparkles } from 'lucide-react';
import { SERVICES, SITE_INFO } from '../data/siteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    service: defaultService || SERVICES[0].title,
    address: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-h-[92vh] flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="bg-[#053627] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-[#CEF17B] text-white hover:text-[#053627] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 text-[#CEF17B] text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Fast Consultation Booking</span>
          </div>
          <h3 className="text-2xl font-black text-white">Book a Landscaper Now</h3>
          <p className="text-xs text-gray-300 mt-1">
            Schedule an on-site evaluation with our certified landscaping experts.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#CEF17B] text-[#053627] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h4 className="text-2xl font-black text-[#053627]">Booking Confirmed!</h4>
              <p className="text-sm text-[#6D827C] leading-relaxed max-w-sm mx-auto">
                Thank you <strong className="text-[#053627]">{formData.name}</strong>. We have
                reserved your appointment for <span className="font-bold text-[#053627]">{formData.service}</span>.
                Our team will reach out at {formData.phone} with final confirmation.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-xl bg-[#053627] text-[#CEF17B] font-bold text-xs uppercase tracking-wider hover:bg-[#195D49] transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#053627] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F4F8F1] border border-gray-200 text-sm focus:outline-none focus:border-[#053627]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#053627] mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 0129"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F4F8F1] border border-gray-200 text-sm focus:outline-none focus:border-[#053627]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#053627] mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F4F8F1] border border-gray-200 text-sm focus:outline-none focus:border-[#053627]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#053627] mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#F4F8F1] border border-gray-200 text-sm focus:outline-none focus:border-[#053627]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#053627] mb-1">
                  Desired Landscaping Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F4F8F1] border border-gray-200 text-sm focus:outline-none focus:border-[#053627]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Grounds Consultation">
                    General Grounds Consultation
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#053627] mb-1">
                  Project Notes or Yard Size
                </label>
                <textarea
                  rows={2}
                  placeholder="E.g. Front lawn replacement, approx. 1200 sq ft..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F4F8F1] border border-gray-200 text-sm focus:outline-none focus:border-[#053627]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#053627] text-[#CEF17B] font-bold text-xs uppercase tracking-wider hover:bg-[#195D49] transition-all shadow-md"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
