import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServiceCardProps {
  service: ServiceCategory;
  onSelect: (serviceTitle: string) => void;
  index: number;
}

// Minimalist intensity indicators replacing the neon colors
const getIntensityStyle = (intensity: string) => {
  switch (intensity) {
    case 'Medium':
      return 'bg-zinc-800 text-zinc-300';
    case 'High':
      return 'bg-zinc-700 text-white';
    case 'Elite':
      return 'bg-white text-black font-bold';
    default:
      return 'bg-zinc-800 text-zinc-300';
  }
};

export default function ServiceCard({ service, onSelect, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-8 flex flex-col h-full hover:border-zinc-700 transition-colors duration-300 group"
    >
      <div className="flex-grow">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className={`text-xs px-3 py-1 rounded-full tracking-wide ${getIntensityStyle(service.intensity)}`}>
            {service.intensity}
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800 tracking-wide">
            {service.duration}
          </span>
        </div>

        {/* Title & Target Audience */}
        <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-6">
          For: {service.audience}
        </p>

        {/* Description */}
        <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
          {service.shortDesc}
        </p>

        {/* Core Highlights List */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
            Core Focus
          </h4>
          <ul className="space-y-3">
            {service.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400">
                <span className="text-zinc-600 mt-0.5">•</span>
                <span className="leading-relaxed font-light">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Elegant Action Button */}
      <div className="pt-6 border-t border-zinc-900 mt-auto">
        <button
          onClick={() => onSelect(service.title)}
          className="w-full py-4 bg-transparent border border-zinc-800 text-white text-sm font-medium rounded-2xl hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center gap-2"
        >
          Select Program
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}