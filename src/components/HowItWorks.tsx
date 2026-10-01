import { useLanguage } from '@/lib/i18n';

export function HowItWorks() {
  const { copy } = useLanguage();

  return (
    <section id="nasil-calisir" className="section-tone section-tone--how relative overflow-hidden py-16 sm:py-20">
      <div className="section-surface section-surface--how absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="how-intro">
          <div data-reveal className="reveal how-intro__copy">
            <span className="section-label">{copy.how.label}</span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-snow-50 sm:text-4xl lg:text-5xl">
              {copy.how.headline}
              <br />
              <span className="text-snow-400">{copy.how.headlineAccent}</span>
            </h2>
          </div>
          <p data-reveal className="reveal how-intro__description text-base leading-relaxed text-snow-400 sm:text-lg">
            {copy.how.description}
          </p>
        </div>

        <div className="how-journey" aria-label={copy.how.label}>
          {copy.how.steps.map((step, index) => (
            <article
              key={step.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 120}ms` } as React.CSSProperties}
              className="reveal how-stage"
            >
              <div className="how-stage__rail">
                <span className="how-stage__number">0{index + 1}</span>
                {index < copy.how.steps.length - 1 && <span className="how-stage__connector" aria-hidden="true" />}
              </div>
              <div className="how-stage__body">
                <span className="how-stage__meta">{step.meta}</span>
                <h3 className="how-stage__title">{step.title}</h3>
                <p className="how-stage__description">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
