import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface FinalCTAProps {
  onCTAClick: () => void;
}

export function FinalCTA({ onCTAClick }: FinalCTAProps) {
  const { copy } = useLanguage();

  return (
    <section id="final-cta" className="section-tone section-tone--final relative overflow-hidden border-t border-navy-700/55 py-24 sm:py-32">
      <div className="section-surface section-surface--final absolute inset-0" />

      <div data-reveal className="reveal relative max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-snow-50 leading-[1.08] tracking-[-0.04em]">
          {copy.finalCta.headline}
          <br />
          <span className="text-gradient-teal">{copy.finalCta.headlineAccent}</span>
        </h2>

        <p className="mt-7 max-w-xl mx-auto text-snow-400 text-base sm:text-lg leading-relaxed">
          {copy.finalCta.description}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button onClick={onCTAClick} className="btn-primary group min-w-[18rem] sm:min-w-[20rem]">
            <span>{copy.finalCta.cta}</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-1.5 text-snow-500 text-sm">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>{copy.finalCta.trust}</span>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-snow-500/90 italic">
            {copy.finalCta.quote}
          </p>
        </div>
      </div>
    </section>
  );
}
