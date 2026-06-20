import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Target, Activity } from 'lucide-react';

// Cinematic Image Imports
import homeHeroImg from '../assets/images/home-hero.jpg';
import coachProfileImg from '../assets/images/coach-profile.jpg';
import gallery1Img from '../assets/images/gallery-1.jpg';
import gallery2Img from '../assets/images/gallery-2.jpg';
import gallery3Img from '../assets/images/gallery-3.jpg';
import gallery4Img from '../assets/images/gallery-4.jpg';

interface PageHomeProps {
  onNavigate: (view: string) => void;
  onSelectService: (service: string) => void;
}

export default function PageHome({ onNavigate, onSelectService }: PageHomeProps) {
  return (
    <div className="space-y-20 md:space-y-32 w-full pt-2 md:pt-12">
      
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block border border-zinc-800 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-widest text-zinc-400 uppercase">
            Cape Town, South Africa
          </div>

          <div className="space-y-5 md:space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.05]">
              Master the art <br className="hidden sm:block" />
              <span className="text-zinc-500">of boxing.</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-400 max-w-md font-light leading-relaxed">
              Professional coaching, technical refinement, and elite fitness conditioning for all levels. Train smart, build discipline, and unlock your potential.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 md:pt-4">
            <button
              onClick={() => onNavigate('bookings')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-sm md:text-base tracking-wide rounded-2xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Book a Session</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-800 text-white font-medium text-sm md:text-base tracking-wide rounded-2xl hover:bg-zinc-900 hover:border-zinc-700 transition-colors flex items-center justify-center"
            >
              View Services
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-zinc-900 max-w-md">
            <div>
              <span className="font-display font-bold text-xl md:text-2xl text-white block">8+</span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mt-1 block">Years Exp</span>
            </div>
            <div>
              <span className="font-display font-bold text-xl md:text-2xl text-white block">100%</span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mt-1 block">Focus</span>
            </div>
            <div>
              <span className="font-display font-bold text-xl md:text-2xl text-white block">CBD</span>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest mt-1 block">Location</span>
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
            src={homeHeroImg}
            alt="Coach Baraka Kalekuzi intense pad work training"
            loading="eager"
            className="w-full h-full object-cover grayscale opacity-90 hover:scale-105 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* PHILOSOPHY TEASER */}
      <section className="bg-zinc-950 rounded-[2rem] border border-zinc-900 overflow-hidden group shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-auto bg-zinc-900 overflow-hidden">
            <img 
              src={coachProfileImg} 
              alt="Coach Baraka profile portrait" 
              loading="lazy"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a0a0a]/80 lg:from-transparent via-transparent to-[#0a0a0a] pointer-events-none" />
          </div>
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8 z-10">
            <div className="space-y-5 md:space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                Train smart. <br /> Fight better.
              </h2>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-md">
                We believe boxing is a science, not a brawl. Our sessions focus heavily on stance mechanics, weight transfer, and strategic combinations. We build complete, intelligent fighters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2">
                <span className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-white" /> Defensive Form
                </span>
                <span className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-white" /> Precision Padwork
                </span>
                <span className="flex items-center gap-3 text-xs md:text-sm text-zinc-300">
                  <Activity className="w-4 h-4 md:w-5 md:h-5 text-white" /> Elite Conditioning
                </span>
              </div>
            </div>
            <div className="pt-2 md:pt-4">
              <button
                onClick={() => onNavigate('philosophy')}
                className="w-full sm:w-fit px-6 py-4 sm:py-3 bg-zinc-900 text-white border border-zinc-800 rounded-2xl text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Read Our Philosophy</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="space-y-8 md:space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Popular Programs
            </h3>
            <p className="text-sm text-zinc-500 mt-2">Tailored coaching for your specific goals.</p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-sm md:text-base text-zinc-400 hover:text-white transition-colors flex items-center gap-2 w-fit group"
          >
            View all programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="group p-6 sm:p-8 md:p-10 bg-zinc-950 border border-zinc-900 rounded-[2rem] hover:border-zinc-700 hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <span className="px-3 py-1.5 bg-white text-black text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider border border-white">
                Most Popular
              </span>
              <span className="text-[10px] md:text-xs px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800 tracking-wider font-medium">
                60 Mins
              </span>
            </div>
            <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 md:mb-4 group-hover:text-zinc-300 transition-colors">Beginner Boxing</h4>
            <p className="text-zinc-400 font-light text-sm md:text-base mb-8 md:mb-10 leading-relaxed flex-grow">
              Perfect for newcomers. Focus on basic stance alignment, straight punches, simple defense, and high-energy cardio intervals.
            </p>
            <button
              onClick={() => onSelectService('Amateur Boxing')}
              className="w-full py-3 md:py-4 bg-transparent border border-zinc-800 text-white text-sm md:text-base font-bold rounded-2xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-zinc-900 group-hover:border-zinc-700"
            >
              <span>Book this program</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="group p-6 sm:p-8 md:p-10 bg-zinc-950 border border-zinc-900 rounded-[2rem] hover:border-zinc-700 hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <span className="px-3 py-1.5 bg-zinc-800 text-white text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider border border-zinc-700">
                Advanced
              </span>
              <span className="text-[10px] md:text-xs px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800 tracking-wider font-medium">
                90 Mins
              </span>
            </div>
            <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 md:mb-4 group-hover:text-zinc-300 transition-colors">Pro Fight Prep</h4>
            <p className="text-zinc-400 font-light text-sm md:text-base mb-8 md:mb-10 leading-relaxed flex-grow">
              Intense technical sessions mirroring real fight scenarios. Advanced pad drills, high-stress escapes, and competitive ring strategy.
            </p>
            <button
              onClick={() => onSelectService('Pro Boxing')}
              className="w-full py-3 md:py-4 bg-transparent border border-zinc-800 text-white text-sm md:text-base font-bold rounded-2xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-zinc-900 group-hover:border-zinc-700"
            >
              <span>Book this program</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* TRAINING GALLERY */}
      <section className="space-y-8 md:space-y-10 pt-10 md:pt-12 border-t border-zinc-900">
        <div className="text-left md:text-center max-w-2xl mx-auto space-y-2 md:space-y-4">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            In The Ring
          </h3>
          <p className="text-sm md:text-base text-zinc-500 font-light">
            High-intensity pad work and strategic drills at Pound for Pound Gym.
          </p>
        </div>

        {/* Cinematic Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4 sm:space-y-6">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900 group shadow-2xl">
              <img src={gallery1Img} alt="Coach Baraka intense padwork" loading="lazy" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="relative w-full aspect-[4/3] md:aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 group shadow-2xl">
              <img src={gallery2Img} alt="Coach Baraka focused training face" loading="lazy" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="relative w-full aspect-[4/3] md:aspect-video rounded-[2rem] overflow-hidden bg-zinc-900 group shadow-2xl">
              <img src={gallery4Img} alt="Coach Baraka dynamic boxing drill" loading="lazy" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900 group shadow-2xl">
              <img src={gallery3Img} alt="Boxing glove impact shot" loading="lazy" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-12 md:py-16 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="flex justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-white text-white" />
            ))}
          </div>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-200 leading-relaxed tracking-tight px-4">
            "Coach Baraka changed my entire perspective on boxing. His padwork is technical perfection, focusing entirely on clean form, speed, and real strategy. Highly recommended."
          </blockquote>
          <div className="flex items-center justify-center gap-4 pt-4 md:pt-6">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center font-display font-bold text-white text-base md:text-lg shrink-0">
              LN
            </div>
            <div className="text-left flex flex-col justify-center">
              <h5 className="font-bold text-white text-sm md:text-base tracking-wide">Lwandle Ndlovu</h5>
              <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-medium mt-0.5">Active Fighter</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}