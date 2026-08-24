import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function DigitalMarketingCalculator() {
  const [monthlyBudget, setMonthlyBudget] = useState(5000);
  const [avgTicket, setAvgTicket] = useState(250);
  const [targetIndustry, setTargetIndustry] = useState('ecommerce');

  const multipliers: Record<string, { cpc: number; convRate: number }> = {
    ecommerce: { cpc: 1.8, convRate: 0.032 },
    b2b: { cpc: 4.5, convRate: 0.025 },
    realestate: { cpc: 3.2, convRate: 0.028 },
    healthcare: { cpc: 2.9, convRate: 0.035 }
  };

  const selected = multipliers[targetIndustry] || multipliers.ecommerce;
  const estimatedClicks = Math.floor(monthlyBudget / selected.cpc);
  const estimatedLeads = Math.floor(estimatedClicks * selected.convRate);
  const projectedRevenue = Math.floor(estimatedLeads * avgTicket * 1.8);
  const roas = (projectedRevenue / monthlyBudget).toFixed(1);

  return (
    <div className="p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-sm max-w-4xl mx-auto shadow-xs">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm">
          <Calculator className="w-4 h-4 text-[#0A0A0A]" />
        </div>
        <div>
          <h3 className="text-base font-serif font-semibold text-[#0A0A0A]">ROI & Acquisition Estimator</h3>
          <p className="text-xs font-mono text-[#71717A]">Projected growth metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
            Monthly Ad Budget ($)
          </label>
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={monthlyBudget}
            onChange={(e) => setMonthlyBudget(Number(e.target.value))}
            className="w-full accent-[#0A0A0A] cursor-pointer mb-2"
          />
          <div className="text-xl font-serif text-[#0A0A0A]">${monthlyBudget.toLocaleString()} / mo</div>
        </div>

        <div>
          <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
            Avg Customer Value ($)
          </label>
          <input
            type="number"
            min="50"
            max="10000"
            value={avgTicket}
            onChange={(e) => setAvgTicket(Number(e.target.value))}
            className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-sm text-xs text-[#0A0A0A] font-mono focus:outline-none focus:border-[#0A0A0A]"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
            Target Industry
          </label>
          <select
            value={targetIndustry}
            onChange={(e) => setTargetIndustry(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-sm text-xs text-[#0A0A0A] font-mono focus:outline-none focus:border-[#0A0A0A]"
          >
            <option value="ecommerce">E-Commerce & Retail</option>
            <option value="b2b">B2B SaaS & Tech</option>
            <option value="realestate">Real Estate</option>
            <option value="healthcare">Healthcare Services</option>
          </select>
        </div>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm">
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
            Est. Clicks
          </span>
          <span className="text-xl font-serif text-[#0A0A0A] font-semibold">{estimatedClicks.toLocaleString()}</span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
            Est. Conversions
          </span>
          <span className="text-xl font-serif text-[#0A0A0A] font-semibold">{estimatedLeads.toLocaleString()}</span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
            Projected Pipeline
          </span>
          <span className="text-xl font-serif text-[#0A0A0A] font-semibold">${projectedRevenue.toLocaleString()}</span>
        </div>
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block mb-1">
            Projected ROAS
          </span>
          <span className="text-xl font-serif text-[#10B981] font-semibold">{roas}x Return</span>
        </div>
      </div>
    </div>
  );
}
