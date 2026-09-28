import { Brain, MapPin, Mail } from 'lucide-react';

interface FooterProps {
  onCTAClick: () => void;
}

export function Footer({ onCTAClick }: FooterProps) {
  return (
    <footer className="relative border-t border-navy-600/40 bg-navy-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-navy-950" />
              </div>
              <span className="font-display text-lg font-semibold text-snow-50 tracking-tight">
                Richt<span className="text-teal-400"> Ai</span>
              </span>
            </div>
            <p className="text-snow-500 text-sm leading-relaxed max-w-xs">
              Kucuk ve orta olcekli isletmeler, dis klinikleri ve saglik
              turizmi icin yapay zeka otomasyonu ve modern web cozumleri.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-medium text-snow-200 mb-4">
              Site Haritasi
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Sorun', id: 'sorun' },
                { label: 'Cozum', id: 'cozum' },
                { label: 'Nasil Calisir', id: 'nasil-calisir' },
                { label: 'Guven', id: 'guven' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(link.id)
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-snow-500 hover:text-teal-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-medium text-snow-200 mb-4">
              Iletisim
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-snow-500 text-sm">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                Kusadasi, Aydin &middot; Ege Bolgesi
              </li>
              <li className="flex items-center gap-2 text-snow-500 text-sm">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <button onClick={onCTAClick} className="hover:text-teal-400 transition-colors duration-200">
                  Iletisime gec
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-navy-600/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-snow-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Richt Ai. Tum haklari saklidir.
          </p>
          <p className="text-snow-500 text-xs">
            Emre Kocaaliler tarafindan kuruldu &middot; Kusadasi
          </p>
        </div>
      </div>
    </footer>
  );
}
