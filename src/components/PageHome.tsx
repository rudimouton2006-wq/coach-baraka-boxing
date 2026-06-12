import { motion } from 'motion/react';
import { MoveRight, Star, Award, Shield, Target, Flame } from 'lucide-react';

interface PageHomeProps {
  onNavigate: (view: string) => void;
  onSelectService: (service: string) => void;
}

export default function PageHome({ onNavigate, onSelectService }: PageHomeProps) {
  return (
    <div className="space-y-16 py-6 md:py-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Info column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="font-mono tracking-widest text-[10px] uppercase font-semibold">CAPE TOWN'S PREMIER FIGHT DEVELOPER</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter leading-[0.9] text-white uppercase italic">
              BUILDING FIGHTERS.<br />
              <span className="text-yellow-400 text-stroke">BUILDING CHAMPIONS.</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 max-w-xl font-sans leading-relaxed">
              Train hard. Stay disciplined. Be unstoppable with Coach Baraka Kalekuzi. Certified technical refinement, strategic sparring IQ, and high-intensity physical conditioning blocks tailored to build champions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onNavigate('bookings')}
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-mono font-black text-sm tracking-widest uppercase rounded-xl transition-all duration-300 transform active:scale-95 text-center cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>BOOK YOUR SESSION</span>
              <MoveRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
            
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-white font-mono font-bold text-sm tracking-widest uppercase rounded-xl transition-colors duration-300 text-center cursor-pointer"
            >
              EXPLORE PLANS
            </button>
          </div>

          {/* Core Technical Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-900 max-w-lg">
            <div>
              <span className="font-display font-black text-2xl md:text-3xl text-white block">8+ Years</span>
              <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block mt-1">PRO EXPERIENCE</span>
            </div>
            <div>
              <span className="font-display font-black text-2xl md:text-3xl text-yellow-400 block">100%</span>
              <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block mt-1">DISCIPLINE TARGET</span>
            </div>
            <div>
              <span className="font-display font-black text-2xl md:text-3xl text-white block">P4P</span>
              <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block mt-1">CBD HOME BASE</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute -inset-1.5 bg-yellow-400/10 rounded-3xl blur-2xl opacity-55 pointer-events-none" />
          
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950 aspect-[4/5] md:aspect-square lg:aspect-[4/5] yellow-glow group">
            <img
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=1200"
              alt="Coach Baraka Kalekuzi training close focus mitt work with fighter"
              className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Real-time Technical Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/95 border border-zinc-800 backdrop-blur-md p-4 rounded-2xl z-20 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-yellow-500 font-bold tracking-widest uppercase">DRILL LAB</span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block animate-ping" />
              </div>
              <h4 className="font-display font-extrabold text-xs text-zinc-100 uppercase">
                POUND FOR POUND LABS
              </h4>
              <p className="text-[11px] text-zinc-400 italic">
                "Fight IQ isn't given. It is forged through high precision repetition."
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Hook Panel */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-yellow-500 uppercase tracking-widest font-bold block">
              OUR MISSION & METHODOLOGY
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-black text-white tracking-tight uppercase">
              HIGH FIGHT IQ IS THE ULTIMATE EQUALIZER
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Coach Baraka Kalekuzi delivers structured, high-energy sessions designed to strip away erratic mechanics. We replace fear with calculated footwork pivots, tight defensive covers, and explosive combinations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Shield className="w-4 h-4 text-yellow-400" /> Symmetrical Guards
              </span>
              <span className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Target className="w-4 h-4 text-yellow-400" /> Heavy Bag Calibration
              </span>
              <span className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Flame className="w-4 h-4 text-yellow-400" /> Extreme Metabolic Drills
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-stretch lg:items-end">
            <button
              onClick={() => onNavigate('philosophy')}
              className="px-6 py-4 bg-zinc-900 border border-zinc-800 hover:border-yellow-400 text-yellow-400 hover:text-black hover:bg-yellow-400 text-xs font-mono font-bold tracking-widest uppercase rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <span>EXPLORE TEACHING PILLARS</span>
              <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs font-mono text-yellow-500 uppercase tracking-widest font-bold">SAMPLE PATHS</span>
            <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase tracking-tight mt-1">
              POPULAR TRAINING CLUBS
            </h3>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-mono text-zinc-400 hover:text-yellow-400 hover:underline transition-all uppercase font-bold tracking-wider"
          >
            VIEW ALL PLANS →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-950/60 border border-zinc-900 p-6 rounded-2xl space-y-4 hover:border-zinc-800 transition-all duration-300">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-yellow-500 font-bold bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                RECOMMENDED
              </span>
              <span className="text-xs font-mono text-zinc-500 font-bold">60 Mins</span>
            </div>
            <h4 className="text-lg font-display font-extrabold text-white">AMATEUR & BEGINNERS BOXING</h4>
            <p className="text-xs text-zinc-400">
              For absolute beginners up to active hobby sparers. Focus on stance alignment, straight hand punches, defensive recovery, and aerobic intervals.
            </p>
            <button
              onClick={() => onSelectService('Amateur Boxing')}
              className="text-xs font-mono text-yellow-400 font-bold hover:underline flex items-center gap-1"
            >
              BOOK THIS PLAN →
            </button>
          </div>

          <div className="bg-zinc-950/60 border border-zinc-900 p-6 rounded-2xl space-y-4 hover:border-zinc-800 transition-all duration-300">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono text-red-500 font-bold bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                ACTIVE COMPETITORS
              </span>
              <span className="text-xs font-mono text-zinc-500 font-bold">75-90 Mins</span>
            </div>
            <h4 className="text-lg font-display font-extrabold text-white">PRO BOXING & FIGHT PREP</h4>
            <p className="text-xs text-zinc-400">
              Hard-hitting, structured technical session mimicking physical sparring situations. Heavy target mitt drills, high stress escapes, and ring posture.
            </p>
            <button
              onClick={() => onSelectService('Pro Boxing')}
              className="text-xs font-mono text-yellow-400 font-bold hover:underline flex items-center gap-1"
            >
              BOOK THIS PLAN →
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Panel */}
      <section className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex gap-1 text-yellow-400 text-xs">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-transparent" />
          ))}
        </div>
        <q className="text-sm md:text-base italic text-zinc-300 block leading-relaxed">
          "Coach Baraka changed my whole perspective on Fight IQ. His padwork is technical mathematics, focusing enormously on returned guards, step angles, and speed. Highly recommended in South Africa!"
        </q>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 rounded-full flex items-center justify-center font-display font-extrabold text-yellow-400 text-sm">
            LN
          </div>
          <div>
            <h5 className="text-sm font-display font-extrabold text-white">Lwandle Ndlovu</h5>
            <span className="text-[10px] font-mono text-zinc-500 uppercase">Cape Town City Bowl Boxer</span>
          </div>
        </div>
      </section>
    </div>
  );
}
