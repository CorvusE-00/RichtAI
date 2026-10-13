interface HeroMonolithVisualProps {
  alt: string;
  windowLabel: string;
}

export function HeroMonolithVisual({ alt, windowLabel }: HeroMonolithVisualProps) {
  return (
    <div className="hero-monolith-window">
      <div className="hero-monolith-window__bar" aria-hidden="true">
        <div className="hero-monolith-window__status">
          <span className="hero-monolith-window__dot hero-monolith-window__dot--teal" />
          <span className="hero-monolith-window__dot" />
          <span className="hero-monolith-window__dot" />
        </div>
        <span className="hero-monolith-window__label">{windowLabel}</span>
      </div>
      <div className="hero-monolith-window__body">
        <div className="hero-monolith-stage">
          <img className="hero-monolith-visual" src="/images/richtai-signal-monolith-visual.png" alt={alt} />
        </div>
      </div>
    </div>
  );
}
