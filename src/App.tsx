import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Phone,
  Instagram,
  Award,
  CircleDot,
  CheckCircle,
  Calendar,
  Activity,
  Compass
} from 'lucide-react';

import PageHome from './components/PageHome';
import PagePhilosophy from './components/PagePhilosophy';
import PageServices from './components/PageServices';
import PageContact from './components/PageContact';
import PageBookings from './components/PageBookings';

type ViewPage = 'home' | 'philosophy' | 'services' | 'bookings' | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewPage>('home');
  const [selectedService, setSelectedService] = useState('Amateur Boxing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll to top of window when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: string) => {
    setCurrentView(view as ViewPage);
    setMobileMenuOpen(false);
  };

  const handleSelectServiceAndBook = (serviceName: string) => {
    setSelectedService(serviceName);
    setCurrentView('bookings');
  };

  return (
    <div className="min-h-screen bg-[#070708] text-zinc-100 font-sans selection:bg-yellow-400 selection:text-black antialiased relative overflow-x-hidden flex flex-col justify-between">
      
      {/* Absolute background matrix grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)] pointer-events-none" />

      {/* CORE PERSISTENT NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-[#070708]/85 backdrop-blur-md border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand Frame */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
            id="baraka-logo-anchor"
          >
            <div className="w-10 h-10 bg-yellow-400 text-black flex items-center justify-center font-display font-black text-lg tracking-tighter rounded-xl group-hover:scale-105 transition-transform duration-200">
              CB
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-wide text-white uppercase group-hover:text-yellow-400 transition-colors duration-200">
                COACH BARAKA
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#eab308] uppercase font-bold">
                Cape Town • Pro Certified
              </span>
            </div>
          </button>

          {/* Persistent Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 bg-zinc-950/80 p-1.5 border border-zinc-900 rounded-xl">
            {[
              { key: 'home', label: 'Home' },
              { key: 'philosophy', label: 'Philosophy' },
              { key: 'services', label: 'Services' },
              { key: 'contact', label: 'Location' }
            ].map((tab) => {
              const isActive = currentView === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => handleNavigate(tab.key)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 relative cursor-pointer ${
                    isActive ? 'text-yellow-400 font-extrabold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-glow"
                      className="absolute inset-0 bg-zinc-900 rounded-lg -z-0 border border-zinc-800"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Bookings Action Trigger */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavigate('bookings')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono tracking-widest font-black uppercase transition-all duration-300 cursor-pointer ${
                currentView === 'bookings'
                  ? 'bg-yellow-400 text-black border border-transparent yellow-glow'
                  : 'bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-yellow-400'
              }`}
            >
              BOOK SESSIONS
            </button>
          </div>

          {/* Hamburger Menu on smaller devices */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 bg-zinc-900/50 border border-zinc-850 rounded-xl text-zinc-400 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle Navigation Options"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 top-20 z-40 bg-[#070708] border-t border-zinc-900 px-6 py-8 flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {[
                { key: 'home', label: 'Home Page' },
                { key: 'philosophy', label: 'Teaching Style & IQ' },
                { key: 'services', label: 'Services Catalogue' },
                { key: 'contact', label: 'Pound For Pound Gym Map' }
              ].map((tab) => {
                const isActive = currentView === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleNavigate(tab.key)}
                    className={`text-left py-3.5 px-4 rounded-xl border font-display font-extrabold text-lg tracking-wide uppercase transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-zinc-900 border-yellow-400/40 text-yellow-400'
                        : 'bg-zinc-950/40 border-zinc-900/40 text-zinc-400'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && <CircleDot className="w-4 h-4 text-yellow-400" />}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handleNavigate('bookings')}
              className="w-full py-4 text-center bg-yellow-400 hover:bg-yellow-500 font-mono font-black uppercase text-black rounded-2xl tracking-widest text-xs mt-2 yellow-glow"
            >
              BOOK FIRST CALENDAR SESSION
            </button>

            <div className="mt-auto space-y-1.5 text-center text-xs text-zinc-500 font-mono">
              <p className="text-zinc-400">+27 74 647 6020</p>
              <p>Instagram: @coachbaraka_</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTAINER PAGE SWITCHER */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {currentView === 'home' && (
              <PageHome
                onNavigate={handleNavigate}
                onSelectService={handleSelectServiceAndBook}
              />
            )}
            
            {currentView === 'philosophy' && (
              <PagePhilosophy />
            )}
            
            {currentView === 'services' && (
              <PageServices
                onSelectService={handleSelectServiceAndBook}
              />
            )}
            
            {currentView === 'bookings' && (
              <PageBookings
                selectedService={selectedService}
              />
            )}

            {currentView === 'contact' && (
              <PageContact />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-900 py-12 text-zinc-500 text-xs md:text-sm mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-black text-white uppercase tracking-wider text-base">
              COACH BARAKA
            </h4>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" />
              <p className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                CERTIFIED BOXING & STRENGTH COACH • CAPE TOWN CBD
              </p>
            </div>
          </div>

          {/* Fast Switch Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono font-bold text-zinc-400 uppercase">
            <button onClick={() => setCurrentView('home')} className="hover:text-yellow-400">Home</button>
            <span>•</span>
            <button onClick={() => setCurrentView('philosophy')} className="hover:text-yellow-400">Philosophy</button>
            <span>•</span>
            <button onClick={() => setCurrentView('services')} className="hover:text-yellow-400">Services</button>
            <span>•</span>
            <button onClick={() => setCurrentView('bookings')} className="hover:text-yellow-400">Bookings</button>
            <span>•</span>
            <button onClick={() => setCurrentView('contact')} className="hover:text-yellow-400">Location</button>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 font-mono text-xs text-zinc-400">
            <a
              href="tel:+27746476020"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-yellow-500" />
              <span>+27 74 647 6020</span>
            </a>
            <a
              href="https://instagram.com/coachbaraka_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <Instagram className="w-4 h-4 text-yellow-500" />
              <span>@coachbaraka_</span>
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900/60 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-zinc-650 font-mono gap-4">
          <p>© {new Date().getFullYear()} Coach Baraka Boxing. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-zinc-500" />
            160 Bree Street, Cape Town CBD | Pound for Pound Boxing Gym
          </p>
        </div>
      </footer>

    </div>
  );
}
