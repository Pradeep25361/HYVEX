import React, { useState } from 'react';
import { Smartphone, WifiOff, Cpu, Check } from 'lucide-react';

export default function AppScopeEstimator() {
  const [platform, setPlatform] = useState<'both' | 'ios' | 'android'>('both');
  const [offlineSupport, setOfflineSupport] = useState(true);
  const [realtimePush, setRealtimePush] = useState(true);
  const [authType, setAuthType] = useState('biometric');

  let baseWeeks = platform === 'both' ? 8 : 5;
  if (offlineSupport) baseWeeks += 2;
  if (realtimePush) baseWeeks += 1.5;

  return (
    <div className="p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-sm max-w-4xl mx-auto shadow-xs">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm">
          <Smartphone className="w-4 h-4 text-[#0A0A0A]" />
        </div>
        <div>
          <h3 className="text-base font-serif font-semibold text-[#0A0A0A]">Mobile Architecture Calculator</h3>
          <p className="text-xs font-mono text-[#71717A]">Configure mobile features and delivery timeline</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
            Target Platforms
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setPlatform('both')}
              className={`py-2 px-3 text-xs font-mono rounded-sm border ${
                platform === 'both' ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] font-medium' : 'bg-white text-[#52525B] border-[#E5E7EB] hover:border-[#0A0A0A]'
              }`}
            >
              iOS & Android
            </button>
            <button
              type="button"
              onClick={() => setPlatform('ios')}
              className={`py-2 px-3 text-xs font-mono rounded-sm border ${
                platform === 'ios' ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] font-medium' : 'bg-white text-[#52525B] border-[#E5E7EB] hover:border-[#0A0A0A]'
              }`}
            >
              iOS Only
            </button>
            <button
              type="button"
              onClick={() => setPlatform('android')}
              className={`py-2 px-3 text-xs font-mono rounded-sm border ${
                platform === 'android' ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] font-medium' : 'bg-white text-[#52525B] border-[#E5E7EB] hover:border-[#0A0A0A]'
              }`}
            >
              Android Only
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2">
            Authentication & Security
          </label>
          <select
            value={authType}
            onChange={(e) => setAuthType(e.target.value)}
            className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-sm text-xs text-[#0A0A0A] font-mono focus:outline-none focus:border-[#0A0A0A]"
          >
            <option value="biometric">Biometrics (FaceID / TouchID) + OAuth 2.0</option>
            <option value="sso">Enterprise SSO / SAML</option>
            <option value="standard">Standard Email & OTP</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <label
          onClick={() => setOfflineSupport(!offlineSupport)}
          className={`p-3.5 border rounded-sm cursor-pointer flex items-center justify-between ${
            offlineSupport ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]' : 'bg-white border-[#E5E7EB] text-[#52525B] hover:border-[#0A0A0A]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <WifiOff className="w-4 h-4" />
            <span className="text-xs font-sans">Offline Data Sync Engine</span>
          </div>
          {offlineSupport && <Check className="w-4 h-4 text-white" />}
        </label>

        <label
          onClick={() => setRealtimePush(!realtimePush)}
          className={`p-3.5 border rounded-sm cursor-pointer flex items-center justify-between ${
            realtimePush ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]' : 'bg-white border-[#E5E7EB] text-[#52525B] hover:border-[#0A0A0A]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Cpu className="w-4 h-4" />
            <span className="text-xs font-sans">Real-Time WebSockets & Push</span>
          </div>
          {realtimePush && <Check className="w-4 h-4 text-white" />}
        </label>
      </div>

      <div className="p-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">
            Estimated Production Runway
          </span>
          <span className="text-xl font-serif text-[#0A0A0A] font-semibold">{Math.ceil(baseWeeks)} Weeks</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider block">
            Quality Guarantee
          </span>
          <span className="text-xs font-mono text-[#10B981] font-semibold">100% Submission Pass</span>
        </div>
      </div>
    </div>
  );
}
