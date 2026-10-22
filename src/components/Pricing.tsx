import { ArrowRight, Check, Crown, Sparkles, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import type { ContactIntent, ContactSource } from '@/types/contact';

interface PricingProps {
  onCTAClick: (intent: ContactIntent, source: ContactSource) => void;
}

export function Pricing({ onCTAClick }: PricingProps) {
  const { copy } = useLanguage();

  return (
    <section id="paketler" className="chapter chapter--dark pricing-section overflow-hidden pb-10 pt-20 sm:pb-12 sm:pt-28 lg:pb-16 lg:pt-36">
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
            <span className="pricing-section__pilot-title">{copy.pricing.pilotTitle}</span>
            <strong className="pricing-section__pilot-price">{copy.pricing.pilotPrice}</strong>
            <span className="pricing-section__pilot-badge">{copy.pricing.pilotBadge}</span>
          </div>
        </div>

        <div className="pricing-section__plans mt-12 sm:mt-16">
          {copy.pricing.packages.map((plan) => {
            const isGrowth = plan.name === 'Growth';
            const isCustomPricing = 'customPricing' in plan && plan.customPricing;
            const launchLabel = 'launchLabel' in plan ? plan.launchLabel : null;
            const badge = 'badge' in plan ? plan.badge : null;
            const PackageIcon = plan.name === 'Starter' ? Sparkles : plan.name === 'Growth' ? TrendingUp : Crown;
            return (
              <article key={plan.name} data-reveal className={`pricing-plan reveal ${isGrowth ? 'pricing-plan--growth' : ''}`}>
                {badge && <div className="pricing-plan__badge"><Sparkles aria-hidden="true" />{badge}</div>}
                <div className="pricing-plan__top">
                  <span className="pricing-plan__index"><PackageIcon aria-hidden="true" /></span>
                  <h3>{plan.name}</h3>
                </div>
                {launchLabel && <span className="pricing-plan__launch-label">{launchLabel}</span>}
                <p className="pricing-plan__audience">{plan.audience}</p>
                <div className={`pricing-plan__price-row ${isCustomPricing ? 'pricing-plan__price-row--custom' : ''}`}>
                  {isCustomPricing ? (
                    <div className="pricing-plan__custom-price">
                      <strong>{plan.setup}</strong>
                    </div>
                  ) : (
                    <>
                      <div><span>{copy.pricing.setupLabel}</span><strong>{plan.setup}</strong></div>
                      <div><span>{copy.pricing.monthlyLabel}</span><strong>{plan.monthly}</strong></div>
                    </>
                  )}
                </div>
                <ul>
                  {plan.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}
                </ul>
                <button
                  type="button"
                  onClick={() => {
                    const mapping: Record<string, { intent: ContactIntent; source: ContactSource }> = {
                      Starter: { intent: 'starter', source: 'pricing-starter' },
                      Growth: { intent: 'pilot', source: 'pricing-growth' },
                      Pro: { intent: 'pro', source: 'pricing-pro' },
                    };
                    const contact = mapping[plan.name];
                    onCTAClick(contact.intent, contact.source);
                  }}
                  className="pricing-plan__cta group"
                >
                  {plan.cta}<ArrowRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </article>
            );
          })}
        </div>

        <p data-reveal className="pricing-section__commercial-note reveal mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-snow-500 sm:mt-10 sm:text-sm">
          {copy.pricing.commercialNote}
        </p>
      </div>
    </section>
  );
}
