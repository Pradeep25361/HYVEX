import React, { useState } from 'react';
import { BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PerformanceROICalculator() {
  const [adSpend, setAdSpend] = useState(15000);
  const [targetROAS, setTargetROAS] = useState(4.2);
  const [avgOrderValue, setAvgOrderValue] = useState(120);
  const [channelMix, setChannelMix] = useState('omnichannel');

  const channelMultipliers: Record<string, { label: string; cpaMultiplier: number; efficiency: number }> = {
    omnichannel: { label: 'Meta + Google PMax + TikTok', cpaMultiplier: 1.0, efficiency: 1.15 },
    meta: { label: 'Meta Direct-Response', cpaMultiplier: 0.95, efficiency: 1.05 },
    pmax: { label: 'Google Search & PMax', cpaMultiplier: 1.1, efficiency: 1.1 },
    b2b: { label: 'LinkedIn & Programmatic', cpaMultiplier: 1.6, efficiency: 1.25 },
  };

  const channelInfo = channelMultipliers[channelMix] || channelMultipliers.omnichannel;
  const grossRevenue = Math.round(adSpend * targetROAS * channelInfo.efficiency);
  const totalConversions = Math.round(grossRevenue / avgOrderValue);
  const estBlendedCAC = totalConversions > 0 ? (adSpend / totalConversions).toFixed(2) : '0.00';
  const estimatedContributionMargin = Math.round(grossRevenue - adSpend - (grossRevenue * 0.35));

  return (
    <div className="p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-sm max-w-4xl mx-auto shadow-xs">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm">
          <BarChart3 className="w-4 h-4 text-[#0A0A0A]" />
        </div>
        <div>
          <h3 className="text-base font-serif font-semibold text-[#0A0A0A]">Media Buying & ROAS Simulator</h3>
          <p className="text-xs font-mono text-[#71717A]">Forecast revenue and contribution margin</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
            Monthly Media Capital ($)
          </label>
          <input
            type="range"
            min="2500"
            max="150000"
            step="2500"
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full accent-[#0A0A0A] cursor-pointer mb-2"
          />
          <div className="text-xl font-serif text-[#0A0A0A]">${adSpend.toLocaleString()} / mo</div>
        </div>

        <div>
          <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
            Target ROAS ({targetROAS.toFixed(1)}x)
          </label>
          <input
            type="range"
            min="2.0"
            max="8.0"
            step="0.1"
            value={targetROAS}
            onChange={(e) => setTargetROAS(Number(e.target.value))}
            className="w-full accent-[#0A0A0A] cursor-pointer mb-2"
          />
          <div className="text-xl font-serif text-[#0A0A0A]">{targetROAS.toFixed(1)}x ROAS</div>
        </div>

        <div>
          <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
            Channel Mix
          </label>
          <select
            value={channelMix}
            onChange={(e) => setChannelMix(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-sm text-xs text-[#0A0A0A] font-mono focus:outline-none focus:border-[#0A0A0A]"
          >
            <option value="omnichannel">Omnichannel (Meta + PMax + Video)</option>
            <option value="meta">Meta Direct-Response</option>
            <option value="pmax">Google Search & PMax</option>
            <option value="b2b">LinkedIn Enterprise</option>
          </select>
        </div>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm mb-6">
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
            Gross Revenue
          </span>
          <span className="text-xl font-serif text-[#0A0A0A] font-semibold">${grossRevenue.toLocaleString()}</span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
            Est. Conversions
          </span>
          <span className="text-xl font-serif text-[#0A0A0A] font-semibold">{totalConversions.toLocaleString()}</span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
            Target CAC
          </span>
          <span className="text-xl font-serif text-[#0A0A0A] font-mono">${estBlendedCAC}</span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
            Contribution Margin
          </span>
          <span className="text-xl font-serif text-[#10B981] font-semibold">+${estimatedContributionMargin.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm text-xs font-mono text-[#71717A]">
        <div className="flex items-center gap-2 text-[#0A0A0A]">
          <Zap className="w-3.5 h-3.5 text-[#0A0A0A]" />
          <span>Server-side pixel tracking and attribution included in all performance scopes.</span>
        </div>
        <Link
          to="/book-appointment"
          className="px-3.5 py-1.5 bg-[#0A0A0A] text-white text-xs font-medium uppercase tracking-wider hover:bg-[#27272A] transition-all rounded-xs whitespace-nowrap"
        >
          Discuss Media Plan
        </Link>
      </div>
    </div>
  );
}
