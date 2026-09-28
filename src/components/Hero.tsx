import { ArrowRight, ShieldCheck, UserRound } from 'lucide-react';
import { AIWorkflow } from './AIWorkflow';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section id="anasayfa" className="relative flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-30 animate-grid-move" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute inset-0 hero-noise pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950/80 to-navy-950" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/6 rounded-full blur-3xl animate-float [animation-delay:2s]" />

      <div data-reveal className="reveal relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center py-16 sm:py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/60 border border-navy-600/60 backdrop-blur-sm animate-fade-in-up mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
          </span>
          <span className="text-snow-300 text-xs sm:text-sm font-display tracking-wide">
            İşletmeler için modern web ve yapay zekâ çözümleri
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-[-0.04em] text-snow-50 animate-fade-in-up animate-delay-100">
          İşletmenizin dijital iletişimini
          <br />
          <span className="text-gradient-teal">daha akıllı hâle getirin.</span>
        </h1>

        {/* AI workflow */}
        <AIWorkflow />

        {/* Subheadline */}
        <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-snow-400 leading-relaxed animate-fade-in-up animate-delay-300">
          Web sitenizi ve müşteri iletişiminizi daha düzenli, hızlı ve anlaşılır hâle getirin.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 animate-fade-in-up animate-delay-500">
          <button onClick={onCTAClick} className="btn-primary group min-w-[18rem] sm:min-w-[20rem]">
            <span>Ücretsiz tanışma görüşmesi</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <span className="text-snow-500 text-xs sm:text-sm">İlk görüşme yaklaşık 30 dakika sürer.</span>

          {/* Trust indicator */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-snow-500 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Herhangi bir taahhüt yok</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-navy-500" />
            <div className="flex items-center gap-1.5">
              <UserRound className="w-4 h-4 text-teal-400" />
              <span>Doğrudan Emre Kocaaliler ile</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
