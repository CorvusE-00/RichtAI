import {
  ArrowRight,
  BarChart3,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Globe2,
  MessageCircle,
  UserRound,
  UsersRound,
  Zap,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { useLanguage } from '@/lib/i18n';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { copy } = useLanguage();
  const hero = copy.hero;

  return (
    <section id="anasayfa" className="hero-section relative overflow-hidden">
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

            <h1 className="hero-editorial-heading mt-7 max-w-[44rem] font-display text-[clamp(3.4rem,5.6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-snow-50">
              {hero.headline.split('\n').map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="hero-accent mt-6 max-w-[38rem] font-display text-[clamp(1.5rem,2.45vw,2.35rem)] font-medium leading-tight tracking-[-0.04em] text-teal-300">
              {hero.headlineAccent}
            </p>

            <p className="mt-5 max-w-[39rem] text-base leading-relaxed text-snow-200 sm:text-lg">
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

          <div className="hero-visual" aria-label={hero.operational.aria}>
            <div className="hero-visual__halo" aria-hidden="true" />

            <article
              data-reveal
              className="hero-overlay-card hero-channel hero-channel--website reveal"
              style={{ '--reveal-delay': '300ms' } as CSSProperties}
            >
              <span className="hero-channel__icon hero-channel__icon--website"><Globe2 aria-hidden="true" /></span>
              <span className="hero-channel__copy">
                <strong>{hero.operational.website.title}</strong>
                <small>{hero.operational.website.subtitle}</small>
              </span>
              <time>{hero.operational.website.time}</time>
            </article>

            <article
              data-reveal
              className="hero-overlay-card hero-channel hero-channel--whatsapp reveal"
              style={{ '--reveal-delay': '450ms' } as CSSProperties}
            >
              <span className="hero-channel__icon hero-channel__icon--whatsapp"><MessageCircle aria-hidden="true" /></span>
              <span className="hero-channel__copy">
                <strong>{hero.operational.whatsapp.title}</strong>
                <small>{hero.operational.whatsapp.subtitle}</small>
              </span>
              <time>{hero.operational.whatsapp.time}</time>
            </article>

            <div className="hero-timeline" role="list" aria-label={hero.operational.timelineLabel}>
              {hero.operational.timeline.map((item, index) => {
                const Icon = index === 0 ? UserRound : index === 1 ? CalendarCheck2 : CheckCircle2;
                return (
                  <div
                    key={item}
                    data-reveal
                    className="hero-timeline__step reveal"
                    style={{ '--reveal-delay': `${650 + index * 200}ms` } as CSSProperties}
                    role="listitem"
                  >
                    <span className="hero-timeline__node"><Icon aria-hidden="true" /></span>
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>

            <article
              data-reveal
              className="hero-overlay-card hero-appointment reveal"
              style={{ '--reveal-delay': '1050ms' } as CSSProperties}
            >
              <div className="hero-appointment__heading">
                <span className="hero-channel__icon hero-channel__icon--appointment"><CalendarCheck2 aria-hidden="true" /></span>
                <strong>{hero.operational.appointment.title}</strong>
                <span className="hero-appointment__status">{hero.operational.appointment.status}</span>
              </div>
              <div className="hero-appointment__body">
                <span>{hero.operational.appointment.service}</span>
                <strong>{hero.operational.appointment.day}</strong>
                <span className="hero-appointment__time"><Clock3 aria-hidden="true" /> {hero.operational.appointment.time}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
