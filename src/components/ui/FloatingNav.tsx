import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Program', target: '#pre-wedding', icon: 'M4,18 L4,6 M4,12 L12,8 L12,16' },
  { label: 'Venue', target: '#venue', icon: 'M8,1 C5,1 3,3.5 3,6.5 C3,10 8,15 8,15 C8,15 13,10 13,6.5 C13,3.5 11,1 8,1' },
];

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY > lastScrollY && currentY > 200) {
      setIsVisible(false); // scrolling down
    } else {
      setIsVisible(true); // scrolling up
    }
    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = useCallback((target: string) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          aria-label="Quick navigation"
        >
          <div
            className="flex items-center gap-1 px-3 py-2 rounded-full backdrop-blur-md"
            style={{
              background: 'rgba(42, 27, 18, 0.85)',
              border: '1px solid rgba(201, 162, 39, 0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full hover:bg-gold/10 transition-colors"
                aria-label={`Scroll to ${item.label}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d={item.icon} stroke="#E8CE86" strokeWidth="1.2" fill="none" />
                </svg>
                <span className="font-body text-gold-light/70 text-[0.5rem] uppercase tracking-wider">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
