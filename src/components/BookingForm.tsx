import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, ArrowRight, Trash2 } from 'lucide-react';

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
    service: selectedService || 'Beginner Boxing',
    experience: 'Beginner',
    goal: 'fundamentals',
    notes: ''
  });

  const [submissions, setSubmissions] = useState<BookingSubmission[]>([]);
  const [successSubmission, setSuccessSubmission] = useState<BookingSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

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

      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* INTAKE FORM */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-8 lg:p-10 space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Client Details
                </h3>
                <p className="text-sm text-zinc-400 font-light mt-1">
                  Provide your information to help us prepare your initial session structure.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user-name" className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    placeholder="e.g., Lwandle Ndlovu"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl py-4 px-5 text-sm focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="user-email" className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                  <input
                    id="user-email"
                    type="email"
                    required
                    placeholder="e.g., client@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl py-4 px-5 text-sm focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user-phone" className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Phone Number</label>
                  <input
                    id="user-phone"
                    type="tel"
                    required
                    placeholder="e.g., +27 74 647 6020"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl py-4 px-5 text-sm focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="user-service" className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Selected Program</label>
                  <select
                    id="user-service"
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl py-4 px-5 text-sm focus:border-white focus:outline-none transition-colors appearance-none"
                  >
                    <option value="Beginner & Amateur Boxing">Beginner & Amateur Boxing</option>
                    <option value="Professional Fight Prep">Professional Fight Prep</option>
                    <option value="Youth Development">Youth Development</option>
                    <option value="1-on-1 Personal Training">1-on-1 Personal Training</option>
                    <option value="Virtual Coaching">Virtual Coaching</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user-experience" className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Experience Level</label>
                  <select
                    id="user-experience"
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl py-4 px-5 text-sm focus:border-white focus:outline-none transition-colors appearance-none"
                  >
                    {EXPERIENCE_LEVELS.map(level => (
                      <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="user-goal" className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Primary Goal</label>
                  <select
                    id="user-goal"
                    value={formData.goal}
                    onChange={(e) => setFormData(prev => ({ ...prev, goal: e.target.value }))}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl py-4 px-5 text-sm focus:border-white focus:outline-none transition-colors appearance-none"
                  >
                    {GOAL_OPTIONS.map(goal => (
                      <option key={goal.value} value={goal.value}>{goal.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="user-notes" className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Additional Notes</label>
                <textarea
                  id="user-notes"
                  rows={3}
                  placeholder="Any injuries, preferred schedule, or specific focus areas..."
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl py-4 px-5 text-sm focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>

              {errorMsg && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 text-black text-sm font-bold tracking-wide rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Submit Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* DYNAMIC RECOMMENDATION PANE */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:sticky lg:top-28">
              <div>
                <h4 className="text-2xl font-display font-bold text-white tracking-tight">
                  Suggested Approach
                </h4>
                <p className="text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                  Based on your selections, Coach Baraka recommends the following focus for your initial sessions.
                </p>
              </div>

              <div className="bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-8 space-y-6 flex-grow">
                <div>
                  <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase block mb-1">Target Curriculum</span>
                  <div className="font-display font-bold text-xl text-white">
                    {currentRec.focus}
                  </div>
                </div>
                
                <p className="text-sm text-zinc-400 font-light leading-relaxed pt-6 border-t border-zinc-900">
                  {currentRec.suggestion}
                </p>

                <div className="pt-6">
                  <p className="text-sm italic text-zinc-300 leading-relaxed border-l-2 border-white pl-4">
                    "{currentRec.quote}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* SUCCESS STATE */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-8 md:p-16 text-center max-w-2xl mx-auto space-y-8"
          >
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-display font-bold text-white tracking-tight">
                Profile Submitted
              </h3>
              <p className="text-zinc-400 font-light mt-4 leading-relaxed">
                Thank you, <span className="text-white font-medium">{successSubmission.name}</span>. Your intake form for the <span className="text-white font-medium">{successSubmission.service}</span> program has been received.
              </p>
            </div>

            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 text-left space-y-4 text-sm max-w-md mx-auto">
              <div className="flex justify-between border-b border-zinc-900 pb-3">
                <span className="text-zinc-500">Curriculum Focus</span>
                <span className="text-white font-medium">{successSubmission.coachingRecommendation}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-3">
                <span className="text-zinc-500">Booking ID</span>
                <span className="text-zinc-400 font-mono text-xs">{successSubmission.id}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-zinc-500">Date</span>
                <span className="text-zinc-400 text-xs">{successSubmission.submittedAt}</span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">
              Coach Baraka will reach out directly to <span className="text-white">{successSubmission.phone}</span> shortly to coordinate your calendar reservation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => setSuccessSubmission(null)}
                className="px-8 py-4 bg-transparent border border-zinc-800 text-white text-sm font-bold rounded-xl hover:bg-zinc-900 transition-colors"
              >
                Submit Another
              </button>
              <a
                href={`https://wa.me/27746476020?text=Hi%20Coach%20Baraka!%20I%20just%20submitted%20my%20booking%20for%20the%20${encodeURIComponent(successSubmission.service)}%20program.%20My%20name%20is%20${encodeURIComponent(successSubmission.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black text-sm font-bold rounded-xl hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2"
              >
                Message via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LOCAL BOOKING HISTORY */}
      {submissions.length > 0 && !successSubmission && (
        <div className="mt-16 pt-8 border-t border-zinc-900 space-y-6">
          <h4 className="text-sm font-bold text-white tracking-tight flex items-center justify-between">
            <span>Recent Inquiries</span>
            <span className="text-xs text-zinc-600 font-normal">Saved Locally</span>
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {submissions.map((sub) => (
              <div key={sub.id} className="bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-5 flex justify-between items-start group">
                <div className="space-y-2">
                  <div className="text-sm font-bold text-white">{sub.service}</div>
                  <div className="text-xs text-zinc-500 font-light">{sub.name} • {sub.phone}</div>
                  <div className="text-xs text-zinc-400 mt-1">Focus: {sub.coachingRecommendation}</div>
                </div>
                <button
                  onClick={() => handleDelete(sub.id)}
                  className="p-2 text-zinc-600 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                  title="Remove record"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}