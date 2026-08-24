import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Calendar, Quote, ArrowUpRight } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

export default function Founder() {
  const { founder } = AGENCY_DETAILS;

  return (
    <div className="pt-24 pb-20 bg-white text-[#0A0A0A] min-h-screen">
      {/* Founder Hero Section */}
      <section className="py-16 md:py-20 border-b border-[#E5E7EB] bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative group w-full max-w-sm"
              >
                <div className="p-2 bg-white border border-[#E5E7EB] rounded-sm shadow-xs relative">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xs relative bg-[#F4F4F5]">
                    <img
                      src="/src/assets/images/founder_hari_krishna_1785432308486.jpg"
                      alt={`${founder.name} - ${founder.role}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-4 bg-[#FAFAFA] border-t border-[#E5E7EB] flex items-center justify-between mt-2">
                    <div>
                      <h3 className="font-serif text-base text-[#0A0A0A] font-semibold">{founder.name}</h3>
                      <p className="text-xs font-mono text-[#71717A]">{founder.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[#71717A]">
                      <a href={founder.socials.linkedin} target="_blank" rel="noreferrer" className="p-1 hover:text-[#0A0A0A] transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={founder.socials.twitter} target="_blank" rel="noreferrer" className="p-1 hover:text-[#0A0A0A] transition-colors" aria-label="Twitter">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Founder Bio Column */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>FOUNDER PROFILE</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#0A0A0A] leading-tight mb-2">
                  Hari Krishna
                </h1>

                <p className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-6">
                  Founder & Chief Executive Officer
                </p>

                {/* Quote Box */}
                <div className="p-5 bg-white border-l-2 border-[#0A0A0A] border-y border-r border-[#E5E7EB] rounded-r-sm mb-6 relative shadow-xs">
                  <Quote className="w-6 h-6 text-[#E5E7EB] absolute right-3 top-3 pointer-events-none" />
                  <p className="text-sm sm:text-base font-serif italic text-[#0A0A0A] leading-relaxed">
                    "{founder.quote}"
                  </p>
                </div>

                <div className="space-y-3 text-sm text-[#52525B] font-sans leading-relaxed mb-8">
                  <p>{founder.bio}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#27272A] transition-all shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Strategy Session</span>
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0A0A0A] border border-[#E5E7EB] font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#FAFAFA] transition-all shadow-xs"
                  >
                    <span>Contact Directly</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
              METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A]">
              Operating Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
              <span className="text-xs font-mono text-[#71717A] block mb-2">01 // CODE QUALITY</span>
              <h3 className="text-base font-semibold text-[#0A0A0A] mb-2">Engineering Discipline</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Fast, responsive, and maintainable software systems built with modern web technologies.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
              <span className="text-xs font-mono text-[#71717A] block mb-2">02 // DATA CLARITY</span>
              <h3 className="text-base font-semibold text-[#0A0A0A] mb-2">Measurable Attribution</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Clear conversion tracking, transparent ROI metrics, and performance analytics.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
              <span className="text-xs font-mono text-[#71717A] block mb-2">03 // EXECUTION</span>
              <h3 className="text-base font-semibold text-[#0A0A0A] mb-2">Agile Delivery</h3>
              <p className="text-xs text-[#52525B] leading-relaxed">
                Fast-paced deployment cycles to test, optimize, and iterate campaigns efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
