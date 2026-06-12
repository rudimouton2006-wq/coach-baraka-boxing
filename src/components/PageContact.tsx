import { motion } from 'motion/react';
import { Phone, Instagram, MapPin, Clock, Compass, Send, CheckCircle, Smartphone } from 'lucide-react';
import { useState, FormEvent } from 'react';
import LocationDetails from './LocationDetails';

export default function PageContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleQuickSend = (e: FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.message) {
      setErrorMsg("Please fill in all requested contact details.");
      return;
    }
    setErrorMsg('');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-16 py-6 md:py-12">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold block">
          COMMUNICATIONS UNIT
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-none">
          TRAIN AT THE HOME OF CHAMPIONS
        </h2>
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans max-w-2xl">
          Based out of the famous **Pound for Pound Boxing Gym** in the heart of CBD Cape Town. We are highly accessible on Bree Street with active security staff, pristine heritage rings, and high-quality focus target tools.
        </p>
      </div>

      {/* Main Location Details Module containing integrated Map */}
      <div className="pt-4">
        <LocationDetails />
      </div>

      {/* Grid: Live Chat Templates & Quick Dispatcher */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-zinc-900 pt-16">
        
        {/* Direct Connect Quick Action Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">COMMUNICATIONS</span>
            <h3 className="text-xl md:text-2xl font-display font-extrabold text-white">INSTANT ASSISTANCE</h3>
            <p className="text-xs text-zinc-400">
              For rapid response, tap either trigger to call directly or dispatch a pre-written WhatsApp template directly to Coach Baraka.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* WhatsApp Trigger Card */}
            <a
              href="https://wa.me/27746476020?text=Hi%20Coach%20Baraka!%20I%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20your%20boxing%252Ffitness%20sessions%20at%20P4P.%20When%20are%20you%20free%20to%20chat%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-950 p-5 border border-zinc-900 rounded-2xl flex items-center justify-between hover:border-yellow-400/50 transition-all group yellow-glow"
            >
              <div className="flex items-center gap-4">
                <span className="p-3 bg-yellow-400/10 rounded-xl text-yellow-400">
                  <Smartphone className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-sm font-display font-bold text-white uppercase group-hover:text-yellow-400 transition-colors">WhatsApp Dispatches</h4>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">Instant live chat template</p>
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-450 group-hover:translate-x-1 transition-transform">TAP →</span>
            </a>

            {/* Direct Dial Audio Card */}
            <a
              href="tel:+27746476020"
              className="bg-zinc-950 p-5 border border-zinc-900 rounded-2xl flex items-center justify-between hover:border-yellow-400/50 transition-all group yellow-glow"
            >
              <div className="flex items-center gap-4">
                <span className="p-3 bg-yellow-400/10 rounded-xl text-yellow-400">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-sm font-display font-bold text-white uppercase group-hover:text-yellow-400 transition-colors">Direct Audio Dial</h4>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">+27 74 647 6020</p>
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-450 group-hover:translate-x-1 transition-transform">CALL →</span>
            </a>

            {/* Instagram Contact Block */}
            <a
              href="https://instagram.com/coachbaraka_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-950 p-5 border border-zinc-900 rounded-2xl flex items-center justify-between hover:border-yellow-400/50 transition-all group yellow-glow"
            >
              <div className="flex items-center gap-4">
                <span className="p-3 bg-yellow-400/10 rounded-xl text-yellow-400">
                  <Instagram className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-sm font-display font-bold text-white uppercase group-hover:text-yellow-400 transition-colors">Instagram Profile</h4>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">@coachbaraka_</p>
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-450 group-hover:translate-x-1 transition-transform">VIEW →</span>
            </a>
          </div>
        </div>

        {/* Quick Question Form */}
        <div className="lg:col-span-7 bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 md:p-8 flex flex-col justify-between">
          <form onSubmit={handleQuickSend} className="space-y-5">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">DIGITAL INQUIRER</span>
              <h3 className="text-lg font-display font-black text-white mt-1">SEND AN INSTANT QUICK MESSAGE</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Got a quick question about schedules, boxing packages, or corporate group workshops? Send a direct dispatch note.
              </p>
            </div>

            <div className="space-y-1">
              <label htmlFor="user-contact-name" className="text-xs font-mono uppercase tracking-wider text-zinc-450">Your Name</label>
              <input
                id="user-contact-name"
                type="text"
                required
                placeholder="e.g., David Cape"
                value={contactForm.name}
                onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-2.5 px-4 text-xs focus:border-yellow-400 focus:outline-none transition-all duration-200"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="user-contact-phone" className="text-xs font-mono uppercase tracking-wider text-zinc-450">WhatsApp / Phone Number</label>
              <input
                id="user-contact-phone"
                type="tel"
                required
                placeholder="e.g., +27 74 647 6020"
                value={contactForm.phone}
                onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-2.5 px-4 text-xs focus:border-yellow-400 focus:outline-none transition-all duration-200"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="user-contact-message" className="text-xs font-mono uppercase tracking-wider text-zinc-450">Inquiry Brief</label>
              <textarea
                id="user-contact-message"
                required
                rows={3}
                placeholder="Can I split a session into 1-on-1, what is the best monthly plan for beginners?..."
                value={contactForm.message}
                onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-2.5 px-4 text-xs focus:border-yellow-400 focus:outline-none transition-all duration-200 resize-none"
              />
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-400/10 border border-red-400/30 text-red-400 text-xs rounded-xl">
                ⚠️ {errorMsg}
              </div>
            )}

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center gap-2.5 text-xs text-yellow-500"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Message Dispatch Sent! Coach Baraka is notified and will check up within hours.</span>
              </motion.div>
            ) : (
              <button
                type="submit"
                className="w-full py-3 bg-zinc-900 hover:bg-yellow-400 border border-zinc-800 hover:border-transparent text-white hover:text-black text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>SEND DIRECT MESSAGE</span>
                <Send className="w-3 h-3" />
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
