import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function ClinicPain() {
  const { copy } = useLanguage();

  return (
    <section id="sorun" className="chapter clinic-pain overflow-hidden">
      <div className="clinic-pain__stage">
        <img
          className="clinic-pain__art"
          src="/images/richtai-clinic-flow-section.png"
          alt=""
          aria-hidden="true"
        />

        <div className="clinic-pain__content mx-auto max-w-[82rem] px-5 sm:px-6">
          <div className="clinic-pain__intro" data-reveal>
            <span className="chapter-kicker chapter-kicker--dark">{copy.clinicPain.label}</span>
            <h2 className="chapter-heading chapter-heading--dark mt-6 max-w-4xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              {copy.clinicPain.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-500 sm:text-lg">{copy.clinicPain.description}</p>
          </div>

          <article className="clinic-pain__flow-panel" data-reveal aria-label={copy.clinicPain.withTitle}>
            <div className="clinic-pain__flow-heading">
              <h3>{copy.clinicPain.withTitle}</h3>
              <span aria-hidden="true" />
            </div>
            <ul>
              {copy.clinicPain.withItems.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <div className="clinic-pain__reasons mx-auto max-w-[82rem] px-5 sm:px-6">
        {copy.clinicPain.reasons.map((reason, index) => (
          <article key={reason} data-reveal className="clinic-pain__reason reveal">
            <span>0{index + 1}</span>
            <h3>{reason}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
