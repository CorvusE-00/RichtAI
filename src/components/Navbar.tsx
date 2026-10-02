import { useState, useCallback, useEffect } from 'react';
import { MermaidMark } from './MermaidMark';
import { useLanguage } from '@/lib/i18n';

interface NavbarProps {
  onCTAClick: () => void;
}

export function Navbar({ onCTAClick }: NavbarProps) {
  const { copy, language, toggleLanguage } = useLanguage();
  const navLinks = copy.nav.links;
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('sorun');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTA = useCallback(() => {
    onCTAClick();
  }, [onCTAClick]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [navLinks]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'py-1' : 'py-2'}`}>
      <div className={`absolute inset-0 backdrop-blur-md border-b transition-all duration-500 ${isScrolled ? 'bg-navy-950/92 border-navy-600/70 shadow-[0_10px_40px_rgba(2,8,23,0.25)]' : 'bg-navy-950/45 border-navy-600/35'}`} />

      <nav className={`relative max-w-6xl mx-auto px-3 sm:px-6 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center transition-all duration-500 ${isScrolled ? 'h-14' : 'h-16'}`}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="justify-self-start flex items-center gap-2.5 group"
        >
          <div className={`relative transition-transform duration-500 ${isScrolled ? 'scale-90' : ''}`}>
            <div className="absolute inset-0 bg-teal-500/30 blur-lg group-hover:bg-teal-500/40 transition-all duration-300" />
            <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-teal-400/25">
              <MermaidMark className="h-full w-full" />
            </div>
          </div>
          <span className={`font-display font-semibold text-snow-50 tracking-tight transition-all duration-500 ${isScrolled ? 'text-base' : 'text-lg'}`}>
            Richt<span className="text-teal-400"> Ai</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 justify-self-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={`relative px-3 py-2 text-sm transition-colors duration-200 font-display after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:origin-left after:rounded-full after:bg-teal-400 after:transition-transform after:duration-300 ${activeSection === link.id ? 'text-snow-100 after:scale-x-100' : 'text-snow-400 after:scale-x-0 hover:text-snow-100 hover:after:scale-x-50'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3 justify-self-end">
          <button
            onClick={toggleLanguage}
            className="inline-flex min-w-11 items-center justify-center rounded-lg border border-navy-600/70 px-2.5 py-2 text-xs font-semibold tracking-wide text-snow-300 transition-colors hover:border-teal-400/50 hover:text-teal-200"
            aria-label={copy.nav.switchLanguage}
          >
            {language === 'tr' ? 'EN' : 'TR'}
          </button>
          <button
            onClick={handleCTA}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-navy-950 font-display font-semibold text-sm transition-all duration-300 hover:from-teal-400 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.35)] hover:-translate-y-0.5"
          >
            {copy.nav.cta}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2 justify-self-end">
          <button
            onClick={toggleLanguage}
            className="inline-flex min-w-11 items-center justify-center rounded-lg border border-navy-600/70 px-2.5 py-2 text-xs font-semibold tracking-wide text-snow-300 transition-colors hover:border-teal-400/50 hover:text-teal-200"
            aria-label={copy.nav.switchLanguage}
          >
            {language === 'tr' ? 'EN' : 'TR'}
          </button>
          <button
            onClick={handleCTA}
            className="inline-flex max-w-[9rem] items-center justify-center truncate whitespace-nowrap rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 px-2.5 py-2 text-[0.65rem] font-display font-semibold leading-none text-navy-950 transition-all duration-300 hover:from-teal-400 hover:to-cyan-400 sm:max-w-none sm:px-5 sm:py-2.5 sm:text-sm"
          >
            {copy.nav.cta}
          </button>
        </div>
      </nav>
    </header>
  );
}
