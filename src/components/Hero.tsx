import { useEffect, useState } from 'react';
import { ArrowRight, Check, ShieldCheck, UserRound } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { copy, language } = useLanguage();
  const activityItems = copy.workflow.activityItems;
  const [activeActivityIndex, setActiveActivityIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(motionQuery.matches);

    updateMotionPreference();
    motionQuery.addEventListener?.('change', updateMotionPreference);

    return () => motionQuery.removeEventListener?.('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setActiveActivityIndex(activityItems.length - 1);
      return undefined;
    }

    const activityTimer = window.setInterval(() => {
      setActiveActivityIndex((currentIndex) => (currentIndex + 1) % activityItems.length);
    }, 3000);

    return () => window.clearInterval(activityTimer);
  }, [activityItems.length, prefersReducedMotion]);

  return (
    <section id="anasayfa" className={`hero-section relative overflow-hidden pt-28 pb-3 sm:pt-24 sm:pb-10 lg:pt-36 lg:pb-20 ${language === 'tr' ? 'hero-section--tr' : ''}`}>
      {/* One restrained atmospheric layer; the visual system carries the hero's detail. */}
      <div className="absolute inset-0 radial-glow opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/45 via-navy-950/80 to-navy-950 pointer-events-none" />

      <div data-reveal className="reveal relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid items-center gap-3 sm:gap-8 md:gap-14 lg:grid-cols-[0.84fr_1.16fr] xl:gap-16">
          <div className="hero-copy text-center xl:text-left">
            {/* Headline */}
            <h1 className="hero-copy__heading hero-heading mt-0 max-w-[40rem] font-display text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-[1.04] tracking-[-0.04em] text-snow-50 animate-fade-in-up animate-delay-100">
              <span className="block">{copy.hero.headline}</span>
              <span className="mt-1 block text-gradient-teal">{copy.hero.headlineAccent}</span>
            </h1>

            {/* Supporting copy */}
            <p className="hero-copy__subheadline max-w-xl text-base sm:mt-6 sm:text-lg text-snow-400 leading-relaxed animate-fade-in-up animate-delay-300">
              {copy.hero.subheadline}
            </p>

            {/* Primary action */}
            <div className="hero-copy__cta flex flex-col items-center gap-4 sm:mt-8 xl:items-start animate-fade-in-up animate-delay-500">
              <button onClick={onCTAClick} className="btn-primary group w-full sm:w-auto">
                <span>{copy.hero.cta}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Quiet reassurance and trust information */}
            <div className="hero-copy__meta hero-meta hero-meta--desktop mt-4 hidden text-center sm:mt-6 sm:block xl:text-left">
              <span className="text-snow-500 text-xs sm:text-sm">{copy.hero.duration}</span>
              <div className="hero-meta__reassurance mt-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-snow-500 text-xs sm:text-sm xl:justify-start">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400/85" />
                  <span>{copy.hero.noCommitment}</span>
                </div>
                <span className="hero-meta__separator hidden h-1 w-1 rounded-full bg-navy-500 sm:block" aria-hidden="true" />
                <div className="flex items-center gap-1.5">
                  <UserRound className="w-4 h-4 text-teal-400/85" />
                  <span>{copy.hero.direct}</span>
                </div>
              </div>
            </div>

            <div className="hero-copy__meta hero-meta hero-meta--mobile mt-3 text-center sm:hidden">
              <div className="hero-meta__mobile-row">
                <span>{copy.hero.duration}</span>
                <span aria-hidden="true">·</span>
                <span>{copy.hero.noCommitment}</span>
              </div>
              <div className="hero-meta__mobile-row hero-meta__mobile-row--direct">
                <span>{copy.hero.direct}</span>
              </div>
            </div>
          </div>

          {/* Visual-led Hero region with one compact operational proof overlay. */}
          <div className="hero-visual-region" aria-label={copy.workflow.aria}>
            <div className="hero-visual">
              <div className="hero-visual__frame">
                <img
                  src="/images/ai-operations-hero-v2.png"
                  alt="AI automation system quietly organizing business operations"
                />
              </div>

              <div className="hero-live-activity" aria-label={copy.workflow.aria}>
                <div className="hero-live-activity__header">
                  <div className="hero-live-activity__status">
                    <span className="hero-live-activity__status-dot" aria-hidden="true" />
                    <span>{copy.workflow.status}</span>
                  </div>
                  <span className="hero-live-activity__label">{copy.workflow.activityLabel}</span>
                </div>
                <div className="hero-live-activity__rows" aria-live="polite">
                  {activityItems.map((item, index) => (
                    <div
                      key={item}
                      className={`hero-live-activity__row ${index === activeActivityIndex ? 'hero-live-activity__row--active' : index < activeActivityIndex ? 'hero-live-activity__row--complete' : 'hero-live-activity__row--pending'}`}
                    >
                      {index < activeActivityIndex ? (
                        <Check className="hero-live-activity__row-check" aria-hidden="true" />
                      ) : (
                        <span className="hero-live-activity__row-dot" aria-hidden="true" />
                      )}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
