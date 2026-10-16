import { ArrowRight, Check, Clock3 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function ClinicPain() {
  const { copy } = useLanguage();

  return (
    <section id="sorun" className="chapter chapter--bone clinic-pain overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[82rem] px-5 sm:px-6">
        <div className="clinic-pain__intro" data-reveal>
          <span className="chapter-kicker chapter-kicker--dark">{copy.clinicPain.label}</span>
          <h2 className="chapter-heading chapter-heading--dark mt-6 max-w-4xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            {copy.clinicPain.headline}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-500 sm:text-lg">{copy.clinicPain.description}</p>
        </div>

        <div className="clinic-pain__board mt-12 sm:mt-16" data-reveal>
          <div className="clinic-pain__board-header">
            <span>{copy.clinicPain.scenarioLabel}</span>
            <span className="clinic-pain__board-time"><Clock3 aria-hidden="true" />{copy.clinicPain.time}</span>
          </div>
          <div className="clinic-pain__comparison">
            <article className="clinic-pain__side clinic-pain__side--before">
              <div className="clinic-pain__side-heading">
                <span className="clinic-pain__side-marker" aria-hidden="true" />
                <h3>{copy.clinicPain.beforeTitle}</h3>
              </div>
              <ul>
                {copy.clinicPain.beforeItems.map((item) => (
                  <li key={item}>
                    <span className="clinic-pain__item-line" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <div className="clinic-pain__board-divider" aria-hidden="true"><ArrowRight /></div>
            <article className="clinic-pain__side clinic-pain__side--with">
              <div className="clinic-pain__side-heading">
                <span className="clinic-pain__side-marker" aria-hidden="true" />
                <h3>{copy.clinicPain.withTitle}</h3>
              </div>
              <ul>
                {copy.clinicPain.withItems.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="clinic-pain__reasons mt-10 sm:mt-14">
          {copy.clinicPain.reasons.map((reason, index) => (
            <article key={reason} data-reveal className="clinic-pain__reason reveal">
              <span>0{index + 1}</span>
              <h3>{reason}</h3>
            </article>
          ))}
        </div>

        <p data-reveal className="reveal clinic-pain__fit mt-12 max-w-4xl border-t border-navy-700/35 pt-5 text-sm leading-relaxed text-navy-500 sm:mt-16 sm:text-base">
          {copy.clinicPain.fitLine}
        </p>
      </div>
    </section>
  );
}
