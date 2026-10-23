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
import { legalRoutes } from '@/lib/legalContent';
import type { ContactIntent, ContactModalState, ContactSource } from '@/types/contact';

function App() {
  const { language } = useLanguage();
  const [contactModal, setContactModal] = useState<ContactModalState>({
    isOpen: false,
    intent: 'pilot',
    source: 'navbar',
  });

  useRevealObserver(language);

  const openContact = useCallback((intent: ContactIntent, source: ContactSource) => {
    setContactModal({ isOpen: true, intent, source });
  }, []);
  const closeContact = useCallback(() => {
    setContactModal((current) => ({ ...current, isOpen: false }));
  }, []);

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
      <ContactModal
        isOpen={contactModal.isOpen}
        intent={contactModal.intent}
        source={contactModal.source}
        onClose={closeContact}
      />
    </div>
  );
}

export default App;
