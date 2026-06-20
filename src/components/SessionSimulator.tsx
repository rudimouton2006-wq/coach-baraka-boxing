import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Crosshair, Zap, Shield, HeartPulse, ChevronRight } from 'lucide-react';

interface SessionStep {
  id: number;
  phase: string;
  duration: string;
  focus: string;
  description: string;
  drills: string[];
  icon: React.ReactNode;
}

const SESSION_STEPS: SessionStep[] = [
  {
    id: 1,
    phase: "Warm-Up & Mobility",
    duration: "10 Mins",
    focus: "Raise heart rate, prime joints, shadow boxing rhythms.",
    description: "Prepare the body and mind for intense impact. We utilize movement patterns that mimic real fight motion to safely activate your nervous system.",
    drills: [
      "Jump rope intervals (speed and rhythm)",
      "Dynamic shoulder and hip activation",
      "Stance-specific shadow boxing"
    ],
    icon: <Activity className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    id: 2,
    phase: "Technical Mechanics",
    duration: "15 Mins",
    focus: "Weight transfer, defensive pivots, punch mechanics.",
    description: "Isolate and dissect specific boxing techniques. Coach Baraka breaks down complex movements into simple, repeatable micro-skills.",
    drills: [
      "Agility ladder pivots and side-steps",
      "Head movement (slipping and rolling)",
      "Feint setups and counter-triggers"
    ],
    icon: <Crosshair className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    id: 3,
    phase: "Padwork & Precision",
    duration: "20 Mins",
    focus: "Fight speed simulation, punch power, conditioning.",
    description: "The core of our high-IQ coaching. High-contact, hands-on drills where you react directly to the trainer's visual and physical cues.",
    drills: [
      "High-speed 1-on-1 mittwork rounds",
      "Heavy bag positional intervals",
      "Double-end bag for reflex control"
    ],
    icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    id: 4,
    phase: "Controlled Application",
    duration: "10 Mins",
    focus: "High-stress adaptability, defense focus.",
    description: "Putting concepts into action. Depending on your level, this involves controlled parameter sparring or heavy defensive shielding workouts.",
    drills: [
      "Jab-only tactical sparring",
      "Corner entrapment escapes",
      "Offensive/Defensive scenario drills"
    ],
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />
  },
  {
    id: 5,
    phase: "Conditioning & Recovery",
    duration: "5 Mins",
    focus: "Core rigidity, shoulder endurance, recovery.",
    description: "Emptying the tank with metabolic conditioning, then immediately cooling down the nervous system to kickstart optimal physical rebuilding.",
    drills: [
      "Medicine ball rotational slams",
      "Lactic acid flush stretching",
      "Cardiac down-regulation breathing"
    ],
    icon: <HeartPulse className="w-5 h-5 md:w-6 md:h-6" />
  }
];

export default function SessionSimulator() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div id="session-simulator" className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start w-full">
      
      {/* Interactive Step Menu */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        {SESSION_STEPS.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-full text-left p-4 md:p-5 rounded-[2rem] transition-all duration-300 flex items-center justify-between group outline-none focus:ring-2 focus:ring-white/20 ${
                isActive
                  ? 'bg-white text-black shadow-xl scale-[1.02]'
                  : 'bg-zinc-950 text-zinc-500 border border-zinc-900 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-4 md:gap-5">
                <span className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-sm md:text-base font-bold transition-colors ${
                  isActive ? 'bg-black text-white' : 'bg-zinc-900 text-zinc-400 group-hover:bg-zinc-800'
                }`}>
                  0{step.id}
                </span>
                <span className="font-display font-bold text-base md:text-lg tracking-wide">
                  {step.phase}
                </span>
              </div>
              <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                isActive ? 'rotate-90 text-black' : 'text-zinc-700 group-hover:text-white'
              }`} />
            </button>
          );
        })}
      </div>

      {/* Details Display Panel */}
      <div className="lg:col-span-7 bg-[#0a0a0a] border border-zinc-900 rounded-[2rem] p-6 sm:p-8 md:p-12 min-h-[500px] flex flex-col justify-center shadow-2xl relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col h-full gap-8"
            >
              {/* Header Area */}
              <div className="flex items-start gap-5 border-b border-zinc-900 pb-6 md:pb-8">
                <div className="p-3 md:p-4 bg-zinc-900 text-white rounded-2xl shrink-0 shadow-lg">
                  {SESSION_STEPS[activeStep - 1].icon}
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1.5 md:mb-2">
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-500 uppercase">
                      Phase 0{activeStep}
                    </span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-500 uppercase">
                      {SESSION_STEPS[activeStep - 1].duration}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                    {SESSION_STEPS[activeStep - 1].phase}
                  </h3>
                </div>
              </div>

              {/* Content Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h4 className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2 md:mb-3">
                      Primary Objective
                    </h4>
                    <p className="text-sm md:text-base text-white font-medium leading-relaxed">
                      {SESSION_STEPS[activeStep - 1].focus}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2 md:mb-3">
                      Methodology
                    </h4>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      {SESSION_STEPS[activeStep - 1].description}
                    </p>
                  </div>
                </div>

                {/* Drills List */}
                <div className="bg-zinc-950 rounded-[2rem] p-6 md:p-8 border border-zinc-900 h-fit shadow-inner">
                  <h4 className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4 md:mb-5">
                    Core Exercises
                  </h4>
                  <ul className="space-y-4">
                    {SESSION_STEPS[activeStep - 1].drills.map((drill, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm md:text-base text-zinc-300 font-light">
                        <span className="text-white font-medium mt-0.5">•</span>
                        <span className="leading-relaxed">{drill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}