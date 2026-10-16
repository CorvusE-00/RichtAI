import { ArrowRight, Check, Circle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { copy, language } = useLanguage();
  const stage = copy.hero.stage;

  return (
    <section id="anasayfa" className="hero-section relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
      <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-section__rule pointer-events-none absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[82rem] px-5 sm:px-6">
        <div data-reveal className="reveal mx-auto max-w-[58rem] text-center">
          <span className="hero-kicker">
            <span className="hero-kicker__dot" aria-hidden="true" />
            {copy.hero.pilotBadge}
          </span>
          <h1 className="hero-editorial-heading mx-auto mt-7 max-w-[58rem] font-display text-[clamp(3.25rem,8vw,6.25rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-snow-50">
            <span className="block">{copy.hero.headline}</span>
            <span className="mt-3 block text-teal-300">{copy.hero.headlineAccent}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-[46rem] text-base leading-relaxed text-snow-300 sm:text-lg lg:text-xl">
            {copy.hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button onClick={onCTAClick} className="btn-primary group min-h-14 w-full sm:w-auto">
              <span>{copy.hero.cta}</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <a
              href="https://dental-teal-alpha.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-xl border border-navy-600 bg-navy-900 px-6 py-4 font-display text-base font-medium text-snow-100 transition-colors duration-300 hover:border-teal-400/60 hover:text-teal-200 sm:w-auto"
            >
              {copy.hero.secondaryCta}
            </a>
          </div>
          <p className="mt-5 text-sm text-snow-500 sm:text-base">{copy.hero.reassurance}</p>
        </div>

        <div data-reveal className="reveal mt-14 sm:mt-16 lg:mt-20" aria-label={stage.aria}>
          <div className="hero-product-stage">
            <div className="hero-product-stage__browser">
              <div className="hero-product-stage__bar">
                <div className="hero-product-stage__window-controls" aria-hidden="true">
                  <Circle className="text-teal-300" />
                  <Circle />
                  <Circle />
                </div>
                <span className="hero-product-stage__url">{stage.browserUrl}</span>
                <span className="hero-product-stage__status">{stage.browserStatus}</span>
              </div>
              <div className="hero-product-stage__browser-body">
                <img src="/images/luma-dental-prototype-preview.png" alt={stage.browserLabel} />
                <div className="hero-product-stage__browser-caption">
                  <span>{stage.browserLabel}</span>
                  <span className="hero-product-stage__live"><span aria-hidden="true" />{stage.liveLabel}</span>
                </div>
              </div>
            </div>

            <article className="hero-product-stage__assistant">
              <div className="hero-product-stage__panel-heading">
                <div className="hero-product-stage__avatar">R</div>
                <div>
                  <p>{stage.assistantTitle}</p>
                  <span>{stage.assistantStatus}</span>
                </div>
                <span className="hero-product-stage__panel-live" aria-hidden="true" />
              </div>
              <div className="hero-product-stage__messages">
                <div className="hero-product-stage__message hero-product-stage__message--patient">{stage.patientMessage}</div>
                <div className="hero-product-stage__message hero-product-stage__message--ai">{stage.aiMessage}</div>
                <div className="hero-product-stage__handoff"><Check aria-hidden="true" />{stage.handoffLabel}</div>
              </div>
            </article>

            <article className="hero-product-stage__result">
              <div className="hero-product-stage__result-heading">
                <span>{stage.resultTitle}</span>
                <span className="hero-product-stage__result-mark" aria-hidden="true">✓</span>
              </div>
              <dl>
                {stage.resultItems.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </article>

            <div className="hero-product-stage__system-detail" aria-hidden="true">
              <span>{stage.systemLabel}</span>
              <img src="/images/richtai-signal-monolith-visual.png" alt="" />
            </div>
          </div>
          <p className="hero-product-stage__caption">{language === 'tr' ? 'Yeni hasta iletişimi için tek operasyonel görünüm.' : 'One operational view for new-patient communication.'}</p>
        </div>
      </div>
    </section>
  );
}
