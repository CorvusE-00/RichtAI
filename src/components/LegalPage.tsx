import { MermaidMark } from './MermaidMark';
import { useLanguage } from '@/lib/i18n';
import type { LegalPageSlug } from '@/lib/legalContent';

export function LegalPage({ page }: { page: LegalPageSlug }) {
  const { copy, language, toggleLanguage } = useLanguage();
  const content = copy.legalPages[page];

  return (
    <div className="min-h-screen bg-navy-950 text-snow-100 font-body antialiased">
      <header className="border-b border-navy-700/60 bg-navy-950/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
          <a href="/" className="flex items-center gap-2.5" aria-label="Richt AI">
            <div className="h-9 w-9 overflow-hidden rounded-lg border border-teal-400/25">
              <MermaidMark className="h-full w-full" />
            </div>
            <span className="font-display text-lg font-semibold tracking-tight text-snow-50">
              Richt<span className="text-teal-400"> AI</span>
            </span>
          </a>

          <div className="flex items-center gap-3 text-sm">
            <a href="/" className="text-snow-500 transition-colors duration-200 hover:text-teal-400">
              {copy.legalPages.backHome}
            </a>
            <span className="h-4 w-px bg-navy-700" aria-hidden="true" />
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded-full border border-navy-600 px-3 py-1.5 text-xs font-medium text-snow-300 transition-colors duration-200 hover:border-teal-400/70 hover:text-teal-300"
              aria-label={language === 'tr' ? 'Switch to English' : 'Türkçeye geç'}
            >
              {language === 'tr' ? 'EN' : 'TR'}
            </button>
          </div>
        </div>
      </header>

      <main className="bg-[#F3F0E9]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="mb-10 border-b border-navy-900/15 pb-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
              Richt AI · {copy.footer.legal}
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-4 text-sm text-navy-700/65">{copy.legalPages.lastUpdated}</p>
          </div>

          <div className="space-y-10 text-base leading-relaxed text-navy-900/80 sm:text-lg">
            <p className="max-w-2xl text-navy-950/90">{content.intro}</p>
            {content.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="font-display text-xl font-semibold tracking-tight text-navy-950 sm:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-14 border-t border-navy-900/15 pt-6">
            <a href="/" className="text-sm font-medium text-teal-800 transition-colors duration-200 hover:text-teal-600">
              ← {copy.legalPages.backHome}
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-navy-700/60 bg-navy-950">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-snow-600 sm:px-6">
          © {new Date().getFullYear()} Richt AI. {copy.footer.rights}
        </div>
      </footer>
    </div>
  );
}
