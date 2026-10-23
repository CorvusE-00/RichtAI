import { type KeyboardEvent, useState } from 'react';
import { Bell, CalendarCheck2, Check, Clock3, ExternalLink, Globe2, MessageCircle, UserRound } from 'lucide-react';

import { useLanguage } from '@/lib/i18n';

const liveDemoUrl = 'https://dental-teal-alpha.vercel.app/';
const tabIcons = [Globe2, MessageCircle, CalendarCheck2, Clock3] as const;

export function ProductShowcase() {
  const { copy } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const productShowcase = copy.productShowcase;
  const tab = productShowcase.tabs[activeTab];
  const ActiveTabIcon = tabIcons[activeTab];
  const activeTabId = `product-showcase-tab-${activeTab}`;

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    let nextIndex = activeTab;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (activeTab + 1) % productShowcase.tabs.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (activeTab - 1 + productShowcase.tabs.length) % productShowcase.tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = productShowcase.tabs.length - 1;

    if (nextIndex !== activeTab) {
      event.preventDefault();
      setActiveTab(nextIndex);
      requestAnimationFrame(() => document.getElementById(`product-showcase-tab-${nextIndex}`)?.focus());
    }
  };

  return (
    <section id="cozum" className="chapter chapter--dark product-showcase overflow-hidden pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
      <div className="mx-auto max-w-[82rem] px-5 sm:px-6">
        <div className="product-showcase__intro" data-reveal>
          <div>
            <span className="chapter-kicker">{productShowcase.label}</span>
            <h2 className="chapter-heading mt-6 max-w-4xl font-display text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-snow-50 sm:text-5xl lg:text-6xl">
              {productShowcase.headline}
              <span className="mt-2 block text-snow-400">{productShowcase.headlineAccent}</span>
            </h2>
          </div>
          <p className="product-showcase__intro-description">{productShowcase.description}</p>
        </div>

        <div className="product-showcase__tabs mt-12 sm:mt-16" role="tablist" aria-label={productShowcase.label}>
          {productShowcase.tabs.map((item, index) => {
            const TabIcon = tabIcons[index];
            return (
              <button
                key={item.label}
                id={`product-showcase-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                aria-controls="product-showcase-panel"
                tabIndex={activeTab === index ? 0 : -1}
                onClick={() => setActiveTab(index)}
                onKeyDown={handleTabKeyDown}
                className={`product-showcase__tab ${activeTab === index ? 'is-active' : ''}`}
              >
                <TabIcon className="product-showcase__tab-icon" aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          id="product-showcase-panel"
          className="product-showcase__workspace"
          role="tabpanel"
          aria-labelledby={activeTabId}
        >
          <div className="product-showcase__visual" key={activeTab}>
            {activeTab === 0 && (
              <div className="product-showcase__web-visual">
                <div className="product-showcase__mini-browser product-showcase__mini-browser--context">
                  <div className="product-showcase__mini-browser-bar">
                    <span />
                    <span />
                    <span />
                    <em>{productShowcase.web.browserLabel}</em>
                  </div>
                  <img src="/images/luma-dental-prototype-preview.png" alt={productShowcase.web.browserLabel} />
                </div>
                <aside className="product-showcase__web-chat" aria-label={productShowcase.web.chatAriaLabel}>
                  <header className="product-showcase__web-chat-header">
                    <div className="product-showcase__web-chat-title">
                      <MessageCircle aria-hidden="true" />
                      <strong>{productShowcase.web.chatTitle}</strong>
                    </div>
                    <span className="product-showcase__web-chat-sample">{productShowcase.web.sampleLabel}</span>
                  </header>
                  <div className="product-showcase__web-chat-body">
                    <div className="product-showcase__web-message product-showcase__web-message--patient">
                      <span>{productShowcase.web.patientLabel}</span>
                      <p>{productShowcase.web.patientMessage}</p>
                    </div>
                    <div className="product-showcase__web-message product-showcase__web-message--assistant">
                      <span>{productShowcase.web.assistantLabel}</span>
                      <p>{productShowcase.web.assistantMessage}</p>
                    </div>
                  </div>
                  <footer className="product-showcase__web-chat-footer">
                    <span className="product-showcase__web-chat-indicator" aria-hidden="true" />
                    <span>{productShowcase.web.demoIndicator}</span>
                  </footer>
                </aside>
              </div>
            )}

            {activeTab === 1 && (
              <div className="product-showcase__whatsapp-visual">
                <div className="product-showcase__phone-top">
                  <MessageCircle aria-hidden="true" />
                  <span>{productShowcase.whatsapp.title}</span>
                  <span className="product-showcase__online" />
                </div>
                <div className="product-showcase__chat-body">
                  <div className="product-showcase__chat-bubble product-showcase__chat-bubble--patient">{productShowcase.whatsapp.patient}</div>
                  <div className="product-showcase__chat-bubble product-showcase__chat-bubble--ai">{productShowcase.whatsapp.ai}</div>
                  <div className="product-showcase__handoff-note">
                    <Check aria-hidden="true" />
                    <span>{productShowcase.whatsapp.handoff}</span>
                    <small>{productShowcase.whatsapp.waiting}</small>
                  </div>
                  <p className="product-showcase__feature-note">{productShowcase.whatsapp.followUpNote}</p>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="product-showcase__lead-visual">
                <div className="product-showcase__lead-header">
                  <span>{productShowcase.lead.title}</span>
                  <span className="product-showcase__lead-status">{productShowcase.lead.status}</span>
                </div>
                <div className="product-showcase__lead-grid">
                  {productShowcase.lead.rows.map((row) => (
                    <div key={row.label}>
                      <span>{row.label}</span>
                      <strong>{row.value}</strong>
                    </div>
                  ))}
                </div>
                <div className="product-showcase__lead-notification">
                  <Bell aria-hidden="true" />
                  <span>{productShowcase.lead.notification}</span>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="product-showcase__follow-up-visual">
                <div className="product-showcase__follow-up-header">
                  <Clock3 aria-hidden="true" />
                  <span>{productShowcase.followUp.title}</span>
                </div>
                <div className="product-showcase__follow-up-timeline">
                  <article className="product-showcase__follow-up-step">
                    <span className="product-showcase__follow-up-marker"><MessageCircle aria-hidden="true" /></span>
                    <div>
                      <span className="product-showcase__follow-up-label">{productShowcase.followUp.firstLabel}</span>
                      <strong>{productShowcase.followUp.firstStatus}</strong>
                      <span className="product-showcase__follow-up-meta">{productShowcase.followUp.firstInterest}</span>
                      <div className="product-showcase__follow-up-schedule">
                        <Clock3 aria-hidden="true" />
                        <span>{productShowcase.followUp.firstAction}</span>
                        <small>{productShowcase.followUp.firstTiming}</small>
                      </div>
                      <p className="product-showcase__follow-up-message"><MessageCircle aria-hidden="true" />{productShowcase.followUp.firstMessage}</p>
                    </div>
                  </article>
                  <article className="product-showcase__follow-up-step">
                    <span className="product-showcase__follow-up-marker"><CalendarCheck2 aria-hidden="true" /></span>
                    <div>
                      <span className="product-showcase__follow-up-label">{productShowcase.followUp.secondLabel}</span>
                      <strong>{productShowcase.followUp.secondStatus}</strong>
                      <div className="product-showcase__follow-up-schedule">
                        <CalendarCheck2 aria-hidden="true" />
                        <span>{productShowcase.followUp.secondAction}</span>
                      </div>
                      <p className="product-showcase__follow-up-message"><MessageCircle aria-hidden="true" />{productShowcase.followUp.secondMessage}</p>
                    </div>
                  </article>
                </div>
              </div>
            )}
          </div>

          <aside className="product-showcase__tab-copy">
            <ActiveTabIcon className="product-showcase__tab-icon product-showcase__tab-icon--panel" aria-hidden="true" />
            <div>
              <h3>{tab.title}</h3>
              <p>{tab.description}</p>
              {activeTab === 0 && (
                <div className="product-showcase__demo">
                  <a className="product-showcase__demo-link" href={liveDemoUrl} target="_blank" rel="noreferrer noopener">
                    <span className="product-showcase__demo-copy">
                      <strong>{productShowcase.web.liveDemoCta}</strong>
                      <small>{productShowcase.web.liveDemoLabel}</small>
                    </span>
                    <ExternalLink aria-hidden="true" />
                  </a>
                </div>
              )}
            </div>
          </aside>
        </div>

        <div className="product-showcase__trust">
          <div className="product-showcase__human-label"><UserRound aria-hidden="true" />{productShowcase.humanLabel}</div>
        </div>
      </div>
    </section>
  );
}
