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

            <h1 id="hero-title" className="hero-editorial-heading mt-6 font-display text-[clamp(3.25rem,3.6vw,4.4rem)] font-semibold leading-[1] tracking-[-0.06em] text-snow-50">
              {hero.headline.split('\n').map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="hero-accent mt-5 font-display text-[clamp(1.75rem,2vw,2.05rem)] font-medium leading-tight tracking-[-0.04em] text-teal-300">
              {hero.headlineAccent}
            </p>

            <p className="mt-4 max-w-[31rem] text-base leading-relaxed text-snow-200 sm:text-lg">
              {hero.subheadline}
            </p>

            <div className="hero-cta-row mt-7 flex items-stretch gap-3">
              <button onClick={onCTAClick} className="btn-primary group min-h-[60px] px-5 text-base">
                <span>{hero.cta}</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <a
                href="https://dental-teal-alpha.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hero-secondary-cta inline-flex min-h-[60px] items-center justify-center gap-2 rounded-xl border border-snow-100/35 bg-navy-950/35 px-5 font-display text-[1.02rem] font-medium text-snow-50 transition-colors duration-300 hover:border-teal-300/70 hover:bg-navy-950/60 hover:text-teal-100"
              >
                <span className="hero-demo-play" aria-hidden="true">▶</span>
                {hero.secondaryCta}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
