import { useState, useCallback } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { HowItWorks } from '@/components/HowItWorks';
import { Trust } from '@/components/Trust';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { StatisticsStrip } from '@/components/StatisticsStrip';
import { FAQ } from '@/components/FAQ';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { useLanguage } from '@/lib/i18n';

function App() {
  const { language } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  useRevealObserver(language);

  const openContact = useCallback(() => setIsContactOpen(true), []);
  const closeContact = useCallback(() => setIsContactOpen(false), []);

  return (
    <div className="min-h-screen bg-navy-950 text-snow-100 font-body antialiased overflow-x-hidden">
      <Navbar onCTAClick={openContact} />
      <main>
        <Hero onCTAClick={openContact} />
        <StatisticsStrip />
        <Problem />
        <Solution />
        <HowItWorks />
        <Trust />
        <FAQ />
        <FinalCTA onCTAClick={openContact} />
      </main>
      <Footer onCTAClick={openContact} />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}

export default App;
