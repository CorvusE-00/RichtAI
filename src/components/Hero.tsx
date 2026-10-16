interface HeroProps {
  onCTAClick: () => void;
}

export function Hero(props: HeroProps) {
  void props;

  return (
    <section id="anasayfa" className="hero-section relative overflow-hidden">
      <div className="hero-section__background pointer-events-none absolute inset-0" aria-hidden="true" />
    </section>
  );
}
