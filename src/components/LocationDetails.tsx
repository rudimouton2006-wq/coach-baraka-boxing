import { MapPin, Clock, Compass, ExternalLink } from 'lucide-react';

export default function LocationDetails() {
  const hours = [
    { days: "Monday - Thursday", hours: "06:00 - 20:00" },
    { days: "Friday", hours: "06:00 - 18:00" },
    { days: "Saturday", hours: "08:00 - 13:00" },
    { days: "Sundays & Public Holidays", hours: "Closed" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-8 lg:p-12">
      
      {/* DETAILS SIDEBAR */}
      <div className="lg:col-span-5 space-y-10">
        <div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
            Pound for Pound Gym
          </h3>
          <p className="text-sm text-zinc-400 mt-3 font-light leading-relaxed">
            Train inside Cape Town's premier heritage boxing club. Hardwood floors, classic canvas rings, and pure championship energy.
          </p>
        </div>

        <div className="space-y-8">
          {/* Address */}
          <div className="flex gap-5">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Address</h4>
              <p className="text-sm text-zinc-400 font-light">160 Bree Street, Cape Town, 8000</p>
            </div>
          </div>

          {/* Training Hours */}
          <div className="flex gap-5">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="w-full">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3">Training Hours</h4>
              <div className="space-y-3 text-sm text-zinc-400 font-light">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-zinc-900 pb-3 last:border-0 last:pb-0">
                    <span>{h.days}</span>
                    <span className="font-medium text-white">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Landmark */}
          <div className="flex gap-5">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1">Landmark</h4>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Nestled on the bustling Bree Street corridor in the heart of the CBD, close to Heritage Square.
              </p>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-2">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Pound+for+Pound+Boxing+Gym+160+Bree+Street+Cape+Town"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-zinc-800 text-white text-sm font-bold rounded-xl hover:bg-white hover:text-black transition-colors"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* MAP IFRAME */}
      <div className="lg:col-span-7 h-80 md:h-[550px] rounded-2xl overflow-hidden relative border border-zinc-900 bg-zinc-950">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.824248882046!2d18.411634575975497!3d-33.92383187320447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67663e527197%3A0xa6131825fac6e72a!2s160%20Bree%20St%2C%20Cape%20Town%20City%20Centre%2C%20Cape%20Town%2C%208000!5e0!3m2!1sen!2sza!4v1714498305881!5m2!1sen!2sza"
          className="w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity duration-500 focus:outline-none"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pound for Pound Boxing Gym map address"
        ></iframe>
      </div>

    </div>
  );
}