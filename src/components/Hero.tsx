import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { TypewriterText } from './Typewriter';

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-30 animate-grid-move" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950/80 to-navy-950" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/6 rounded-full blur-3xl animate-float [animation-delay:2s]" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/60 border border-navy-600/60 backdrop-blur-sm animate-fade-in-up mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
          </span>
          <span className="text-snow-300 text-sm font-display tracking-wide">
            Kusadası &amp; Ege bolgesinde yerel hizmet
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight text-snow-50 animate-fade-in-up animate-delay-100">
          Klinikler ve isletmeler icin
          <br />
          <span className="inline-block mt-2 text-2xl sm:text-4xl lg:text-5xl">
            <TypewriterText />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-7 max-w-2xl mx-auto text-base sm:text-lg text-snow-400 leading-relaxed animate-fade-in-up animate-delay-300">
          Richt Ai ile web sitenizi ve musteri iletisiminizi yapay zeka
          gucuyle otomatiklestirin. Daha az zaman kaybi, daha fazla hastasi
          ve musteri memnuniyeti.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 animate-fade-in-up animate-delay-500">
          <button onClick={onCTAClick} className="btn-primary group">
            <span>Ucretsiz Danisma Konusmasi</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Trust indicator */}
          <div className="flex items-center gap-4 text-snow-500 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Borclu degilsiniz</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-navy-500" />
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>Emre Kocaaliler &middot; Kusadasi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-1000">
        <div className="w-6 h-10 rounded-full border-2 border-navy-500 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-teal-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
