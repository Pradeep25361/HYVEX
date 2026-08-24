import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/agencyData';
import TeamCard from '../components/TeamCard';

export default function Team() {
  return (
    <div className="pt-24 pb-20 bg-white text-[#0A0A0A] min-h-screen">
      {/* Team Header */}
      <section className="py-16 md:py-20 border-b border-[#E5E7EB] bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>TEAM & SPECIALISTS</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#0A0A0A] leading-tight mb-4">
              Our Core Team
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] font-sans leading-relaxed">
              Engineers, growth strategists, and performance specialists engineered to build digital monopolies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid with Testimonial Card Theme */}
      <section className="py-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0A0A0A] mb-3">
            Collaborate With Us
          </h2>
          <p className="text-sm text-[#52525B] mb-6">
            Direct collaboration with senior engineers and growth leads on every project.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#27272A] transition-all shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
