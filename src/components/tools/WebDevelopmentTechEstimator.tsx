import React, { useState } from 'react';
import { Layers, Zap, Clock, Check } from 'lucide-react';

export default function WebDevelopmentTechEstimator() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'custom-design',
    'responsive',
    'cms'
  ]);

  const featureOptions = [
    { id: 'custom-design', label: 'Design System & Component Library', days: 7 },
    { id: 'responsive', label: 'React 19 / Vite Web Architecture', days: 5 },
    { id: 'cms', label: 'Headless CMS Integration', days: 4 },
    { id: 'ecom', label: 'E-Commerce & Stripe Checkout', days: 6 },
    { id: 'analytics', label: 'Custom Analytics Dashboard', days: 4 },
    { id: 'seo-schema', label: 'Performance & Schema Optimization', days: 3 }
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const totalDays = selectedFeatures.reduce((acc, curr) => {
    const item = featureOptions.find(f => f.id === curr);
    return acc + (item ? item.days : 0);
  }, 5);

  return (
    <div className="p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-sm max-w-4xl mx-auto shadow-xs">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm">
          <Layers className="w-4 h-4 text-[#0A0A0A]" />
        </div>
        <div>
          <h3 className="text-base font-serif font-semibold text-[#0A0A0A]">Web Architecture & Timeline Estimator</h3>
          <p className="text-xs font-mono text-[#71717A]">Calculate development sprint duration</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {featureOptions.map((opt) => {
          const isSelected = selectedFeatures.includes(opt.id);
          return (
            <div
              key={opt.id}
              onClick={() => toggleFeature(opt.id)}
              className={`p-3.5 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                isSelected
                  ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                  : 'bg-white border-[#E5E7EB] text-[#52525B] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-4 h-4 rounded-xs border flex items-center justify-center ${
                  isSelected ? 'bg-white border-white' : 'border-[#D4D4D8]'
                }`}>
                  {isSelected && <Check className="w-3 h-3 text-[#0A0A0A]" />}
                </div>
                <span className="text-xs font-sans">{opt.label}</span>
              </div>
              <span className={`text-[11px] font-mono ${isSelected ? 'text-[#D4D4D8]' : 'text-[#71717A]'}`}>+{opt.days}d</span>
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-[#0A0A0A]" />
          <div>
            <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">
              Estimated Sprint Duration
            </span>
            <span className="text-xl font-serif text-[#0A0A0A] font-semibold">{totalDays} Business Days</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Zap className="w-4 h-4 text-[#0A0A0A]" />
          <div>
            <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">
              Performance Target
            </span>
            <span className="text-xl font-serif text-[#0A0A0A] font-semibold">100/100 Lighthouse</span>
          </div>
        </div>
      </div>
    </div>
  );
}
