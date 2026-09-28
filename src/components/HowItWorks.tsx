import { MessageCircle, Settings, Headset } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Tanişma Konusmasi',
    description:
      "Isletmenizin ihtiyaclarini dinlerim. Kisa, samimi ve borclu olmayan bir gorusme - Emre Kocaaliler ile birebir.",
  },
  {
    icon: Settings,
    number: '02',
    title: 'Ozel Tasarim ve Kurulum',
    description:
      'Size özel web sitesi ve otomasyon sistemini hazirlarim. Kliniginize uygun, markanizi yansitan bir cozum.',
  },
  {
    icon: Headset,
    number: '03',
    title: 'Suresiz Destek ve Gelisim',
    description:
      'Sistem calisirken arkada dururum. Sorulariniz varsa yanitim, gelisim gerekiyorsa yaparim. Tek kisi, tek iletisim.',
  },
];

export function HowItWorks() {
  return (
    <section id="nasil-calisir" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-950" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Nasil Calisir</span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-snow-50 leading-tight tracking-tight">
            Sadece 3 adim
            <br />
            <span className="text-snow-400">basit ve stressiz</span>
          </h2>
          <p className="mt-5 text-snow-400 text-base sm:text-lg leading-relaxed">
            Karmasik sozlesmeler, gizli ucretler ya da uzun surecler yok.
            Sizinle calismaya baslamak bu kadar kolay.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-24 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-navy-600 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-teal-500/10 rounded-full blur-xl group-hover:bg-teal-500/20 transition-all duration-500" />
                    <div className="relative w-20 h-20 rounded-full bg-navy-800 border border-navy-600 flex items-center justify-center group-hover:border-teal-500/40 transition-all duration-500">
                      <Icon className="w-9 h-9 text-snow-300 group-hover:text-teal-400 transition-colors duration-500" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center font-display text-xs font-bold text-navy-950">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-medium text-snow-100 mb-3 leading-snug">
                    {step.title}
                  </h3>
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
