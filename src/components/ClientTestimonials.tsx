import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export interface ClientTestimonialItem {
  quote: string;
  author: string;
  title: string;
  location: string;
  category: string;
  image: string;
}

export const CLIENT_TESTIMONIALS_DATA: ClientTestimonialItem[] = [
  {
    quote: "“HYVEX completely transformed our online sales infrastructure. Their digital marketing funnels generated a 4x increase in qualified leads within 60 days.”",
    author: "Vikramaditya Rao",
    title: "Chief Marketing Officer, Apex Financials",
    location: "Hyderabad",
    category: "Digital Marketing & Performance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    quote: "“The web development team engineered our platform with sub-second page loads and a stunning editorial design. Our user engagement doubled immediately.”",
    author: "Elena Rostova",
    title: "Managing Director, Solis Luxury Real Estate",
    location: "Dubai & Mumbai",
    category: "Web Architecture & UI/UX",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    quote: "“Working directly with Hari Krishna and the HYVEX team was a game-changer. They built our cross-platform mobile app seamlessly and launched ahead of schedule.”",
    author: "Siddharth Verma",
    title: "Co-Founder, Qube Logistics",
    location: "Bengaluru",
    category: "Mobile App Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  }
];

export default function ClientTestimonials() {
  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm text-xs font-mono uppercase tracking-widest text-[#71717A] mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>CLIENT TESTIMONIALS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] tracking-tight mb-3">
            What Leaders Say About HYVEX
          </h2>
          <p className="text-sm text-[#52525B] font-sans leading-relaxed">
            Real feedback from enterprise leaders, founders, and marketing directors partnering with HYVEX.
          </p>
        </div>

        {/* Testimonial Cards Grid with the requested theme */}
        <div className="flex flex-wrap items-stretch justify-center gap-8">
          {CLIENT_TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="w-full max-w-80 bg-black text-white rounded-2xl overflow-hidden border border-[#27272A] hover:border-[#3F3F46] transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Gradient Fade */}
                <div className="relative -mt-px overflow-hidden rounded-2xl bg-[#18181B]">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="h-[270px] w-full rounded-2xl group-hover:scale-105 transition-all duration-500 object-cover object-top"
                  />
                  <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black via-black/60 to-transparent" />
                  
                  {/* Rating Stars Badge */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-0.5 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-md">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3 h-3 fill-[#E0724A] text-[#E0724A]" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 pb-3 -mt-4 relative z-20">
                  <p className="font-medium text-xs sm:text-sm text-gray-200 border-b border-gray-700/80 pb-4 leading-relaxed font-sans min-h-[75px] flex items-center">
                    {item.quote}
                  </p>

                  <div className="pt-4">
                    <p className="text-base font-semibold text-white tracking-tight">
                      — {item.author}
                    </p>
                    <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text mt-0.5">
                      {item.category}
                    </p>
                    <p className="text-[11px] font-mono text-gray-400 mt-1">
                      {item.title} • {item.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-4 pt-3 border-t border-gray-800/80 flex items-center justify-between mt-3 text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Client</span>
                </span>
                <Link
                  to="/clients"
                  className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3 h-3 text-[#E0724A]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
