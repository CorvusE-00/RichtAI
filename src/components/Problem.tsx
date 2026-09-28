import { Clock, Globe, MessageSquareOff, TrendingDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const icons = [Clock, Globe, MessageSquareOff, TrendingDown];

export function Problem() {
  const { copy } = useLanguage();
  const problems = copy.problem.cards.map((problem, index) => ({ ...problem, icon: icons[index] }));

  return (
    <section id="sorun" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div data-reveal className="reveal text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">{copy.problem.label}</span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-snow-50 leading-tight tracking-tight">
            {copy.problem.headline}
            <br />
            <span className="text-snow-400">{copy.problem.headlineAccent}</span>
          </h2>
          <p className="mt-5 text-snow-400 text-base sm:text-lg leading-relaxed">
            {copy.problem.description}
          </p>
          <p className="mt-6 text-teal-300/90 text-sm sm:text-base font-display">
            {copy.problem.prompt}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` } as React.CSSProperties}
                className="reveal card-base card-glow card-lift p-7 sm:p-8 group"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-700/60 border border-navy-600 group-hover:border-teal-500/30 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-snow-300 group-hover:text-teal-400 transition-colors duration-500" />
                    </div>
                    <span className="font-display text-5xl font-bold text-navy-600/40 select-none leading-none">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-medium text-snow-100 mb-3 leading-snug">
                    {problem.title}
                  </h3>
                  <p className="text-snow-400 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
