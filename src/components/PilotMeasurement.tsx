import { BarChart3, CheckCircle2, Clock3, Route } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const measurementIcons = [Clock3, CheckCircle2, Route];

export function PilotMeasurement() {
  const { copy } = useLanguage();

  return (
    <section id="pilot" className="section-tone relative overflow-hidden border-t border-navy-700/55 py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
          <div data-reveal className="reveal max-w-xl">
            <span className="section-label">{copy.pilotMeasurement.label}</span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-snow-50 sm:text-4xl lg:text-5xl">
              {copy.pilotMeasurement.headline}
              <br />
              <span className="text-snow-400">{copy.pilotMeasurement.headlineAccent}</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-snow-400 sm:text-lg">
              {copy.pilotMeasurement.description}
            </p>
          </div>

          <div className="border-y border-navy-700/65">
            {copy.pilotMeasurement.blocks.map((block, index) => {
              const Icon = measurementIcons[index];
              return (
                <article key={block.title} data-reveal className="reveal grid gap-4 border-b border-navy-700/65 py-6 last:border-b-0 sm:grid-cols-[3rem_0.78fr_1.22fr] sm:items-start sm:gap-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-400/35 text-teal-300">
                    <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-medium leading-snug text-snow-100">{block.title}</h3>
                  <p className="text-sm leading-relaxed text-snow-400">{block.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div data-reveal className="reveal mt-10 flex flex-col gap-3 border-t border-navy-700/65 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <div className="flex items-center gap-2 text-snow-200">
            <BarChart3 className="h-4 w-4 text-teal-300" strokeWidth={1.6} aria-hidden="true" />
            <span>{copy.pilotMeasurement.bottomLine}</span>
          </div>
          <p className="text-snow-500 sm:text-right">{copy.pilotMeasurement.regionLine}</p>
        </div>
      </div>
    </section>
  );
}
