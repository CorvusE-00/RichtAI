import { useLanguage } from '@/lib/i18n';

export function Trust() {
  const { copy } = useLanguage();
  const { founder, process, systemProof } = copy.trust;

  return (
    <section id="guven" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="trust-intro-grid">
          <div data-reveal className="reveal trust-intro">
            <span className="section-label">{copy.trust.label}</span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-snow-50 sm:text-4xl lg:text-5xl">
              {copy.trust.headline}
              <br />
              <span className="text-snow-400">{copy.trust.headlineAccent}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-snow-400 sm:text-lg">
              {copy.trust.description}
            </p>
          </div>

          <div data-reveal className="reveal trust-system-proof" aria-label={systemProof.label}>
            <div className="trust-system-proof__header">
              <span>{systemProof.label}</span>
              <span className="trust-system-proof__status">Richt Ai</span>
            </div>
            <div className="trust-system-proof__flow">
              {systemProof.items.map((item, index) => (
                <div key={item} className="trust-system-proof__step">
                  <span className="trust-system-proof__index">0{index + 1}</span>
                  <span>{item}</span>
                  {index < systemProof.items.length - 1 && <span className="trust-system-proof__arrow" aria-hidden="true">→</span>}
                </div>
              ))}
            </div>
            <p className="trust-system-proof__description">{systemProof.description}</p>
          </div>
        </div>

        <div className="trust-process-block">
          <div data-reveal className="reveal trust-process-block__heading">
            <span className="trust-process-block__kicker">{copy.trust.processLabel}</span>
            <span className="trust-process-block__rule" aria-hidden="true" />
          </div>

          <ol className="trust-process" aria-label={copy.trust.processLabel}>
            {process.map((step, index) => (
              <li
                key={step.title}
                data-reveal
                style={{ '--reveal-delay': `${index * 80}ms` } as React.CSSProperties}
                className="reveal trust-process__row"
              >
                <span className="trust-process__number">0{index + 1}</span>
                <div className="trust-process__content">
                  <h3 className="trust-process__title">{step.title}</h3>
                  <p className="trust-process__description">{step.description}</p>
                </div>
                <span className="trust-process__marker" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>

        <div data-reveal className="reveal trust-founder">
          <div className="trust-founder__portrait">
            <img
              src="/images/emre-kocaaliler-portrait.png"
              alt={founder.alt}
              loading="lazy"
              className="h-full w-full rounded-[1.25rem] border border-navy-600/70 object-cover object-center"
            />
          </div>

          <div className="trust-founder__content">
            <p className="trust-founder__label">{founder.label}</p>
            <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-snow-50 sm:text-3xl">
              {founder.name}
            </h3>
            <p className="mt-2 font-display text-sm text-teal-400">
              {founder.role}
            </p>
            <p className="trust-founder__statement">
              {founder.statement}
            </p>
            <div className="trust-founder__model">
              <p className="trust-founder__model-label">{founder.modelLabel}</p>
              <p className="trust-founder__model-description">{founder.modelDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
