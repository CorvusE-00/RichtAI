import { ArrowRight, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onCTAClick: () => void;
}

export function FinalCTA({ onCTAClick }: FinalCTAProps) {
  return (
    <section id="final-cta" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-teal-500/8 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div data-reveal className="reveal relative max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-snow-50 leading-[1.08] tracking-[-0.04em]">
          İşletmeniz için doğru
          <br />
          <span className="text-gradient-teal">başlangıcı birlikte bulalım</span>
        </h2>

        <p className="mt-7 max-w-xl mx-auto text-snow-400 text-base sm:text-lg leading-relaxed">
          Herhangi bir taahhüt yok, satış baskısı yok. İşletmeniz için hangi adımın doğru olduğunu birlikte değerlendirelim.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button onClick={onCTAClick} className="btn-primary group min-w-[18rem] sm:min-w-[20rem]">
            <span>Ücretsiz tanışma görüşmesi</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-1.5 text-snow-500 text-sm">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Herhangi bir taahhüt yok · Birebir iletişim</span>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-snow-500/90 italic">
            “İhtiyacınızı dinleyip, size gerçekten gerekli olan sistemi kurmak için buradayım.”
          </p>
        </div>
      </div>
    </section>
  );
}
