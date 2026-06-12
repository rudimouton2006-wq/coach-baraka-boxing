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
    icon: <Activity className="w-5 h-5" />
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
    icon: <Crosshair className="w-5 h-5" />
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
    icon: <Zap className="w-5 h-5" />
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
    icon: <Shield className="w-5 h-5" />
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
    icon: <HeartPulse className="w-5 h-5" />
  }
];

export default function SessionSimulator() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div id="session-simulator" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Interactive Step Menu */}
      <div className="lg:col-span-4 flex flex-col gap-2">
        {SESSION_STEPS.map((step) => {
          const isActive = activeStep === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group outline-none ${
                isActive
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-transparent text-zinc-500 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                  isActive ? 'bg-black text-white' : 'bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700'
                }`}>
                  0{step.id}
                </span>
                <span className="font-display font-bold text-sm md:text-base tracking-wide">
                  {step.phase}
                </span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                isActive ? 'rotate-90 text-black' : 'text-zinc-600 group-hover:text-white'
              }`} />
            </button>
          );
        })}
      </div>

      {/* Details Display Panel */}
      <div className="lg:col-span-8 bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-8 lg:p-12 min-h-[400px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col h-full gap-8"
          >
            {/* Header Area */}
            <div className="flex items-start gap-5 border-b border-zinc-900 pb-8">
              <div className="p-3 bg-zinc-900 text-white rounded-2xl shrink-0">
                {SESSION_STEPS[activeStep - 1].icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    Phase 0{activeStep}
                  </span>
                  <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                  <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    {SESSION_STEPS[activeStep - 1].duration}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                  {SESSION_STEPS[activeStep - 1].phase}
                </h3>
              </div>
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-2">Objective</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {SESSION_STEPS[activeStep - 1].focus}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-2">Methodology</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {SESSION_STEPS[activeStep - 1].description}
                  </p>
                </div>
              </div>

              {/* Drills List */}
              <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-900">
                <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4">
                  Core Exercises
                </h4>
                <ul className="space-y-3">
                  {SESSION_STEPS[activeStep - 1].drills.map((drill, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-zinc-400">
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
  );
}