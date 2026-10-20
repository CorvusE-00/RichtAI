import { useLanguage } from '@/lib/i18n';

export function PilotSection() {
  const { copy } = useLanguage();

  return (
    <section id="nasil-calisir" className="chapter chapter--bone pilot-section overflow-hidden pb-10 pt-20 sm:pb-14 sm:pt-28 lg:pb-16 lg:pt-36">
      <div className="mx-auto max-w-[82rem] px-5 sm:px-6">
        <div className="pilot-section__intro" data-reveal>
          <div className="pilot-section__number" aria-hidden="true">14</div>
          <div className="max-w-3xl">
            <span className="chapter-kicker chapter-kicker--dark">{copy.pilotSection.label}</span>
            <h2 className="chapter-heading chapter-heading--dark mt-6 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              {copy.pilotSection.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-500 sm:text-lg">{copy.pilotSection.description}</p>
          </div>
        </div>

        <div className="pilot-section__steps mt-14 border-t border-navy-700/40 sm:mt-20">
          {copy.pilotSection.steps.map((step, index) => (
            <article key={step.title} data-reveal className="pilot-section__step reveal">
              <span className="pilot-section__step-number">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="pilot-section__bottom mt-6 flex justify-end sm:mt-8">
          <p className="max-w-3xl text-left text-sm leading-relaxed text-navy-500 sm:text-right sm:text-base">{copy.pilotSection.regionLine}</p>
        </div>
      </div>
    </section>
  );
}
