import React, { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';

export default function SEORankProjectionTool() {
  const [currentTraffic, setCurrentTraffic] = useState(10000);
  const [domainRating, setDomainRating] = useState(35);

  const projectedTraffic = Math.floor(currentTraffic * (1 + (60 / Math.max(domainRating, 20))));
  const projectedLeads = Math.floor(projectedTraffic * 0.024);

  return (
    <div className="p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-sm max-w-4xl mx-auto shadow-xs">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm">
          <Search className="w-4 h-4 text-[#0A0A0A]" />
        </div>
        <div>
          <h3 className="text-base font-serif font-semibold text-[#0A0A0A]">Organic Traffic Growth Projection</h3>
          <p className="text-xs font-mono text-[#71717A]">Forecast after technical SEO optimization</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
            Current Monthly Organic Visits
          </label>
          <input
            type="number"
            step="1000"
            value={currentTraffic}
            onChange={(e) => setCurrentTraffic(Math.max(100, Number(e.target.value)))}
            className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-sm text-xs text-[#0A0A0A] font-mono focus:outline-none focus:border-[#0A0A0A]"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
            Domain Rating (DR 1-100)
          </label>
          <input
            type="range"
            min="5"
            max="90"
            value={domainRating}
            onChange={(e) => setDomainRating(Number(e.target.value))}
            className="w-full accent-[#0A0A0A] cursor-pointer mb-2"
          />
          <div className="text-xs font-mono text-[#0A0A0A]">DR {domainRating}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm">
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
            Current Traffic
          </span>
          <span className="text-xl font-serif text-[#71717A]">{currentTraffic.toLocaleString()} / mo</span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
            Projected 6-Mo Visits
          </span>
          <span className="text-xl font-serif text-[#0A0A0A] font-semibold flex items-center gap-1.5">
            {projectedTraffic.toLocaleString()}
            <TrendingUp className="w-4 h-4 text-[#10B981]" />
          </span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
            Est. Inbound Leads
          </span>
          <span className="text-xl font-serif text-[#0A0A0A] font-semibold">{projectedLeads.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
