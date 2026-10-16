import { useState } from 'react';
import { ArrowRight, Bell, Check, MessageCircle, UserRound } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function ProductShowcase() {
  const { copy } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const tab = copy.productShowcase.tabs[activeTab];

  return (
    <section id="cozum" className="chapter chapter--dark product-showcase overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[82rem] px-5 sm:px-6">
        <div className="product-showcase__intro" data-reveal>
          <div>
            <span className="chapter-kicker">{copy.productShowcase.label}</span>
            <h2 className="chapter-heading mt-6 max-w-4xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-snow-50 sm:text-5xl lg:text-6xl">
              {copy.productShowcase.headline}
              <span className="mt-2 block text-snow-400">{copy.productShowcase.headlineAccent}</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-snow-400 sm:text-lg">{copy.productShowcase.description}</p>
        </div>

        <div className="product-showcase__tabs mt-10 border-y border-navy-600/70 py-2 sm:mt-14" role="tablist" aria-label={copy.productShowcase.label}>
          {copy.productShowcase.tabs.map((item, index) => (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
              className={`product-showcase__tab ${activeTab === index ? 'is-active' : ''}`}
            >
              <span>0{index + 1}</span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="product-showcase__content mt-8 sm:mt-10" role="tabpanel">
          <div className="product-showcase__visual" key={activeTab}>
            {activeTab === 0 && (
              <div className="product-showcase__web-visual">
                <div className="product-showcase__mini-browser">
                  <div className="product-showcase__mini-browser-bar"><span /><span /><span /><em>{copy.productShowcase.web.browserLabel}</em></div>
                  <img src="/images/luma-dental-prototype-preview.png" alt={copy.productShowcase.web.browserLabel} />
                  <div className="product-showcase__web-entry"><MessageCircle aria-hidden="true" /><span>{copy.productShowcase.web.chatLabel}</span><ArrowRight aria-hidden="true" /></div>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="product-showcase__whatsapp-visual">
                <div className="product-showcase__phone-top"><MessageCircle aria-hidden="true" /><span>{copy.productShowcase.whatsapp.title}</span><span className="product-showcase__online" /></div>
                <div className="product-showcase__chat-body">
                  <div className="product-showcase__chat-bubble product-showcase__chat-bubble--patient">{copy.productShowcase.whatsapp.patient}</div>
                  <div className="product-showcase__chat-bubble product-showcase__chat-bubble--ai">{copy.productShowcase.whatsapp.ai}</div>
                  <div className="product-showcase__handoff-note"><Check aria-hidden="true" /><span>{copy.productShowcase.whatsapp.handoff}</span><small>{copy.productShowcase.whatsapp.waiting}</small></div>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="product-showcase__lead-visual">
                <div className="product-showcase__lead-header"><span>{copy.productShowcase.lead.title}</span><span className="product-showcase__lead-status">{copy.productShowcase.lead.status}</span></div>
                <div className="product-showcase__lead-grid">
                  {copy.productShowcase.lead.rows.map((row) => (
                    <div key={row.label}>
                      <span>{row.label}</span>
                      <strong>{row.value}</strong>
                    </div>
                  ))}
                </div>
                <div className="product-showcase__lead-notification"><Bell aria-hidden="true" /><span>{copy.productShowcase.lead.notification}</span></div>
              </div>
            )}
          </div>
          <div className="product-showcase__tab-copy">
            <span className="product-showcase__tab-count">0{activeTab + 1}</span>
            <div>
              <h3>{tab.title}</h3>
              <p>{tab.description}</p>
            </div>
          </div>
        </div>

        <div className="product-showcase__trust mt-12 grid gap-8 border-t border-navy-600/70 pt-7 sm:mt-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-display text-xl font-medium tracking-tight text-snow-100 sm:text-2xl">{copy.productShowcase.trustLine}</p>
            <div className="mt-5 grid gap-3 text-sm leading-relaxed text-snow-400 sm:grid-cols-2">
              {copy.productShowcase.notes.map((note) => <p key={note}>{note}</p>)}
            </div>
          </div>
          <div className="hidden items-center gap-3 text-xs uppercase tracking-[0.14em] text-snow-500 lg:flex"><UserRound className="h-4 w-4 text-teal-300" aria-hidden="true" />{copy.productShowcase.humanLabel}</div>
        </div>
      </div>
    </section>
  );
}
