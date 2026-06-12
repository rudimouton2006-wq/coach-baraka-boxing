import { motion } from 'motion/react';
import { Target, Lightbulb, Zap, ShieldAlert, Award } from 'lucide-react';
import SessionSimulator from './SessionSimulator';

const PHILOSOPHY_PILLARS = [
  {
    id: "01",
    title: "FOCUS & TACTICAL IQ",
    subtitle: "Real ring intelligence",
    icon: <Target className="w-6 h-6 text-yellow-400" />,
    desc: "We build smart, technical, complete fighters. Anyone can throw wild punches; we teach you how to set traps, control distance, manage pacing, and remain entirely ice-cold under severe physical pressure."
  },
  {
    id: "02",
    title: "TEACHING METHOD",
    subtitle: "Hands-on simple instruction",
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    desc: "Coach Baraka utilizes a highly constructive, progressive learning system. We strip away complex coordination loops into clear, repeatable mechanics that build clean and automatic muscle memory."
  },
  {
    id: "03",
    title: "SESSION STRUCTURE",
    subtitle: "60M Championship calibration",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    desc: "A strictly designed rhythm: detailed physical activation warm-ups, technical footwork studies, explosive focus mitt intervals, sparring stress simulations, and core/breathing flushes."
  },
  {
    id: "04",
    title: "MINDSET COACHING",
    subtitle: "Disciplined drive off the canvas",
    icon: <ShieldAlert className="w-6 h-6 text-yellow-400" />,
    desc: "More than boxing. We instill unwavering personal discipline, mental toughness, and tactical decision-making structures that carry directly from the canvas into daily commercial and life situations."
  }
];

export default function PagePhilosophy() {
  return (
    <div className="space-y-16 py-6 md:py-12">
      {/* Intro Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="font-mono tracking-widest text-[10px] uppercase font-bold">DISCIPLINE IS NOT OPTIONAL</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-none">
            TECHNICAL FUNDAMENTALS WITH FIGHT IQ
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans max-w-2xl">
            We believe boxing is a calculated science, not random brawling. By focusing on weight transfer micro-signals, tactical stance symmetry, and high-frequency target mitts, we ensure Coach Baraka's clients gain maximum functional output from every round.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-zinc-500">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" /> STANCE CALIBRATION</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" /> WEIGHT TRANSFER SIGNALING</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" /> HIGH-FREQUENCY MITT LABS</span>
          </div>
        </div>

        {/* Tactical imagery card */}
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute -inset-1.5 bg-yellow-400/5 rounded-2xl blur-xl opacity-60 pointer-events-none" />
          <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 aspect-[16/9] md:aspect-[3/1] lg:aspect-[16/10] yellow-glow group">
            <img
              src="/src/assets/images/regenerated_image_1780557133512.jpg"
              alt="Hands wrap preparation for intense focus training session of Coach Baraka Kalekuzi"
              className="w-full h-full object-cover grayscale opacity-75 group-hover:scale-105 transition-transform duration-750"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Philosophy Pillars Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {PHILOSOPHY_PILLARS.map((pillar) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-950/80 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-4 hover:border-zinc-800 hover:scale-[1.01] transition-all duration-300 yellow-glow"
          >
            <div className="flex justify-between items-start">
              <span className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl">
                {pillar.icon}
              </span>
              <span className="text-4xl font-display font-black text-stroke text-zinc-800">
                {pillar.id}
              </span>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-display font-black text-white tracking-wider">
                {pillar.title}
              </h3>
              <p className="text-xs font-mono text-yellow-400 uppercase tracking-widest font-bold">
                {pillar.subtitle}
              </p>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quote Banner */}
      <div className="border border-zinc-900 bg-zinc-950/40 p-6 md:p-8 rounded-2xl flex items-center gap-4">
        <span className="font-mono text-3xl md:text-5xl text-yellow-400 font-bold select-none">"</span>
        <blockquote className="text-sm md:text-base text-zinc-300 italic">
          "The greatest mistake in amateur boxing is trying to punch harder before learning how to shift your feet weight properly. Control the footing, and the power takes care of itself."
          <span className="block font-mono text-xs text-yellow-500 font-bold mt-2 uppercase tracking-wider">— COACH BARAKA KALEKUZI</span>
        </blockquote>
      </div>

      {/* Session structure Deep-Dive tool block */}
      <div className="space-y-6 pt-6 border-t border-zinc-900">
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">INTERACTIVE STRUCTURE DEEPDIVE</span>
          <h3 className="text-xl md:text-2xl font-display font-extrabold text-zinc-200">
            THE SYSTEMATIC 60-MINUTE DRILL TIMELINE
          </h3>
          <p className="text-xs md:text-sm text-zinc-400 mt-1 max-w-xl">
            Every workout block under Coach Baraka utilizes this strict, highly kinetic workflow. Click through the phases to inspect actual drill mechanics.
          </p>
        </div>
        <SessionSimulator />
      </div>
    </div>
  );
}
