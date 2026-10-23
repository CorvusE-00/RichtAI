import { Instagram, Linkedin, MapPin, Mail, MessageCircle } from 'lucide-react';
import { MermaidMark } from './MermaidMark';
import { useLanguage } from '@/lib/i18n';
import { whatsappUrl } from '@/lib/whatsapp';
import { socialLinks } from '@/lib/socialLinks';
import type { ContactIntent, ContactSource } from '@/types/contact';

interface FooterProps {
  onCTAClick: (intent: ContactIntent, source: ContactSource) => void;
}

type SocialKey = (typeof socialLinks)[number]['key'];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M15.75 3.5c.28 1.55 1.19 2.49 2.75 2.7v2.54c-1.05.1-1.98-.2-2.75-.7v6.49c0 3.13-2.18 5.36-5.43 5.36-2.83 0-5.07-2.03-5.07-4.76 0-2.83 2.31-4.96 5.31-4.96.34 0 .67.03 1 .1v2.61a3.4 3.4 0 0 0-.95-.14c-1.33 0-2.5.94-2.5 2.3 0 1.23.98 2.15 2.26 2.15 1.52 0 2.39-.99 2.39-2.62V3.5h3Z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: SocialKey }) {
  if (name === 'linkedin') {
    return <Linkedin className="h-4 w-4 shrink-0 text-[#6ea8ff]" aria-hidden="true" />;
  }

  if (name === 'instagram') {
    return <Instagram className="h-4 w-4 shrink-0 text-[#d38ca8]" aria-hidden="true" />;
  }

  return <TikTokIcon className="h-4 w-4 shrink-0 text-[#83d6df]" />;
}

export function Footer({ onCTAClick }: FooterProps) {
  const { copy } = useLanguage();

  return (
    <footer className="section-tone section-tone--footer relative border-t border-navy-700/60">
      <div className="mx-auto max-w-6xl px-5 pb-7 pt-10 sm:px-6 sm:pb-10 sm:pt-14">

        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <MermaidMark className="block h-[1.8125rem] w-[1.8125rem] shrink-0 translate-y-px object-contain" />
              <span className="font-display text-lg font-semibold tracking-tight text-snow-50">
                Richt<span className="text-teal-400"> AI</span>
              </span>
            </div>
            <p className="text-snow-500 text-sm leading-relaxed max-w-xs">
              {copy.footer.brandDescription}
            </p>
            {socialLinks.some(({ url }) => url) && (
              <div className="footer__social mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label={copy.footer.social}>
                {socialLinks.filter(({ url }) => url).map(({ key, url }) => {
                const label = copy.footer.socialLinks[key];
                const content = (
                  <>
                    <SocialIcon name={key} />
                    <span className="font-medium text-snow-300">{label}</span>
                  </>
                );

                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="footer__social-link inline-flex items-center gap-1.5 text-snow-500 transition-colors duration-200 hover:text-teal-400"
                  >
                    {content}
                  </a>
                );
                })}
              </div>
            )}
          </div>

          <div className="footer__utility-grid">
            {/* Links */}
            <div>
              <h4 className="font-display mb-4 text-sm font-medium text-snow-200">
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
                      className="text-sm text-snow-500 transition-colors duration-200 hover:text-teal-400"
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
            <div className="footer__contact">
              <h4 className="mb-4 font-display text-sm font-medium text-snow-200">
                {copy.footer.contact}
              </h4>
              <ul className="footer__contact-list space-y-3">
                <li className="footer__contact-item footer__contact-item--location flex items-center gap-2 text-sm text-snow-500">
                  <MapPin className="h-4 w-4 shrink-0 text-teal-400" />
                  {copy.footer.location}
                </li>
                <li className="footer__contact-item flex items-center gap-2 text-sm text-snow-500">
                  <Mail className="h-4 w-4 shrink-0 text-teal-400" />
                  <a href="mailto:hello@getrichtai.com" className="footer__contact-email transition-colors duration-200 hover:text-teal-400">
                    {copy.footer.email}
                  </a>
                </li>
                <li className="footer__contact-item flex items-center gap-2 text-sm text-snow-500">
                  <MessageCircle className="h-4 w-4 shrink-0 text-teal-400" />
                  <button onClick={() => onCTAClick('general', 'footer')} className="footer__contact-action transition-colors duration-200 hover:text-teal-400">
                    {copy.footer.contactButton}
                  </button>
                </li>
                {whatsappUrl && (
                  <li className="footer__contact-item">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-snow-500 transition-colors duration-200 hover:text-teal-400"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0 text-teal-400" />
                      {copy.footer.whatsapp}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__copyright mt-5 flex items-center">
          <p className="text-center text-xs text-snow-500 sm:text-left">
            &copy; {new Date().getFullYear()} Richt AI. {copy.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
