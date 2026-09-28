import { Clock, Globe, MessageSquareOff, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Manuel randevu yonetimi zaman caliyor',
    description:
      'Personel gunun yarisini telefonla mesgul. Yanlis kayitlar, unutulan randevular ve bos saatler isletmenizi zorluyor.',
  },
  {
    icon: Globe,
    title: 'Eski web sitesi yeni hasteleri kaciriyor',
    description:
      "Mobil uyumsuz, yavas ve guvensiz gozuken bir site, potansiyel hastanizin baska bir klinigi secmesine neden oluyor.",
  },
  {
    icon: MessageSquareOff,
    title: 'Soru ve talepler cevapsiz kaliyor',
    description:
      'Mesai disi gelen sorular kayboluyor. Hasta cevap beklerken rakibinizin kapisini caliyor.',
  },
  {
    icon: TrendingDown,
    title: 'Rakipler dijitallesirken geride kaliyorsunuz',
    description:
      "Yapay zekayi kullanan rakipler daha hizli yanit veriyor, daha fazla gorunurluk kazanıyor ve onecilik elde ediyor.",
  },
];

export function Problem() {
  return (
    <section id="sorun" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Sorun</span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-snow-50 leading-tight tracking-tight">
            Yerel isletmeler icin
            <br />
            <span className="text-snow-400">dijitallesmek hala zor</span>
          </h2>
          <p className="mt-5 text-snow-400 text-base sm:text-lg leading-relaxed">
            Kucuk bir klinik veya saglik turizmi isletmesi isleten biri olarak,
            teknolojinin cogu sizin icin tasarlanmadi. Iste gercek sorunlar:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="card-base card-glow p-7 sm:p-8 group"
              >
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy-700/60 border border-navy-600 mb-5 group-hover:border-teal-500/30 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-snow-300 group-hover:text-teal-400 transition-colors duration-500" />
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
