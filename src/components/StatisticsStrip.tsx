import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Clock3, MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const metricValues = [
  { value: 7, suffix: '/24', icon: MessageCircle },
  { display: '1:1', icon: Sparkles },
  { icon: ArrowUpRight },
  { icon: Clock3 },
];

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const start = performance.now();
    const duration = 1100;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span aria-label={`${value}${suffix}`}>
      {count}
      {suffix}
    </span>
  );
}

export function StatisticsStrip() {
  const { copy } = useLanguage();
  const metrics = metricValues.map((metric, index) => ({
    ...metric,
    ...copy.stats.metrics[index],
  }));
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="istatistik"
      aria-label={copy.stats.aria}
      className="section-tone section-tone--stats relative border-y border-navy-700/60"
    >
      <div className="section-surface section-surface--stats absolute inset-0" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-6 sm:py-9">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 sm:gap-y-0 gap-x-4 sm:gap-x-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
                className="reveal flex items-center justify-center gap-3 sm:gap-4 text-center"
              >
                <Icon className="hidden sm:block w-4 h-4 text-teal-400/60 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-snow-50">
                    {'display' in metric && metric.display ? metric.display : <Counter value={metric.value ?? 0} suffix={metric.suffix ?? ''} active={active} />}
                  </div>
                  <div className="mt-1 text-xs text-snow-500 font-display tracking-wide">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
