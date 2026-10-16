import { ArrowRight, Bot, Check, ClipboardCheck, UserRound, UserRoundCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const flowIcons = [UserRound, Bot, ClipboardCheck, UserRoundCheck];

export function HumanAI() {
  const { copy } = useLanguage();

  return (
    <section id="insan-ai" className="section-tone relative overflow-hidden border-t border-navy-700/55 py-20 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:gap-20">
          <div data-reveal className="reveal max-w-xl">
            <span className="section-label">{copy.humanAI.label}</span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-snow-50 sm:text-4xl lg:text-5xl">
              {copy.humanAI.headline}
              <br />
              <span className="text-snow-400">{copy.humanAI.headlineAccent}</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-snow-400 sm:text-lg">
              {copy.humanAI.description}
            </p>
          </div>

          <div data-reveal className="reveal border-y border-navy-700/65 py-6 sm:py-8" aria-label={copy.humanAI.label}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2">
              {copy.humanAI.flow.map((step, index) => {
                const Icon = flowIcons[index];
                return (
                  <div key={step} className="flex min-w-0 flex-1 flex-col items-stretch sm:flex-row sm:items-stretch">
                    <div className="group flex min-h-16 w-full flex-1 items-center gap-3 rounded-xl border border-navy-600/70 bg-navy-900/45 px-3 py-3 transition-colors duration-300 hover:border-teal-400/35 sm:min-h-24 sm:flex-col sm:items-start sm:justify-between sm:px-4 sm:py-4">
                      <Icon className="h-5 w-5 shrink-0 text-teal-300 transition-colors duration-300 group-hover:text-teal-200" strokeWidth={1.6} aria-hidden="true" />
                      <span className="text-sm leading-snug text-snow-200">{step}</span>
                    </div>
                    {index < copy.humanAI.flow.length - 1 && (
                      <ArrowRight className="mx-auto my-1 h-4 w-4 shrink-0 rotate-90 text-teal-300/70 sm:mx-2 sm:my-0 sm:mt-10 sm:rotate-0" strokeWidth={1.5} aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </div>
            <p className="mt-5 text-xs font-display uppercase tracking-[0.12em] text-teal-200/80">
              {copy.humanAI.smallLine}
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-4 border-t border-navy-700/65 pt-6 sm:grid-cols-2 sm:pt-8">
          {copy.humanAI.supportingPoints.map((point) => (
            <li key={point} data-reveal className="reveal flex items-start gap-3 text-sm leading-relaxed text-snow-300 sm:text-base">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" strokeWidth={1.8} aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
