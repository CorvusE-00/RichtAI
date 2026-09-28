import { Quote, MapPin, User, Star, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function Trust() {
  const { copy } = useLanguage();
  const { founder } = copy.trust;

  return (
    <section id="guven" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div data-reveal className="reveal text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">{copy.trust.label}</span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-snow-50 leading-tight tracking-tight">
            {copy.trust.headline}
            <br />
            <span className="text-snow-400">{copy.trust.headlineAccent}</span>
          </h2>
          <p className="mt-5 text-snow-400 text-base sm:text-lg leading-relaxed">
            {copy.trust.description}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {copy.trust.testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
              className="reveal card-base card-lift p-7 flex flex-col"
            >
              <Quote className="w-8 h-8 text-teal-500/30 mb-4" />
              <div className="flex items-center gap-1 mb-4" aria-label={copy.trust.testimonialsAria}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="w-3.5 h-3.5 fill-teal-400 text-teal-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-snow-300 text-sm leading-relaxed flex-1 italic">
                "{testimonial.text}"
              </p>
              <div className="mt-6 pt-5 border-t border-navy-600/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-700 border border-navy-600 flex items-center justify-center">
                  <User className="w-5 h-5 text-snow-400" />
                </div>
                <div>
                  <div className="font-display text-sm font-medium text-snow-100">
                    {testimonial.name}
                  </div>
                  <div className="text-snow-500 text-xs flex items-center gap-1 mt-0.5">
                    {testimonial.role}
                    <span className="w-1 h-1 rounded-full bg-navy-500" />
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder logo strip */}
        <div data-reveal className="reveal mb-6 rounded-2xl border border-navy-600/50 bg-navy-800/35 px-6 py-6 sm:px-8">
          <p className="text-center text-xs font-display uppercase tracking-[0.18em] text-snow-500 mb-5">
            {copy.trust.clients}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            {copy.trust.clientNames.map((name) => (
              <div key={name} className="rounded-lg border border-navy-600/50 bg-navy-900/40 px-3 py-3 text-xs font-display text-snow-400">
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Founder card */}
        <div data-reveal className="reveal card-base p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-teal-500/15 rounded-2xl blur-xl" />
            <img
              src="/images/emre-kocaaliler-portrait.png"
              alt={founder.alt}
              loading="lazy"
              className="relative h-28 w-28 rounded-2xl border border-teal-400/30 object-cover object-center shadow-[0_0_30px_rgba(20,184,166,0.12)] sm:h-32 sm:w-32"
            />
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-medium text-snow-50 mb-2">
              {founder.name}
            </h3>
            <p className="text-teal-400 text-sm font-display mb-3">
              {founder.role}
            </p>
            <p className="text-snow-400 text-sm leading-relaxed max-w-xl">
              {founder.description}
            </p>
            <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-2">
              {founder.skills.map((skill) => (
                <span key={skill} className="inline-flex items-center gap-1.5 rounded-full border border-navy-600/60 bg-navy-900/40 px-3 py-1.5 text-xs text-snow-400">
                  <Sparkles className="w-3 h-3 text-teal-400" aria-hidden="true" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div data-reveal className="reveal mt-6 text-center">
          <h3 className="font-display text-xl sm:text-2xl font-medium text-snow-100">{copy.trust.whySolo}</h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm leading-relaxed text-snow-500">
            {copy.trust.whySoloDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
