import { ArrowRight, ShieldCheck, UserRound } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  const { copy } = useLanguage();
  const systemNodes = [
    { key: 'website', label: copy.hero.systemCanvas.nodes.website, modifier: 'website', column: '1', row: '1' },
    { key: 'messages', label: copy.hero.systemCanvas.nodes.messages, modifier: 'messages', column: '1', row: '2' },
    { key: 'ai', label: copy.hero.systemCanvas.nodes.ai, modifier: 'ai', column: '2', row: '2' },
    { key: 'crm', label: copy.hero.systemCanvas.nodes.crm, modifier: 'crm', column: '3', row: '1' },
    { key: 'calendar', label: copy.hero.systemCanvas.nodes.calendar, modifier: 'calendar', column: '3', row: '2' },
    { key: 'team', label: copy.hero.systemCanvas.nodes.team, modifier: 'team', column: '2', row: '3' },
  ] as const;

  return (
    <section
      id="anasayfa"
      className="hero-v2 v2-section-dark relative overflow-hidden"
    >
      <div className="v2-container relative">
        <div className="hero-v2__layout">
          <div className="hero-v2__copy">
            <h1 className="hero-v2__heading">
              <span className="block">{copy.hero.headline}</span>
              <span className="block">{copy.hero.headlineAccent}</span>
            </h1>

            <p className="hero-v2__support">
              {copy.hero.subheadline}
            </p>

            <div className="hero-v2__actions">
              <button onClick={onCTAClick} className="hero-v2__cta w-full sm:w-auto">
                <span>{copy.hero.cta}</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="hero-v2__meta">
              <span>{copy.hero.duration}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[var(--v2-accent-system)]" aria-hidden="true" />
                {copy.hero.noCommitment}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <UserRound className="h-4 w-4 text-[var(--v2-accent-system)]" aria-hidden="true" />
                {copy.hero.direct}
              </span>
            </div>
          </div>

          <figure className="hero-system" aria-labelledby="hero-system-label" aria-describedby="hero-system-description">
            <figcaption id="hero-system-label" className="hero-system__label">
              <span className="hero-system__label-marker" aria-hidden="true" />
              {copy.hero.systemCanvas.label}
            </figcaption>
            <span id="hero-system-description" className="sr-only">
              {copy.hero.systemCanvas.aria}
            </span>
            <div className="hero-system__stage">
              <svg className="hero-system__connectors" viewBox="0 0 600 320" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                <path className="hero-system__connector" d="M 100 62 V 160" />
                <path className="hero-system__connector hero-system__connector--signal" d="M 100 160 L 300 160" />
                <path className="hero-system__connector" d="M 300 160 L 500 62" />
                <path className="hero-system__connector" d="M 500 62 V 160" />
                <path className="hero-system__connector hero-system__connector--signal" d="M 500 160 L 300 258" />
              </svg>
              <ol className="hero-system__route">
                {systemNodes.map((node) => (
                  <li
                    key={node.key}
                    className={`hero-system__item hero-system__item--${node.modifier}`}
                    style={{ gridColumn: node.column, gridRow: node.row }}
                  >
                    <div className={`hero-system__node hero-system__node--${node.modifier}`}>
                      <span className="hero-system__marker" aria-hidden="true" />
                      <span className="hero-system__node-label">{node.label}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
