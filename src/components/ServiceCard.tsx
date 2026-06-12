import { motion } from 'motion/react';
import { Shield, Trophy, Activity, Users, Video, Dumbbell, Zap } from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServiceCardProps {
  key?: string;
  service: ServiceCategory;
  onSelect: (serviceTitle: string) => void;
  index: number;
}

const getIcon = (id: string) => {
  switch (id) {
    case 'amateur':
      return <Shield className="w-5 h-5 text-yellow-400" />;
    case 'pro':
      return <Trophy className="w-5 h-5 text-yellow-400" />;
    case 'kids':
      return <Users className="w-5 h-5 text-yellow-400" />;
    case 'fitness_1on1':
      return <Dumbbell className="w-5 h-5 text-yellow-400" />;
    case 'online':
      return <Video className="w-5 h-5 text-yellow-400" />;
    default:
      return <Activity className="w-5 h-5 text-yellow-400" />;
  }
};

const getIntensityColor = (intensity: string) => {
  switch (intensity) {
    case 'Medium':
      return 'bg-blue-400/10 text-blue-400 border-blue-400/20';
    case 'High':
      return 'bg-orange-400/10 text-orange-400 border-orange-400/20';
    case 'Elite':
      return 'bg-red-400/10 text-red-400 border-red-400/20';
    default:
      return 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20';
  }
};

export default function ServiceCard({ service, onSelect, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-zinc-950/80 border border-zinc-900 hover:border-zinc-800 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] yellow-glow group relative"
    >
      {/* Decorative subtle stripe */}
      <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-yellow-400/30 transition-all duration-500" />
      
      <div>
        {/* Dynamic header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-yellow-400 rounded-xl">
            {getIcon(service.id)}
          </div>
          <div className="flex gap-2">
            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${getIntensityColor(service.intensity)}`}>
              {service.intensity}
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
              {service.duration}
            </span>
          </div>
        </div>

        {/* Titles */}
        <h3 className="text-xl font-display font-extrabold text-white tracking-wide group-hover:text-yellow-400 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-xs font-mono text-zinc-500 mt-1 uppercase tracking-wider">
          Audience: {service.audience}
        </p>

        <p className="text-xs md:text-sm text-zinc-400 mt-3 leading-relaxed">
          {service.shortDesc}
        </p>

        <div className="mt-4 border-t border-zinc-900/50 pt-4">
          <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold mb-2">Key Highlights</h4>
          <ul className="flex flex-col gap-1.5">
            {service.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Booking deep-link triggers */}
      <div className="mt-6 pt-4 border-t border-zinc-900/40">
        <button
          onClick={() => onSelect(service.title)}
          className="w-full py-2.5 bg-zinc-900 hover:bg-yellow-400 hover:text-black border border-zinc-800 hover:border-transparent text-white text-xs font-mono font-bold tracking-wider rounded-xl uppercase transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Zap className="w-3.5 h-3.5" />
          SELECT & BOOK SESSION
        </button>
      </div>
    </motion.div>
  );
}
