import { MapPin, Mail, MessageCircle } from 'lucide-react';
import { MermaidMark } from './MermaidMark';
import { useLanguage } from '@/lib/i18n';
import { whatsappUrl } from '@/lib/whatsapp';

interface FooterProps {
  onCTAClick: () => void;
}

export function Footer({ onCTAClick }: FooterProps) {
  const { copy } = useLanguage();

  return (
    <footer className="section-tone section-tone--footer relative border-t border-navy-700/60">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">

        <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-teal-400/25">
                <MermaidMark className="h-full w-full" />
              </div>
              <span className="font-display text-lg font-semibold tracking-tight text-snow-50">
                Richt<span className="text-teal-400"> AI</span>
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
              {whatsappUrl && (
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-snow-500 text-sm transition-colors duration-200 hover:text-teal-400"
                  >
                    <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    {copy.footer.whatsapp}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-navy-600/40 pt-6 sm:flex-row">
          <p className="text-snow-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Richt AI. {copy.footer.rights}
          </p>
          <p className="text-snow-500 text-xs">
            {copy.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
