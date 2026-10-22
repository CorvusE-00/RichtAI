import { useState, useCallback, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import type { ContactIntent, ContactSource } from '@/types/contact';

interface NavbarProps {
  onCTAClick: (intent: ContactIntent, source: ContactSource) => void;
}

type NavbarTheme = 'dark' | 'light';

function getSectionTheme(section: HTMLElement): NavbarTheme {
  const explicitTheme = section.dataset.navbarTheme;
  if (explicitTheme === 'light' || explicitTheme === 'dark') return explicitTheme;

  return section.classList.contains('chapter--bone') || section.classList.contains('clinic-pain') ? 'light' : 'dark';
}

function getThemeAtNavbarProbe(): NavbarTheme {
  const header = document.querySelector<HTMLElement>('.navbar');
  const navbarHeight = header?.getBoundingClientRect().height ?? 72;
  const probeY = Math.max(1, Math.min(navbarHeight - 1, window.innerHeight - 1));
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section, footer'));

  const sectionAtProbe = sections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= probeY && rect.bottom > probeY;
  });

  if (sectionAtProbe) return getSectionTheme(sectionAtProbe);

  const nearestSection = sections.reduce<HTMLElement | null>((current, section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top > probeY || (current && current.getBoundingClientRect().top > rect.top)) return current;
    return section;
  }, null);

  return nearestSection ? getSectionTheme(nearestSection) : 'dark';
}

export function Navbar({ onCTAClick }: NavbarProps) {
  const { copy, language, toggleLanguage } = useLanguage();
  const navLinks = copy.nav.links;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('sorun');
  const [navTheme, setNavTheme] = useState<NavbarTheme>('dark');
  const [menuTheme, setMenuTheme] = useState<NavbarTheme>('dark');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleCTA = useCallback(() => {
    onCTAClick('pilot', 'navbar');
  }, [onCTAClick]);

  const toggleMenu = () => {
    if (!isMenuOpen) setMenuTheme(navTheme);
    setIsMenuOpen((previous) => !previous);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      setNavTheme(getThemeAtNavbarProbe());
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section, footer'));
    const navSections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    let themeObserver: IntersectionObserver | null = null;
    const observeThemeProbe = () => {
      themeObserver?.disconnect();
      const header = document.querySelector<HTMLElement>('.navbar');
      const navbarHeight = header?.getBoundingClientRect().height ?? 72;
      const probeY = Math.max(1, Math.min(navbarHeight - 1, window.innerHeight - 1));
      const bottomMargin = Math.max(0, window.innerHeight - probeY - 1);

      themeObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) setNavTheme(getSectionTheme(visible.target as HTMLElement));
        },
        { rootMargin: `-${probeY}px 0px -${bottomMargin}px 0px`, threshold: [0, 0.01, 1] },
      );

      sections.forEach((section) => themeObserver?.observe(section));
    };

    observeThemeProbe();
    const handleResize = () => {
      handleScroll();
      observeThemeProbe();
    };
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    );

    navSections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      themeObserver?.disconnect();
      observer.disconnect();
    };
  }, [navLinks]);

  const themeClass = navTheme === 'light' ? 'navbar--light' : 'navbar--dark';
  const menuThemeClass = menuTheme === 'light' ? 'navbar__mobile-menu--light' : 'navbar__mobile-menu--dark';

  return (
    <header className={`navbar ${themeClass} fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${isScrolled ? 'py-1' : 'py-0'}`}>
      <div className={`navbar__surface absolute inset-0 transition-all duration-350 ${isScrolled ? 'navbar__surface--scrolled' : 'navbar__surface--top'}`} />

      <nav className={`relative mx-auto grid max-w-[90rem] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-5 transition-all duration-500 sm:px-6 lg:px-8 ${isScrolled ? 'h-14' : 'h-[3.75rem] lg:h-[4.5rem]'}`}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group col-start-1 flex items-center gap-[0.45rem] justify-self-start"
        >
          <div className={`relative transition-transform duration-500 ${isScrolled ? 'scale-90' : ''}`}>
            <div className="navbar__mermaid-wrap relative h-[1.8125rem] w-[1.8125rem] shrink-0 translate-y-px">
              <span className="navbar__mermaid-mark block h-full w-full" aria-hidden="true" />
            </div>
          </div>
          <span className={`navbar__brand font-display font-semibold tracking-tight transition-all duration-500 ${isScrolled ? 'text-base' : 'text-xl'}`}>
            Richt<span className="text-teal-400"> AI</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="col-start-2 hidden items-center gap-2 justify-self-center lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={`navbar__link relative px-3 py-2 text-sm font-display after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:origin-left after:rounded-full after:bg-teal-400 after:transition-transform after:duration-300 ${activeSection === link.id ? 'is-active after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-50'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="col-start-3 hidden items-center gap-3 justify-self-end lg:flex">
          <button
            onClick={toggleLanguage}
            className="navbar__language inline-flex min-w-11 items-center justify-center rounded-full border px-3 py-2 text-xs font-semibold tracking-wide transition-colors"
            aria-label={copy.nav.switchLanguage}
          >
            {language === 'tr' ? 'EN' : 'TR'}
          </button>
          <button
            onClick={handleCTA}
            className="navbar__cta inline-flex min-h-11 items-center justify-center rounded-full border border-teal-200/30 bg-teal-500 px-5 py-2.5 font-display text-sm font-semibold text-navy-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400"
          >
            {copy.nav.cta}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="col-start-3 lg:hidden flex items-center gap-2 justify-self-end">
          <button
            onClick={toggleLanguage}
            className="navbar__language inline-flex min-w-11 items-center justify-center rounded-lg border px-2.5 py-2 text-xs font-semibold tracking-wide transition-colors"
            aria-label={copy.nav.switchLanguage}
          >
            {language === 'tr' ? 'EN' : 'TR'}
          </button>
          <button
            onClick={toggleMenu}
            className="navbar__menu-toggle rounded-lg p-2 transition-colors duration-200"
            aria-label={copy.nav.menu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${menuThemeClass} lg:hidden relative overflow-hidden backdrop-blur-md transition-[max-height,opacity] duration-300 ${isMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={`navbar__mobile-link block w-full rounded-lg px-4 py-3 text-left font-display text-sm transition-colors duration-200 ${activeSection === link.id ? 'is-active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
