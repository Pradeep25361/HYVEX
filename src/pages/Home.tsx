import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  Code,
  Smartphone,
  BarChart3,
  Share2,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Sparkles
} from 'lucide-react';
import Ticker from '../components/Ticker';
import { FloatingPaths } from '../components/ui/background-paths';
import {
  AGENCY_DETAILS,
  AGENCY_STATS,
  SERVICES_DATA,
  TESTIMONIALS,
  TEAM_MEMBERS,
  CLIENT_PARTNERS
} from '../data/agencyData';
import { HeroSection } from '../components/ui/hero-section-4';
import TeamCard from '../components/TeamCard';

export default function Home() {
  const serviceKeys = [
    'digital-marketing',
    'performance-marketing',
    'web-development',
    'app-development',
    'seo-services'
  ];

  const marqueeKeywords = [
    "SLEEP EXCELLENT",
    "CAREER CONNECT",
    "WALLMART",
    "ORICA",
    "CLAT.AI",
    "PERFORMANCE MARKETING",
    "WEB ARCHITECTURE",
    "MOBILE APPLICATIONS",
    "TECHNICAL SEO",
    "ENTERPRISE SOLUTIONS"
  ];

  const clientNames = [
    "Sleep Excellent",
    "Career connect",
    "Wallmart",
    "Orica",
    "Clat.AI"
  ];

  const repeatedClients = [...clientNames, ...clientNames, ...clientNames, ...clientNames];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Web Developer':
        return <Code className="w-3.5 h-3.5 text-[#0A0A0A]" />;
      case 'App Developer':
        return <Smartphone className="w-3.5 h-3.5 text-[#0A0A0A]" />;
      case 'Digital Marketer':
        return <BarChart3 className="w-3.5 h-3.5 text-[#0A0A0A]" />;
      case 'Instagram Handling':
        return <Share2 className="w-3.5 h-3.5 text-[#0A0A0A]" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#0A0A0A]" />;
    }
  };

  return (
    <div className="bg-white text-[#0A0A0A] min-h-screen relative overflow-hidden">
      {/* Animated Subtle Vector Paths Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10">
        {/* 1. Hero Section Component */}
        <HeroSection
          title="Engineered for Market Monopoly"
          subtitle="We build high-performance marketing systems, web platforms, and mobile applications for modern enterprises."
          primaryButtonText="Book Consultation"
          primaryButtonHref="/book-appointment"
          secondaryButtonText="Our Agency"
          secondaryButtonHref="/about"
          imageUrl=""
        />

        {/* Hero Quick Key Metrics Strip */}
        <div className="py-6 bg-[#FAFAFA] border-b border-[#E5E7EB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs text-[#52525B]">
            <div>
              <span className="block uppercase text-[10px] text-[#71717A] mb-1 font-mono tracking-wider">LEADERSHIP</span>
              <span className="text-[#0A0A0A] font-semibold">{AGENCY_DETAILS.founder.name}</span>
            </div>
            <div>
              <span className="block uppercase text-[10px] text-[#71717A] mb-1 font-mono tracking-wider">DIRECT LINE</span>
              <a href={`tel:${AGENCY_DETAILS.phoneRaw}`} className="text-[#0A0A0A] hover:underline font-semibold">
                {AGENCY_DETAILS.phone}
              </a>
            </div>
            <div>
              <span className="block uppercase text-[10px] text-[#71717A] mb-1 font-mono tracking-wider">LOCATION</span>
              <span className="text-[#0A0A0A] font-semibold">{AGENCY_DETAILS.location}</span>
            </div>
            <div>
              <span className="block uppercase text-[10px] text-[#71717A] mb-1 font-mono tracking-wider">CLIENT VALUE GENERATED</span>
              <span className="text-[#0A0A0A] font-semibold">$45M+</span>
            </div>
          </div>
        </div>

        {/* Marquee Ticker */}
        <Ticker items={marqueeKeywords} direction="left" />

        {/* 2. Services Overview Grid (5 Cards) */}
        <section className="py-20 border-b border-[#E5E7EB] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
                  SERVICES
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] tracking-tight">
                  Core Capabilities
                </h2>
              </div>
              <p className="text-xs font-mono text-[#52525B] max-w-sm">
                Strategic digital marketing and custom software engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceKeys.map((key, idx) => {
                const service = SERVICES_DATA[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}
                  >
                    <Link
                      to={`/${service.slug}`}
                      className="block p-7 bg-white border border-[#E5E7EB] hover:border-[#0A0A0A] transition-all duration-200 rounded-sm group h-full flex flex-col justify-between hover:shadow-sm"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-widest">
                            0{idx + 1}
                          </span>
                          <div className="w-7 h-7 rounded-sm bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-white transition-colors">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <h3 className="font-serif text-xl font-medium text-[#0A0A0A] mb-2">
                          {service.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-6">
                          {service.shortDesc}
                        </p>
                      </div>

                      <div className="pt-5 border-t border-[#F4F4F5] flex items-center justify-between text-xs font-mono text-[#71717A]">
                        <span>{service.metrics[0].label}: <strong className="text-[#0A0A0A]">{service.metrics[0].value}</strong></span>
                        <span className="text-[#0A0A0A] group-hover:underline">View details →</span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Why HYVEX Section */}
        <section className="py-20 border-b border-[#E5E7EB] bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
                  ADVANTAGE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] mb-5 leading-tight">
                  Why Partner With Us
                </h2>
                <p className="text-sm text-[#52525B] leading-relaxed mb-6 font-sans">
                  We bridge the gap between technical software architecture and performance marketing to deliver measurable growth.
                </p>

                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#0A0A0A]">
                  <div className="flex items-start gap-3 p-3 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <span>Founder-led strategy and direct senior oversight on all deliverables.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <span>Clean custom codebases with no third-party template bloat.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <span>Transparent attribution dashboards and granular ROI tracking.</span>
                  </div>
                </div>
              </div>

              {/* Stats Cards Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                {AGENCY_STATS.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-7 bg-white border border-[#E5E7EB] rounded-sm hover:border-[#A1A1AA] transition-all flex flex-col justify-between shadow-xs"
                  >
                    <div className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs font-mono text-[#71717A] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Founder Profile Banner */}
        <section className="py-16 border-b border-[#E5E7EB] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-44 h-56 sm:w-52 sm:h-64 border border-[#E5E7EB] p-1 bg-white rounded-sm shadow-xs">
                  <img
                    src="/src/assets/images/founder_hari_krishna_1785432308486.jpg"
                    alt="Hari Krishna - Founder & CEO"
                    className="w-full h-full object-cover rounded-2xs"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="lg:col-span-8">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
                  LEADERSHIP
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0A0A0A] mb-3">
                  Hari Krishna, Founder & CEO
                </h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-6">
                  "{AGENCY_DETAILS.founder.quote}"
                </p>
                <Link
                  to="/founder"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#27272A] transition-all shadow-xs"
                >
                  <span>Founder Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TEAM SECTION (Scrollable directly on Home) */}
        <section id="team" className="py-20 border-b border-[#E5E7EB] bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
                  TEAM
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] tracking-tight">
                  Leadership & Engineering
                </h2>
              </div>
              <p className="text-xs font-mono text-[#52525B] max-w-sm">
                Software developers, performance marketers, and growth strategists.
              </p>
            </div>

            {/* Team Grid with Testimonial Card Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 justify-items-center">
              {TEAM_MEMBERS.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0A0A0A] border border-[#E5E7EB] font-mono text-xs uppercase tracking-wider rounded-sm hover:bg-[#FAFAFA] transition-all shadow-xs"
              >
                <span>View Full Team</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. CLIENTS & PARTNERS SECTION (Scrollable directly on Home) */}
        <section id="clients" className="py-20 border-b border-[#E5E7EB] bg-[#FAFAFA] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
                CLIENTS & PARTNERS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] tracking-tight mb-3">
                Proven Track Record
              </h2>
              <p className="text-sm text-[#52525B] leading-relaxed">
                Representative client engagements across enterprise retail, education tech, and industrial operations.
              </p>
            </div>

            {/* Marquee Ticker */}
            <div className="w-full overflow-hidden bg-white border-y border-[#E5E7EB] py-4 select-none relative mb-12 shadow-xs">
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

            {/* Case Studies */}
            <div className="space-y-6 mb-12">
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
                          <span>Consultation</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/clients"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0A0A0A] border border-[#E5E7EB] font-mono text-xs uppercase tracking-wider rounded-sm hover:bg-[#FAFAFA] transition-all shadow-xs"
              >
                <span>View All Engagements</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] mb-4">
              Start Your Project
            </h2>
            <p className="text-sm text-[#52525B] font-sans mb-8 leading-relaxed">
              Schedule a strategy session with Hari Krishna and the engineering team to discuss your digital roadmap.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <Link
                to="/book-appointment"
                className="px-6 py-3 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#27272A] transition-all shadow-xs"
              >
                Schedule Session
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-[#0A0A0A] border border-[#E5E7EB] font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#F4F4F5] transition-all shadow-xs"
              >
                Send Message
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
