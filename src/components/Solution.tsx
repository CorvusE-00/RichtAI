import { useState } from 'react';
import { Bot, Check, Globe, ShieldCheck } from 'lucide-react';

const solutions = [
  {
    icon: Globe,
    eyebrow: 'Güven veren web siteleri',
    title: 'İlk izlenimi güvene dönüştüren bir web sitesi',
    description:
      'İşletmenizi doğru anlatan, mobilde rahat kullanılan ve ziyaretçiyi bir sonraki adıma yönlendiren sade bir dijital yüz.',
    features: [
      ['Mobil öncelikli tasarım', 'Her ekranda sakin ve net bir deneyim.'],
      ['Arama motorları için sağlam temel', 'İnsanların sizi bulmasını kolaylaştıran yapı.'],
    ],
  },
  {
    icon: Bot,
    eyebrow: 'Akıllı otomasyon sistemleri',
    title: 'Tekrarlayan iletişimi sizin için düzenleyen otomasyon',
    description:
      'Soruları yanıtlayan, randevuya yönlendiren ve ekibinizin üzerindeki tekrar eden işleri azaltan anlaşılır bir sistem.',
    features: [
      ['Hızlı ilk yanıt', 'İlk soruyu cevapsız bırakmayan bir asistan.'],
      ['Randevu ve takip akışı', 'Hatırlatma ve yönlendirmeyi düzenli hâle getirir.'],
    ],
  },
];

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const [transform, setTransform] = useState('perspective(1100px) rotateX(0deg) rotateY(0deg)');

  return (
    <div
      data-reveal
      style={{
        '--reveal-delay': `${index * 100}ms`,
      } as React.CSSProperties}
      className="reveal card-base card-glow card-lift p-7 sm:p-9 group"
      onPointerMove={(event) => {
        if (event.pointerType !== 'mouse') return;
        const rect = event.currentTarget.getBoundingClientRect();
        const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
        const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
        setTransform(`perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
      }}
      onPointerLeave={() => setTransform('perspective(1100px) rotateX(0deg) rotateY(0deg)')}
    >
      <div style={{ transform }} className="transition-transform duration-300 ease-out will-change-transform">
        {children}
      </div>
    </div>
  );
}

export function Solution() {
  return (
    <section id="cozum" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div data-reveal className="reveal text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">Çözüm</span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-snow-50 leading-tight tracking-tight">
            İşletmeniz için güven veren bir web sitesi
            <br />
            <span className="text-gradient-teal">ve akıllı otomasyon</span>
          </h2>
          <p className="mt-5 text-snow-400 text-base sm:text-lg leading-relaxed">
            Önce ihtiyacınızı dinliyor, sonra gerçekten işinize yarayacak iki temel alanı birlikte kuruyoruz: dijital görünürlük ve düzenli iletişim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <TiltCard key={solution.eyebrow} index={index}>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-7">
                    <div>
                      <span className="text-teal-300 text-xs font-display uppercase tracking-[0.18em]">
                        {solution.eyebrow}
                      </span>
                      <div className="mt-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/15 to-cyan-500/10 border border-teal-500/20 group-hover:from-teal-500/25 group-hover:to-cyan-500/15 transition-all duration-500">
                        <Icon className="w-7 h-7 text-teal-400" />
                      </div>
                    </div>
                    <span className="font-display text-6xl font-bold text-navy-600/30 select-none leading-none">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-medium text-snow-100 mb-3 leading-snug">
                    {solution.title}
                  </h3>
                  <p className="text-snow-400 text-sm leading-relaxed mb-7 max-w-lg">
                    {solution.description}
                  </p>

                  <div className="space-y-4 border-t border-navy-600/50 pt-6">
                    {solution.features.map(([feature, description]) => (
                      <div key={feature} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex w-5 h-5 rounded-full bg-teal-500/15 border border-teal-500/25 items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-teal-300" aria-hidden="true" />
                        </span>
                        <div>
                          <div className="flex items-center gap-2 text-sm font-display font-medium text-snow-200">
                            {feature}
                            <ShieldCheck className="w-3.5 h-3.5 text-teal-400/70" aria-hidden="true" />
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-snow-500">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
