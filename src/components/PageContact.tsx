import { motion } from 'motion/react';
import { Phone, Instagram, MessageSquare, Send, CheckCircle } from 'lucide-react';
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
    <div className="space-y-16 md:space-y-24 pt-4 md:pt-12">
      
      {/* PAGE HEADER */}
      <section className="max-w-3xl space-y-6">
        <div className="inline-block border border-zinc-800 rounded-full px-4 py-1.5 text-xs font-medium tracking-widest text-zinc-400 uppercase">
          Location & Contact
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
          Train at the home <br />
          <span className="text-zinc-500">of champions.</span>
        </h1>
        <p className="text-lg text-zinc-400 font-light leading-relaxed">
          Based out of the famous Pound for Pound Boxing Gym in the heart of CBD Cape Town. Reach out to schedule your session or ask any questions regarding our programs.
        </p>
      </section>

      {/* LOCATION MODULE */}
      <section>
        <LocationDetails />
      </section>

      {/* CONTACT GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch border-t border-zinc-900 pt-16">
        
        {/* DIRECT CONTACT CARDS */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-display font-bold text-white">Direct Contact</h3>
            <p className="text-sm text-zinc-400 font-light">
              For rapid response, use the links below to call directly or send a WhatsApp message to Coach Baraka.
            </p>
          </div>

          <div className="space-y-4">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/27746476020?text=Hi%20Coach%20Baraka!%20I%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20your%20boxing%20sessions."
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-[#0a0a0a] border border-zinc-900 rounded-3xl hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-zinc-300 transition-colors">WhatsApp</h4>
                  <p className="text-sm text-zinc-500 font-light mt-1">Instant live chat</p>
                </div>
              </div>
            </a>

            {/* Direct Dial Card */}
            <a
              href="tel:+27746476020"
              className="block p-6 bg-[#0a0a0a] border border-zinc-900 rounded-3xl hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-zinc-300 transition-colors">Phone Call</h4>
                  <p className="text-sm text-zinc-500 font-light mt-1">+27 74 647 6020</p>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/coachbaraka_"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-[#0a0a0a] border border-zinc-900 rounded-3xl hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-zinc-300 transition-colors">Instagram</h4>
                  <p className="text-sm text-zinc-500 font-light mt-1">@coachbaraka_</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* QUICK QUESTION FORM */}
        <div className="lg:col-span-7 bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-8 lg:p-12 flex flex-col justify-center">
          <form onSubmit={handleQuickSend} className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-white">Send a Message</h3>
              <p className="text-sm text-zinc-400 font-light mt-2">
                Got a quick question about schedules or corporate packages? Send an inquiry directly.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Your Name</label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g., Lwandle Ndlovu"
                value={contactForm.name}
                onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl py-4 px-5 text-sm focus:border-white focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Phone Number</label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="e.g., +27 74 647 6020"
                value={contactForm.phone}
                onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl py-4 px-5 text-sm focus:border-white focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Your Message</label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="How can we help you?"
                value={contactForm.message}
                onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl py-4 px-5 text-sm focus:border-white focus:outline-none transition-colors resize-none"
              />
            </div>

            {errorMsg && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl">
                {errorMsg}
              </div>
            )}

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-white text-black rounded-xl flex items-center gap-3 font-medium text-sm"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully. We will be in touch shortly.</span>
              </motion.div>
            ) : (
              <button
                type="submit"
                className="w-full py-4 mt-2 bg-white text-black hover:bg-zinc-200 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            )}
          </form>
        </div>

      </section>
    </div>
  );
}