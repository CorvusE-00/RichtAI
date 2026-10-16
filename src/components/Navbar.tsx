import { useState, useCallback, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MermaidMark } from './MermaidMark';
import { useLanguage } from '@/lib/i18n';

interface NavbarProps {
  onCTAClick: () => void;
}

export function Navbar({ onCTAClick }: NavbarProps) {
  const { copy, language, toggleLanguage } = useLanguage();
  const navLinks = copy.nav.links;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('sorun');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
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
    <header className={`navbar fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${isScrolled ? 'py-1' : 'py-0'}`}>
      <div className={`absolute inset-0 border-b backdrop-blur-md transition-all duration-500 ${isScrolled ? 'bg-navy-950/94 border-navy-600/75 shadow-[0_10px_32px_rgba(0,0,0,0.22)]' : 'bg-navy-950/26 border-snow-100/15'}`} />

      <nav className={`relative mx-auto grid max-w-[90rem] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-3 transition-all duration-500 sm:px-6 lg:px-8 ${isScrolled ? 'h-14' : 'h-[4.5rem]'}`}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group col-start-1 flex items-center gap-3 justify-self-start"
        >
            <div className={`relative transition-transform duration-500 ${isScrolled ? 'scale-90' : ''}`}>
            <div className="absolute inset-0 bg-teal-500/5 blur-lg group-hover:bg-teal-500/10 transition-all duration-300" />
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-teal-400/30">
              <MermaidMark className="h-full w-full" />
            </div>
          </div>
          <span className={`font-display font-semibold tracking-tight text-snow-50 transition-all duration-500 ${isScrolled ? 'text-base' : 'text-xl'}`}>
            Richt<span className="text-teal-400"> Ai</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="col-start-2 hidden items-center gap-2 justify-self-center lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={`relative px-3 py-2 text-sm transition-colors duration-200 font-display after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:origin-left after:rounded-full after:bg-teal-400 after:transition-transform after:duration-300 ${activeSection === link.id ? 'text-snow-100 after:scale-x-100' : 'text-snow-300 after:scale-x-0 hover:text-snow-100 hover:after:scale-x-50'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="col-start-3 hidden items-center gap-3 justify-self-end lg:flex">
          <button
            onClick={toggleLanguage}
            className="inline-flex min-w-11 items-center justify-center rounded-full border border-snow-100/25 px-3 py-2 text-xs font-semibold tracking-wide text-snow-200 transition-colors hover:border-teal-400/50 hover:text-teal-200"
            aria-label={copy.nav.switchLanguage}
          >
            {language === 'tr' ? 'EN' : 'TR'}
          </button>
          <button
            onClick={handleCTA}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-teal-200/30 bg-teal-500 px-5 py-2.5 font-display text-sm font-semibold text-navy-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400"
          >
            {copy.nav.cta}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="col-start-3 lg:hidden flex items-center gap-2 justify-self-end">
          <button
            onClick={toggleLanguage}
            className="inline-flex min-w-11 items-center justify-center rounded-lg border border-navy-600/70 px-2.5 py-2 text-xs font-semibold tracking-wide text-snow-300 transition-colors hover:border-teal-400/50 hover:text-teal-200"
            aria-label={copy.nav.switchLanguage}
          >
            {language === 'tr' ? 'EN' : 'TR'}
          </button>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg text-snow-300 hover:text-snow-100 hover:bg-navy-700/60 transition-colors duration-200"
            aria-label={copy.nav.menu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden relative overflow-hidden bg-navy-900/95 backdrop-blur-md border-b border-navy-600/40 transition-[max-height,opacity] duration-300 ${isMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 font-display text-sm ${activeSection === link.id ? 'bg-teal-500/10 text-teal-300' : 'text-snow-300 hover:text-snow-100 hover:bg-navy-700/40'}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
