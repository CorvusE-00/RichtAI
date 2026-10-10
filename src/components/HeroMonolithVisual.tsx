import { useEffect, useRef, useState } from 'react';

type MotionSource = 'website' | 'whatsapp';
type MotionPhase = 'idle' | 'inbound' | 'ai' | 'crm' | 'calendar' | 'handoff';

interface HeroMonolithVisualProps {
  alt: string;
  motionEnabled: boolean;
  windowLabel: string;
}

const paths = {
  websiteInbound: 'M 150 132 C 220 132 274 164 350 164',
  whatsappInbound: 'M 150 202 C 220 202 274 164 350 164',
  crm: 'M 535 150 C 612 150 665 68 742 68',
  calendar: 'M 535 164 C 612 164 665 150 744 150',
  team: 'M 535 178 C 612 178 665 258 742 258',
} as const;

function isReducedMotionPreferred() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function HeroMonolithVisual({ alt, motionEnabled, windowLabel }: HeroMonolithVisualProps) {
  const visualRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(isReducedMotionPreferred);
  const [phase, setPhase] = useState<MotionPhase>('idle');
  const [source, setSource] = useState<MotionSource>('website');
  const [hasEntered, setHasEntered] = useState(!motionEnabled || reducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!motionEnabled) {
      setIsVisible(true);
      return;
    }

    const node = visualRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.2),
      { threshold: [0, 0.2, 0.5] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [motionEnabled]);

  useEffect(() => {
    if (!motionEnabled) return;

    const handleVisibilityChange = () => setIsPageVisible(document.visibilityState === 'visible');
    handleVisibilityChange();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [motionEnabled]);

  useEffect(() => {
    if (!motionEnabled || reducedMotion || !isVisible || !isPageVisible) {
      setPhase('idle');
      setSource('website');
      setHasEntered(!motionEnabled || reducedMotion);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const schedule = (delay: number, callback: () => void) => {
      timers.push(window.setTimeout(() => {
        if (!cancelled) callback();
      }, delay));
    };

    const runCycle = (cycleSource: MotionSource) => {
      setSource(cycleSource);
      setPhase('inbound');
      schedule(1000, () => setPhase('ai'));
      schedule(1800, () => setPhase('crm'));
      schedule(2700, () => setPhase('calendar'));
      schedule(3600, () => setPhase('handoff'));
      schedule(4600, () => setPhase('idle'));
      schedule(7000, () => runCycle(cycleSource === 'website' ? 'whatsapp' : 'website'));
    };

    setHasEntered(false);
    const entranceFrame = window.requestAnimationFrame(() => setHasEntered(true));
    schedule(900, () => runCycle('website'));

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(entranceFrame);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [isPageVisible, isVisible, motionEnabled, reducedMotion]);

  const isComplete = reducedMotion && motionEnabled;
  const inboundActive = isComplete || phase !== 'idle';
  const aiActive = isComplete || ['ai', 'crm', 'calendar', 'handoff'].includes(phase);
  const crmActive = isComplete || ['crm', 'calendar', 'handoff'].includes(phase);
  const calendarActive = isComplete || ['calendar', 'handoff'].includes(phase);
  const teamActive = isComplete || phase === 'handoff';
  const windowClassName = [
    'hero-monolith-window',
    motionEnabled && !reducedMotion ? 'hero-monolith-window--motion' : '',
    hasEntered || reducedMotion || !motionEnabled ? 'is-entered' : '',
  ].filter(Boolean).join(' ');

  return (
    <div ref={visualRef} className={windowClassName}>
      <div className="hero-monolith-window__bar" aria-hidden="true">
        <div className="hero-monolith-window__status">
          <span className="hero-monolith-window__dot hero-monolith-window__dot--teal" />
          <span className="hero-monolith-window__dot" />
          <span className="hero-monolith-window__dot" />
        </div>
        <span className="hero-monolith-window__label">{windowLabel}</span>
      </div>
      <div className="hero-monolith-window__body">
        <div className="hero-monolith-stage">
          <img className="hero-monolith-visual" src="/images/richtai-signal-monolith-visual.png" alt={alt} />
          {motionEnabled && (
            <svg
              className={`hero-monolith-motion ${isComplete ? 'hero-monolith-motion--reduced' : ''}`}
              viewBox="0 0 870 325"
              aria-hidden="true"
              focusable="false"
            >
              <path className={`hero-monolith-motion__path ${source === 'website' && inboundActive ? 'is-active' : ''}`} d={paths.websiteInbound} pathLength="1" />
              <path className={`hero-monolith-motion__path ${source === 'whatsapp' && inboundActive ? 'is-active' : ''}`} d={paths.whatsappInbound} pathLength="1" />
              <path className={`hero-monolith-motion__path ${crmActive ? 'is-active' : ''}`} d={paths.crm} pathLength="1" />
              <path className={`hero-monolith-motion__path ${calendarActive ? 'is-active' : ''}`} d={paths.calendar} pathLength="1" />
              <path className={`hero-monolith-motion__path ${teamActive ? 'is-active' : ''}`} d={paths.team} pathLength="1" />

              <circle className={`hero-monolith-motion__core ${aiActive ? 'is-active' : ''}`} cx="438" cy="164" r="51" />
              <circle className={`hero-monolith-motion__endpoint ${source === 'website' && inboundActive ? 'is-active' : ''}`} cx="150" cy="132" r="4" />
              <circle className={`hero-monolith-motion__endpoint ${source === 'whatsapp' && inboundActive ? 'is-active' : ''}`} cx="150" cy="202" r="4" />
              <circle className={`hero-monolith-motion__endpoint ${crmActive ? 'is-active' : ''}`} cx="742" cy="68" r="4" />
              <circle className={`hero-monolith-motion__endpoint ${calendarActive ? 'is-active' : ''}`} cx="744" cy="150" r="4" />
              <circle className={`hero-monolith-motion__endpoint ${teamActive ? 'is-active' : ''}`} cx="742" cy="258" r="4" />

              {!isComplete && phase === 'inbound' && (
                <circle className="hero-monolith-motion__signal" r="3.5">
                  <animateMotion dur="950ms" fill="freeze" path={source === 'website' ? paths.websiteInbound : paths.whatsappInbound} />
                </circle>
              )}
              {!isComplete && phase === 'crm' && (
                <circle className="hero-monolith-motion__signal" r="3.5">
                  <animateMotion dur="850ms" fill="freeze" path={paths.crm} />
                </circle>
              )}
              {!isComplete && phase === 'calendar' && (
                <circle className="hero-monolith-motion__signal" r="3.5">
                  <animateMotion dur="850ms" fill="freeze" path={paths.calendar} />
                </circle>
              )}
              {!isComplete && phase === 'handoff' && (
                <circle className="hero-monolith-motion__signal" r="3.5">
                  <animateMotion dur="900ms" fill="freeze" path={paths.team} />
                </circle>
              )}
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
