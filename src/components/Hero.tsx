import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { copy } = useLanguage();
  const hero = copy.hero;

  return (
    <section id="anasayfa" aria-labelledby="hero-title" className="hero-section relative overflow-hidden">
      <div className="hero-section__background pointer-events-none absolute inset-x-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full px-5 sm:px-6 lg:px-[8vw]">
        <div className="hero-layout">
          <div className="hero-copy">
            <span className="hero-kicker">
              <span className="hero-kicker__dot" aria-hidden="true" />
              {hero.pilotBadge}
            </span>

            <h1 id="hero-title" className="hero-editorial-heading mt-6 font-display text-[clamp(3.25rem,3.6vw,4.4rem)] font-semibold leading-[1] tracking-[-0.06em] text-snow-50 max-[767px]:text-[clamp(2.5rem,9.8vw,2.75rem)] max-[767px]:leading-[0.98]">
              {hero.headline.split('\n').map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="hero-accent mt-5 font-display text-[clamp(1.75rem,2vw,2.05rem)] font-medium leading-tight tracking-[-0.04em] text-teal-300 max-[767px]:text-[clamp(1.4rem,6.6vw,1.65rem)] max-[767px]:leading-[1.1]">
              {hero.headlineAccent}
            </p>

            <p className="mt-4 max-w-[31rem] text-base leading-relaxed text-snow-200 sm:text-lg">
              {hero.subheadline}
            </p>

            <div className="hero-mobile-cta">
              <button onClick={onCTAClick} className="btn-primary group mt-7 min-h-[62px] px-6 text-[1.02rem] max-[767px]:mt-0 max-[767px]:min-h-[58px] max-[767px]:w-full max-[767px]:px-4 max-[767px]:text-base">
                <span>{hero.cta}</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>

          </div>

          <div className="hero-mobile-visual" aria-hidden="true">
            <img
              src="/images/richtai-hero-mobile-v2.png"
              alt=""
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
