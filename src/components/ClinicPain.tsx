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

        <div className="clinic-pain__content">
          <div className="clinic-pain__intro" data-reveal>
            <span className="chapter-kicker chapter-kicker--dark">{copy.clinicPain.label}</span>
            <h2 className="chapter-heading chapter-heading--dark mt-5 max-w-3xl whitespace-pre-line font-display font-semibold">
              {copy.clinicPain.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-500">{copy.clinicPain.description}</p>
          </div>

          <div className="clinic-pain__flow-copy" data-reveal aria-label={copy.clinicPain.withTitle}>
            <div className="clinic-pain__flow-heading">
              <h3>{copy.clinicPain.withTitle}</h3>
            </div>
            <ul>
              {copy.clinicPain.withSteps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="clinic-pain__reasons" data-reveal>
            {copy.clinicPain.reasons.map((reason, index) => (
              <article key={reason.title} className="clinic-pain__reason">
                <span>0{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
