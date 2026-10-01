import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function FAQ() {
  const { copy } = useLanguage();
  const questions = copy.faq.questions;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="section-tone section-tone--faq relative overflow-hidden py-20 sm:py-24">
      <div className="section-surface section-surface--faq absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="faq-layout">
          <div data-reveal className="reveal faq-intro">
            <span className="section-label">{copy.faq.label}</span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-snow-50 sm:text-4xl lg:text-5xl">
              {copy.faq.headline}
              <br />
              <span className="text-snow-400">{copy.faq.headlineAccent}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-snow-400 sm:text-lg">
              {copy.faq.description}
            </p>
          </div>

          <div className="faq-list">
            {questions.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const triggerId = `faq-trigger-${index}`;

              return (
                <article
                  key={item.question}
                  data-reveal
                  style={{ '--reveal-delay': `${index * 70}ms` } as React.CSSProperties}
                  className="reveal faq-item"
                >
                  <button
                    type="button"
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="faq-trigger"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`faq-trigger__icon ${isOpen ? 'is-open' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div id={answerId} role="region" aria-labelledby={triggerId} className="faq-answer" data-open={isOpen}>
                    <div>
                      <p className="faq-answer__text">{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
