import { MapPin, Mail, ArrowRight, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { MermaidMark } from './MermaidMark';
import { useLanguage } from '@/lib/i18n';

interface FooterProps {
  onCTAClick: () => void;
}

export function Footer({ onCTAClick }: FooterProps) {
  const { copy } = useLanguage();

  return (
    <footer className="relative border-t border-navy-600/40 bg-navy-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div data-reveal className="reveal mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5 rounded-2xl border border-teal-500/15 bg-gradient-to-r from-teal-500/[0.08] to-cyan-500/[0.03] px-6 py-6 sm:px-8">
          <div>
            <p className="font-display text-lg text-snow-100">{copy.footer.prompt}</p>
            <p className="mt-1 text-sm text-snow-500">{copy.footer.promptDescription}</p>
          </div>
          <button onClick={onCTAClick} className="inline-flex items-center justify-center gap-2 rounded-xl border border-teal-400/30 bg-teal-500/10 px-5 py-3 text-sm font-display font-medium text-teal-200 transition-all duration-300 hover:bg-teal-500/20 hover:border-teal-300/50">
            {copy.footer.cta}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-teal-400/25">
                <MermaidMark className="h-full w-full" />
              </div>
              <span className="font-display text-lg font-semibold text-snow-50 tracking-tight">
                Richt<span className="text-teal-400"> Ai</span>
              </span>
            </div>
            <p className="text-snow-500 text-sm leading-relaxed max-w-xs">
              {copy.footer.brandDescription}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-medium text-snow-200 mb-4">
              {copy.footer.sitemap}
            </h4>
            <ul className="space-y-2.5">
              {copy.nav.links.map((link) => (
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

          <div>
            <h4 className="font-display text-sm font-medium text-snow-200 mb-4">{copy.footer.social}</h4>
            <div className="flex items-center gap-2">
              {[Linkedin, Instagram, MessageCircle].map((Icon, index) => (
                <button key={copy.footer.socialLabels[index]} type="button" aria-label={copy.footer.socialLabels[index]} title={copy.footer.socialLabels[index]} className="inline-flex w-10 h-10 items-center justify-center rounded-xl border border-navy-600/60 bg-navy-800/50 text-snow-500 transition-colors hover:border-teal-500/40 hover:text-teal-300">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-medium text-snow-200 mb-4">
              {copy.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-snow-500 text-sm">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                {copy.footer.location}
              </li>
              <li className="flex items-center gap-2 text-snow-500 text-sm">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <button onClick={onCTAClick} className="hover:text-teal-400 transition-colors duration-200">
                  {copy.footer.contactButton}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-navy-600/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-snow-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Richt Ai. {copy.footer.rights}
          </p>
          <p className="text-snow-500 text-xs">
            {copy.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
