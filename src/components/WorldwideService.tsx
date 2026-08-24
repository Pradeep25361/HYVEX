import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Globe } from '@/components/ui/globe';
import { ArrowUpRight, Globe2, ShieldCheck, Clock, Zap } from 'lucide-react';

export default function WorldwideService() {
  const globalHubs = [
    {
      region: "North America",
      cities: "New York • San Francisco • Toronto",
      timezone: "UTC-5 / UTC-8",
      activeClients: "40% Share",
    },
    {
      region: "EMEA & Middle East",
      cities: "London • Dubai • Berlin",
      timezone: "UTC+0 / UTC+4",
      activeClients: "25% Share",
    },
    {
      region: "Asia-Pacific",
      cities: "Hyderabad (HQ) • Singapore • Tokyo",
      timezone: "UTC+5:30 / UTC+8",
      activeClients: "35% Share",
    },
  ];

  return (
    <section className="py-20 border-t border-[#E5E7EB] bg-[#FAFAFA] relative overflow-hidden" id="worldwide-service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & Metrics */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>WORLDWIDE SERVICE CAPABILITY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#0A0A0A] leading-tight mb-4">
              Engineering & Marketing Without Borders
            </h2>

            <p className="text-base sm:text-lg text-[#52525B] font-sans leading-relaxed mb-6">
              HYVEX operates globally, partnering with high-growth brands, startups, and enterprises across the Americas, Europe, Middle East, and Asia-Pacific.
            </p>

            <div className="space-y-3 mb-8">
              {globalHubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-[#E5E7EB] rounded-sm shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#0A0A0A] font-semibold">{hub.region}</span>
                      <span className="text-[10px] font-mono text-[#71717A] bg-[#FAFAFA] px-1.5 py-0.5 border border-[#E5E7EB] rounded-xs">{hub.timezone}</span>
                    </div>
                    <p className="text-xs text-[#52525B] mt-0.5 font-sans">{hub.cities}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-medium text-[#0A0A0A]">{hub.activeClients}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Global Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#E5E7EB]">
              <div className="p-3 bg-white border border-[#E5E7EB] rounded-sm">
                <span className="text-xl font-serif font-semibold text-[#0A0A0A] block mb-0.5">14+</span>
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">Countries</span>
              </div>
              <div className="p-3 bg-white border border-[#E5E7EB] rounded-sm">
                <span className="text-xl font-serif font-semibold text-[#0A0A0A] block mb-0.5">24/7</span>
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">Delivery SLA</span>
              </div>
              <div className="p-3 bg-white border border-[#E5E7EB] rounded-sm">
                <span className="text-xl font-serif font-semibold text-[#10B981] block mb-0.5">100%</span>
                <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">Remote Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Cobe Globe Component */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[540px] aspect-square rounded-sm border border-[#E5E7EB] bg-white p-6 shadow-xs flex flex-col items-center justify-between overflow-hidden">
              
              {/* Header inside Globe Card */}
              <div className="w-full flex items-center justify-between z-20 pb-3 border-b border-[#F4F4F5]">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#0A0A0A]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A] font-semibold">
                    Interactive Global Nodes
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#71717A] bg-[#FAFAFA] border border-[#E5E7EB] px-2 py-0.5 rounded-xs">
                  Drag to rotate
                </span>
              </div>

              {/* Globe Canvas Container */}
              <div className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center my-auto">
                <Globe className="top-0" />
              </div>

              {/* Bottom footer badge */}
              <div className="w-full pt-3 border-t border-[#F4F4F5] flex items-center justify-between z-20 text-[11px] font-mono text-[#71717A]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>Global Operations Online</span>
                </div>
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center gap-1 text-[#0A0A0A] hover:underline font-medium"
                >
                  <span>Book Strategy Call</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
