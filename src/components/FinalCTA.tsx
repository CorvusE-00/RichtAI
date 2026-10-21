import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface FinalCTAProps {
  onCTAClick: () => void;
}

export function FinalCTA({ onCTAClick }: FinalCTAProps) {
  const { copy } = useLanguage();

  return (
    <section id="final-cta" className="chapter chapter--bone final-cta-section overflow-hidden py-20 sm:py-28 lg:py-36">
      <div data-reveal className="reveal mx-auto max-w-5xl px-5 text-center sm:px-6">
        <span className="chapter-kicker chapter-kicker--dark">{copy.finalCta.trust}</span>
        <h2 className="chapter-heading chapter-heading--dark mx-auto mt-7 max-w-4xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
          {copy.finalCta.headline}
          <span className="mt-3 block text-teal-700">{copy.finalCta.headlineAccent}</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">{copy.finalCta.description}</p>
        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <button type="button" onClick={onCTAClick} className="btn-primary group min-h-14 w-full sm:w-auto">
            {copy.finalCta.cta}<ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </button>
          <a href="https://dental-teal-alpha.vercel.app/" target="_blank" rel="noreferrer" className="font-display text-sm font-medium text-navy-700 underline decoration-teal-600/60 underline-offset-4 transition-colors hover:text-teal-700 sm:text-base">
            {copy.finalCta.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
