import { useLanguage } from '@/lib/i18n';

export function Problem() {
  const { copy } = useLanguage();
  const incidents = copy.problem.incidents;

  return (
    <section id="sorun" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div data-reveal className="reveal lg:sticky lg:top-28">
            <span className="section-label">{copy.problem.label}</span>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-snow-50 leading-tight tracking-tight">
              {copy.problem.headline}
              <br />
              <span className="text-snow-400">{copy.problem.headlineAccent}</span>
            </h2>
            <p className="mt-5 text-snow-400 text-base sm:text-lg leading-relaxed">
              {copy.problem.description}
            </p>
            <p className="problem-prompt mt-7 text-sm sm:text-base font-display">
              <span className="problem-prompt__line" aria-hidden="true" />
              <span>{copy.problem.prompt}</span>
            </p>
          </div>

          <div data-reveal className="reveal problem-board" aria-label={copy.problem.prompt}>
            <div className="problem-board__header">
              <div className="problem-board__title">
                <span className="problem-board__dot" aria-hidden="true" />
                <span>{copy.problem.label}</span>
              </div>
              <span className="problem-board__caption">{copy.problem.exampleLabel}</span>
            </div>

            <div className="problem-board__body">
              {incidents.map((incident, index) => (
                <article
                  key={incident.label}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
                  className={`reveal problem-incident ${index === 0 || index === 2 ? 'problem-incident--focus' : ''}`}
                >
                  <div className="problem-incident__intro">
                    <div className="problem-incident__label">
                      <span className="problem-incident__label-dot" aria-hidden="true" />
                      <span>{incident.label}</span>
                    </div>
                    <h3 className="problem-incident__title">{incident.title}</h3>
                    <p className="problem-incident__detail">{incident.detail}</p>
                  </div>

                  <div className="problem-incident__fragment">
                    {index === 0 && (
                      <>
                        <div className="problem-fragment__row">
                          <span>{incident.timeStart}</span>
                          <span>{incident.timeStartLabel}</span>
                        </div>
                        <p className="problem-fragment__message">{incident.detail}</p>
                        <div className="problem-fragment__row problem-fragment__row--muted">
                          <span>{incident.timeEnd}</span>
                          <span>{incident.timeEndLabel}</span>
                        </div>
                      </>
                    )}

                    {index === 1 && (
                      <>
                        <div className="problem-route" aria-label={incident.detail}>
                          {incident.detail.split(' → ').map((step, stepIndex, steps) => (
                            <span key={step} className="problem-route__step">
                              <span>{step}</span>
                              {stepIndex < steps.length - 1 && <span className="problem-route__arrow" aria-hidden="true">→</span>}
                            </span>
                          ))}
                        </div>
                        <div className="problem-fragment__caption">{incident.timeStartLabel} · {incident.timeEndLabel}</div>
                      </>
                    )}

                    {index === 2 && (
                      <>
                        <div className="problem-fragment__row">
                          <span>{incident.timeStart}</span>
                          <span>{incident.timeStartLabel}</span>
                        </div>
                        <div className="problem-fragment__warning">{incident.detail.split(' · ')[0]}</div>
                        <div className="problem-fragment__warning problem-fragment__warning--muted">{incident.detail.split(' · ')[1]}</div>
                        <div className="problem-fragment__row problem-fragment__row--muted">
                          <span>{incident.timeEnd}</span>
                          <span>{incident.timeEndLabel}</span>
                        </div>
                      </>
                    )}

                    {index === 3 && (
                      <>
                        <div className="problem-fragment__comparison">
                          <span>{incident.timeStart}</span>
                          <span>{incident.timeStartLabel}</span>
                        </div>
                        <div className="problem-fragment__comparison problem-fragment__comparison--muted">
                          <span>{incident.timeEnd}</span>
                          <span>{incident.timeEndLabel}</span>
                        </div>
                      </>
                    )}

                    <div className="problem-incident__status">
                      <span className="problem-incident__status-dot" aria-hidden="true" />
                      <span>{incident.status}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
