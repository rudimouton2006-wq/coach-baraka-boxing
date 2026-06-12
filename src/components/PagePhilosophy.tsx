import { motion } from 'motion/react';
import { Target, Brain, Clock, ShieldCheck } from 'lucide-react';
import SessionSimulator from './SessionSimulator';
import page2Image from '../assets/images/page2.jpg';

const PHILOSOPHY_PILLARS = [
  {
    id: "01",
    title: "Tactical Intelligence",
    icon: <Target className="w-5 h-5 text-black" />,
    desc: "We build smart, complete fighters. Beyond simply throwing punches, you will learn distance control, pacing, and how to remain calm and analytical under pressure."
  },
  {
    id: "02",
    title: "Structured Learning",
    icon: <Brain className="w-5 h-5 text-black" />,
    desc: "Complex movements are stripped down into clear, repeatable mechanics. This progressive method safely builds clean, automatic muscle memory."
  },
  {
    id: "03",
    title: "Systematic Sessions",
    icon: <Clock className="w-5 h-5 text-black" />,
    desc: "Every class follows a strict, proven rhythm: mobility warm-ups, technical footwork drills, explosive pad work, controlled application, and recovery."
  },
  {
    id: "04",
    title: "Mental Discipline",
    icon: <ShieldCheck className="w-5 h-5 text-black" />,
    desc: "Boxing is more than a physical workout. We instill unwavering personal discipline, mental toughness, and focus that carries directly into your daily life."
  }
];

export default function PagePhilosophy() {
  return (
    <div className="space-y-24 md:space-y-32 pt-4 md:pt-12">
      
      {/* PAGE HEADER */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block border border-zinc-800 rounded-full px-4 py-1.5 text-xs font-medium tracking-widest text-zinc-400 uppercase">
            Our Methodology
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
              Built on discipline. <br />
              <span className="text-zinc-500">Driven by technique.</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-lg font-light leading-relaxed">
              We believe boxing is a calculated science. By focusing on weight transfer, balance, and strategic movement, we ensure every client gains maximum functional output from every single round.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-2">
            <div className="space-y-1">
              <span className="text-white font-medium block">Stance</span>
              <span className="text-sm text-zinc-500 block">Perfect balance</span>
            </div>
            <div className="w-px h-10 bg-zinc-800 hidden sm:block"></div>
            <div className="space-y-1">
              <span className="text-white font-medium block">Mechanics</span>
              <span className="text-sm text-zinc-500 block">Clean execution</span>
            </div>
            <div className="w-px h-10 bg-zinc-800 hidden sm:block"></div>
            <div className="space-y-1">
              <span className="text-white font-medium block">IQ</span>
              <span className="text-sm text-zinc-500 block">Smart strategy</span>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden bg-zinc-900">
          <img
            src={page2Image}
            alt="Muhammad Ali vs Sonny Liston"
            className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </section>

      {/* PILLARS GRID */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">The Core Pillars</h2>
          <p className="text-zinc-400 font-light">The foundational principles that guide every session with Coach Baraka.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PHILOSOPHY_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-[#0a0a0a] border border-zinc-900 rounded-3xl hover:border-zinc-700 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0">
                  {pillar.icon}
                </div>
                <span className="text-3xl font-display font-bold text-zinc-800 select-none">
                  {pillar.id}
                </span>
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUOTE BLOCK */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
        <span className="block text-6xl font-serif text-zinc-800 leading-none mb-6">"</span>
        <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed mb-8">
          The greatest mistake in amateur boxing is trying to punch harder before learning how to shift your weight properly. Control your footing, and the power takes care of itself.
        </blockquote>
        <cite className="text-sm font-medium tracking-widest text-zinc-500 uppercase not-italic">
          — Coach Baraka Kalekuzi
        </cite>
      </section>

      {/* SESSION SIMULATOR WRAPPER */}
      <section className="pt-12 border-t border-zinc-900 space-y-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">Anatomy of a Session</h2>
          <p className="text-zinc-400 font-light">
            Every 60-minute workout utilizes a strict, highly effective workflow. Explore the timeline below to see exactly what to expect when you step into the gym.
          </p>
        </div>
        
        <SessionSimulator />
      </section>

    </div>
  );
}