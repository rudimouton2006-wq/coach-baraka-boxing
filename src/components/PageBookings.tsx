import { motion } from 'motion/react';
import { CalendarRange, Sparkles } from 'lucide-react';
import BookingForm from './BookingForm';

interface PageBookingsProps {
  selectedService: string;
}

export default function PageBookings({ selectedService }: PageBookingsProps) {
  return (
    <div className="space-y-12 py-6 md:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-yellow-400">
          <CalendarRange className="w-4 h-4" />
          <span className="font-mono tracking-widest text-[10px] uppercase font-bold text-zinc-300">SECURE BASICS SYNC</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase">
          READY TO START TRAINING?
        </h2>
        <p className="text-xs md:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
          Schedule your first session or ask about specialized packages. Complete our dynamic tactical profile selection below to claim your alignment slot.
        </p>
      </div>

      {/* Booking Intake System Widget */}
      <div className="pt-4">
        <BookingForm selectedService={selectedService} />
      </div>

      {/* Visual Booking Steps Flow Guide */}
      <div className="border border-zinc-900 bg-zinc-950/20 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wide">
            ONBOARDING CYCLE STEPS
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-zinc-400">
          <div className="space-y-1">
            <span className="font-mono text-yellow-500 font-bold">STAGE 01. PROFILE SUBMISSION</span>
            <p className="leading-relaxed">
              Fill in your phone number, athletic goals, and previous boxing background. Your recommendation changes in real-time.
            </p>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-zinc-900 pt-4 md:pt-0 md:pl-6">
            <span className="font-mono text-yellow-500 font-bold">STAGE 02. DIRECT COORDINATION</span>
            <p className="leading-relaxed">
              Coach Baraka receives your profile and contacts you within 2 hours on WhatsApp or Phone to secure your exact calendar time.
            </p>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-l border-zinc-900 pt-4 md:pt-0 md:pl-6">
            <span className="font-mono text-yellow-500 font-bold">STAGE 03. BASELINE DRILLS</span>
            <p className="leading-relaxed">
              Meet Coach Baraka at the Bree Street P4P gym base. Put on wraps and start calibration loops safely!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
