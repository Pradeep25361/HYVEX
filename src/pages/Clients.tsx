import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CLIENT_PARTNERS, TESTIMONIALS } from '../data/agencyData';

export default function Clients() {
  const clientNames = [
    "Sleep Excellent",
    "Career connect",
    "Wallmart",
    "Orica",
    "Clat.AI"
  ];

  const repeatedClients = [...clientNames, ...clientNames, ...clientNames, ...clientNames];

  return (
    <div className="pt-24 pb-20 bg-white text-[#0A0A0A] min-h-screen">
      {/* Header Section */}
      <section className="py-16 md:py-20 border-b border-[#E5E7EB] bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>CLIENTS & CASE STUDIES</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#0A0A0A] leading-tight mb-4">
              Client Engagements & Impact
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] font-sans leading-relaxed max-w-xl mx-auto">
              Selected case studies across digital marketing, custom web platforms, and mobile apps.
            </p>
          </motion.div>
        </div>

        {/* Marquee Scrolling */}
        <div className="mt-10 w-full overflow-hidden bg-white border-y border-[#E5E7EB] py-4 select-none relative shadow-xs">
          <div
            className="flex whitespace-nowrap gap-10 text-xs sm:text-sm tracking-[0.2em] font-mono uppercase text-[#71717A]"
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'marquee 28s linear infinite'
            }}
          >
            {repeatedClients.map((client, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="font-semibold text-[#0A0A0A]">
                  {client}
                </span>
                <span className="text-[#D4D4D8] text-xs">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
                VERIFIED PARTNERSHIPS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A]">
                Selected Engagements
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#71717A]">PORTFOLIO:</span>
              <span className="text-xs font-mono text-[#0A0A0A] bg-[#FAFAFA] px-2.5 py-1 border border-[#E5E7EB] rounded-xs font-medium">
                5 CASE STUDIES
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {CLIENT_PARTNERS.map((client, idx) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-sm hover:border-[#0A0A0A] transition-all shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Col */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#71717A] mb-2 uppercase">
                      <span>0{idx + 1}</span>
                      <span>•</span>
                      <span>{client.featuredYear}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#0A0A0A] font-medium mb-1">
                      {client.name}
                    </h3>

                    <p className="text-xs font-mono text-[#71717A] mb-4">
                      {client.industry}
                    </p>

                    <div className="p-3 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm">
                      <span className="text-[10px] font-mono text-[#71717A] uppercase block mb-0.5">
                        SCOPE
                      </span>
                      <span className="text-xs font-medium text-[#0A0A0A] font-mono">
                        {client.scope}
                      </span>
                    </div>
                  </div>

                  {/* Middle Col */}
                  <div className="lg:col-span-5 space-y-4">
                    <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                      {client.description}
                    </p>

                    {client.quote && (
                      <div className="p-3 bg-[#FAFAFA] border-l-2 border-[#0A0A0A] rounded-r-sm italic text-xs text-[#52525B] font-serif leading-relaxed">
                        "{client.quote}"
                      </div>
                    )}

                    <div>
                      <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1.5">
                        TECHNOLOGIES
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {client.technologiesUsed.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 bg-[#FAFAFA] border border-[#E5E7EB] text-[10px] font-mono text-[#52525B] rounded-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Col */}
                  <div className="lg:col-span-3 flex flex-col items-center justify-center p-5 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm text-center">
                    <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider mb-1">
                      MEASURED IMPACT
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl text-[#0A0A0A] font-semibold mb-1">
                      {client.impactMetric}
                    </span>
                    <span className="text-[11px] font-mono text-[#52525B]">
                      {client.impactLabel}
                    </span>

                    <div className="w-full mt-4 pt-3 border-t border-[#E5E7EB]">
                      <Link
                        to="/book-appointment"
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#0A0A0A] hover:underline font-medium"
                      >
                        <span>Schedule Call</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A]">
              What Leaders Say About HYVEX
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

      {/* Metrics */}
      <section className="py-16 border-b border-[#E5E7EB] bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
              <span className="font-serif text-3xl font-semibold text-[#0A0A0A] block mb-1">100%</span>
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-1">
                Milestone Delivery
              </span>
              <p className="text-xs text-[#52525B]">
                Sprint deadlines executed with disciplined milestones.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
              <span className="font-serif text-3xl font-semibold text-[#0A0A0A] block mb-1">&lt; 2 Hrs</span>
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-1">
                SLA Response Time
              </span>
              <p className="text-xs text-[#52525B]">
                Direct communication channels with engineering leads.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
              <span className="font-serif text-3xl font-semibold text-[#0A0A0A] block mb-1">$45M+</span>
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-1">
                Client Value Generated
              </span>
              <p className="text-xs text-[#52525B]">
                Measured across digital revenue and growth metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0A0A0A] mb-3">
            Start Your Engagement
          </h2>
          <p className="text-sm text-[#52525B] mb-6">
            Consult with Hari Krishna and our leads to plan your next growth cycle.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              to="/book-appointment"
              className="px-6 py-3 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#27272A] transition-all shadow-xs"
            >
              Book Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
