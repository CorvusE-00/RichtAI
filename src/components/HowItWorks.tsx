import { MessageCircle, Settings, Headset } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Tanışma görüşmesi',
    duration: '30 dakika',
    description:
      'İşletmenizin ihtiyaçlarını dinlerim. Kısa, samimi ve doğrudan bir görüşmeyle nereden başlayacağımızı birlikte netleştiririz.',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Tasarım ve kurulum',
    duration: '1–2 hafta',
    description:
      'Size özel web sitesi ve otomasyon sistemini hazırlarım. Markanıza ve günlük işleyişinize uygun bir çözüm kurarız.',
  },
  {
    icon: Headset,
    number: '03',
    title: 'Sürekli destek ve gelişim',
    duration: 'Süresiz',
    description:
      'Sistem yayına girdikten sonra da ulaşabileceğiniz kişi aynı kalır. Sorularınızı yanıtlar, ihtiyaç oldukça birlikte geliştiririz.',
  },
];

export function HowItWorks() {
  return (
    <section id="nasil-calisir" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
        <div data-reveal className="reveal text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">Nasıl çalışır?</span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-snow-50 leading-tight tracking-tight">
            Üç adımda net
            <br />
            <span className="text-snow-400">ve sakin bir süreç</span>
          </h2>
          <p className="mt-5 text-snow-400 text-base sm:text-lg leading-relaxed">
            Karmaşık süreçler veya arada kaybolan iletişim yok. Birlikte çalışmaya başlamak bu kadar net.
          </p>
        </div>

        <div data-reveal className="reveal relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-24 left-[12%] right-[12%] h-px bg-navy-700/80 overflow-hidden">
            <div className="process-line-fill h-full origin-left scale-x-0 bg-gradient-to-r from-teal-500/30 via-teal-400 to-cyan-400 transition-transform duration-[1400ms] ease-out" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 130}ms` } as React.CSSProperties}
                  className="reveal relative flex flex-col items-center text-center group card-lift"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-xl group-hover:bg-teal-500/20 transition-all duration-500" />
                    <div className="relative w-20 h-20 rounded-full bg-navy-800 border border-navy-600 flex items-center justify-center group-hover:border-teal-500/40 transition-all duration-500">
                      <Icon className="w-9 h-9 text-snow-300 group-hover:text-teal-400 transition-colors duration-500" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center font-display text-xs font-bold text-navy-950">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-medium text-snow-100 mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <span className="mb-3 rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-display text-teal-300">
                    {index === 2 ? 'İhtiyaç oldukça' : step.duration}
                  </span>
                  <p className="text-snow-400 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
