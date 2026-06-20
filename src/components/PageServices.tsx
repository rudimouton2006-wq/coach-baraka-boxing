import { useState } from 'react';
import { motion } from 'motion/react';
import { ServiceCategory } from '../types';
import ServiceCard from './ServiceCard';
import { ShieldCheck, Crosshair, Clock } from 'lucide-react';

// Cinematic Image Import
import servicesHeroImg from '../assets/images/services-hero.jpg';

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "amateur",
    title: "Beginner & Amateur Boxing",
    shortDesc: "Focus on fundamental mechanics, footwork, and core conditioning. Perfect for newcomers looking to build a strong foundation.",
    longDesc: "A systematic approach that covers defensive posture, standard combinations, and light technical partner drills.",
    duration: "60 Mins",
    intensity: "Medium",
    audience: "Beginners & Intermediate",
    highlights: ["Stance and balance", "Cardio conditioning", "Basic pad combinations"]
  },
  {
    id: "pro",
    title: "Professional Fight Prep",
    shortDesc: "Championship-level tactical preparation and high-impact fight camp simulation. Tailored strictly for active competitors.",
    longDesc: "Discipline-first fight camp setup specifying high precision visual focus-mitts, active ring management, and competitive stamina development.",
    duration: "90 Mins",
    intensity: "Elite",
    audience: "Advanced & Pro-Am",
    highlights: ["Advanced structural padwork", "Ring generalship", "Scenario sparring"]
  },
  {
    id: "kids",
    title: "Youth Development",
    shortDesc: "A dynamic, structured environment built to teach core coordination, cognitive reflexes, and build positive, character-molding confidence.",
    longDesc: "Introduces basic shadow boxing, agility foot mechanics, and structural stamina in a safe, constructive coaching space.",
    duration: "45 Mins",
    intensity: "Medium",
    audience: "Ages 6 - 15",
    highlights: ["Coordination and reflex drills", "Discipline and respect", "Safe, non-contact movement"]
  },
  {
    id: "fitness_1on1",
    title: "1-on-1 Personal Training",
    shortDesc: "Fully personalized fitness programs calibrated to your body structure and goals. Combines boxing mechanics with elite strength and conditioning.",
    longDesc: "Combines classic metabolic conditioning with real athletic boxing focus. Coach Baraka tracks your kinetic outputs 1-on-1 for rapid aesthetic results.",
    duration: "60 Mins",
    intensity: "All Levels",
    audience: "Everyone",
    highlights: ["Tailored physique objectives", "Core metabolic triggers", "Private padwork sessions"]
  },
  {
    id: "online",
    title: "Virtual Coaching",
    shortDesc: "High-level remote athletic planning and video analysis. Perfect for long-distance students looking for direct form correction.",
    longDesc: "Submit your training videos and receive bespoke feedback checklists, tailored routines, and weekly alignment sessions.",
    duration: "Adaptive",
    intensity: "Medium",
    audience: "Remote Athletes",
    highlights: ["Detailed video reviews", "Weekly home programs", "Direct feedback channels"]
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
            Training Programs
          </div>
          
          <div className="space-y-5 md:space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.05]">
              Select your <br className="hidden sm:block" />
              <span className="text-zinc-500">training path.</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 max-w-md font-light leading-relaxed">
              Whether you are looking for an intense cardio workout, building self-defense fundamentals, or preparing for a professional bout, we have a tailored program for you.
            </p>
          </div>

          <div className="bg-zinc-950 border-l-2 border-white p-4 md:p-5 rounded-r-2xl max-w-md mt-4 shadow-lg">
            <p className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">
              Note: All sessions require punctuality and strict focus.
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
            src={servicesHeroImg}
            alt="Coach Baraka pad work training session"
            loading="eager"
            className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* FILTER TABS */}
      <section className="space-y-8 md:space-y-10">
        <div className="flex flex-wrap gap-2 md:gap-3 border-b border-zinc-900 pb-6 md:pb-8">
          {[
            { key: 'all', label: 'All Programs' },
            { key: 'boxing', label: 'Boxing Technique' },
            { key: 'conditioning', label: 'Strength & Conditioning' },
            { key: 'remote', label: 'Virtual Coaching' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 focus:outline-none ${
                filter === tab.key
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-transparent text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-600 hover:bg-zinc-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {getFilteredServices().map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelect={onSelectService}
            />
          ))}
        </div>
      </section>

      {/* POLICIES & INFO BLOCK */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-950 border border-zinc-900 rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div className="space-y-4 md:space-y-5">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-black shadow-lg">
              <Crosshair className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-xl md:text-2xl tracking-tight mb-2">Technical Focus</h4>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                All experience levels are welcome. Coach Baraka works at your pace, but expects strict focus, regular attendance, and a willingness to learn.
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-5">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-black shadow-lg">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-xl md:text-2xl tracking-tight mb-2">Required Gear</h4>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                Basic equipment can be supplied for beginners. Owning your own hand wraps, gloves, and mouthguards is required for competitive contact levels.
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-5">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-black shadow-lg">
              <Clock className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-xl md:text-2xl tracking-tight mb-2">Flexible Scheduling</h4>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                Monthly packages or isolated casual single passes can be requested directly. Reach out to coordinate a time that fits your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}