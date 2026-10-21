import { ArrowRight, Check, Clock3, Globe2, MessageCircle, MoonStar, UsersRound } from 'lucide-react';

import { useLanguage } from '@/lib/i18n';

const channelIcons = { web: Globe2, whatsapp: MessageCircle } as const;
const driverIcons = [Clock3, MoonStar, UsersRound] as const;

export function ClinicPain() {
  const { copy } = useLanguage();
  const clinicPain = copy.clinicPain;

  return (
    <section id="sorun" className="chapter clinic-pain">
      <div className="clinic-pain__shell">
        <div className="clinic-pain__sheet">
          <div className="clinic-pain__intro">
            <div className="clinic-pain__intro-copy">
              <span className="chapter-kicker chapter-kicker--dark">{clinicPain.label}</span>
              <h2 className="clinic-pain__headline whitespace-pre-line font-display font-semibold">
                {clinicPain.headline}
              </h2>
              <span className="clinic-pain__headline-accent font-display font-semibold">
                {clinicPain.headlineAccent}
              </span>
            </div>
            <div className="clinic-pain__intro-visual">
              <div className="clinic-pain__intro-channels">
                {clinicPain.introVisual.channels.map((channel) => {
                  const ChannelIcon = channelIcons[channel.key];

                  return (
                    <span key={channel.key} className="clinic-pain__intro-channel">
                      <ChannelIcon aria-hidden="true" />
                      {channel.label}
                    </span>
                  );
                })}
              </div>
              <strong className="clinic-pain__intro-anchor">{clinicPain.introVisual.anchor}</strong>
              <p className="clinic-pain__intro-message">{clinicPain.introVisual.message}</p>
              <p className="clinic-pain__intro-support">{clinicPain.introVisual.supporting}</p>
            </div>
          </div>

          <div className="clinic-pain__scenario" aria-label={clinicPain.scenario.label}>
            <div className="clinic-pain__scenario-delay">
              <div className="clinic-pain__scenario-meta">
                <span className="clinic-pain__scenario-label">{clinicPain.scenario.label}</span>
                <span className="clinic-pain__scenario-time">
                  <Clock3 aria-hidden="true" />
                  {clinicPain.scenario.time}
                </span>
              </div>

              <div className="clinic-pain__incoming-message">
                <MessageCircle aria-hidden="true" />
                <div>
                  <span>{clinicPain.scenario.messageLabel}</span>
                  <p>{clinicPain.scenario.message}</p>
                </div>
              </div>

              <div className="clinic-pain__branches">
                <div className="clinic-pain__branch-spine" aria-hidden="true" />
                <article className="clinic-pain__branch-item">
                  <span className="clinic-pain__branch-marker">A</span>
                  <div>
                    <strong>{clinicPain.scenario.yourClinic}</strong>
                    <span className="clinic-pain__branch-state">
                      <Clock3 aria-hidden="true" />
                      {clinicPain.scenario.waiting}
                    </span>
                  </div>
                  <ArrowRight aria-hidden="true" />
                </article>
                <article className="clinic-pain__branch-item">
                  <span className="clinic-pain__branch-marker">B</span>
                  <div>
                    <strong>{clinicPain.scenario.otherClinic}</strong>
                    <span className="clinic-pain__branch-state clinic-pain__branch-state--answered">
                      <Check aria-hidden="true" />
                      {clinicPain.scenario.answered}
                    </span>
                  </div>
                  <ArrowRight aria-hidden="true" />
                </article>
              </div>

              <p className="clinic-pain__risk-line">
                <ArrowRight aria-hidden="true" />
                {clinicPain.scenario.risk}
              </p>
            </div>

            <aside className="clinic-pain__scenario-ai" aria-label={clinicPain.flow.title}>
              <h3>{clinicPain.flow.title}</h3>
              <ol className="clinic-pain__flow-list">
                {clinicPain.flow.steps.map((step) => (
                  <li key={step.number} className="clinic-pain__flow-step">
                    <span className="clinic-pain__flow-marker">
                      <Check aria-hidden="true" />
                    </span>
                    <div>
                      <span className="clinic-pain__flow-index">{step.number}</span>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </div>

          <div className="clinic-pain__drivers">
            {clinicPain.drivers.map((driver, index) => {
              const DriverIcon = driverIcons[index] ?? Clock3;

              return (
                <article key={driver.label} className="clinic-pain__driver">
                  <div className="clinic-pain__driver-meta">
                    <DriverIcon aria-hidden="true" />
                    <span>{driver.label}</span>
                  </div>
                  <h3>{driver.title}</h3>
                  <p>{driver.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
