import { Check, Clock3, Database, MonitorSmartphone, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const outcomeIcons = [Clock3, Users, Database, Sparkles];

export function WhyBuy() {
  const { copy } = useLanguage();

  return (
    <section id="neden" className="section-tone relative overflow-hidden border-t border-navy-700/55 py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-20">
          <div data-reveal className="reveal max-w-xl">
            <span className="section-label">{copy.whyBuy.label}</span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-snow-50 sm:text-4xl lg:text-5xl">
              {copy.whyBuy.headline}
              <br />
              <span className="text-snow-400">{copy.whyBuy.headlineAccent}</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-snow-400 sm:text-lg">
              {copy.whyBuy.description}
            </p>
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {copy.whyBuy.outcomes.map((outcome, index) => {
              const Icon = outcomeIcons[index];
              return (
                <article
                  key={outcome.title}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
                  className="reveal border-t border-navy-700/65 py-6 first:pt-0 sm:first:pt-6"
                >
                  <Icon className="h-5 w-5 text-teal-300" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-medium leading-snug text-snow-100">
                    {outcome.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-snow-400">
                    {outcome.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div data-reveal className="reveal mt-16 border-t border-navy-700/65 pt-6 sm:mt-20 sm:pt-8">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3 text-xs font-display uppercase tracking-[0.14em] text-snow-500">
                <MonitorSmartphone className="h-4 w-4 text-teal-300" strokeWidth={1.6} aria-hidden="true" />
                <span>{copy.whyBuy.fitLabel}</span>
              </div>
            </div>
            <div>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {copy.whyBuy.fitItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-snow-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" strokeWidth={1.8} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl border-l border-teal-400/45 pl-4 text-sm leading-relaxed text-snow-500">
                {copy.whyBuy.fitNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
