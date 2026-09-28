import { Quote, MapPin, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. A. Yilmaz',
    role: 'Dis Klinigi Sahibi',
    location: 'Kusadasi',
    text: 'Richt Ai ile calistikktan sonra online randevularimiz iki katina cikti. Emre her seyi sade bir sekilde anlatti, sureklemesiz bir surecti.',
  },
  {
    name: 'S. Demir',
    role: 'Saglik Turizmi Koordinatoru',
    location: 'Izmir',
    text: 'Yeni web sitemiz ve otomatik yanit sistemi sayesinde disindan gelen hastalardan gelen sorular hic bos kalmiyor. Tek kisilik bir ajans olmasi daha dikkatli hizmet demek.',
  },
  {
    name: 'M. Kaya',
    role: 'Klinik Yoneticisi',
    location: 'Aydin',
    text: 'Onceleri personelimiz telefona yetisemiyordu. Simdi yapay zeka asistani oncelikli sorulari yonlendiriyor, biz gercek randevulara odaklaniyoruz.',
  },
];

export function Trust() {
  return (
    <section id="guven" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Guven</span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-snow-50 leading-tight tracking-tight">
            Kusadasi ve Ege bolgesinde
            <br />
            <span className="text-snow-400">yerel guven</span>
          </h2>
          <p className="mt-5 text-snow-400 text-base sm:text-lg leading-relaxed">
            Yuz yuze de destek. Emre Kocaaliler ile tanisin, isletmenizin
            ihtiyaclarini birlikte konusun.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-base p-7 flex flex-col"
            >
              <Quote className="w-8 h-8 text-teal-500/30 mb-4" />
              <p className="text-snow-300 text-sm leading-relaxed flex-1 italic">
                "{testimonial.text}"
              </p>
              <div className="mt-6 pt-5 border-t border-navy-600/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-700 border border-navy-600 flex items-center justify-center">
                  <User className="w-5 h-5 text-snow-400" />
                </div>
                <div>
                  <div className="font-display text-sm font-medium text-snow-100">
                    {testimonial.name}
                  </div>
                  <div className="text-snow-500 text-xs flex items-center gap-1 mt-0.5">
                    {testimonial.role}
                    <span className="w-1 h-1 rounded-full bg-navy-500" />
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founder card */}
        <div className="card-base p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-teal-500/15 rounded-2xl blur-xl" />
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-800 border border-teal-500/20 flex items-center justify-center">
              <span className="font-display text-2xl sm:text-3xl font-bold text-teal-400">
                EK
              </span>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-medium text-snow-50 mb-2">
              Emre Kocaaliler
            </h3>
            <p className="text-teal-400 text-sm font-display mb-3">
              Kurucu &amp; Yapay Zeka Otomasyon Uzmani
            </p>
            <p className="text-snow-400 text-sm leading-relaxed max-w-xl">
              Richt Ai'yi kucuk isletmelerin ve kliniklerin teknolojiyi
              karmasik olmadan kullanabilmesi icin kurdum. Her musterimle
              birebir calisir, cozumu kendim uygularim. Araciniz benim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
