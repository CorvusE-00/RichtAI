import { ArrowRight, ShieldCheck, UserRound } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { copy, language } = useLanguage();

  return (
    <section
      id="anasayfa"
      className={[
        'hero-section hero-v2 relative overflow-hidden bg-[var(--v2-surface-carbon)] pt-28 pb-3 sm:pt-24 sm:pb-10 lg:pt-36 lg:pb-20',
        language === 'tr' ? 'hero-section--tr' : '',
      ].join(' ')}
    >
      <div className="v2-container relative">
        <div className="hero-v2__layout grid items-center gap-8 md:gap-14 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] xl:gap-16">
          <div className="hero-v2__copy text-center xl:text-left">
            <h1 className="hero-v2__heading max-w-[40rem] font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--v2-text-on-dark-primary)] sm:text-5xl xl:text-6xl 2xl:text-7xl">
              <span className="block">{copy.hero.headline}</span>
              <span className="block">{copy.hero.headlineAccent}</span>
            </h1>

            <p className="hero-v2__support mt-4 max-w-xl text-base leading-relaxed text-[var(--v2-text-on-dark-secondary)] sm:mt-6 sm:text-lg">
              {copy.hero.subheadline}
            </p>

            <div className="hero-v2__actions mt-6 flex flex-col items-center gap-4 sm:mt-8 xl:items-start">
              <button onClick={onCTAClick} className="btn-primary w-full sm:w-auto">
                <span>{copy.hero.cta}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="hero-v2__meta mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-[var(--v2-border-dark)] pt-3 text-xs text-[var(--v2-text-on-dark-secondary)] sm:mt-6 sm:text-sm xl:justify-start">
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

          <figure className="hero-system mt-2 min-w-0 lg:mt-0" aria-label={copy.hero.systemCanvas.aria}>
            <figcaption className="hero-system__label mb-3 flex items-center gap-2 text-[11px] font-display uppercase tracking-[0.14em] text-[var(--v2-text-on-dark-secondary)]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--v2-accent-system)]" aria-hidden="true" />
              {copy.hero.systemCanvas.label}
            </figcaption>
            <div className="hero-system__stage min-h-[18rem] rounded-2xl border border-[var(--v2-border-dark)] bg-[var(--v2-surface-graphite)]" aria-hidden="true" />
          </figure>
        </div>
      </div>
    </section>
  );
}
