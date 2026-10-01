import { useLanguage } from '@/lib/i18n';

export function Solution() {
  const { copy } = useLanguage();
  const capabilities = copy.solution.capabilities;

  return (
    <section id="cozum" className="section-tone section-tone--solution relative overflow-hidden py-16 sm:py-20">
      <div className="section-surface section-surface--solution absolute inset-0" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div data-reveal className="reveal max-w-3xl mb-12 sm:mb-14">
          <span className="section-label">{copy.solution.label}</span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-snow-50 leading-tight tracking-tight">
            {copy.solution.headline}
            <br />
            <span className="text-gradient-teal">{copy.solution.headlineAccent}</span>
          </h2>
          <p className="mt-5 text-snow-400 text-base sm:text-lg leading-relaxed">
            {copy.solution.description}
          </p>
        </div>

        <div className="capability-sequence">
          {capabilities.map((capability, index) => (
            <article
              key={capability.label}
              data-reveal
              style={{ '--reveal-delay': `${index * 100}ms` } as React.CSSProperties}
              className="reveal capability-band"
            >
              <div className="capability-band__copy">
                <div className="capability-band__eyebrow">
                  <span className="capability-band__index">0{index + 1}</span>
                  <span>{capability.label}</span>
                </div>
                <h3 className="capability-band__title">{capability.title}</h3>
                <p className="capability-band__description">{capability.description}</p>
              </div>

              <div className={`capability-visual capability-visual--${index + 1}`} aria-label={capability.visualLabel}>
                <div className="capability-fragment__header">
                  <span>{capability.visualLabel}</span>
                  <span className="capability-fragment__signal" aria-hidden="true" />
                </div>

                {index === 0 && (
                  <div className="capability-interaction">
                    <div className="capability-interaction__steps">
                      {capability.visualItems.map((item, itemIndex) => (
                        <div key={item} className="capability-interaction__step">
                          <span className="capability-interaction__marker" aria-hidden="true">{itemIndex + 1}</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="capability-fragment__meta">{capability.visualMeta}</div>
                  </div>
                )}

                {index === 1 && (
                  <div className="capability-automation">
                    <div className="capability-automation__steps">
                      {capability.visualItems.map((item, itemIndex) => (
                        <div key={item} className="capability-automation__step">
                          <span className="capability-automation__marker" aria-hidden="true" />
                          <span>{item}</span>
                          {itemIndex < capability.visualItems.length - 1 && <span className="capability-automation__arrow" aria-hidden="true">→</span>}
                        </div>
                      ))}
                    </div>
                    <div className="capability-fragment__meta">{capability.visualMeta}</div>
                  </div>
                )}

                {index === 2 && (
                  <div className="capability-experience">
                    <div className="capability-experience__rail" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="capability-experience__items">
                      {capability.visualItems.map((item, itemIndex) => (
                        <div key={item} className={`capability-experience__item ${itemIndex === 2 ? 'is-active' : ''}`}>
                          <span>{item}</span>
                          <span aria-hidden="true">{itemIndex === 2 ? '↗' : '·'}</span>
                        </div>
                      ))}
                    </div>
                    <div className="capability-fragment__meta">{capability.visualMeta}</div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
