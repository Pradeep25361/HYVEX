import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AGENCY_DETAILS, CORE_VALUES, AGENCY_STATS, TESTIMONIALS } from '../data/agencyData';

export default function AboutUs() {
  return (
    <div className="pt-24 pb-20 bg-white text-[#0A0A0A] min-h-screen">
      {/* About Hero */}
      <section className="py-16 md:py-20 border-b border-[#E5E7EB] bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>ABOUT HYVEX</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0A0A0A] leading-tight mb-4">
              Digital Strategy & Engineering.
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] font-sans leading-relaxed">
              Founded in Hyderabad, HYVEX combines performance digital marketing with custom software development to help enterprises scale predictably.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agency Mission */}
      <section className="py-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
                MISSION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] mb-4 leading-tight">
                Engineering Over Vanity Metrics
              </h2>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mb-4">
                We believe that modern brand growth requires both mathematical marketing precision and clean, high-performance software architecture.
              </p>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mb-6">
                Led by founder Hari Krishna, our cross-functional team delivers measurable ROI across paid search, social campaigns, web platforms, and mobile apps.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/founder"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#27272A] transition-all shadow-xs"
                >
                  <span>Founder Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-7 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm shadow-xs">
                <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-5">
                  KEY BENCHMARKS
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {AGENCY_STATS.map((stat, idx) => (
                    <div key={idx} className="p-4 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
                      <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#0A0A0A] mb-1">{stat.number}</div>
                      <div className="text-[11px] font-mono text-[#71717A] uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 border-b border-[#E5E7EB] bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
              STANDARDS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] mb-3">
              Core Principles
            </h2>
            <p className="text-xs sm:text-sm text-[#52525B]">
              The principles governing every engagement and deliverable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-5 bg-white border border-[#E5E7EB] rounded-sm hover:border-[#0A0A0A] transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="text-xs font-mono text-[#71717A] block mb-3">0{idx + 1}</span>
                  <h3 className="text-base font-serif font-semibold text-[#0A0A0A] mb-2">{val.title}</h3>
                  <p className="text-xs text-[#52525B] leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A]">
              What Leaders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-6 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm flex flex-col justify-between shadow-xs">
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-6 font-serif italic">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-[#E5E7EB]">
                  <p className="text-xs font-mono font-semibold text-[#0A0A0A]">{t.author}</p>
                  <p className="text-[11px] font-mono text-[#71717A]">{t.title} • {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0A0A0A] mb-4">
            Partner with HYVEX
          </h2>
          <p className="text-sm text-[#52525B] mb-6">
            Get in touch to discuss your organization's digital roadmap and growth goals.
          </p>
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#27272A] transition-all shadow-xs"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
