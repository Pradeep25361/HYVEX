import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';

export default function BookAppointment() {
  const serviceList = Object.values(SERVICES_DATA);
  const [selectedService, setSelectedService] = useState<string>('digital-marketing');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [attendeeType, setAttendeeType] = useState<'strategy' | 'founder'>('strategy');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '$5,000 - $15,000',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const availableTimes = [
    '09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !selectedDate) {
      alert('Please fill in your name, email, and choose a date.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-white text-[#0A0A0A] min-h-screen">
      {/* Header */}
      <section className="py-12 border-b border-[#E5E7EB] bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E7EB] rounded-sm text-xs font-mono uppercase tracking-widest text-[#71717A] mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>CONSULTATION BOOKING</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#0A0A0A] tracking-tight mb-3">
            Schedule a Strategy Call
          </h1>

          <p className="text-sm sm:text-base text-[#52525B] font-sans">
            Consult with our engineering and growth specialists.
          </p>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-10 bg-white border border-[#E5E7EB] rounded-sm text-center max-w-xl mx-auto shadow-xs"
            >
              <div className="w-12 h-12 bg-[#FAFAFA] text-[#0A0A0A] border border-[#E5E7EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0A0A0A] mb-2 font-normal">Appointment Confirmed</h2>
              <p className="text-sm text-[#52525B] font-sans mb-6">
                Thank you, <strong className="text-[#0A0A0A]">{formData.name}</strong>. Your consultation has been scheduled for{' '}
                <span className="font-mono text-[#0A0A0A]">{selectedDate}</span> at{' '}
                <span className="font-mono text-[#0A0A0A]">{selectedTime}</span>.
              </p>

              <div className="p-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm text-left mb-6 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-[#71717A]">
                  <span>SESSION:</span>
                  <span className="text-[#0A0A0A]">{attendeeType === 'founder' ? 'Founder Consultation (Hari Krishna)' : 'Strategy & Engineering'}</span>
                </div>
                <div className="flex justify-between text-[#71717A]">
                  <span>SCOPE:</span>
                  <span className="text-[#0A0A0A] uppercase">{selectedService}</span>
                </div>
                <div className="flex justify-between text-[#71717A]">
                  <span>CONFIRMATION EMAIL:</span>
                  <span className="text-[#0A0A0A]">{formData.email}</span>
                </div>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="px-5 py-2.5 bg-[#0A0A0A] text-white text-xs font-mono uppercase tracking-wider font-medium hover:bg-[#27272A] rounded-sm transition-all"
              >
                Schedule Another
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Form */}
              <div className="lg:col-span-8">
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 border border-[#E5E7EB] rounded-sm shadow-xs">
                  {/* Step 1: Consultation Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-2.5">
                      1. CONSULTATION TYPE
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setAttendeeType('strategy')}
                        className={`p-3.5 border rounded-sm text-left transition-all ${
                          attendeeType === 'strategy'
                            ? 'bg-[#0A0A0A] border-[#0A0A0A] text-white'
                            : 'bg-white border-[#E5E7EB] text-[#52525B] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                        }`}
                      >
                        <div className="text-sm font-semibold mb-0.5">Strategy & Tech Team</div>
                        <div className={`text-xs ${attendeeType === 'strategy' ? 'text-[#D4D4D8]' : 'text-[#71717A]'}`}>Technical and growth review</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAttendeeType('founder')}
                        className={`p-3.5 border rounded-sm text-left transition-all ${
                          attendeeType === 'founder'
                            ? 'bg-[#0A0A0A] border-[#0A0A0A] text-white'
                            : 'bg-white border-[#E5E7EB] text-[#52525B] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                        }`}
                      >
                        <div className="text-sm font-semibold mb-0.5 flex items-center justify-between">
                          <span>Hari Krishna (Founder)</span>
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${attendeeType === 'founder' ? 'bg-white text-black' : 'bg-[#FAFAFA] border border-[#E5E7EB] text-[#0A0A0A]'}`}>DIRECT</span>
                        </div>
                        <div className={`text-xs ${attendeeType === 'founder' ? 'text-[#D4D4D8]' : 'text-[#71717A]'}`}>Direct founder consultation</div>
                      </button>
                    </div>
                  </div>

                  {/* Step 2: Topic */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-2.5">
                      2. SERVICE AREA
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {serviceList.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelectedService(s.id)}
                          className={`p-2.5 border rounded-sm text-center text-xs font-mono transition-all ${
                            selectedService === s.id
                              ? 'bg-[#0A0A0A] text-white font-semibold border-[#0A0A0A]'
                              : 'bg-white border-[#E5E7EB] text-[#52525B] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                          }`}
                        >
                          {s.title.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Date & Time */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-2.5">
                      3. PREFERRED SCHEDULE
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <span className="text-xs text-[#71717A] block mb-1.5 font-mono">Date</span>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-3 py-2 bg-white border border-[#E5E7EB] text-[#0A0A0A] text-xs font-mono rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                          required
                        />
                      </div>

                      <div>
                        <span className="text-xs text-[#71717A] block mb-1.5 font-mono">Time Slot</span>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-[#E5E7EB] text-[#0A0A0A] text-xs font-mono rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                        >
                          {availableTimes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Contact Details */}
                  <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#71717A] mb-1.5">
                      4. YOUR DETAILS
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2.5 bg-white border border-[#E5E7EB] text-[#0A0A0A] placeholder-[#A1A1AA] text-xs rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Work Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2.5 bg-white border border-[#E5E7EB] text-[#0A0A0A] placeholder-[#A1A1AA] text-xs rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone / WhatsApp"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2.5 bg-white border border-[#E5E7EB] text-[#0A0A0A] placeholder-[#A1A1AA] text-xs rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Company / Website"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3 py-2.5 bg-white border border-[#E5E7EB] text-[#0A0A0A] placeholder-[#A1A1AA] text-xs rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        placeholder="Brief project details or requirements..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[#E5E7EB] text-[#0A0A0A] placeholder-[#A1A1AA] text-xs rounded-sm focus:outline-none focus:border-[#0A0A0A]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-wider font-medium rounded-sm hover:bg-[#27272A] transition-all shadow-xs flex items-center justify-center gap-2"
                  >
                    <span>Confirm Booking</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Summary */}
              <div className="lg:col-span-4">
                <div className="p-5 bg-[#FAFAFA] border border-[#E5E7EB] rounded-sm sticky top-28 space-y-4 shadow-xs">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#71717A] border-b border-[#E5E7EB] pb-2.5">
                    SESSION SUMMARY
                  </div>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex justify-between border-b border-[#E5E7EB] pb-2">
                      <span className="text-[#71717A]">TYPE:</span>
                      <span className="text-[#0A0A0A]">{attendeeType === 'founder' ? 'Hari Krishna (Founder)' : 'Strategy Team'}</span>
                    </div>

                    <div className="flex justify-between border-b border-[#E5E7EB] pb-2">
                      <span className="text-[#71717A]">SCOPE:</span>
                      <span className="text-[#0A0A0A] uppercase">{selectedService}</span>
                    </div>

                    <div className="flex justify-between border-b border-[#E5E7EB] pb-2">
                      <span className="text-[#71717A]">DATE:</span>
                      <span className="text-[#0A0A0A]">{selectedDate || 'Not selected'}</span>
                    </div>

                    <div className="flex justify-between border-b border-[#E5E7EB] pb-2">
                      <span className="text-[#71717A]">TIME:</span>
                      <span className="text-[#0A0A0A]">{selectedTime}</span>
                    </div>

                    <div className="flex justify-between border-b border-[#E5E7EB] pb-2">
                      <span className="text-[#71717A]">DURATION:</span>
                      <span className="text-[#0A0A0A]">45 Minutes</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-[#E5E7EB] rounded-sm flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#71717A] shrink-0 mt-0.5" />
                    <p className="text-[11px] text-[#52525B] leading-relaxed">
                      All strategy consultations are covered by mutual confidentiality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
