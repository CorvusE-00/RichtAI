import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const questions = [
  {
    question: 'Bütçemi aşar mı?',
    answer:
      'İhtiyacınıza göre küçük ve net bir başlangıç kapsamı belirliyoruz. Gereksiz özellikler eklemeden, işletmenize en çok fayda sağlayacak adımlardan başlıyoruz.',
  },
  {
    question: 'Tek kişiyle çalışmak yeterli olur mu?',
    answer:
      'Evet. Tasarım, geliştirme ve otomasyon tarafını doğrudan ben yürütüyorum. Böylece arada kaybolan mesajlar yerine tek bir iletişim noktası ve daha hızlı kararlar oluyor.',
  },
  {
    question: 'Ne kadar sürede hazır olur?',
    answer:
      'İhtiyaca göre değişir; sade bir başlangıç sitesi genellikle birkaç hafta içinde yayına alınabilir. İlk görüşmede kapsamı ve gerçekçi takvimi birlikte netleştiriyoruz.',
  },
  {
    question: 'Mevcut web sitemi değiştirmem gerekir mi?',
    answer:
      'Hayır. Mevcut yapınızı koruyup sadece ihtiyaç duyduğunuz bölümü iyileştirebiliriz. Yeni bir site gerekip gerekmediğine birlikte, veriye ve hedefinize göre karar veririz.',
  },
  {
    question: 'Şehir dışındaki işletmelerle de çalışıyor musunuz?',
    answer:
      'Kesinlikle. Görüşmeler ve proje süreci çevrim içi yürüyebilir. Farklı şehirlerdeki işletmelerle de aynı doğrudan iletişim modeliyle çalışıyorum.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-500/[0.04] rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6">
        <div data-reveal className="reveal text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="section-label">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            S.S.S.
          </span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-snow-50 leading-tight tracking-tight">
            Aklınızdaki sorulara
            <br />
            <span className="text-snow-400">sakin cevaplar</span>
          </h2>
          <p className="mt-5 text-snow-400 text-base sm:text-lg leading-relaxed">
            Karar vermeden önce merak etmeniz çok normal. En sık duyduğum soruları açıkça yanıtladım.
          </p>
        </div>

        <div className="space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const triggerId = `faq-trigger-${index}`;
            return (
              <div
                key={item.question}
                data-reveal
                style={{ '--reveal-delay': `${index * 70}ms` } as React.CSSProperties}
                className="reveal rounded-2xl border border-navy-600/60 bg-navy-800/50 backdrop-blur-sm overflow-hidden transition-colors duration-300 hover:border-teal-500/25"
              >
                <button
                  type="button"
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left text-snow-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-400"
                >
                  <span className="font-display text-base sm:text-lg font-medium">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-teal-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div id={answerId} role="region" aria-labelledby={triggerId} className="faq-answer" data-open={isOpen}>
                  <div>
                    <p className="px-5 sm:px-7 pb-5 text-sm sm:text-base leading-relaxed text-snow-400">
                      {item.answer}
                    </p>
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
