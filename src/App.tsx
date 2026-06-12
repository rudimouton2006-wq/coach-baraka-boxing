import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Instagram, MapPin } from 'lucide-react';

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
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans antialiased flex flex-col justify-between selection:bg-white selection:text-black">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
          >
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white uppercase transition-colors group-hover:text-zinc-300">
                Coach Baraka
              </span>
              <span className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
                Cape Town
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { key: 'home', label: 'Home' },
              { key: 'philosophy', label: 'Philosophy' },
              { key: 'services', label: 'Services' },
              { key: 'contact', label: 'Location' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleNavigate(tab.key)}
                className={`text-sm font-medium transition-colors focus:outline-none ${
                  currentView === tab.key ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Booking Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavigate('bookings')}
              className="px-6 py-2.5 bg-white text-black hover:bg-zinc-200 text-sm font-bold rounded-full transition-colors focus:outline-none"
            >
              Book Session
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40 bg-[#0a0a0a] border-t border-zinc-900 px-6 py-8 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 mt-4">
              {[
                { key: 'home', label: 'Home' },
                { key: 'philosophy', label: 'Philosophy' },
                { key: 'services', label: 'Services' },
                { key: 'contact', label: 'Location' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleNavigate(tab.key)}
                  className={`text-left text-2xl font-display font-medium transition-colors focus:outline-none ${
                    currentView === tab.key ? 'text-white' : 'text-zinc-500'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={() => handleNavigate('bookings')}
                className="w-full py-4 bg-white text-black font-bold text-lg rounded-xl transition-colors hover:bg-zinc-200 focus:outline-none"
              >
                Book a Session
              </button>
            </div>

            <div className="mt-auto pt-8 border-t border-zinc-900 text-sm text-zinc-500 space-y-4">
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-zinc-400" /> 
                <a href="tel:+27746476020" className="hover:text-white transition-colors">+27 74 647 6020</a>
              </p>
              <p className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-zinc-400" /> 
                <a href="https://instagram.com/coachbaraka_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@coachbaraka_</a>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-zinc-400" /> 
                160 Bree Street, Cape Town CBD
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow w-full max-w-6xl mx-auto px-6 py-12 md:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {currentView === 'home' && (
              <PageHome onNavigate={handleNavigate} onSelectService={handleSelectServiceAndBook} />
            )}
            
            {currentView === 'philosophy' && (
              <PagePhilosophy />
            )}
            
            {currentView === 'services' && (
              <PageServices onSelectService={handleSelectServiceAndBook} />
            )}
            
            {currentView === 'bookings' && (
              <PageBookings selectedService={selectedService} />
            )}

            {currentView === 'contact' && (
              <PageContact />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-[#0a0a0a] py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <h4 className="font-display font-bold text-white text-lg tracking-tight">Coach Baraka</h4>
            <p className="text-xs text-zinc-500 mt-1 tracking-widest uppercase">Professional Boxing • Cape Town</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-500">
            <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors focus:outline-none">Home</button>
            <button onClick={() => handleNavigate('philosophy')} className="hover:text-white transition-colors focus:outline-none">Philosophy</button>
            <button onClick={() => handleNavigate('services')} className="hover:text-white transition-colors focus:outline-none">Services</button>
            <button onClick={() => handleNavigate('bookings')} className="hover:text-white transition-colors focus:outline-none">Bookings</button>
            <button onClick={() => handleNavigate('contact')} className="hover:text-white transition-colors focus:outline-none">Location</button>
          </div>

        </div>
        
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-600 gap-4">
          <p>© {new Date().getFullYear()} Coach Baraka Boxing. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/coachbaraka_" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Instagram</a>
            <span>•</span>
            <a href="tel:+27746476020" className="hover:text-zinc-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}