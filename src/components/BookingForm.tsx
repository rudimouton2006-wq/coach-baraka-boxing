import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Mail, Phone, Dumbbell, MessageSquare, CheckCircle, ArrowRight, Sparkles, Trophy, Trash2 } from 'lucide-react';

interface BookingFormProps {
  selectedService: string;
}

const EXPERIENCE_LEVELS = [
  { value: 'Beginner', label: 'Beginner / First-timer', desc: 'No previous boxing experience. Learn key stance and hand positioning.' },
  { value: 'Intermediate', label: 'Intermediate', desc: 'Know standard combos, need to improve ring management and combos.' },
  { value: 'Advanced', label: 'Advanced Sparror', desc: 'Active competitive fighter or long-term practitioner.' },
  { value: 'Pro', label: 'Professional / Pro-Am', desc: 'Looking for technical camp styling, high-output padwork.' }
];

const GOAL_OPTIONS = [
  { value: 'conditioning', label: 'Extreme Conditioning & Fat Burn' },
  { value: 'fundamentals', label: 'Pure Technical Fundamentals' },
  { value: 'fight_prep', label: 'Fight Camp & Sparring IQ' },
  { value: 'self_defense', label: 'Self-Defense & Athletic Power' }
];

interface BookingSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  experience: string;
  goal: string;
  notes: string;
  submittedAt: string;
  coachingRecommendation: string;
}

export default function BookingForm({ selectedService }: BookingFormProps) {
  // Local state for active inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || 'Amateur Boxing',
    experience: 'Beginner',
    goal: 'fundamentals',
    notes: ''
  });

  const [submissions, setSubmissions] = useState<BookingSubmission[]>([]);
  const [successSubmission, setSuccessSubmission] = useState<BookingSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync selected service if changed from outside card clicks
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // Load existing bookings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('baraka_bookings');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Generate dynamic recommendation based on their choice
  const getRecommendation = (exp: string, goal: string) => {
    let focus = "Fundamentals and basic rhythm.";
    let suggestion = "Coach Baraka will start you on basic high-guard stability, single steps, and throwing straight 1-2 combos.";
    let quote = "Speed first. Strength later. Work the jab.";

    if (exp === 'Beginner') {
      if (goal === 'conditioning') {
        focus = "High Metabolic Volume & Pad Basics";
        suggestion = "We will prioritize 3-minute shadow-boxing intervals mixed with high-tempo mitts. This focuses on fat-burning stance shifts.";
      } else {
        focus = "Orthodox/Southpaw Solid Stance Fundamentals";
        suggestion = "We focus entirely on pivot footing, punch alignment, and hand return safety. Essential before scaling sparring intensity.";
      }
    } else if (exp === 'Intermediate' || exp === 'Advanced') {
      if (goal === 'fight_prep') {
        focus = "High-IQ Ring Positioning & Counter Sets";
        suggestion = "Expect active pivot mittwork. Working on head slotting (slipping and ducking) right after your final power combination.";
        quote = "Think two steps ahead of the opponent.";
      } else {
        focus = "Complex Pad Combinations & Power Rotation";
        suggestion = "Fleshing out multi-combo sets (e.g. Jab-Cross-Hook-Roll-Hook-Cross) to build smooth weight shifting and hand speed.";
      }
    } else {
      focus = "Championship Fight Pace & Strategy";
      suggestion = "Elite level. Real-time situation sparring with Coach Baraka throwing counter punches. Includes specific fight plan setups.";
      quote = "Do not think. React with perfect discipline.";
    }

    return { focus, suggestion, quote };
  };

  const currentRec = getRecommendation(formData.experience, formData.goal);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg("Please fill in high-level details: Name, Email and Phone Number.");
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate real networking latency
    setTimeout(() => {
      const newSubmission: BookingSubmission = {
        id: Math.random().toString(36).substring(2, 9),
        ...formData,
        submittedAt: new Date().toLocaleDateString('en-ZA', { hour: '2-digit', minute: '2-digit' }),
        coachingRecommendation: currentRec.focus
      };

      const updated = [...submissions, newSubmission];
      setSubmissions(updated);
      localStorage.setItem('baraka_bookings', JSON.stringify(updated));
      setSuccessSubmission(newSubmission);
      setIsSubmitting(false);

      // Scroll to success screen
      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  };

  const handleDelete = (id: string) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('baraka_bookings', JSON.stringify(updated));
  };

  return (
    <div id="booking-section" className="relative scroll-mt-24">
      <AnimatePresence mode="wait">
        {!successSubmission ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* The Actual Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-zinc-950/80 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6">
              <div>
                <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> INTAKE FORM
                </span>
                <h3 className="text-2xl font-display font-extrabold text-white mt-1">
                  SECURE YOUR TIMELINE
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-1">
                  Fill in your details. Coach Baraka will review your background and design your bespoke baseline session.
                </p>
              </div>

              {/* Personal Info Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="user-name" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      id="user-name"
                      type="text"
                      required
                      placeholder="e.g., Lwandle Ndlovu"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 pl-10 pr-4 text-sm focus:border-yellow-400 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="user-email" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      id="user-email"
                      type="email"
                      required
                      placeholder="e.g., lwandle@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 pl-10 pr-4 text-sm focus:border-yellow-400 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Info & Selects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="user-phone" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">WhatsApp / Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      id="user-phone"
                      type="tel"
                      required
                      placeholder="e.g., +27 74 647 6020"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 pl-10 pr-4 text-sm focus:border-yellow-400 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="user-service" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Training Tier Requested</label>
                  <select
                    id="user-service"
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 px-4 text-sm focus:border-yellow-400 focus:outline-none transition-all duration-200"
                  >
                    <option value="Amateur Boxing">Amateur Boxing (Technique & Fitness)</option>
                    <option value="Pro Boxing">Pro Boxing & Fight Camp Prep</option>
                    <option value="Kids Boxing">Kids Boxing (Discipline & Skills)</option>
                    <option value="Fitness Training & 1-on-1 Coaching">Fitness Block & 1-on-1 Personal Training</option>
                    <option value="Online Coaching">Online Technique Review & Virtual Coaching</option>
                  </select>
                </div>
              </div>

              {/* Experience and Goal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="user-experience" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Boxing Experience Level</label>
                  <select
                    id="user-experience"
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 px-4 text-sm focus:border-yellow-400 focus:outline-none transition-all duration-200"
                  >
                    {EXPERIENCE_LEVELS.map(level => (
                      <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="user-goal" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Primary Goals</label>
                  <select
                    id="user-goal"
                    value={formData.goal}
                    onChange={(e) => setFormData(prev => ({ ...prev, goal: e.target.value }))}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 px-4 text-sm focus:border-yellow-400 focus:outline-none transition-all duration-200"
                  >
                    {GOAL_OPTIONS.map(goal => (
                      <option key={goal.value} value={goal.value}>{goal.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label htmlFor="user-notes" className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">Message, Injury History, or Special Requests</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                  <textarea
                    id="user-notes"
                    rows={3}
                    placeholder="Brief details about your fitness health, sparring background, or desired training schedule..."
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl py-3 pl-10 pr-4 text-sm focus:border-yellow-400 focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>
              </div>

              {errorMsg && (
                <div id="booking-error-message" className="p-3.5 bg-red-400/10 border border-red-450/30 text-red-400 text-xs rounded-xl">
                  ⚠️ {errorMsg}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-yellow-400 hover:bg-yellow-500 disabled:bg-zinc-800 text-black text-xs md:text-sm font-mono font-bold tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>SYNCHRONIZING TACTICAL PROFILE...</span>
                  </>
                ) : (
                  <>
                    <span>TRANSMIT DRILL PROPOSAL</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Smart Live Recommender Pane */}
            <div className="lg:col-span-5 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 block">DYNAMIC DIAGNOSTICS</span>
                  <h4 className="text-lg font-display font-extrabold text-white tracking-wide mt-1">
                    BESPOKE WORKOUT BLUEPRINT
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Real-time technical recommendation compiled automatically based on your training parameters.
                  </p>
                </div>

                <div className="p-4 bg-zinc-950/90 border border-zinc-900 rounded-xl space-y-3">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500 shrink-0" />
                    <span className="text-xs font-mono font-bold tracking-wider text-yellow-400 uppercase">Target Routine</span>
                  </div>
                  <div className="font-display font-bold text-sm text-zinc-100">
                    {currentRec.focus}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1 border-t border-zinc-900">
                    {currentRec.suggestion}
                  </p>
                </div>

                <div className="p-4 border-l-2 border-yellow-400 bg-zinc-900/60 rounded-r-xl">
                  <p className="text-xs italic text-zinc-300 leading-relaxed">
                    "{currentRec.quote}"
                  </p>
                  <span className="text-[10px] font-mono text-yellow-400 font-bold tracking-widest block mt-2">
                    — COACH BARAKA KALEKUZI
                  </span>
                </div>
              </div>

              <div className="mt-8 border-t border-zinc-900 pt-6 flex items-center justify-between text-xs text-zinc-500">
                <span className="flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-500" /> Cape Town CBD Setup
                </span>
                <span className="font-mono text-[10px] bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                  REF: CT_BOX_A1
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Confirmation details */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="bg-zinc-900/80 border border-yellow-400/50 yellow-glow rounded-3xl p-6 md:p-10 text-center max-w-2xl mx-auto space-y-6"
          >
            <div className="inline-flex p-3 bg-yellow-400/10 rounded-full text-yellow-400 border border-yellow-400/20">
              <CheckCircle className="w-12 h-12" />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-wide uppercase">
                TAC-PROFILE REGISTERED
              </h3>
              <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto leading-relaxed">
                Elite response received, <span className="text-yellow-400 font-bold">{successSubmission.name}</span>! Coach Baraka is reviewing your experience tier (<span className="text-white font-bold">{successSubmission.experience}</span>).
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 text-left space-y-3 text-sm">
              <div className="flex justify-between border-b border-zinc-900 pb-2">
                <span className="text-zinc-500 font-mono">Service Block</span>
                <span className="text-white font-medium font-display">{successSubmission.service}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-2">
                <span className="text-zinc-500 font-mono">Focus Path</span>
                <span className="text-yellow-400 font-bold font-mono">{successSubmission.coachingRecommendation}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-2">
                <span className="text-zinc-500 font-mono">Secure ID</span>
                <span className="text-zinc-400 font-mono text-xs">{successSubmission.id}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-zinc-500 font-mono">Transmission Time</span>
                <span className="text-zinc-400 text-xs">{successSubmission.submittedAt}</span>
              </div>
            </div>

            <div className="bg-zinc-900/90 text-zinc-400 p-4 rounded-xl text-xs space-y-2 text-center border border-zinc-800">
              <p className="leading-relaxed">
                🚀 <span className="text-white font-semibold">Next Step:</span> Baraka will reach out directly on <span className="text-white font-semibold">{successSubmission.phone}</span> or <span className="text-white font-semibold">{successSubmission.email}</span> within 2 hours to coordinate your calendar reservation. Let's build!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
              <button
                onClick={() => setSuccessSubmission(null)}
                className="px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-zinc-300 text-xs font-mono font-bold uppercase rounded-xl transition-colors duration-200 border border-zinc-800"
              >
                PROPOSE ANOTHER SESSION
              </button>
              <a
                href={`https://wa.me/27746476020?text=Hi%20Coach%20Baraka!%20I%20just%20submitted%20my%20boxing%20profile%20online%20for%20the%20${encodeURIComponent(successSubmission.service)}%20program.%20My%20name%20is%20${encodeURIComponent(successSubmission.name)}.%20Excited%20to%20start!`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-mono font-bold uppercase rounded-xl transition-colors duration-200 inline-flex items-center gap-2 justify-center"
              >
                <span>INSTANT WHATSAPP</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking History Section */}
      {submissions.length > 0 && !successSubmission && (
        <div className="mt-14 pt-8 border-t border-zinc-900 space-y-4">
          <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center justify-between">
            <span>Your Reserved Drills ({submissions.length})</span>
            <span className="text-[10px] text-zinc-500 font-normal">Stored Locally on this device</span>
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {submissions.map((sub) => (
              <div key={sub.id} className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4 flex justify-between items-start">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white font-display uppercase">{sub.service}</div>
                  <div className="text-[10px] text-zinc-400 font-sans">Name: {sub.name} | Phone: {sub.phone}</div>
                  <div className="text-[10px] text-yellow-400/90 font-mono tracking-wide uppercase">Recommendation: {sub.coachingRecommendation}</div>
                  <div className="text-[9px] text-zinc-600 font-mono">Date: {sub.submittedAt}</div>
                </div>
                <button
                  onClick={() => handleDelete(sub.id)}
                  className="p-1 px-1.5 bg-zinc-900 border border-zinc-800 text-zinc-600 hover:text-red-400 hover:border-red-950/40 rounded transition-colors duration-200"
                  title="Remove local log"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
