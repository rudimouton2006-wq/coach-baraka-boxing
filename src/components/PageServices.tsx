import { useState } from 'react';
import { motion } from 'motion/react';
import { ServiceCategory } from '../types';
import ServiceCard from './ServiceCard';
import { Trophy, Shield, Dumbbell, Award } from 'lucide-react';

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "amateur",
    title: "AMATEUR BOXING",
    shortDesc: "Refinement of absolute structural boxing mechanics, reactive footwork, and high-aerobic power. Perfect for newcomers looking for active stamina or transitioning into amateur rulesets.",
    longDesc: "A systematic approach that covers defensive shields, double combos, and light tactical Sparring intervals under Coach Baraka's strict guidelines.",
    duration: "60 Mins",
    intensity: "High",
    audience: "Beginners & Intermediate",
    highlights: ["Symmetrical stance balance", "Cardio bag intervals", "Target partner shadow-drills"]
  },
  {
    id: "pro",
    title: "PRO BOXING",
    shortDesc: "Championship level tactical preparation, specialized partner drill structures, and high-impact fight camp simulation. Custom tailormade for active competitors.",
    longDesc: "Discipline-first fight camp setup specifying high precision visual focus-mitts, active pocket escaping, and competitive stamina development.",
    duration: "75-90 Mins",
    intensity: "Elite",
    audience: "Advanced & Active Pro-Am",
    highlights: ["Intense structural padwork", "Tactical ring generalship", "Real-situation sparring sets"]
  },
  {
    id: "kids",
    title: "KIDS BOXING",
    shortDesc: "A highly dynamic, disciplined and energetic workspace built to teach core coordination, cognitive reflexes, and build positive, character-molding confidence.",
    longDesc: "Introduces basic shadow boxing, agility foot mechanics, and structural stamina in a safe, constructive Cape Town CBD coaching space.",
    duration: "45 Mins",
    intensity: "Medium",
    audience: "Ages 6 - 15",
    highlights: ["Basic hand return guard patterns", "Reflex hand coordination", "Discipline & athletic movement"]
  },
  {
    id: "fitness_1on1",
    title: "FITNESS & 1-ON-1 COACHING",
    shortDesc: "Completely personalized personal training programs calibrated to match your body structure, fat burn rate, and muscle recovery limits. Includes dynamic mittwork options.",
    longDesc: "Combines classic metabolic conditioning with real athletic boxing focus. Coach Baraka tracks your kinetic outputs 1-on-1 for rapid aesthetic results.",
    duration: "60 Mins",
    intensity: "All Levels",
    audience: "Everyone Seeking Elite Fitness",
    highlights: ["Rotational core metabolic triggers", "Private high-energy focus mitts", "Tailored physique objectives"]
  },
  {
    id: "online",
    title: "ONLINE COACHING",
    shortDesc: "High-level remote athletic planning including custom video analysis reviews. Perfect for long-distance or international students looking for direct form correction annotations.",
    longDesc: "Submit your technical training videos on WhatsApp and receive bespoke structural feedback checklists, tailored routines, and weekly Zoom/WhatsApp alignment sessions.",
    duration: "Adaptive",
    intensity: "Medium",
    audience: "Remote & Travel Athletes",
    highlights: ["Detailed video review checklists", "Week-by-week home programs", "Direct feedback channels"]
  }
];

interface PageServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function PageServices({ onSelectService }: PageServicesProps) {
  const [filter, setFilter] = useState<'all' | 'boxing' | 'conditioning' | 'remote'>('all');

  const getFilteredServices = () => {
    switch (filter) {
      case 'boxing':
        return SERVICE_CATEGORIES.filter(s => s.id === 'amateur' || s.id === 'pro' || s.id === 'kids');
      case 'conditioning':
        return SERVICE_CATEGORIES.filter(s => s.id === 'fitness_1on1');
      case 'remote':
        return SERVICE_CATEGORIES.filter(s => s.id === 'online');
      default:
        return SERVICE_CATEGORIES;
    }
  };

  return (
    <div className="space-y-16 py-6 md:py-12">
      {/* Intro Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold block">
            CHAMPIONSHIP DEVELOPMENT
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase">
            CHOOSE YOUR TRAINING SERVICE
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed font-sans">
            Whether you want active cardio fat burn, symmetrical stance fundamentals, or a fully coordinated Pro-Am fight preparation camp, select our tailored options and start technical metrics drills. All files and records are stored locally for instant synchronization with Coach Baraka.
          </p>
          
          <div className="text-left font-mono text-[11px] text-zinc-500 border-l border-yellow-400/40 pl-3 py-1 bg-zinc-950/40 max-w-lg">
            ⚠️ SESSIONS AT P4P ARE METICULOUSLY MONITORED <br />
            AND STRICTLY DISCIPLINED. CHOOSE WITH FOCUS.
          </div>
        </div>

        {/* Technical focus imagery */}
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute -inset-1 bg-yellow-400/5 rounded-2xl blur-xl opacity-60 pointer-events-none" />
          <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 aspect-[16/9] md:aspect-[3/1] lg:aspect-[16/10] yellow-glow group">
            <img
              src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=1200"
              alt="Elite physical competitive training of Coach Baraka Kalekuzi"
              className="w-full h-full object-cover grayscale opacity-75 group-hover:scale-105 transition-transform duration-750"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs Menu */}
      <div className="flex flex-wrap gap-2 border-b border-zinc-900 pb-4">
        {[
          { key: 'all', label: 'ALL PROGRAMMES' },
          { key: 'boxing', label: 'BOXING TECH (AM/PRO/KIDS)' },
          { key: 'conditioning', label: '1-ON-1 METABOLIC COND.' },
          { key: 'remote', label: 'VIRTUAL ONLINE COACHING' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key as any)}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
              filter === tab.key
                ? 'bg-yellow-400 text-black font-black'
                : 'bg-zinc-950 text-zinc-400 border border-zinc-900 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredServices().map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            onSelect={onSelectService}
          />
        ))}
      </div>

      {/* Extra Pricing Policies Details Block */}
      <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <span className="p-2 bg-zinc-900 border border-zinc-850 rounded-lg text-yellow-500 inline-block">
            <Shield className="w-5 h-5" />
          </span>
          <h4 className="font-display font-extrabold text-sm text-white uppercase mt-2">TECHNICAL FOCUS</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            All levels are welcome. Coach Baraka works at your pace, but expects strict focus, regular attendance, and rapid mental activation when entering the gym boundaries.
          </p>
        </div>

        <div className="space-y-2">
          <span className="p-2 bg-zinc-900 border border-zinc-850 rounded-lg text-yellow-500 inline-block">
            <Trophy className="w-5 h-5" />
          </span>
          <h4 className="font-display font-extrabold text-sm text-white uppercase mt-2">GEAR AND WRAPS</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Handwraps and heavy mitt gloves can be supplied, but owning your own wraps and mouthguards is heavily recommended for competitive contact sparring levels.
          </p>
        </div>

        <div className="space-y-2">
          <span className="p-2 bg-zinc-900 border border-zinc-850 rounded-lg text-yellow-500 inline-block">
            <Dumbbell className="w-5 h-5" />
          </span>
          <h4 className="font-display font-extrabold text-sm text-white uppercase mt-2">FLEXIBLE SCHEDULING</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Monthly Packages or isolated casual single passes can be requested directly in the next step. Let's build your physical discipline baseline today.
          </p>
        </div>
      </div>
    </div>
  );
}
