import { motion } from 'motion/react';
import BookingForm from './BookingForm';

// Cinematic Image Import
import bookingBgImg from '../assets/images/booking-bg.jpg';

interface PageBookingsProps {
  selectedService: string;
}

export default function PageBookings({ selectedService }: PageBookingsProps) {
  return (
    <div className="space-y-20 md:space-y-32 w-full pt-2 md:pt-12">
      
      {/* HEADER SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          <div className="inline-block border border-zinc-800 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-widest text-zinc-400 uppercase">
            Schedule Your Session
          </div>
          
          <div className="space-y-5 md:space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.05]">
              Ready to start <br className="hidden sm:block" />
              <span className="text-zinc-500">training?</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-md">
              Secure your spot with Coach Baraka. Fill out the intake form below to receive a customized training proposal and coordinate your first session.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-[2rem] overflow-hidden bg-zinc-900 shadow-2xl shadow-black/50"
        >
          <img
            src={bookingBgImg}
            alt="Close up of boxing gloves preparing for training"
            loading="eager"
            className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* BOOKING INTAKE WIDGET */}
      <section>
        <BookingForm selectedService={selectedService} />
      </section>

      {/* VISUAL BOOKING FLOW GUIDE */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-[2rem] p-8 md:p-12 lg:p-16 space-y-10 md:space-y-12 shadow-2xl">
        <div className="text-left md:text-center max-w-2xl mx-auto space-y-2 md:space-y-4">
          <h3 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
            How It Works
          </h3>
          <p className="text-sm md:text-base text-zinc-400 font-light">A simple, three-step onboarding process.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-4 md:space-y-5">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white text-black rounded-2xl flex items-center justify-center text-lg md:text-xl font-bold shadow-lg">
              1
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2 md:mb-3">Profile Submission</h4>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                Provide your contact details, fitness background, and primary goals. Our system will immediately generate a technical recommendation tailored to you.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-4 md:space-y-5">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white text-black rounded-2xl flex items-center justify-center text-lg md:text-xl font-bold shadow-lg">
              2
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2 md:mb-3">Direct Coordination</h4>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                Coach Baraka will review your intake and reach out within 2 hours via WhatsApp or a direct phone call to confirm your exact calendar slot.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-4 md:space-y-5">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white text-black rounded-2xl flex items-center justify-center text-lg md:text-xl font-bold shadow-lg">
              3
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2 md:mb-3">Baseline Drills</h4>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                Meet at Pound for Pound Boxing Gym on Bree Street, wrap your hands, and step into the ring to begin your customized training program.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}