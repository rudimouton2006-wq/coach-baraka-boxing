import { MapPin, Clock, Compass, ExternalLink } from 'lucide-react';

export default function LocationDetails() {
  const mapCenterLat = -33.9236;
  const mapCenterLng = 18.4178; // Bree Street

  const hours = [
    { days: "Monday - Thursday", hours: "06:00 - 20:00" },
    { days: "Friday", hours: "06:00 - 18:00" },
    { days: "Saturday", hours: "08:00 - 13:00" },
    { days: "Sundays & Public Holidays", hours: "Closed" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 md:p-8">
      {/* Details sidebar */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold">HQ LOCATION</span>
          <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-wide mt-1.5">
            POUND FOR POUND BOXING GYM
          </h3>
          <p className="text-sm text-zinc-400 mt-2 font-sans leading-relaxed">
            Train inside Cape Town's premier heritage boxing club. Hardwood floors, heavy chain bags, classic canvas rings, and pure championship energy.
          </p>
        </div>

        {/* Address & Quick Links */}
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl text-yellow-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">Address</h4>
              <p className="text-sm text-zinc-400 mt-0.5 font-sans leading-relaxed">
                160 Bree Street, Cape Town, 8000
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl text-yellow-400 shrink-0">
              <Clock className="w-5 h-5" />
            </span>
            <div className="w-full">
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">Training Hours</h4>
              <div className="mt-1 flex flex-col gap-1 w-full text-xs text-zinc-400">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-zinc-900 pb-1 last:border-0">
                    <span>{h.days}</span>
                    <span className="font-mono text-zinc-300 font-medium">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl text-yellow-400 shrink-0">
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">Gym Landmark</h4>
              <p className="text-sm text-zinc-400 mt-0.5 font-sans leading-relaxed">
                Nestled on the bustling Bree Street corridor in the heart of CBD, close to Heritage Square.
              </p>
            </div>
          </div>
        </div>

        {/* Action Link to real google maps */}
        <div className="pt-2">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=Pound+for+Pound+Boxing+Gym+160+Bree+Street+Cape+Town`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-mono font-bold tracking-wider uppercase rounded-xl transition-all duration-300"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Embedded Google Map iframe replacement & custom graphic placeholder */}
      <div className="lg:col-span-7 h-80 md:h-[400px] rounded-xl overflow-hidden relative border border-zinc-800/80 bg-zinc-900/60 flex flex-col">
        {/* Iframe with real google maps styled inside a beautiful frame */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.824248882046!2d18.411634575975497!3d-33.92383187320447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67663e527197%3A0xa6131825fac6e72a!2s160%20Bree%20St%2C%20Cape%20Town%20City%20Centre%2C%20Cape%20Town%2C%208000!5e0!3m2!1sen!2sza!4v1714498305881!5m2!1sen!2sza"
          className="w-full h-full grayscale invert opacity-75 contrast-125 focus:outline-none"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pound for Pound Boxing Gym map address"
        ></iframe>

        {/* Aesthetic technical bezel overlay */}
        <div className="absolute top-3 left-3 bg-zinc-950/90 border border-zinc-800 text-white px-3 py-1.5 rounded text-[10px] font-mono tracking-widest uppercase pointer-events-none flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" />
          <span>SYS_LOC: -33.9238 / 18.4116</span>
        </div>
      </div>
    </div>
  );
}
