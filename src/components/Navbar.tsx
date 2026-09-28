import { useState, useCallback } from 'react';
import { Brain, Menu, X } from 'lucide-react';

interface NavbarProps {
  onCTAClick: () => void;
}

export function Navbar({ onCTAClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleCTA = useCallback(() => {
    onCTAClick();
    setIsMenuOpen(false);
  }, [onCTAClick]);

  const navLinks = [
    { label: 'Sorun', id: 'sorun' },
    { label: 'Çözüm', id: 'cozum' },
    { label: 'Nasıl Çalışır', id: 'nasil-calisir' },
    { label: 'Güven', id: 'guven' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="absolute inset-0 bg-navy-950/70 backdrop-blur-md border-b border-navy-600/40" />

      <nav className="relative max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500/30 blur-lg group-hover:bg-teal-500/40 transition-all duration-300" />
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <Brain className="w-5 h-5 text-navy-950" />
            </div>
          </div>
          <span className="font-display text-lg font-semibold text-snow-50 tracking-tight">
            Richt<span className="text-teal-400"> Ai</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-4 py-2 text-sm text-snow-400 hover:text-snow-100 transition-colors duration-200 font-display"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={handleCTA}
            className="ml-3 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-navy-950 font-display font-semibold text-sm transition-all duration-300 hover:from-teal-400 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.35)] hover:-translate-y-0.5"
          >
            Tanışma Konuşması
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-snow-300 hover:text-snow-100 hover:bg-navy-700/60 transition-colors duration-200"
          aria-label="Menü"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden relative bg-navy-900/95 backdrop-blur-md border-b border-navy-600/40 animate-fade-in">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-snow-300 hover:text-snow-100 hover:bg-navy-700/40 transition-colors duration-200 font-display text-sm"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleCTA}
              className="w-full mt-2 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-navy-950 font-display font-semibold text-sm"
            >
              Tanışma Konuşması
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
