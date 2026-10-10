import {
  ArrowRight,
  CalendarDays,
  Database,
  Globe2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { copy } = useLanguage();
  const systemNodes = [
    { key: 'website', label: copy.hero.systemCanvas.nodes.website, icon: Globe2, moduleClass: 'hero-live-system__module--inbound' },
    { key: 'whatsapp', label: copy.hero.systemCanvas.nodes.whatsapp, icon: MessageCircle, moduleClass: 'hero-live-system__module--inbound' },
    { key: 'ai', label: copy.hero.systemCanvas.nodes.ai, icon: Sparkles, moduleClass: 'hero-live-system__module--core' },
    { key: 'crm', label: copy.hero.systemCanvas.nodes.crm, icon: Database, moduleClass: 'hero-live-system__module--operation' },
    { key: 'calendar', label: copy.hero.systemCanvas.nodes.calendar, icon: CalendarDays, moduleClass: 'hero-live-system__module--operation' },
    { key: 'team', label: copy.hero.systemCanvas.nodes.team, icon: Users, moduleClass: 'hero-live-system__module--team' },
  ] as const;

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

              <svg className="hero-live-system__route-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                <path className="hero-live-system__route-line" d="M 17 31 H 34 V 50 H 43" />
                <path className="hero-live-system__route-line" d="M 17 69 H 34 V 50 H 43" />
                <path className="hero-live-system__route-line" d="M 57 50 H 68 V 31 H 84" />
                <path className="hero-live-system__route-line" d="M 57 50 H 68 V 69 H 84" />
                <path className="hero-live-system__route-line hero-live-system__route-line--handoff" d="M 68 50 H 84 V 87" />
              </svg>

              <ol className="hero-live-system__route">
                {systemNodes.map(({ key, label, icon: Icon, moduleClass }) => (
                  <li key={key} className={`hero-live-system__node hero-live-system__node--${key}`}>
                    <div className={`hero-live-system__module ${moduleClass}`}>
                      <Icon className="hero-live-system__module-icon" aria-hidden="true" />
                      <span>{label}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
