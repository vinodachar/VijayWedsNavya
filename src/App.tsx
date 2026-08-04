import { useState, useEffect, useCallback } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AudioProvider } from './context/AudioContext';
import CurtainGate from './components/CurtainGate';
import HeroSection from './components/sections/HeroSection';
import InvitationNote from './components/sections/InvitationNote';
import ScratchReveal from './components/sections/ScratchReveal';
import Gallery from './components/sections/Gallery';
import Countdown from './components/sections/Countdown';
import PreWeddingEvents from './components/sections/PreWeddingEvents';
import Venue from './components/sections/Venue';
import Gifts from './components/sections/Gifts';
import Closing from './components/sections/Closing';
import FloatingNav from './components/ui/FloatingNav';
import MusicToggle from './components/ui/MusicToggle';
import AddToCalendar from './components/ui/AddToCalendar';
import ShareWhatsApp from './components/ui/ShareWhatsApp';
import Lenis from 'lenis';

function AppContent() {
  const [gateOpen, setGateOpen] = useState(false);

  // Initialize Lenis smooth scroll after gate opens
  useEffect(() => {
    if (!gateOpen) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [gateOpen]);

  const handleGateOpen = useCallback(() => {
    setGateOpen(true);
  }, []);

  return (
    <div className="relative">
      {/* Curtain Gate */}
      {!gateOpen && <CurtainGate onOpen={handleGateOpen} />}

      {/* Main Content */}
      {gateOpen && (
        <>
          <main>
            <HeroSection />
            <div className="jaali-divider" />
            <InvitationNote />
            <ScratchReveal />
            <Gallery />
            <Countdown />
            <div className="jaali-divider" />
            <PreWeddingEvents />

            {/* Add to Calendar between countdown area and venue */}
            <section className="section-ivory py-8 section-deferred">
              <div className="wedding-container text-center">
                <AddToCalendar />
              </div>
            </section>

            <div className="jaali-divider" />
            <Venue />
            <Gifts />
            <div className="jaali-divider" />
            <Closing />
          </main>

          {/* Persistent UI */}
          <FloatingNav />
          <MusicToggle />
          <ShareWhatsApp />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AudioProvider>
        <AppContent />
      </AudioProvider>
    </LanguageProvider>
  );
}
