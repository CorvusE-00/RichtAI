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

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = useCallback(() => setIsContactOpen(true), []);
  const closeContact = useCallback(() => setIsContactOpen(false), []);

  return (
    <div className="min-h-screen bg-navy-950 text-snow-100 font-body antialiased">
      <Navbar onCTAClick={openContact} />
      <main>
        <Hero onCTAClick={openContact} />
        <Problem />
        <Solution />
        <HowItWorks />
        <Trust />
        <FinalCTA onCTAClick={openContact} />
      </main>
      <Footer onCTAClick={openContact} />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}

export default App;
