import { ArrowRight, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onCTAClick: () => void;
}

export function FinalCTA({ onCTAClick }: FinalCTAProps) {
  return (
    <section className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-500/8 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold text-snow-50 leading-[1.15] tracking-tight">
          Hadi sakin bir
          <br />
          <span className="text-gradient-teal">konusma yapalim</span>
        </h2>

        <p className="mt-7 max-w-xl mx-auto text-snow-400 text-base sm:text-lg leading-relaxed">
          Borclu degilsiniz, satış baskisi yok. Isletmeniz icin neler
          yapabilecegimizi birlikte degerlendirelim. Karar sizin.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button onClick={onCTAClick} className="btn-primary group">
            <span>Ucretsiz Danisma Konusmasi</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-1.5 text-snow-500 text-sm">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Soz vermeden baslayin &middot; Emre Kocaaliler</span>
          </div>
        </div>
      </div>
    </section>
  );
}
