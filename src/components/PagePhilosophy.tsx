import { motion } from 'motion/react';
import { Target, Brain, Clock, ShieldCheck } from 'lucide-react';
import SessionSimulator from './SessionSimulator';

// Cinematic Image Import
import philosophyHeroImg from '../assets/images/philosophy-hero.jpg';

const PHILOSOPHY_PILLARS = [
  {
    id: "01",
    title: "Tactical Intelligence",
    icon: <Target className="w-5 h-5 md:w-6 md:h-6 text-black" />,
    desc: "We build smart, complete fighters. Beyond simply throwing punches, you will learn distance control, pacing, and how to remain calm and analytical under pressure."
  },
  {
    id: "02",
    title: "Structured Learning",
    icon: <Brain className="w-5 h-5 md:w-6 md:h-6 text-black" />,
    desc: "Complex movements are stripped down into clear, repeatable mechanics. This progressive method safely builds clean, automatic muscle memory."
  },
  {
    id: "03",
    title: "Systematic Sessions",
    icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-black" />,
    desc: "Every class follows a strict, proven rhythm: mobility warm-ups, technical footwork drills, explosive pad work, controlled application, and recovery."
  },
  {
    id: "04",
    title: "Mental Discipline",
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-black" />,
    desc: "Boxing is more than a physical workout. We instill unwavering personal discipline, mental toughness, and focus that carries directly into your daily life."
  }
];

export default function PagePhilosophy() {
  return (
    <div className="space-y-20 md:space-y-32 w-full pt-2 md:pt-12">
      
      {/* PAGE HEADER */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          <div className="inline-block border border-zinc-800 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-widest text-zinc-400 uppercase">
            Our Methodology
          </div>
          
          <div className="space-y-5 md:space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.05]">
              Built on discipline. <br className="hidden sm:block" />
              <span className="text-zinc-500">Driven by technique.</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 max-w-lg font-light leading-relaxed">
              We believe boxing is a calculated science. By focusing on weight transfer, balance, and strategic movement, we ensure every client gains maximum functional output from every single round.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
            <div className="space-y-1.5">
              <span className="text-white font-medium block text-sm md:text-base">Stance</span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest block font-medium">Perfect balance</span>
            </div>
            <div className="w-px h-10 bg-zinc-800 hidden sm:block"></div>
            <div className="space-y-1.5">
              <span className="text-white font-medium block text-sm md:text-base">Mechanics</span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest block font-medium">Clean execution</span>
            </div>
            <div className="w-px h-10 bg-zinc-800 hidden sm:block"></div>
            <div className="space-y-1.5">
              <span className="text-white font-medium block text-sm md:text-base">IQ</span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest block font-medium">Smart strategy</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative w-full aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden bg-zinc-900 shadow-2xl shadow-black/50"
        >
          <img
            src={philosophyHeroImg}
            alt="Coach Baraka perfect boxing stance"
            loading="eager"
            className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* PILLARS GRID */}
      <section className="space-y-8 md:space-y-12">
        <div className="text-left md:text-center max-w-2xl mx-auto space-y-2 md:space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">The Core Pillars</h2>
          <p className="text-sm md:text-base text-zinc-400 font-light">The foundational principles that guide every session with Coach Baraka.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {PHILOSOPHY_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 md:p-10 bg-zinc-950 border border-zinc-900 rounded-[2rem] hover:border-zinc-700 hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 shadow-lg transition-transform duration-300">
                  {pillar.icon}
                </div>
                <span className="text-2xl md:text-3xl font-display font-bold text-zinc-800 select-none group-hover:text-zinc-600 transition-colors">
                  {pillar.id}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 md:mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUOTE BLOCK */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-[2rem] p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <span className="block text-5xl md:text-6xl font-serif text-zinc-800 leading-none mb-4 md:mb-6 select-none">"</span>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-relaxed mb-6 md:mb-8 tracking-tight">
            The greatest mistake in amateur boxing is trying to punch harder before learning how to shift your weight properly. Control your footing, and the power takes care of itself.
          </blockquote>
          <cite className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-500 uppercase not-italic">
            — Coach Baraka Kalekuzi
          </cite>
        </div>
      </section>

      {/* SESSION SIMULATOR WRAPPER */}
      <section className="pt-10 md:pt-12 border-t border-zinc-900 space-y-6 md:space-y-10">
        <div className="text-left max-w-2xl space-y-2 md:space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">Anatomy of a Session</h2>
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Every 60-minute workout utilizes a strict, highly effective workflow. Explore the timeline below to see exactly what to expect when you step into the gym.
          </p>
        </div>
        
        <SessionSimulator />
      </section>

    </div>
  );
}