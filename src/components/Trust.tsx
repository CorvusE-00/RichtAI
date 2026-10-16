import { Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function Trust() {
  const { copy } = useLanguage();
  const { founder } = copy.trust;

  return (
    <section id="guven" className="chapter chapter--bone trust-section overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[82rem] px-5 sm:px-6">
        <div className="trust-section__grid">
          <div data-reveal className="reveal trust-section__portrait-wrap">
            <img src="/images/emre-kocaaliler-portrait.png" alt={founder.alt} className="trust-section__portrait" loading="lazy" />
            <span className="trust-section__portrait-label">{founder.label}</span>
          </div>
          <div data-reveal className="reveal trust-section__copy">
            <span className="chapter-kicker chapter-kicker--dark">{copy.trust.label}</span>
            <h2 className="chapter-heading chapter-heading--dark mt-6 max-w-2xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              {copy.trust.headline}
              <span className="mt-2 block text-navy-500">{copy.trust.headlineAccent}</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">{copy.trust.description}</p>
            <p className="mt-5 max-w-xl border-l-2 border-teal-600 pl-4 text-sm leading-relaxed text-navy-600 sm:text-base">{copy.trust.pilotNote}</p>

            <div className="trust-section__founder mt-10 border-t border-navy-700/35 pt-7 sm:mt-14 sm:pt-9">
              <h3 className="font-display text-2xl font-medium tracking-tight text-navy-950 sm:text-3xl">{founder.name}</h3>
              <p className="mt-2 text-sm font-medium text-teal-700">{founder.role}</p>
              <p className="mt-6 max-w-2xl font-display text-xl leading-relaxed tracking-tight text-navy-900 sm:text-2xl">{founder.statement}</p>
            </div>

            <ul className="trust-section__principles mt-9 grid gap-3 border-t border-navy-700/35 pt-6 sm:grid-cols-3 sm:gap-4">
              {copy.trust.principles.map((principle) => <li key={principle}><Check aria-hidden="true" />{principle}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
