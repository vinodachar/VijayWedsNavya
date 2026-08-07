import { useState, useEffect, useRef, useCallback } from 'react';
import { useGuestName } from '../hooks/useGuestName';
import { usePreloader } from '../hooks/usePreloader';
import { useAudio } from '../context/AudioContext';
import { useLanguage } from '../context/LanguageContext';
import { GoldPelmet, GoldBell, GoldOrnamentBorder, MarigoldPetal } from '../assets/svg/Ornaments';

interface CurtainGateProps {
  onOpen: () => void;
}

export default function CurtainGate({ onOpen }: CurtainGateProps) {
  const { data } = useLanguage();
  const { startAudio, toggleAudio, isPlaying } = useAudio();
  const guestName = useGuestName();
  const { progress, isComplete } = usePreloader();

  const [isOpening, setIsOpening] = useState(false);
  const [sealPressed, setSealPressed] = useState(false);
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number; rotate: number }>>([]);
  const [showGlow, setShowGlow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const bellRef = useRef<HTMLDivElement>(null);

  // Lock scroll on mount
  useEffect(() => {
    document.body.classList.add('scroll-locked');
    return () => {
      document.body.classList.remove('scroll-locked');
    };
  }, []);

  // Generate marigold petals
  const spawnPetals = useCallback(() => {
    const newPetals = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
      rotate: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  const handleSealClick = useCallback(() => {
    if (!isComplete || isOpening) return;

    // Vibrate if supported
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }

    setSealPressed(true);

    // Start audio
    startAudio();

    // After seal animation (400ms), start curtain opening
    setTimeout(() => {
      setIsOpening(true);
      setShowGlow(true);
      spawnPetals();

      // Bell tilt
      if (bellRef.current) {
        bellRef.current.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        bellRef.current.style.transform = 'rotate(12deg)';
        setTimeout(() => {
          if (bellRef.current) {
            bellRef.current.style.transform = 'rotate(-4deg)';
            setTimeout(() => {
              if (bellRef.current) {
                bellRef.current.style.transform = 'rotate(0deg)';
              }
            }, 400);
          }
        }, 500);
      }

      // Curtains finish at 2.2s, then unmount
      setTimeout(() => {
        document.body.classList.remove('scroll-locked');
        onOpen();
      }, 2600);
    }, 500);
  }, [isComplete, isOpening, startAudio, spawnPetals, onOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] overflow-hidden"
      role="dialog"
      aria-label="Wedding invitation curtain"
    >
      {/* ─── Diya Glow (appears when opening) ─── */}
      {showGlow && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[400px] pointer-events-none z-[5]"
          style={{
            background: 'radial-gradient(ellipse at top center, rgba(232,206,134,0.5) 0%, rgba(201,162,39,0.2) 30%, transparent 70%)',
            animation: 'fadeUp 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
          }}
        />
      )}

      {/* ─── Marigold Petals ─── */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute pointer-events-none z-[15]"
          style={{
            left: `${petal.left}%`,
            top: '-20px',
            animationName: 'floatDown',
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            animationTimingFunction: 'ease-out',
            animationFillMode: 'forwards',
            transform: `rotate(${petal.rotate}deg)`,
          }}
        >
          <MarigoldPetal />
        </div>
      ))}

      {/* ─── Gold Pelmet (Top) ─── */}
      <div className="absolute top-0 left-0 right-0 z-[20]">
        <GoldPelmet className="w-full" />
        {/* Bell */}
        <div ref={bellRef} className="absolute top-[50px] left-1/2 -translate-x-1/2 z-[25]" style={{ transformOrigin: 'top center' }}>
          <GoldBell />
        </div>
      </div>

      {/* ─── Left Curtain Panel ─── */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full curtain-left curtain-panel z-[10]"
        style={{
          boxShadow: 'inset -20px 0 40px rgba(0,0,0,0.3)',
          transition: isOpening
            ? 'transform 2.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 2.2s ease'
            : 'none',
          transform: isOpening ? 'translateX(-105%) scaleX(1.02)' : 'translateX(0)',
          transitionDelay: '0s',
        }}
      >
        {/* Gold tassel on inner edge */}
        <div
          className="absolute right-2 top-1/3 w-3 flex flex-col items-center"
          style={{
            transformOrigin: 'top center',
            animation: isOpening ? 'pendulum 1.5s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
          }}
        >
          <div className="w-[2px] h-16 bg-gradient-to-b from-gold-light to-gold" />
          <div className="w-4 h-6 rounded-b-full bg-gradient-to-b from-gold to-gold-dark" />
        </div>
      </div>

      {/* ─── Right Curtain Panel ─── */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full curtain-right curtain-panel z-[10]"
        style={{
          boxShadow: 'inset 20px 0 40px rgba(0,0,0,0.3)',
          transition: isOpening
            ? 'transform 2.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 2.2s ease'
            : 'none',
          transform: isOpening ? 'translateX(105%) scaleX(1.02)' : 'translateX(0)',
          transitionDelay: '0.12s',
        }}
      >
        {/* Gold tassel on inner edge */}
        <div
          className="absolute left-2 top-1/3 w-3 flex flex-col items-center"
          style={{
            transformOrigin: 'top center',
            animation: isOpening ? 'pendulum 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.2s' : 'none',
          }}
        >
          <div className="w-[2px] h-16 bg-gradient-to-b from-gold-light to-gold" />
          <div className="w-4 h-6 rounded-b-full bg-gradient-to-b from-gold to-gold-dark" />
        </div>
      </div>

      {/* ─── Gold Bottom Border ─── */}
      <div className="absolute bottom-0 left-0 right-0 z-[20]">
        <GoldOrnamentBorder />
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-gold-light via-gold to-gold-light transition-all duration-500 ease-wedding"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* ─── Centre Content (Seal + Labels) ─── */}
      {!isOpening && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[30] px-6">
          {/* Guest Name */}
          <p className="font-script text-gold-light text-lg mb-2 opacity-90">
            {guestName ? `Dear ${guestName},` : data.hero.dearGuestLabel}
          </p>

          {/* You Are Invited */}
          <p className="heading-display text-gold-light text-[0.7rem] tracking-widest-3 mb-8 opacity-80">
            {data.hero.youAreInvitedLabel}
          </p>

          {/* Wax Seal */}
          <button
            onClick={handleSealClick}
            disabled={!isComplete}
            className={`
              relative w-32 h-32 sm:w-36 sm:h-36 rounded-full flex items-center justify-center
              transition-all duration-300 ease-wedding cursor-pointer
              ${!isComplete ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}
              ${!sealPressed && isComplete ? 'animate-seal-pulse' : ''}
            `}
            style={{
              background: 'radial-gradient(circle, #F6EFE3 30%, #E8CE86 60%, #C9A227 100%)',
              boxShadow: !isComplete ? '0 4px 20px rgba(0,0,0,0.3), inset 0 2px 4px rgba(232,206,134,0.3)' : undefined,
              transform: sealPressed
                ? 'scale(0.94) rotate(8deg) translateY(-20px)'
                : undefined,
              opacity: sealPressed ? 0 : undefined,
              transition: sealPressed
                ? 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease 0.2s'
                : undefined,
            }}
            aria-label={data.hero.curtainSealText}
          >
            {/* Shimmer sweep */}
            <div
              className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.4) 48%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 52%, transparent 70%)',
                backgroundSize: '200% 100%',
                animation: isComplete ? 'shimmer 4s ease-in-out infinite' : 'none',
              }}
            />
            {/* Seal ring */}
            <div className="absolute inset-1 rounded-full border-2 border-gold/40 pointer-events-none" />
            <div className="absolute inset-3 rounded-full border border-gold/20 pointer-events-none" />
            {/* Seal text */}
            <span className="font-script text-charcoal text-base relative z-10">
              {data.hero.curtainSealText}
            </span>
          </button>

          {/* Hashtag */}
          <p className="heading-display text-gold-light text-[0.65rem] tracking-widest-2 mt-8 opacity-70">
            {data.couple.coupleHashtag}
          </p>
        </div>
      )}



      {/* ─── Music Toggle (Top Right) ─── */}
      {!isOpening && (
        <button
          onClick={toggleAudio}
          className="absolute top-20 right-4 z-[35] w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold/60 transition-colors"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          <MusicNoteIcon isPlaying={isPlaying} />
        </button>
      )}
    </div>
  );
}

function MusicNoteIcon({ isPlaying }: { isPlaying: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {isPlaying ? (
        // Equaliser bars
        <>
          {[2, 5.5, 9, 12.5].map((x, i) => (
            <rect
              key={i}
              x={x}
              y={4}
              width="2"
              height="8"
              rx="1"
              fill="#E8CE86"
              style={{
                animation: `eqBar 0.${4 + i * 2}s ease-in-out infinite alternate`,
                transformOrigin: 'bottom center',
              }}
            />
          ))}
        </>
      ) : (
        // Music note
        <path d="M6,12 L6,4 L13,2.5 L13,10" stroke="#E8CE86" strokeWidth="1.5" fill="none" />
      )}
    </svg>
  );
}
