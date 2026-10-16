import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface PricingProps {
  onCTAClick: () => void;
}

export function Pricing({ onCTAClick }: PricingProps) {
  const { copy } = useLanguage();

  return (
    <section id="paketler" className="section-tone relative overflow-hidden border-t border-navy-700/55 py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          <div data-reveal className="reveal max-w-xl">
            <span className="section-label">{copy.pricing.label}</span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-snow-50 sm:text-4xl lg:text-5xl">
              {copy.pricing.headline}
              <br />
              <span className="text-snow-400">{copy.pricing.headlineAccent}</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-snow-400 sm:text-lg">
              {copy.pricing.description}
            </p>
          </div>

          <div data-reveal className="reveal flex items-start gap-4 border-y border-teal-400/35 py-5 sm:items-center sm:gap-6">
            <div className="shrink-0 rounded-full border border-teal-400/35 bg-teal-500/10 px-3 py-1.5 text-xs font-display uppercase tracking-[0.12em] text-teal-200">
              {copy.pricing.pilotBadge}
            </div>
            <div>
              <p className="font-display text-2xl font-semibold tracking-tight text-snow-50 sm:text-3xl">{copy.pricing.pilotPrice}</p>
              <p className="mt-1 text-xs leading-relaxed text-snow-500 sm:text-sm">{copy.pricing.pilotNote}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {copy.pricing.packages.map((plan, index) => {
            const badge = 'badge' in plan ? plan.badge : null;
            const isRecommended = Boolean(badge);
            return (
              <article
                key={plan.name}
                data-reveal
                style={{ '--reveal-delay': `${index * 100}ms` } as React.CSSProperties}
                className={`reveal relative flex flex-col border px-5 py-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 sm:px-6 sm:py-7 ${isRecommended ? 'border-teal-400/55 bg-navy-800/60 hover:border-teal-300/70' : 'border-navy-600/70 bg-navy-900/45 hover:border-navy-500/90'}`}
              >
                {badge && (
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 text-xs font-display font-medium text-teal-200">
                    <Sparkles className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
                    {badge}
                  </div>
                )}
                <h3 className="font-display text-2xl font-semibold tracking-tight text-snow-50">{plan.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-relaxed text-snow-400">{plan.audience}</p>

                <div className="mt-7 grid grid-cols-2 gap-3 border-y border-navy-700/65 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-snow-500">{copy.pricing.setupLabel}</p>
                    <p className="mt-1 font-display text-lg font-medium text-snow-100">{plan.setup}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-snow-500">{copy.pricing.monthlyLabel}</p>
                    <p className="mt-1 font-display text-lg font-medium text-snow-100">{plan.monthly}</p>
                  </div>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-snow-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" strokeWidth={1.8} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button onClick={onCTAClick} className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-teal-400/35 bg-teal-500/10 px-4 py-3 text-sm font-display font-medium text-teal-100 transition-colors hover:border-teal-300/55 hover:bg-teal-500/15">
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>

        <div data-reveal className="reveal mt-10 grid gap-4 border-t border-navy-700/65 pt-6 sm:mt-12 sm:grid-cols-[0.42fr_1.58fr] sm:gap-8 sm:pt-8">
          <h3 className="font-display text-lg font-medium text-snow-100">{copy.pricing.addOnTitle}</h3>
          <div>
            <p className="text-sm leading-relaxed text-snow-300 sm:text-base">{copy.pricing.addOnDescription}</p>
            <p className="mt-4 text-xs leading-relaxed text-snow-500 sm:text-sm">{copy.pricing.smallPrint}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
