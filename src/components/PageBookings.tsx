import { motion } from 'motion/react';
import BookingForm from './BookingForm';

// Cinematic Image Import
import bookingBgImg from '../assets/images/booking-bg.jpg';

interface PageBookingsProps {
  selectedService: string;
}

export default function PageBookings({ selectedService }: PageBookingsProps) {
  return (
    <div className="space-y-16 md:space-y-24 pt-4 md:pt-12">
      
      {/* HEADER SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block border border-zinc-800 rounded-full px-4 py-1.5 text-xs font-medium tracking-widest text-zinc-400 uppercase">
            Schedule Your Session
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Ready to start <br />
            <span className="text-zinc-500">training?</span>
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-md">
            Secure your spot with Coach Baraka. Fill out the intake form below to receive a customized training proposal and coordinate your first session.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative aspect-video lg:aspect-[16/10] rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl shadow-black/50"
        >
          <img
            src={bookingBgImg}
            alt="Close up of boxing gloves preparing for training"
            className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* BOOKING INTAKE WIDGET */}
      <section>
        <BookingForm selectedService={selectedService} />
      </section>

      {/* VISUAL BOOKING FLOW GUIDE */}
      <section className="bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-8 md:p-16 space-y-12">
        <div className="text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
            How It Works
          </h3>
          <p className="text-zinc-400 font-light mt-2">A simple, three-step onboarding process.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-6">
              1
            </div>
            <h4 className="text-lg font-bold text-white">Profile Submission</h4>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Provide your contact details, fitness background, and primary goals. Our system will immediately generate a technical recommendation tailored to you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-6">
              2
            </div>
            <h4 className="text-lg font-bold text-white">Direct Coordination</h4>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Coach Baraka will review your intake and reach out within 2 hours via WhatsApp or a direct phone call to confirm your exact calendar slot.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-6">
              3
            </div>
            <h4 className="text-lg font-bold text-white">Baseline Drills</h4>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Meet at Pound for Pound Boxing Gym on Bree Street, wrap your hands, and step into the ring to begin your training program.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
}