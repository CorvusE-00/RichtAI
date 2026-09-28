import { Globe, Bot, Calendar, ShieldCheck } from 'lucide-react';

const solutions = [
  {
    icon: Globe,
    title: 'Modern, Hizli Web Siteleri',
    description:
      "Mobil uyumlu, SEO dostu ve guven veren klinik ve isletme siteleri. Hasta ilk etkilenimde guven duyar.",
    features: ['Mobil-oncelikli tasarim', 'Hizli yuklenme', 'SEO optimized'],
  },
  {
    icon: Bot,
    title: 'Yapay Zeka Asistani',
    description:
      '7/24 sorulari yanıtlayan, randevu olusturan ve hasta yonlendiren akıllı bir asistan. Mesai disinda bile aktif.',
    features: ['Aninda yanit', 'Coklu dil destegi', 'Otomatik yonlendirme'],
  },
  {
    icon: Calendar,
    title: 'Otomatik Randevu Sistemi',
    description:
      'Hastalar online randevu alir, hatirlatma mesajlari otomatik gider. Personel telefona bagli kalmaz.',
    features: ['Online randevu', 'Otomatik hatirlatma', 'Takvim senkronizasyon'],
  },
  {
    icon: ShieldCheck,
    title: 'Suresiz Destek ve Bakim',
    description:
      'Sisteminiz calisirken arkada dururum. Guncellemeler, iyilestirmeler ve teknik destek tek kisiye ozel.',
    features: ['Tek iletisim noktasi', 'Duzenli guncelleme', 'Yerel destek'],
  },
];

export function Solution() {
  return (
    <section id="cozum" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Cozum</span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-snow-50 leading-tight tracking-tight">
            Yapay zeka destekli web siteleri
            <br />
            <span className="text-gradient-teal">ve akıllı otomasyon</span>
          </h2>
          <p className="mt-5 text-snow-400 text-base sm:text-lg leading-relaxed">
            Tek bir cozum degil, isletmenizin butun dijital ihtiyaclari icin
            bir sistem. Emre Kocaaliler ile birebir calisin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="card-base card-glow p-7 sm:p-8 group"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/15 to-cyan-500/10 border border-teal-500/20 group-hover:from-teal-500/25 group-hover:to-cyan-500/15 transition-all duration-500">
                      <Icon className="w-7 h-7 text-teal-400" />
                    </div>
                    <span className="font-display text-5xl font-bold text-navy-600/40 select-none">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-medium text-snow-100 mb-3 leading-snug">
                    {solution.title}
                  </h3>
                  <p className="text-snow-400 text-sm leading-relaxed mb-5">
                    {solution.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-navy-700/40 border border-navy-600/40 text-snow-300 text-xs font-display"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
