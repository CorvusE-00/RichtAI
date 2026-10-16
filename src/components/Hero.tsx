import { ArrowRight, BarChart3, UsersRound, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { copy } = useLanguage();
  const hero = copy.hero;

  return (
    <section id="anasayfa" aria-labelledby="hero-title" className="hero-section relative overflow-hidden">
      <div className="hero-section__background pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-section__shade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-section__rule pointer-events-none absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[90rem] px-5 sm:px-6 lg:px-8">
        <div className="hero-layout">
          <div data-reveal className="hero-copy reveal">
            <span className="hero-kicker">
              <span className="hero-kicker__dot" aria-hidden="true" />
              {hero.pilotBadge}
            </span>

            <h1 id="hero-title" className="hero-editorial-heading mt-7 max-w-[34rem] font-display text-[clamp(3.4rem,4.2vw,4.8rem)] font-semibold leading-[1] tracking-[-0.065em] text-snow-50">
              {hero.headline.split('\n').map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="hero-accent mt-6 max-w-[34rem] font-display text-[clamp(2rem,2.35vw,2.35rem)] font-medium leading-tight tracking-[-0.04em] text-teal-300">
              {hero.headlineAccent}
            </p>

            <p className="mt-5 max-w-[32rem] text-base leading-relaxed text-snow-200 sm:text-lg">
              {hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button onClick={onCTAClick} className="btn-primary group min-h-14 w-full sm:w-auto">
                <span>{hero.cta}</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <a
                href="https://dental-teal-alpha.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border border-snow-100/35 bg-navy-950/35 px-6 py-4 font-display text-base font-medium text-snow-50 transition-colors duration-300 hover:border-teal-300/70 hover:bg-navy-950/60 hover:text-teal-100 sm:w-auto"
              >
                <span className="hero-demo-play" aria-hidden="true">▶</span>
                {hero.secondaryCta}
              </a>
            </div>

            <p className="mt-4 text-sm text-snow-300 sm:text-base">{hero.reassurance}</p>

            <div className="hero-benefits mt-12 border-t border-snow-100/20 pt-6 sm:mt-14">
              {hero.benefits.map((benefit, index) => {
                const Icon = index === 0 ? Zap : index === 1 ? UsersRound : BarChart3;
                return (
                  <div key={benefit} className="hero-benefit">
                    <span className="hero-benefit__icon"><Icon aria-hidden="true" /></span>
                    <span>{benefit}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
