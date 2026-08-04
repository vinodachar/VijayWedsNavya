import { useAudio } from '../../context/AudioContext';

export default function MusicToggle() {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <button
      onClick={toggleAudio}
      className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
      style={{
        background: 'rgba(42, 27, 18, 0.6)',
        border: '1px solid rgba(201, 162, 39, 0.2)',
      }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        {isPlaying ? (
          // Animated equaliser bars
          <>
            {[3, 6.5, 10, 13.5].map((x, i) => (
              <rect
                key={i}
                x={x}
                y={5}
                width="2"
                height="8"
                rx="1"
                fill="#E8CE86"
                style={{
                  transformOrigin: `${x + 1}px 13px`,
                  animation: `eqBar ${0.3 + i * 0.15}s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </>
        ) : (
          // Muted music note with line-through
          <>
            <path d="M6,14 L6,5 L14,3 L14,12" stroke="#E8CE86" strokeWidth="1.5" fill="none" opacity="0.5" />
            <circle cx="4.5" cy="14" r="2" fill="#E8CE86" opacity="0.5" />
            <circle cx="12.5" cy="12" r="2" fill="#E8CE86" opacity="0.5" />
            <line x1="2" y1="2" x2="16" y2="16" stroke="#E8CE86" strokeWidth="1.5" />
          </>
        )}
      </svg>
    </button>
  );
}
