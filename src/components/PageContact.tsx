import { motion } from 'motion/react';
import { Phone, Instagram, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import LocationDetails from './LocationDetails';

export default function PageContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);
    
    // Simulate secure network request for premium feel
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setContactForm({ name: '', phone: '', message: '' });
      }, 4000);
    }, 1200);
  };

  const inputStyles = "w-full bg-zinc-950 border border-zinc-800 text-white rounded-2xl py-4 px-5 text-base md:text-sm focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all placeholder-zinc-600 shadow-inner";

  return (
    <div className="space-y-20 md:space-y-32 w-full pt-2 md:pt-12">
      
      {/* PAGE HEADER */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl space-y-6 md:space-y-8"
      >
        <div className="inline-block border border-zinc-800 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-widest text-zinc-400 uppercase">
          Location & Contact
        </div>
        
        <div className="space-y-5 md:space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.05]">
            Train at the home <br className="hidden sm:block" />
            <span className="text-zinc-500">of champions.</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
            Based out of the famous Pound for Pound Boxing Gym in the heart of CBD Cape Town. Reach out to schedule your session or ask any questions regarding our programs.
          </p>
        </div>
      </motion.section>

      {/* LOCATION MODULE */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <LocationDetails />
      </motion.section>

      {/* CONTACT GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch border-t border-zinc-900 pt-10 md:pt-16">
        
        {/* DIRECT CONTACT CARDS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">Direct Contact</h3>
            <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
              For rapid response, use the links below to call directly or send a WhatsApp message to Coach Baraka.
            </p>
          </div>

          <div className="space-y-4">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/27746476020?text=Hi%20Coach%20Baraka!%20I%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20your%20boxing%20sessions."
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-[#0a0a0a] border border-zinc-900 rounded-[2rem] hover:border-zinc-700 transition-colors group shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-black shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">WhatsApp</h4>
                  <p className="text-xs md:text-sm text-zinc-500 font-light mt-0.5">Instant live chat</p>
                </div>
              </div>
            </a>

            {/* Direct Dial Card */}
            <a
              href="tel:+27746476020"
              className="block p-6 bg-[#0a0a0a] border border-zinc-900 rounded-[2rem] hover:border-zinc-700 transition-colors group shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-black shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">Phone Call</h4>
                  <p className="text-xs md:text-sm text-zinc-500 font-light mt-0.5">+27 74 647 6020</p>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/coachbaraka_"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-[#0a0a0a] border border-zinc-900 rounded-[2rem] hover:border-zinc-700 transition-colors group shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-black shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">Instagram</h4>
                  <p className="text-xs md:text-sm text-zinc-500 font-light mt-0.5">@coachbaraka_</p>
                </div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* QUICK QUESTION FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 bg-[#0a0a0a] border border-zinc-900 rounded-[2rem] p-6 sm:p-8 md:p-12 flex flex-col justify-center shadow-2xl"
        >
          <form onSubmit={handleQuickSend} className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">Send a Message</h3>
              <p className="text-sm md:text-base text-zinc-400 font-light mt-2 md:mt-3 leading-relaxed">
                Got a quick question about schedules or corporate packages? Send an inquiry directly below.
              </p>
            </div>

            <div className="space-y-5 md:space-y-6">
              <div className="space-y-2.5">
                <label htmlFor="name" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g., Lwandle Ndlovu"
                  value={contactForm.name}
                  onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                  className={inputStyles}
                />
              </div>

              <div className="space-y-2.5">
                <label htmlFor="phone" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+27 74 647 6020"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                  className={inputStyles}
                />
              </div>

              <div className="space-y-2.5">
                <label htmlFor="message" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  value={contactForm.message}
                  onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  className={`${inputStyles} resize-none`}
                />
              </div>
            </div>

            {errorMsg && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-2xl"
              >
                {errorMsg}
              </motion.div>
            )}

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-white text-black rounded-2xl flex items-center justify-center gap-3 font-bold text-sm md:text-base py-4"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Message sent. We will be in touch.</span>
              </motion.div>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-2 bg-white text-black hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 text-sm md:text-base font-bold rounded-2xl transition-colors flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                  </>
                )}
              </button>
            )}
          </form>
        </motion.div>

      </section>
    </div>
  );
}