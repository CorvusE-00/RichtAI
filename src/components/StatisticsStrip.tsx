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
      <div className="value-marquee relative">
        <div className="value-marquee__track">
          <MetricGroup metrics={metrics} />
          <MetricGroup metrics={metrics} isDuplicate />
        </div>
      </div>
    </section>
  );
}

function MetricGroup({
  metrics,
  isDuplicate = false,
}: {
  metrics: readonly { display: string; label: string }[];
  isDuplicate?: boolean;
}) {
  return (
    <div className="value-marquee__group" role="list" aria-hidden={isDuplicate ? true : undefined}>
      {metrics.map((metric) => (
        <div key={`${metric.display}-${metric.label}`} className="value-marquee__item" role="listitem">
          <div className="value-marquee__value">{metric.display}</div>
          {metric.label ? <div className="value-marquee__label">{metric.label}</div> : null}
        </div>
      ))}
    </div>
  );
}
