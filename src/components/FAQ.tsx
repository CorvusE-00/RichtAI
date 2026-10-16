import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function FAQ() {
  const { copy } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="chapter chapter--dark faq-section overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[82rem] px-5 sm:px-6">
        <div className="faq-section__layout">
          <div data-reveal className="reveal">
            <span className="chapter-kicker">{copy.faq.label}</span>
            <h2 className="chapter-heading mt-6 max-w-xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-snow-50 sm:text-5xl lg:text-6xl">
              {copy.faq.headline}
              <span className="mt-2 block text-snow-400">{copy.faq.headlineAccent}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-snow-400 sm:text-lg">{copy.faq.description}</p>
          </div>

          <div className="faq-section__list">
            {copy.faq.questions.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const triggerId = `faq-trigger-${index}`;
              return (
                <article key={item.question} data-reveal className="reveal faq-section__item">
                  <button type="button" id={triggerId} aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? null : index)} className="faq-section__trigger">
                    <span>{item.question}</span>
                    <ChevronDown className={`faq-section__icon ${isOpen ? 'is-open' : ''}`} aria-hidden="true" />
                  </button>
                  <div id={answerId} role="region" aria-labelledby={triggerId} className="faq-section__answer" data-open={isOpen}><div><p>{item.answer}</p></div></div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
