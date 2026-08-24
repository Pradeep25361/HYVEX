import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Calendar, Layers } from 'lucide-react';
import { ServiceInfo } from '../data/agencyData';

interface ServiceTemplateProps {
  service: ServiceInfo;
  interactiveTool?: React.ReactNode;
}

export default function ServiceTemplate({ service, interactiveTool }: ServiceTemplateProps) {
  return (
    <div className="pt-24 pb-16 bg-white text-[#0A0A0A] min-h-screen">
      {/* Service Hero Banner */}
      <section className="relative py-16 md:py-20 border-b border-[#E5E7EB] bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>CAPABILITY // {service.id.toUpperCase()}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0A0A0A] leading-tight mb-4">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] font-sans leading-relaxed mb-6">
              {service.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#27272A] transition-all shadow-xs"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="#deliverables"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0A0A0A] border border-[#E5E7EB] font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#FAFAFA] transition-all shadow-xs"
              >
                <span>Deliverables</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#71717A]" />
              </a>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E5E7EB]">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#0A0A0A] mb-1">{metric.value}</div>
                <div className="text-xs font-mono text-[#71717A] uppercase tracking-wide">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section id="deliverables" className="py-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
                SCOPE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] mb-4 leading-tight">
                Deliverables & Stack
              </h2>
              <p className="text-sm text-[#52525B] leading-relaxed mb-6 font-sans">
                {service.fullDesc}
              </p>

              {service.techStack && (
                <div className="p-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#71717A] mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#0A0A0A]" />
                    <span>TECHNOLOGIES & PLATFORMS</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {service.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white border border-[#E5E7EB] text-[11px] font-mono text-[#52525B] rounded-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.deliverables.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    className="p-4 bg-[#FAFAFA] border border-[#E5E7EB] hover:border-[#0A0A0A] transition-all rounded-sm flex items-start gap-2.5 shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-[#0A0A0A] mb-0.5">{item}</h3>
                      <p className="text-[11px] text-[#71717A] font-mono">
                        Enterprise specification
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Tool Section if passed */}
      {interactiveTool && (
        <section className="py-16 border-b border-[#E5E7EB] bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {interactiveTool}
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-16 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#71717A] block mb-2">
              METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] mb-2">
              Implementation Process
            </h2>
            <p className="text-xs sm:text-sm text-[#52525B]">
              Four-step execution cycle from analysis to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-5 bg-white border border-[#E5E7EB] rounded-sm flex flex-col justify-between hover:border-[#0A0A0A] transition-all shadow-xs"
              >
                <div>
                  <div className="text-2xl font-serif text-[#71717A] mb-3 font-normal">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-semibold text-[#0A0A0A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#52525B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F4F4F5] text-[10px] font-mono text-[#71717A] uppercase tracking-wider">
                  PHASE {step.step} OF 04
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 border-b border-[#E5E7EB] bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0A0A0A] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 bg-white border border-[#E5E7EB] rounded-sm shadow-xs">
                <h3 className="text-sm font-semibold text-[#0A0A0A] mb-1.5 flex items-center gap-2">
                  <span className="text-xs font-mono text-[#71717A]">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0A0A0A] mb-3">
            Ready to Begin?
          </h2>
          <p className="text-sm text-[#52525B] max-w-md mx-auto mb-6">
            Schedule a strategy call with our engineering and growth leads to review your requirements.
          </p>

          <div className="flex justify-center gap-3">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#27272A] transition-all shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
