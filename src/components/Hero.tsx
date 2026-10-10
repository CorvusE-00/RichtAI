import {
  ArrowRight,
  CalendarDays,
  Database,
  Globe2,
  MessageCircle,
  ShieldCheck,
  UserRound,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n';

interface HeroProps {
  onCTAClick: () => void;
}

type HeroSystemPhase = 'idle' | 'incoming' | 'processing' | 'operations' | 'handoff' | 'settle';
type HeroInboundSource = 'website' | 'whatsapp';

export function Hero({ onCTAClick }: HeroProps) {
  const { copy } = useLanguage();
  const [isReady, setIsReady] = useState(false);
  const [phase, setPhase] = useState<HeroSystemPhase>('idle');
  const [activeSource, setActiveSource] = useState<HeroInboundSource>('website');
  const systemNodes = [
    { key: 'website', label: copy.hero.systemCanvas.nodes.website, icon: Globe2, moduleClass: 'hero-live-system__module--inbound' },
    { key: 'whatsapp', label: copy.hero.systemCanvas.nodes.whatsapp, icon: MessageCircle, moduleClass: 'hero-live-system__module--inbound' },
    { key: 'ai', label: copy.hero.systemCanvas.nodes.ai, icon: null, moduleClass: 'hero-live-system__module--core' },
    { key: 'crm', label: copy.hero.systemCanvas.nodes.crm, icon: Database, moduleClass: 'hero-live-system__module--operation' },
    { key: 'calendar', label: copy.hero.systemCanvas.nodes.calendar, icon: CalendarDays, moduleClass: 'hero-live-system__module--operation' },
    { key: 'team', label: copy.hero.systemCanvas.nodes.team, icon: Users, moduleClass: 'hero-live-system__module--team' },
  ] as const;

  useEffect(() => {
    let cancelled = false;
    let readyTimer: number | undefined;
    let phaseTimer: number | undefined;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const clearTimers = () => {
      if (readyTimer !== undefined) window.clearTimeout(readyTimer);
      if (phaseTimer !== undefined) window.clearTimeout(phaseTimer);
      readyTimer = undefined;
      phaseTimer = undefined;
    };

    const runCycle = (source: HeroInboundSource) => {
      if (cancelled || motionQuery.matches) return;

      setActiveSource(source);
      setPhase('incoming');
      phaseTimer = window.setTimeout(() => {
        if (cancelled) return;
        setPhase('processing');
        phaseTimer = window.setTimeout(() => {
          if (cancelled) return;
          setPhase('operations');
          phaseTimer = window.setTimeout(() => {
            if (cancelled) return;
            setPhase('handoff');
            phaseTimer = window.setTimeout(() => {
              if (cancelled) return;
              setPhase('settle');
              phaseTimer = window.setTimeout(() => {
                runCycle(source === 'website' ? 'whatsapp' : 'website');
              }, 1700);
            }, 950);
          }, 1200);
        }, 1350);
      }, 850);
    };

    const startEntrance = () => {
      clearTimers();
      setIsReady(false);
      setPhase('idle');
      readyTimer = window.setTimeout(() => {
        if (cancelled || motionQuery.matches) return;
        setIsReady(true);
        phaseTimer = window.setTimeout(() => runCycle('website'), 900);
      }, 80);
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        clearTimers();
        setIsReady(true);
        setPhase('idle');
      } else {
        startEntrance();
      }
    };

    motionQuery.addEventListener('change', handleMotionChange);

    if (motionQuery.matches) {
      setIsReady(true);
    } else {
      startEntrance();
    }

    return () => {
      cancelled = true;
      clearTimers();
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <section
      id="anasayfa"
      className={`hero-v3 v2-section-dark relative overflow-hidden ${isReady ? 'hero-v3--ready' : ''}`}
    >
      <div className="v2-container relative">
        <div className="hero-v3__layout">
          <div className="hero-v3__copy">
            <div className="hero-v3__intro">
              <p className="hero-v3__eyebrow">{copy.hero.eyebrow}</p>
              <h1 className="hero-v3__heading">{copy.hero.headline}</h1>
            </div>

            <div className="hero-v3__details">
              <p className="hero-v3__support">{copy.hero.subheadline}</p>

              <div className="hero-v3__actions">
                <button onClick={onCTAClick} className="hero-v3__cta w-full sm:w-auto">
                  <span>{copy.hero.cta}</span>
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <ul className="hero-v3__meta">
                <li>{copy.hero.duration}</li>
                <li>
                  <ShieldCheck className="h-4 w-4 text-[var(--v2-accent-system)]" aria-hidden="true" />
                  {copy.hero.noCommitment}
                </li>
                <li>
                  <UserRound className="h-4 w-4 text-[var(--v2-accent-system)]" aria-hidden="true" />
                  {copy.hero.direct}
                </li>
              </ul>
            </div>
          </div>

          <figure
            className={`hero-live-system ${isReady ? 'hero-live-system--ready' : ''}`}
            data-phase={phase}
            data-source={activeSource}
            aria-labelledby="hero-live-system-label"
            aria-describedby="hero-live-system-description"
          >
            <div className="hero-live-system__surface">
              <figcaption id="hero-live-system-label" className="hero-live-system__header">
                <span className="hero-live-system__header-marker" aria-hidden="true" />
                {copy.hero.systemCanvas.label}
              </figcaption>
              <span id="hero-live-system-description" className="sr-only">
                {copy.hero.systemCanvas.aria}
              </span>

              <svg className="hero-live-system__route-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                <path className="hero-live-system__route-line hero-live-system__route-line--website" d="M 8 28 H 28 V 50 H 45" />
                <path className="hero-live-system__route-line hero-live-system__route-line--whatsapp" d="M 8 72 H 28 V 50 H 45" />
                <path className="hero-live-system__route-line hero-live-system__route-line--crm" d="M 55 50 H 68 V 28 H 92" />
                <path className="hero-live-system__route-line hero-live-system__route-line--calendar" d="M 55 50 H 68 V 72 H 92" />
                <path className="hero-live-system__route-line hero-live-system__route-line--team" d="M 68 50 H 84 V 90" />
              </svg>

              <ol className="hero-live-system__route">
                {systemNodes.map(({ key, label, icon: Icon, moduleClass }) => (
                  <li key={key} className={`hero-live-system__node hero-live-system__node--${key}`}>
                    <div className={`hero-live-system__module ${moduleClass}`}>
                      {Icon ? (
                        <Icon className="hero-live-system__module-icon" aria-hidden="true" />
                      ) : (
                        <span className="hero-live-system__core-mark" aria-hidden="true">
                          <span className="hero-live-system__core-mark-line" />
                        </span>
                      )}
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
