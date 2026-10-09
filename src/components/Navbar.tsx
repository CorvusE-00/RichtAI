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
    <header data-scrolled={isScrolled ? 'true' : 'false'} className={`navbar-v2 fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'py-1' : 'py-2'}`}>
      <div className="navbar-v2__shell relative">
        <div className={`navbar-v2__surface absolute inset-0 backdrop-blur-md border-b transition-all duration-500 ${isScrolled ? 'bg-navy-950/92 border-navy-600/70 shadow-[0_10px_40px_rgba(2,8,23,0.25)]' : 'bg-navy-950/45 border-navy-600/35'}`} />

        <nav className={`navbar-v2__inner v2-container relative grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center transition-all duration-500 ${isScrolled ? 'h-14' : 'h-16'}`}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="navbar-v2__brand col-start-1 justify-self-start flex items-center gap-2.5 group"
          >
            <div className={`navbar-v2__brand-mark relative transition-transform duration-500 ${isScrolled ? 'scale-90' : ''}`}>
              <div className="absolute inset-0 bg-teal-500/30 blur-lg group-hover:bg-teal-500/40 transition-all duration-300 lg:hidden" />
              <div className="navbar-v2__brand-mark-frame relative w-9 h-9 rounded-lg overflow-hidden border border-teal-400/25">
                <MermaidMark className="h-full w-full" />
              </div>
            </div>
            <span className={`navbar-v2__wordmark font-display font-semibold text-snow-50 tracking-tight transition-all duration-500 ${isScrolled ? 'text-base' : 'text-lg'}`}>
              Richt<span className="navbar-v2__wordmark-accent text-teal-400"> Ai</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="navbar-v2__nav col-start-2 hidden lg:flex items-center gap-1 justify-self-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                aria-current={activeSection === link.id ? 'page' : undefined}
                className={`navbar-v2__nav-link relative px-3 py-2 text-sm transition-colors duration-200 font-display after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:origin-left after:rounded-full after:transition-transform after:duration-300 ${activeSection === link.id ? 'after:scale-x-100' : 'after:scale-x-0'}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="navbar-v2__actions col-start-3 hidden lg:flex items-center gap-3 justify-self-end">
            <button
              onClick={toggleLanguage}
              className="navbar-v2__language navbar-v2__language--desktop v2-focus-ring inline-flex min-w-11 items-center justify-center rounded-lg border px-2.5 py-2 text-xs font-semibold tracking-wide"
              aria-label={copy.nav.switchLanguage}
            >
              {language === 'tr' ? 'EN' : 'TR'}
            </button>
            <button
              onClick={handleCTA}
              className="navbar-v2__cta v2-focus-ring inline-flex items-center justify-center font-display font-semibold text-sm"
            >
              {copy.nav.cta}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="navbar-v2__mobile-controls col-start-3 lg:hidden flex items-center gap-2 justify-self-end">
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
        <div className={`navbar-v2__menu lg:hidden relative overflow-hidden bg-navy-900/95 backdrop-blur-md border-b border-navy-600/40 transition-[max-height,opacity] duration-300 ${isMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
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
      </div>
    </header>
  );
}
