import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Instagram, Twitter, ArrowUpRight, Code, Smartphone, BarChart3, Share2, Sparkles } from 'lucide-react';
import { TeamMember } from '../data/agencyData';

interface TeamCardProps {
  key?: React.Key;
  member: TeamMember;
  index?: number;
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Web Developer':
        return <Code className="w-3.5 h-3.5 text-[#E0724A]" />;
      case 'App Developer':
        return <Smartphone className="w-3.5 h-3.5 text-[#8B5CF6]" />;
      case 'Digital Marketer':
        return <BarChart3 className="w-3.5 h-3.5 text-[#9938CA]" />;
      case 'Instagram Handling':
        return <Share2 className="w-3.5 h-3.5 text-[#E0724A]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />;
    }
  };

  // Member-specific quote reflecting their craft
  const getMemberQuote = (name: string, role: string) => {
    if (name.includes('Pradeep')) {
      return "“Architecting sub-second React platforms, bespoke design systems, and resilient frontend engines for global scale.”";
    }
    if (name.includes('Ruthvij')) {
      return "“Engineering fluid 60fps mobile architectures, offline sync protocols, and high-throughput native security.”";
    }
    if (name.includes('Anji')) {
      return "“Optimizing paid media allocations and multi-touch attribution to turn advertising capital into compound revenue.”";
    }
    if (name.includes('Prasad')) {
      return "“Pioneering viral Instagram algorithms, visual storytelling, and high-converting community brand growth.”";
    }
    return `“Engineering high-impact solutions with uncompromising technical precision in ${role}.”`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="w-full max-w-80 mx-auto bg-black text-white rounded-2xl overflow-hidden border border-[#27272A] hover:border-[#3F3F46] transition-all duration-300 shadow-xl flex flex-col justify-between group"
    >
      {/* Top Image with Gradient Overlay */}
      <div>
        <div className="relative -mt-px overflow-hidden rounded-2xl bg-[#18181B]">
          <img
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            className="h-[270px] w-full rounded-2xl group-hover:scale-105 transition-all duration-500 object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black via-black/60 to-transparent" />
          
          {/* Top Badge */}
          <div className="absolute top-3 right-3 z-20">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase text-gray-200 rounded-full shadow-md">
              {getRoleIcon(member.role)}
              <span>{member.role}</span>
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-5 pb-2 -mt-4 relative z-20">
          <p className="font-medium text-xs sm:text-sm text-gray-200 border-b border-gray-700/80 pb-4 leading-relaxed font-sans min-h-[70px] flex items-center">
            {getMemberQuote(member.name, member.role)}
          </p>

          <div className="pt-4">
            <p className="text-base font-semibold text-white tracking-tight">
              — {member.name}
            </p>
            <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text mt-0.5">
              {member.role}
            </p>
            <p className="text-[11px] font-mono text-gray-400 mt-1 line-clamp-1">
              {member.specialization}
            </p>
          </div>

          {/* Skills Badges */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {member.skills.slice(0, 3).map((skill, sIdx) => (
              <span
                key={sIdx}
                className="px-2 py-0.5 bg-[#18181B] border border-white/10 text-[10px] font-mono text-gray-300 rounded-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Socials & Connect */}
      <div className="px-5 pb-4 pt-3 border-t border-gray-800/80 flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 bg-[#18181B] border border-white/10 rounded-xs text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 bg-[#18181B] border border-white/10 rounded-xs text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 bg-[#18181B] border border-white/10 rounded-xs text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 bg-[#18181B] border border-white/10 rounded-xs text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <Link
          to="/book-appointment"
          className="inline-flex items-center gap-1 text-xs font-mono text-gray-300 hover:text-white hover:underline font-medium transition-colors"
        >
          <span>Connect</span>
          <ArrowUpRight className="w-3 h-3 text-[#E0724A]" />
        </Link>
      </div>
    </motion.div>
  );
}
