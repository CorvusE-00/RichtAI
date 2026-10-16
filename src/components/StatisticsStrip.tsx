import { useLanguage } from '@/lib/i18n';

export function StatisticsStrip() {
  const { copy } = useLanguage();
  const metrics = copy.stats.metrics;

  return (
    <section
      id="istatistik"
      aria-label={copy.stats.aria}
      className="section-tone section-tone--stats relative border-y border-navy-700/60"
    >
      <div className="section-surface section-surface--stats absolute inset-0" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-6 sm:py-9">
        <div className="grid grid-cols-2 gap-y-5 gap-x-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-y-0 sm:gap-x-8">
          {metrics.map((metric, index) => {
            return (
              <div
                key={metric.label}
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
                className="reveal stats-principle text-center"
              >
                <div className="stats-principle__value">
                  {metric.display}
                </div>
                <div className="stats-principle__label">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
