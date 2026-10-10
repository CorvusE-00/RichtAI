import { ArrowRight, ShieldCheck, UserRound } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { copy } = useLanguage();

  return (
    <section
      id="anasayfa"
      className="hero-v3 v2-section-dark relative overflow-hidden"
    >
      <div className="v2-container relative">
        <div className="hero-v3__layout">
          <div className="hero-v3__copy">
            <p className="hero-v3__eyebrow">{copy.hero.eyebrow}</p>

            <h1 className="hero-v3__heading">{copy.hero.headline}</h1>

            <p className="hero-v3__support">{copy.hero.subheadline}</p>

            <div className="hero-v3__actions">
              <button onClick={onCTAClick} className="hero-v3__cta w-full sm:w-auto">
                <span>{copy.hero.cta}</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="hero-v3__meta">
              <span>{copy.hero.duration}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[var(--v2-accent-system)]" aria-hidden="true" />
                {copy.hero.noCommitment}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <UserRound className="h-4 w-4 text-[var(--v2-accent-system)]" aria-hidden="true" />
                {copy.hero.direct}
              </span>
            </div>
          </div>

          <figure className="hero-live-system" aria-labelledby="hero-live-system-label" aria-describedby="hero-live-system-description">
            <div className="hero-live-system__surface">
              <figcaption id="hero-live-system-label" className="hero-live-system__header">
                <span className="hero-live-system__header-marker" aria-hidden="true" />
                {copy.hero.systemCanvas.label}
              </figcaption>
              <span id="hero-live-system-description" className="sr-only">
                {copy.hero.systemCanvas.aria}
              </span>

              <div className="hero-live-system__body" aria-hidden="true">
                <div className="hero-live-system__region hero-live-system__region--inbound">
                  <span className="hero-live-system__rail" />
                  <span className="hero-live-system__rail hero-live-system__rail--short" />
                  <span className="hero-live-system__rail" />
                </div>

                <div className="hero-live-system__region hero-live-system__region--core">
                  <span className="hero-live-system__core-ring" />
                  <span className="hero-live-system__core-mark" />
                  <span className="hero-live-system__core-line" />
                </div>

                <div className="hero-live-system__region hero-live-system__region--operations">
                  <span className="hero-live-system__operation-row" />
                  <span className="hero-live-system__operation-row hero-live-system__operation-row--wide" />
                  <span className="hero-live-system__operation-row" />
                </div>

                <div className="hero-live-system__region hero-live-system__region--handoff">
                  <span className="hero-live-system__handoff-line" />
                  <span className="hero-live-system__handoff-marker" />
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
