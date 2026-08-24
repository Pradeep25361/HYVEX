import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

export default function Footer() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmailInput('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAFAFA] text-[#0A0A0A] border-t border-[#E5E7EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#E5E7EB]">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white border border-[#E5E7EB] overflow-hidden flex items-center justify-center rounded-sm shadow-xs">
                  <img
                    src="/src/assets/images/hyvex_brand_logo_1785432291999.jpg"
                    alt="HYVEX Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-serif text-2xl tracking-widest font-bold text-[#0A0A0A]">
                  {AGENCY_DETAILS.name}
                </span>
              </Link>

              <p className="text-sm text-[#52525B] leading-relaxed max-w-sm mb-8 font-sans">
                {AGENCY_DETAILS.tagline}. High-conversion digital growth systems, sub-second web platforms, and mobile apps.
              </p>

              <div className="flex flex-col gap-3 font-mono text-xs text-[#52525B]">
                <a
                  href={`tel:${AGENCY_DETAILS.phoneRaw}`}
                  className="inline-flex items-center gap-3 hover:text-[#0A0A0A] transition-colors group"
                >
                  <div className="w-7 h-7 bg-white border border-[#E5E7EB] rounded-sm flex items-center justify-center group-hover:border-[#0A0A0A]">
                    <Phone className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#0A0A0A]" />
                  </div>
                  <span>{AGENCY_DETAILS.phone}</span>
                </a>

                <a
                  href={`mailto:${AGENCY_DETAILS.email}`}
                  className="inline-flex items-center gap-3 hover:text-[#0A0A0A] transition-colors group"
                >
                  <div className="w-7 h-7 bg-white border border-[#E5E7EB] rounded-sm flex items-center justify-center group-hover:border-[#0A0A0A]">
                    <Mail className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#0A0A0A]" />
                  </div>
                  <span>{AGENCY_DETAILS.email}</span>
                </a>

                <div className="inline-flex items-center gap-3 text-[#52525B]">
                  <div className="w-7 h-7 bg-white border border-[#E5E7EB] rounded-sm flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-[#71717A]" />
                  </div>
                  <span>{AGENCY_DETAILS.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-[#71717A] mb-6">
              SERVICES
            </h4>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <Link to="/digital-marketing" className="text-[#52525B] hover:text-[#0A0A0A] transition-colors inline-flex items-center gap-1.5 group">
                  <span>Digital Marketing</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/performance-marketing" className="text-[#52525B] hover:text-[#0A0A0A] transition-colors inline-flex items-center gap-1.5 group">
                  <span>Performance Marketing</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/web-development" className="text-[#52525B] hover:text-[#0A0A0A] transition-colors inline-flex items-center gap-1.5 group">
                  <span>Web Development</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/app-development" className="text-[#52525B] hover:text-[#0A0A0A] transition-colors inline-flex items-center gap-1.5 group">
                  <span>App Development</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/seo-services" className="text-[#52525B] hover:text-[#0A0A0A] transition-colors inline-flex items-center gap-1.5 group">
                  <span>SEO Services</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Agency Navigation Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-[#71717A] mb-6">
              AGENCY
            </h4>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <Link to="/about" className="text-[#52525B] hover:text-[#0A0A0A] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-[#52525B] hover:text-[#0A0A0A] transition-colors">
                  Founder
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-[#52525B] hover:text-[#0A0A0A] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-[#52525B] hover:text-[#0A0A0A] transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-[#52525B] hover:text-[#0A0A0A] transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#52525B] hover:text-[#0A0A0A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Insights Subscription Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] font-mono text-[#71717A] mb-6">
              EXECUTIVE BRIEFING
            </h4>
            <p className="text-xs text-[#71717A] leading-relaxed mb-4">
              Receive quarterly digital strategy and performance briefs.
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#ECFDF5] border border-[#A7F3D0] rounded-sm flex items-center gap-2 text-xs text-[#065F46]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed successfully.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-sm text-xs text-[#0A0A0A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0A0A0A] font-mono"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-[#0A0A0A] hover:bg-[#27272A] text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-sm transition-colors shadow-xs"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
          <div>
            © {new Date().getFullYear()} {AGENCY_DETAILS.name} Agency. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#0A0A0A] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#E5E7EB]">|</span>
            <Link to="/contact" className="hover:text-[#0A0A0A] transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white border border-[#E5E7EB] rounded-sm hover:bg-[#F4F4F5] text-[#52525B] hover:text-[#0A0A0A] transition-colors ml-2 shadow-xs"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
