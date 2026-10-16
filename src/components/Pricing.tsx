import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface PricingProps {
  onCTAClick: () => void;
}

export function Pricing({ onCTAClick }: PricingProps) {
  const { copy } = useLanguage();

  return (
    <section id="paketler" className="chapter chapter--dark pricing-section overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[82rem] px-5 sm:px-6">
        <div className="pricing-section__intro" data-reveal>
          <div>
            <span className="chapter-kicker">{copy.pricing.label}</span>
            <h2 className="chapter-heading mt-6 max-w-3xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-snow-50 sm:text-5xl lg:text-6xl">
              {copy.pricing.headline}
              <span className="mt-2 block text-snow-400">{copy.pricing.headlineAccent}</span>
            </h2>
          </div>
          <div className="pricing-section__pilot">
            <span>{copy.pricing.pilotBadge}</span>
            <strong>{copy.pricing.pilotPrice}</strong>
            <p>{copy.pricing.pilotNote}</p>
          </div>
        </div>

        <div className="pricing-section__plans mt-12 sm:mt-16">
          {copy.pricing.packages.map((plan, index) => {
            const isGrowth = plan.name === 'Growth';
            const badge = 'badge' in plan ? plan.badge : null;
            return (
              <article key={plan.name} data-reveal className={`pricing-plan reveal ${isGrowth ? 'pricing-plan--growth' : ''}`}>
                {badge && <div className="pricing-plan__badge"><Sparkles aria-hidden="true" />{badge}</div>}
                <div className="pricing-plan__top">
                  <span className="pricing-plan__index">0{index + 1}</span>
                  <h3>{plan.name}</h3>
                </div>
                <p className="pricing-plan__audience">{plan.audience}</p>
                <div className="pricing-plan__price-row">
                  <div><span>{copy.pricing.setupLabel}</span><strong>{plan.setup}</strong></div>
                  <div><span>{copy.pricing.monthlyLabel}</span><strong>{plan.monthly}</strong></div>
                </div>
                <ul>
                  {plan.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}
                </ul>
                <button type="button" onClick={onCTAClick} className="pricing-plan__cta group">
                  {plan.cta}<ArrowRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </article>
            );
          })}
        </div>

        <p data-reveal className="reveal pricing-section__add-ons mt-10 border-t border-navy-600/70 pt-5 text-sm leading-relaxed text-snow-400 sm:mt-14 sm:text-base">
          <span>{copy.pricing.addOnTitle}</span>{copy.pricing.addOnDescription}
        </p>
      </div>
    </section>
  );
}
