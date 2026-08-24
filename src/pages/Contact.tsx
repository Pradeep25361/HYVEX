import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';
import WorldwideService from '../components/WorldwideService';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Digital Marketing Audit',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-white text-[#0A0A0A] min-h-screen">
      {/* Header */}
      <section className="py-16 md:py-20 border-b border-[#E5E7EB] bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>CONTACT & INQUIRIES</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#0A0A0A] tracking-tight leading-tight mb-4">
              Get in Touch
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] font-sans leading-relaxed">
              Reach out for project consultations, performance marketing audits, or technical proposals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-3">
                  CHANNELS
                </span>
                <h2 className="font-serif text-2xl font-normal text-[#0A0A0A] mb-4">Direct Contact</h2>

                <div className="space-y-3">
                  <a
                    href={`mailto:${AGENCY_DETAILS.email}`}
                    className="p-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm hover:border-[#0A0A0A] transition-all flex items-center justify-between group block shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-sm border border-[#E5E7EB]">
                        <Mail className="w-4 h-4 text-[#0A0A0A]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-[#71717A] uppercase">Email</div>
                        <div className="text-xs sm:text-sm font-medium text-[#0A0A0A]">{AGENCY_DETAILS.email}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#0A0A0A] transition-colors" />
                  </a>

                  <a
                    href={`tel:${AGENCY_DETAILS.phone}`}
                    className="p-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm hover:border-[#0A0A0A] transition-all flex items-center justify-between group block shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-sm border border-[#E5E7EB]">
                        <Phone className="w-4 h-4 text-[#0A0A0A]" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-[#71717A] uppercase">Phone / WhatsApp</div>
                        <div className="text-xs sm:text-sm font-medium text-[#0A0A0A]">{AGENCY_DETAILS.phone}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#0A0A0A] transition-colors" />
                  </a>
                </div>
              </div>

              {/* Physical Headquarters */}
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-3">
                  LOCATIONS
                </span>
                <h2 className="font-serif text-2xl font-normal text-[#0A0A0A] mb-4">Offices</h2>

                <div className="space-y-3">
                  {AGENCY_DETAILS.offices.map((off, idx) => (
                    <div key={idx} className="p-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm shadow-xs">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#71717A]" />
                        <h3 className="text-xs sm:text-sm font-semibold text-[#0A0A0A]">{off.city}</h3>
                        {off.isHQ && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#0A0A0A] text-white rounded-xs uppercase">
                            HQ
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#52525B] leading-relaxed pl-5.5">{off.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
                  INQUIRY
                </span>
                <h2 className="font-serif text-2xl font-normal text-[#0A0A0A] mb-6">Send a Message</h2>

                {submitted ? (
                  <div className="p-6 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm text-center">
                    <CheckCircle2 className="w-10 h-10 text-[#10B981] mx-auto mb-3" />
                    <h3 className="font-serif text-xl text-[#0A0A0A] mb-1 font-normal">Message Received</h3>
                    <p className="text-xs text-[#52525B] mb-5">
                      Thank you, {formData.name}. Our team will review your inquiry and follow up promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium hover:bg-[#27272A] transition-all rounded-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-[#71717A] uppercase mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-[#E5E7EB] text-[#0A0A0A] placeholder-[#A1A1AA] text-xs rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-[#71717A] uppercase mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-[#E5E7EB] text-[#0A0A0A] placeholder-[#A1A1AA] text-xs rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono text-[#71717A] uppercase mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-[#E5E7EB] text-[#0A0A0A] placeholder-[#A1A1AA] text-xs rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-[#71717A] uppercase mb-1">Inquiry Topic</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3 py-2 bg-white border border-[#E5E7EB] text-[#0A0A0A] text-xs rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                        >
                          <option value="Digital Marketing">Digital Marketing Audit</option>
                          <option value="Web Architecture">Web Architecture / Engineering</option>
                          <option value="Mobile Application">Mobile Application Engineering</option>
                          <option value="SEO Dominance">SEO / Search Optimization</option>
                          <option value="Founder Consultation">Founder Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#71717A] uppercase mb-1">Project Brief *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your organization, requirements, or goals..."
                        className="w-full px-3 py-2 bg-white border border-[#E5E7EB] text-[#0A0A0A] placeholder-[#A1A1AA] text-xs rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#27272A] transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Service Section */}
      <WorldwideService />
    </div>
  );
}
