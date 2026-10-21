import { MapPin, Mail, MessageCircle } from 'lucide-react';
import { MermaidMark } from './MermaidMark';
import { useLanguage } from '@/lib/i18n';
import { whatsappUrl } from '@/lib/whatsapp';
import { socialLinks } from '@/lib/socialLinks';

interface FooterProps {
  onCTAClick: () => void;
}

export function Footer({ onCTAClick }: FooterProps) {
  const { copy } = useLanguage();

  return (
    <footer className="section-tone section-tone--footer relative border-t border-navy-700/60">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">

        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr]">
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
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label={copy.footer.social}>
              {socialLinks.map(({ key, url }) => {
                const label = copy.footer.socialLinks[key];

                return url ? (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-snow-500 transition-colors duration-200 hover:text-teal-400"
                  >
                    {label}
                  </a>
                ) : (
                  <span key={key} className="inline-flex items-center gap-1.5 text-snow-600">
                    <span>{label}</span>
                    <span className="text-[0.6rem] uppercase tracking-[0.16em] text-snow-700">
                      {copy.footer.comingSoon}
                    </span>
                  </span>
                );
              })}
            </div>
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

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-display text-sm font-medium text-snow-200">
              {copy.footer.legal}
            </h4>
            <ul className="space-y-2.5">
              {copy.footer.legalLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-sm text-snow-500 transition-colors duration-200 hover:text-teal-400"
                  >
                    {link.label}
                  </a>
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
        <div className="flex items-center border-t border-navy-600/40 pt-6">
          <p className="text-center text-xs text-snow-500 sm:text-left">
            &copy; {new Date().getFullYear()} Richt AI. {copy.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
