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
    <div className="space-y-24 md:space-y-32">
      
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-4 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block border border-zinc-800 rounded-full px-4 py-1.5 text-xs font-medium tracking-widest text-zinc-400 uppercase">
            Cape Town, South Africa
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.1]">
              Master the art <br className="hidden sm:block" />
              <span className="text-zinc-500">of boxing.</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-md font-light leading-relaxed">
              Professional coaching, technical refinement, and elite fitness conditioning for all levels. Train smart, build discipline, and unlock your potential.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('bookings')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-sm tracking-wide rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              Book a Session
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-800 text-white font-medium text-sm tracking-wide rounded-full hover:bg-zinc-900 transition-colors text-center"
            >
              View Services
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-900 max-w-md">
            <div>
              <span className="font-display font-bold text-2xl text-white block">8+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1 block">Years Exp</span>
            </div>
            <div>
              <span className="font-display font-bold text-2xl text-white block">100%</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1 block">Focus</span>
            </div>
            <div>
              <span className="font-display font-bold text-2xl text-white block">CBD</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1 block">Location</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl shadow-black/50"
        >
          <img
            src={homeHeroImg}
            alt="Coach Baraka Kalekuzi intense pad work training"
            className="w-full h-full object-cover grayscale opacity-90 hover:scale-105 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
          />
          {/* Subtle vignette overlay for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* PHILOSOPHY TEASER */}
      <section className="bg-[#0a0a0a] rounded-3xl border border-zinc-900 overflow-hidden group">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          <div className="relative aspect-video lg:aspect-auto bg-zinc-900 overflow-hidden">
            <img 
              src={coachProfileImg} 
              alt="Coach Baraka profile portrait" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a] hidden lg:block pointer-events-none" />
          </div>
          <div className="p-8 md:p-16 flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                Train smart. <br /> Fight better.
              </h2>
              <p className="text-zinc-400 font-light leading-relaxed max-w-md">
                We believe boxing is a science, not a brawl. Our sessions focus heavily on stance mechanics, weight transfer, and strategic combinations. We build complete, intelligent fighters.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-2">
                <span className="flex items-center gap-3 text-sm text-zinc-300">
                  <Shield className="w-5 h-5 text-white" /> Defensive Form
                </span>
                <span className="flex items-center gap-3 text-sm text-zinc-300">
                  <Target className="w-5 h-5 text-white" /> Precision Padwork
                </span>
                <span className="flex items-center gap-3 text-sm text-zinc-300">
                  <Activity className="w-5 h-5 text-white" /> Elite Conditioning
                </span>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('philosophy')}
                className="px-6 py-3 bg-zinc-900 text-white border border-zinc-800 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors flex items-center gap-2 w-fit"
              >
                Read Our Philosophy
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
              Popular Programs
            </h3>
            <p className="text-sm text-zinc-500 mt-2">Tailored coaching for your specific goals.</p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
          >
            View all programs <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group p-8 bg-[#0a0a0a] border border-zinc-900 rounded-3xl hover:border-zinc-700 transition-colors duration-300">
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                Most Popular
              </span>
              <span className="text-sm text-zinc-500">60 Mins</span>
            </div>
            <h4 className="text-2xl font-display font-bold text-white mb-3">Beginner Boxing</h4>
            <p className="text-zinc-400 font-light text-sm mb-8 leading-relaxed">
              Perfect for newcomers. Focus on basic stance alignment, straight punches, simple defense, and high-energy cardio intervals.
            </p>
            <button
              onClick={() => onSelectService('Amateur Boxing')}
              className="text-white font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              Book this program <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="group p-8 bg-[#0a0a0a] border border-zinc-900 rounded-3xl hover:border-zinc-700 transition-colors duration-300">
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 bg-zinc-800 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                Advanced
              </span>
              <span className="text-sm text-zinc-500">90 Mins</span>
            </div>
            <h4 className="text-2xl font-display font-bold text-white mb-3">Pro Fight Prep</h4>
            <p className="text-zinc-400 font-light text-sm mb-8 leading-relaxed">
              Intense technical sessions mirroring real fight scenarios. Advanced pad drills, high-stress escapes, and competitive ring strategy.
            </p>
            <button
              onClick={() => onSelectService('Pro Boxing')}
              className="text-white font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              Book this program <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* TRAINING GALLERY */}
      <section className="space-y-10 pt-12 border-t border-zinc-900">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
            In The Ring
          </h3>
          <p className="text-sm text-zinc-500">High-intensity pad work and strategic drills at Pound for Pound Gym.</p>
        </div>

        {/* Cinematic Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 group">
              <img src={gallery1Img} alt="Coach Baraka intense padwork" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 group">
              <img src={gallery2Img} alt="Coach Baraka focused training face" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 group">
              <img src={gallery4Img} alt="Coach Baraka dynamic boxing drill" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 group">
              <img src={gallery3Img} alt="Boxing glove impact shot" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-white text-white" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-zinc-200 leading-relaxed tracking-tight">
            "Coach Baraka changed my entire perspective on boxing. His padwork is technical perfection, focusing entirely on clean form, speed, and real strategy. Highly recommended."
          </blockquote>
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center font-display font-bold text-white text-lg">
              LN
            </div>
            <div className="text-left">
              <h5 className="font-bold text-white text-base tracking-wide">Lwandle Ndlovu</h5>
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Active Fighter</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}