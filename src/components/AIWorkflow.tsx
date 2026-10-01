import { Check, Clock3, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n';

export function AIWorkflow() {
  const { copy } = useLanguage();
  const [stage, setStage] = useState(4);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timer = window.setInterval(() => {
      setStage((current) => (current === 4 ? 0 : current + 1));
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="workflow-shell workflow-scene animate-fade-in-up animate-delay-200" aria-label={copy.workflow.aria} data-stage={stage}>
      <div className="workflow-scene__top">
        <div className="workflow-scene__status">
          <span className="workflow-scene__status-dot" aria-hidden="true" />
          <span>{copy.workflow.status}</span>
        </div>
        <span className="workflow-scene__example">{copy.workflow.example}</span>
      </div>

      <div className="workflow-scene__body">
        <div className={`workflow-event ${stage === 0 ? 'is-current' : ''}`}>
          <div className="workflow-section-heading">
            <span>{copy.workflow.incoming}</span>
            <span className="workflow-event__meta">{copy.workflow.source} · {copy.workflow.time}</span>
          </div>
          <div className="workflow-message">
            <MessageCircle className="h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
            <p>{copy.workflow.message}</p>
          </div>
        </div>

        <div className={`workflow-interpretation ${stage === 1 ? 'is-current' : ''}`}>
          <div className="workflow-section-heading">{copy.workflow.interpretation}</div>
          <dl className="workflow-fields">
            <div>
              <dt>{copy.workflow.requestType}</dt>
              <dd>{copy.workflow.appointment}</dd>
            </div>
            <div>
              <dt>{copy.workflow.topic}</dt>
              <dd>{copy.workflow.topicValue}</dd>
            </div>
            <div>
              <dt>{copy.workflow.statusLabel}</dt>
              <dd>{copy.workflow.qualified}</dd>
            </div>
          </dl>
        </div>

        <div className={`workflow-actions ${stage === 2 || stage === 3 ? 'is-current' : ''}`}>
          <div className="workflow-section-heading">{copy.workflow.actionTitle}</div>
          <ol className="workflow-actions__list">
            <li className={`workflow-action ${stage >= 2 ? 'is-resolved' : ''}`}>
              <span className="workflow-action__marker" aria-hidden="true"><Check className="h-3 w-3" /></span>
              <span>{copy.workflow.actionCreated}</span>
            </li>
            <li className={`workflow-action ${stage >= 3 ? 'is-resolved' : ''}`}>
              <span className="workflow-action__marker" aria-hidden="true"><Clock3 className="h-3 w-3" /></span>
              <span>{copy.workflow.actionSlot}</span>
            </li>
          </ol>
        </div>

        <div className={`workflow-complete ${stage === 4 ? 'is-current' : ''}`}>
          <span className="workflow-complete__icon" aria-hidden="true"><Check className="h-4 w-4" /></span>
          <span>
            <strong>{copy.workflow.completed}</strong>
            <small>{copy.workflow.scheduled}</small>
          </span>
        </div>
      </div>
    </section>
  );
}
