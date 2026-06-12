import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Target, Sparkles, Trophy, ChevronRight } from 'lucide-react';

interface SessionStep {
  id: number;
  phase: string;
  duration: string;
  focus: string;
  description: string;
  drills: string[];
}

const SESSION_STEPS: SessionStep[] = [
  {
    id: 1,
    phase: "01. WARM-UP & MOBILITY",
    duration: "10 Mins",
    focus: "Raise heart rate, prime joints, shadow boxing rhythms",
    description: "Prepare the body and mind for intense impact. Movement patterns mimicking real fight motion.",
    drills: [
      "Jump Rope variations (Double-unders, speed steps)",
      "Dynamic shoulder and hip band activation",
      "Stance-specific shadow boxing with accent combinations"
    ]
  },
  {
    id: 2,
    phase: "02. SKILLS & FOOTWORK BUILD",
    duration: "15 Mins",
    focus: "Weight transfer, defensive pivots, punch mechanics",
    description: "Isolate and dissect specific boxing techniques. Coach Baraka breaks down movement to micro-skills.",
    drills: [
      "Pivots & side-step angles on the agility ladder",
      "Head movement mechanics (Slipping, rolling under the hook)",
      "Feint setups & counter-punching triggers"
    ]
  },
  {
    id: 3,
    phase: "03. MITTWORK & BAG ACTIONS",
    duration: "20 Mins",
    focus: "Fight speed simulation, punch power precision, conditioning",
    description: "The core of high-IQ coaching. High-contact hands-on drills reacting directly to the trainer's cues.",
    drills: [
      "High-speed 1-on-1 mittwork rounds mirroring real sparring tactical situations",
      "Heavy bag positional intervals (Inside fighting, long-range jabs)",
      "Double-end bag for reflex and rhythm control"
    ]
  },
  {
    id: 4,
    phase: "04. TACTICAL SPARRING (OR SPECIALTY DRILLS)",
    duration: "10 Mins",
    focus: "Controlled application, high-stress adaptability, defense focus",
    description: "Putting concepts into action. Controlled parameter sparring or heavy defensive shielding workouts.",
    drills: [
      "Jab-only tactical sparring with technical coach corrections",
      "Corner entrapment escapes & guard testing",
      "Scenario drills (Fighter A works leads, Fighter B counters)"
    ]
  },
  {
    id: 5,
    phase: "05. STRENGTH METCON & COOL DOWN",
    duration: "5 Mins",
    focus: "Core rigidity, shoulder endurance, recovery breathing",
    description: "Emptying the tank then cooling down the nervous system to kickstart optimal rebuilding.",
    drills: [
      "Medicine ball rotational slams & plank holds",
      "Lactic acid flush stretching",
      "Nose-only breathing and cardiac down-regulation"
    ]
  }
];

export default function SessionSimulator() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div id="session-simulator" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
      {/* Step Menu */}
      <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
        {SESSION_STEPS.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                isActive
                  ? 'bg-zinc-900 border-yellow-400/80 text-white yellow-glow'
                  : 'bg-zinc-950/40 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between pointer-events-none">
                <div className="flex flex-col">
                  <span className={`text-[10px] font-mono tracking-widest font-bold ${isActive ? 'text-yellow-400' : 'text-zinc-600'}`}>
                    PHASE {step.id}
                  </span>
                  <span className="font-display font-bold text-sm tracking-wide mt-1">
                    {step.phase.replace(/^\d+\.\s*/, '')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {step.duration}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-90 text-yellow-400' : 'text-zinc-600 group-hover:text-zinc-400'}`} />
                </div>
              </div>

              {/* Progress bar accent */}
              {isActive && (
                <motion.div
                  layoutId="indicator-bar"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Step Visual Details Panel */}
      <div className="lg:col-span-7 bg-zinc-900/45 border border-zinc-800/70 p-6 md:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden">
        {/* Abstract design elements to look technical */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-400/3 rounded-full blur-3xl pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col h-full gap-6 justify-between"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-yellow-400/10 rounded-lg text-yellow-400 border border-yellow-400/20">
                  {activeStep === 1 && <Flame className="w-5 h-5 animate-pulse" />}
                  {activeStep === 2 && <Target className="w-5 h-5" />}
                  {activeStep === 3 && <Sparkles className="w-5 h-5 animate-spin-slow" />}
                  {activeStep === 4 && <Trophy className="w-5 h-5" />}
                  {activeStep === 5 && <Flame className="w-5 h-5" />}
                </span>
                <div>
                  <h3 className="text-xl font-display font-extrabold text-white tracking-wide">
                    {SESSION_STEPS[activeStep - 1].phase}
                  </h3>
                  <div className="text-xs text-yellow-400 font-mono tracking-widest uppercase mt-0.5">
                    EST. DURATION: {SESSION_STEPS[activeStep - 1].duration}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-l-2 border-yellow-400/30 pl-4">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">Tactical Focus</h4>
                <p className="text-sm text-zinc-200 mt-1 font-sans leading-relaxed">
                  {SESSION_STEPS[activeStep - 1].focus}
                </p>
              </div>

              <div className="mt-5">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">What to expect</h4>
                <p className="text-sm text-zinc-400 mt-1 font-sans leading-relaxed">
                  {SESSION_STEPS[activeStep - 1].description}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-800/80 pt-6">
              <h4 className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-bold flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full inline-block" />
                COACH BARAKA DRILL PATH
              </h4>
              <ul className="flex flex-col gap-2">
                {SESSION_STEPS[activeStep - 1].drills.map((drill, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-zinc-300">
                    <span className="text-yellow-400 font-mono select-none mt-0.5">↳</span>
                    <span>{drill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
