import React from 'react';

interface TickerProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

export default function Ticker({ items, direction = 'left' }: TickerProps) {
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-[#FAFAFA] border-y border-[#E5E7EB] py-3.5 select-none">
      <div
        className={`flex whitespace-nowrap gap-12 text-xs tracking-[0.2em] font-mono uppercase text-[#71717A] ${
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
        }`}
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `marquee 35s linear infinite ${direction === 'right' ? 'reverse' : ''}`
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="hover:text-[#0A0A0A] transition-colors">{item}</span>
            <span className="text-[#D4D4D8]">•</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
