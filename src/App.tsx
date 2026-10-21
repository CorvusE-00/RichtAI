import { useState, useCallback } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ClinicPain } from '@/components/ClinicPain';
import { ProductShowcase } from '@/components/ProductShowcase';
import { PilotSection } from '@/components/PilotSection';
import { Pricing } from '@/components/Pricing';
import { Trust } from '@/components/Trust';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { StatisticsStrip } from '@/components/StatisticsStrip';
import { FAQ } from '@/components/FAQ';
import { LegalPage } from '@/components/LegalPage';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { useLanguage } from '@/lib/i18n';
import type { LegalPageSlug } from '@/lib/legalContent';

const legalRoutes: Record<string, LegalPageSlug> = {
  '/gizlilik-politikasi': 'privacy',
  '/kvkk': 'kvkk',
  '/cerez-politikasi': 'cookies',
};

function App() {
  const { language } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  useRevealObserver(language);

  const openContact = useCallback(() => setIsContactOpen(true), []);
  const closeContact = useCallback(() => setIsContactOpen(false), []);

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const legalPage = legalRoutes[pathname];

  if (legalPage) {
    return <LegalPage page={legalPage} />;
  }

  return (
    <div className="min-h-screen bg-navy-950 text-snow-100 font-body antialiased overflow-x-hidden">
      <Navbar onCTAClick={openContact} />
      <main>
        <Hero onCTAClick={openContact} />
        <StatisticsStrip />
        <ClinicPain />
        <ProductShowcase />
        <PilotSection />
        <Pricing onCTAClick={openContact} />
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
