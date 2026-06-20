import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ArrowRight, Trash2, Loader2 } from 'lucide-react';

interface BookingFormProps {
  selectedService: string;
}

const EXPERIENCE_LEVELS = [
  { value: 'Beginner', label: 'Beginner / First-timer', desc: 'No previous boxing experience.' },
  { value: 'Intermediate', label: 'Intermediate', desc: 'Knows standard combinations and basic ring movement.' },
  { value: 'Advanced', label: 'Advanced', desc: 'Active competitive fighter or long-term practitioner.' },
  { value: 'Pro', label: 'Professional', desc: 'Looking for elite fight camp preparation.' }
];

const GOAL_OPTIONS = [
  { value: 'conditioning', label: 'Strength, Conditioning & Fat Burn' },
  { value: 'fundamentals', label: 'Technical Boxing Fundamentals' },
  { value: 'fight_prep', label: 'Fight Camp & Sparring Readiness' },
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService || 'Beginner & Amateur Boxing',
    experience: 'Beginner',
    goal: 'fundamentals',
    notes: ''
  });

  const [submissions, setSubmissions] = useState<BookingSubmission[]>([]);
  const [successSubmission, setSuccessSubmission] = useState<BookingSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync service if passed via props
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // Load history from local storage
  useEffect(() => {
    const saved = localStorage.getItem('baraka_bookings');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse local bookings', e);
      }
    }
  }, []);

  const getRecommendation = (exp: string, goal: string) => {
    let focus = "Foundational Mechanics";
    let suggestion = "We will start with your boxing stance, basic guard stability, and straight 1-2 combinations.";
    let quote = "Master the basics before you hunt for power.";

    if (exp === 'Beginner') {
      if (goal === 'conditioning') {
        focus = "Metabolic Padwork";
        suggestion = "We will prioritize 3-minute shadow-boxing intervals mixed with high-tempo mitts to maximize calorie burn.";
      } else {
        focus = "Stance & Balance";
        suggestion = "Complete focus on pivot footing, punch alignment, and safe hand returns.";
      }
    } else if (exp === 'Intermediate' || exp === 'Advanced') {
      if (goal === 'fight_prep') {
        focus = "Ring Generalship & Counters";
        suggestion = "Expect active pivot mittwork. We will drill head movement immediately following your power combinations.";
        quote = "Think two steps ahead. Exploit the counter.";
      } else {
        focus = "Complex Combinations";
        suggestion = "Fleshing out multi-combo sets to build smooth weight shifting and elite hand speed.";
      }
    } else {
      focus = "Championship Pace";
      suggestion = "Elite level sparring and pad simulation. Real-time situation reactions with Coach Baraka applying pressure.";
      quote = "Do not think. React with perfect discipline.";
    }

    return { focus, suggestion, quote };
  };

  const currentRec = getRecommendation(formData.experience, formData.goal);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg("Please fill in your Name, Email, and Phone Number.");
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate network delay for premium feel
    setTimeout(() => {
      const newSubmission: BookingSubmission = {
        id: Math.random().toString(36).substring(2, 9).toUpperCase(),
        ...formData,
        submittedAt: new Date().toLocaleDateString('en-ZA', { hour: '2-digit', minute: '2-digit' }),
        coachingRecommendation: currentRec.focus
      };

      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      localStorage.setItem('baraka_bookings', JSON.stringify(updated));
      setSuccessSubmission(newSubmission);
      setIsSubmitting(false);

      // Scroll to top of success message
      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  };

  const handleDelete = (id: string) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('baraka_bookings', JSON.stringify(updated));
  };

  const inputStyles = "w-full bg-zinc-950 border border-zinc-800 text-white rounded-2xl py-4 px-5 text-base md:text-sm focus:border-white focus:ring-1 focus:ring-white focus:outline-none transition-all placeholder-zinc-600 shadow-inner";

  return (
    <div id="booking-section" className="relative scroll-mt-24 w-full">
      <AnimatePresence mode="wait">
        {!successSubmission ? (
          <motion.div
            key="intake-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* INTAKE FORM */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-[#0a0a0a] border border-zinc-900 rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 space-y-8 shadow-2xl">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                  Client Details
                </h3>
                <p className="text-sm md:text-base text-zinc-400 font-light">
                  Provide your information to help us prepare your initial session structure.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2.5">
                  <label htmlFor="user-name" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Full Name</label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    placeholder="e.g., Lwandle Ndlovu"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className={inputStyles}
                  />
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="user-email" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Email Address</label>
                  <input
                    id="user-email"
                    type="email"
                    required
                    placeholder="client@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2.5">
                  <label htmlFor="user-phone" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Phone Number</label>
                  <input
                    id="user-phone"
                    type="tel"
                    required
                    placeholder="+27 74 647 6020"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className={inputStyles}
                  />
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="user-service" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Selected Program</label>
                  <select
                    id="user-service"
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    className={`${inputStyles} appearance-none cursor-pointer`}
                  >
                    <option value="Beginner & Amateur Boxing">Beginner & Amateur Boxing</option>
                    <option value="Professional Fight Prep">Professional Fight Prep</option>
                    <option value="Youth Development">Youth Development</option>
                    <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                    <option value="Virtual Coaching">Virtual Coaching</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2.5">
                  <label htmlFor="user-experience" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Experience Level</label>
                  <select
                    id="user-experience"
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    className={`${inputStyles} appearance-none cursor-pointer`}
                  >
                    {EXPERIENCE_LEVELS.map(level => (
                      <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="user-goal" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Primary Goal</label>
                  <select
                    id="user-goal"
                    value={formData.goal}
                    onChange={(e) => setFormData(prev => ({ ...prev, goal: e.target.value }))}
                    className={`${inputStyles} appearance-none cursor-pointer`}
                  >
                    {GOAL_OPTIONS.map(goal => (
                      <option key={goal.value} value={goal.value}>{goal.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2.5">
                <label htmlFor="user-notes" className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Additional Notes</label>
                <textarea
                  id="user-notes"
                  rows={3}
                  placeholder="Any injuries, preferred schedule, or specific focus areas..."
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  className={`${inputStyles} resize-none`}
                />
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 text-black text-sm md:text-base font-bold tracking-wide rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing Securely...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Profile</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* DYNAMIC RECOMMENDATION PANE */}
            <div className="lg:col-span-5 flex flex-col space-y-6 md:space-y-8 lg:sticky lg:top-32 h-full">
              <div>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                  Suggested Approach
                </h4>
                <p className="text-sm md:text-base text-zinc-400 font-light mt-2 leading-relaxed">
                  Based on your selections, Coach Baraka recommends the following focus for your initial sessions.
                </p>
              </div>

              <div className="bg-[#0a0a0a] border border-zinc-900 rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-center h-full shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-700 group-hover:scale-110" />
                
                <div className="relative z-10 space-y-6">
                  <div>
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-500 uppercase block mb-2">Target Curriculum</span>
                    <div className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">
                      {currentRec.focus}
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed pt-6 border-t border-zinc-900">
                    {currentRec.suggestion}
                  </p>

                  <div className="pt-6">
                    <p className="text-sm md:text-base italic text-zinc-300 font-light leading-relaxed border-l-2 border-white pl-5">
                      "{currentRec.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* SUCCESS STATE */
          <motion.div
            key="success-state"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0a0a0a] border border-zinc-900 rounded-[2rem] p-8 md:p-16 text-center max-w-2xl mx-auto space-y-8 shadow-2xl"
          >
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black shadow-lg shadow-white/10">
                <CheckCircle className="w-10 h-10" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                Profile Submitted
              </h3>
              <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-md mx-auto">
                Thank you, <span className="text-white font-medium">{successSubmission.name}</span>. Your intake form for the <span className="text-white font-medium">{successSubmission.service}</span> program has been received.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 md:p-8 rounded-3xl border border-zinc-800 text-left space-y-5 text-sm md:text-base max-w-md mx-auto">
              <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                <span className="text-zinc-500 font-medium">Curriculum Focus</span>
                <span className="text-white font-bold text-right">{successSubmission.coachingRecommendation}</span>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                <span className="text-zinc-500 font-medium">Booking ID</span>
                <span className="text-zinc-400 font-mono text-xs md:text-sm bg-zinc-900 px-2 py-1 rounded-md">{successSubmission.id}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-zinc-500 font-medium">Date</span>
                <span className="text-zinc-400 text-xs md:text-sm">{successSubmission.submittedAt}</span>
              </div>
            </div>

            <p className="text-sm md:text-base text-zinc-400 font-light max-w-md mx-auto">
              Coach Baraka will reach out directly to <span className="text-white font-medium">{successSubmission.phone}</span> shortly to coordinate your calendar reservation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button
                onClick={() => setSuccessSubmission(null)}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-800 text-white text-sm md:text-base font-bold rounded-2xl hover:bg-zinc-900 transition-colors"
              >
                Submit Another
              </button>
              <a
                href={`https://wa.me/27746476020?text=Hi%20Coach%20Baraka!%20I%20just%20submitted%20my%20booking%20for%20the%20${encodeURIComponent(successSubmission.service)}%20program.%20My%20name%20is%20${encodeURIComponent(successSubmission.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm md:text-base font-bold rounded-2xl hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2"
              >
                Message WhatsApp
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LOCAL BOOKING HISTORY */}
      {submissions.length > 0 && !successSubmission && (
        <div className="mt-16 pt-10 border-t border-zinc-900 space-y-6 md:space-y-8">
          <h4 className="text-sm md:text-base font-display font-bold text-white tracking-tight flex items-center justify-between px-2">
            <span>Recent Inquiries</span>
            <span className="text-[10px] md:text-xs text-zinc-600 font-normal uppercase tracking-widest bg-zinc-950 px-3 py-1 rounded-full border border-zinc-900">Saved Locally</span>
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {submissions.map((sub) => (
              <div key={sub.id} className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 md:p-6 flex justify-between items-start group hover:border-zinc-700 transition-colors">
                <div className="space-y-2.5">
                  <div className="text-sm md:text-base font-bold text-white">{sub.service}</div>
                  <div className="text-[10px] md:text-xs text-zinc-500 font-light flex items-center gap-2">
                    <span>{sub.name}</span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                    <span>{sub.phone}</span>
                  </div>
                  <div className="text-xs md:text-sm text-zinc-400 pt-1 border-t border-zinc-900 mt-2">Focus: <span className="text-white">{sub.coachingRecommendation}</span></div>
                </div>
                <button
                  onClick={() => handleDelete(sub.id)}
                  className="p-2 text-zinc-600 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
                  title="Remove record"
                >
                  <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}