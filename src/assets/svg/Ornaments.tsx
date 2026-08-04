// ─── SVG Ornamental Components ──────────────────────────────────────
// Inline SVGs as React components for full styling control.

export function GoldPelmet({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pelmet-gold" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8CE86" />
          <stop offset="30%" stopColor="#C9A227" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E8CE86" />
        </linearGradient>
      </defs>
      {/* Main valance curve */}
      <path d="M0,0 L0,40 Q50,65 100,45 Q150,25 200,50 Q250,75 300,48 Q350,20 400,55 Q450,20 500,48 Q550,75 600,50 Q650,25 700,45 Q750,65 800,40 L800,0 Z" fill="url(#pelmet-gold)" opacity="0.9" />
      {/* Decorative scallop edge */}
      <path d="M0,40 Q50,65 100,45 Q150,25 200,50 Q250,75 300,48 Q350,20 400,55 Q450,20 500,48 Q550,75 600,50 Q650,25 700,45 Q750,65 800,40" stroke="url(#pelmet-gold)" strokeWidth="2" fill="none" />
      {/* Small hanging tassels */}
      {[100, 200, 300, 400, 500, 600, 700].map((x, i) => (
        <g key={i}>
          <line x1={x} y1={i % 2 === 0 ? 50 : 45} x2={x} y2={i % 2 === 0 ? 68 : 63} stroke="url(#pelmet-gold)" strokeWidth="1.5" />
          <circle cx={x} cy={i % 2 === 0 ? 70 : 65} r="3" fill="url(#pelmet-gold)" />
        </g>
      ))}
    </svg>
  );
}

export function GoldBell({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 28, height: 35 }}>
      <defs>
        <linearGradient id="bell-gold" x1="0" y1="0" x2="40" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8CE86" />
          <stop offset="50%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      <path d="M20,2 C20,2 18,4 18,8 L18,10 C12,12 8,18 8,26 L8,32 Q8,36 4,38 L36,38 Q32,36 32,32 L32,26 C32,18 28,12 22,10 L22,8 C22,4 20,2 20,2 Z" fill="url(#bell-gold)" />
      <ellipse cx="20" cy="38" rx="16" ry="3" fill="url(#bell-gold)" opacity="0.7" />
      <circle cx="20" cy="44" r="3" fill="url(#bell-gold)" />
      <line x1="20" y1="40" x2="20" y2="44" stroke="#C9A227" strokeWidth="1.5" />
    </svg>
  );
}

export function DiyaIcon({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="diya-gold" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#E8CE86" />
          <stop offset="100%" stopColor="#C9A227" />
        </linearGradient>
      </defs>
      {/* Diya body */}
      <path d="M4,16 Q4,20 12,20 Q20,20 20,16 L18,14 Q18,12 12,12 Q6,12 6,14 Z" fill="url(#diya-gold)" />
      {/* Flame */}
      <path d="M12,4 Q14,8 13,10 Q12,12 12,12 Q12,12 11,10 Q10,8 12,4 Z" fill="#E8CE86" opacity="0.9" />
      <path d="M12,6 Q13,8 12.5,10 Q12,11 12,11 Q12,11 11.5,10 Q11,8 12,6 Z" fill="#FFF5D4" />
    </svg>
  );
}

export function KalashIcon({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="kalash-gold" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#E8CE86" />
          <stop offset="100%" stopColor="#C9A227" />
        </linearGradient>
      </defs>
      <ellipse cx="12" cy="18" rx="6" ry="2" fill="url(#kalash-gold)" />
      <path d="M7,18 L8,10 Q8,8 12,8 Q16,8 16,10 L17,18" fill="url(#kalash-gold)" />
      <ellipse cx="12" cy="8" rx="4" ry="1.5" fill="url(#kalash-gold)" />
      <path d="M10,8 Q10,4 12,2 Q14,4 14,8" fill="#2D6B4A" opacity="0.7" />
      <circle cx="12" cy="3" r="1" fill="url(#kalash-gold)" />
    </svg>
  );
}

export function MandalaIcon({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#C9A227" strokeWidth="0.5" fill="none" />
      <circle cx="12" cy="12" r="7" stroke="#C9A227" strokeWidth="0.5" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="#C9A227" strokeWidth="0.5" fill="none" />
      <circle cx="12" cy="12" r="1.5" fill="#C9A227" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="12"
          y1="12"
          x2={12 + 10 * Math.cos((angle * Math.PI) / 180)}
          y2={12 + 10 * Math.sin((angle * Math.PI) / 180)}
          stroke="#C9A227"
          strokeWidth="0.3"
        />
      ))}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <circle
          key={`outer-${angle}`}
          cx={12 + 7 * Math.cos((angle * Math.PI) / 180)}
          cy={12 + 7 * Math.sin((angle * Math.PI) / 180)}
          r="1"
          fill="#E8CE86"
        />
      ))}
    </svg>
  );
}

export function PaisleyIcon({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12,2 Q20,6 18,14 Q16,22 10,20 Q4,18 6,12 Q8,6 12,2 Z" stroke="#C9A227" strokeWidth="1" fill="none" />
      <path d="M12,6 Q16,8 15,13 Q14,18 10,17 Q6,16 8,12 Q10,8 12,6 Z" stroke="#E8CE86" strokeWidth="0.5" fill="none" />
      <circle cx="11" cy="12" r="1.5" fill="#C9A227" opacity="0.5" />
    </svg>
  );
}

export function RingIcon({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="14" r="7" stroke="#C9A227" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="14" r="5" stroke="#E8CE86" strokeWidth="0.5" fill="none" />
      <path d="M9,7 L12,2 L15,7" fill="#E8CE86" />
      <circle cx="12" cy="4" r="1.5" fill="#C9A227" />
    </svg>
  );
}

export function MusicIcon({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9,18 L9,6 L20,4 L20,16" stroke="#C9A227" strokeWidth="1.5" fill="none" />
      <circle cx="6.5" cy="18" r="2.5" fill="#E8CE86" />
      <circle cx="17.5" cy="16" r="2.5" fill="#E8CE86" />
    </svg>
  );
}

export function FeastIcon({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="12" cy="16" rx="9" ry="4" stroke="#C9A227" strokeWidth="1" fill="none" />
      <path d="M3,16 Q3,10 12,8 Q21,10 21,16" stroke="#E8CE86" strokeWidth="0.5" fill="none" />
      <line x1="12" y1="4" x2="12" y2="8" stroke="#C9A227" strokeWidth="1" />
      <circle cx="12" cy="3" r="1.5" fill="#E8CE86" />
    </svg>
  );
}

export function HeartDivider({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20,20 L8,10 Q4,4 10,4 Q16,4 20,10 Q24,4 30,4 Q36,4 32,10 Z" fill="#C9A227" opacity="0.6" />
    </svg>
  );
}

export function MandapArch({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="arch-gold" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8CE86" />
          <stop offset="50%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E8CE86" />
        </linearGradient>
      </defs>
      {/* Main arch */}
      <path d="M40,300 L40,120 Q40,20 200,20 Q360,20 360,120 L360,300" stroke="url(#arch-gold)" strokeWidth="3" fill="none" />
      {/* Inner arch */}
      <path d="M70,300 L70,130 Q70,50 200,50 Q330,50 330,130 L330,300" stroke="url(#arch-gold)" strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Decorative top */}
      <path d="M180,20 Q200,0 220,20" stroke="url(#arch-gold)" strokeWidth="2" fill="none" />
      <circle cx="200" cy="8" r="6" fill="url(#arch-gold)" opacity="0.5" />
      {/* Pillars detail */}
      {[40, 360].map((x) => (
        <g key={x}>
          <rect x={x - 8} y={120} width={16} height={180} fill="url(#arch-gold)" opacity="0.15" />
          {[150, 190, 230, 270].map((y) => (
            <line key={`${x}-${y}`} x1={x - 6} y1={y} x2={x + 6} y2={y} stroke="url(#arch-gold)" strokeWidth="0.5" />
          ))}
        </g>
      ))}
      {/* Hanging ornaments from arch */}
      {[120, 160, 200, 240, 280].map((x) => {
        const y = 20 + (1 - Math.abs((x - 200) / 100)) * -5 + Math.pow((x - 200) / 160, 2) * 80;
        return (
          <g key={x}>
            <line x1={x} y1={y + 25} x2={x} y2={y + 45} stroke="url(#arch-gold)" strokeWidth="0.5" opacity="0.5" />
            <circle cx={x} cy={y + 48} r="2" fill="url(#arch-gold)" opacity="0.4" />
          </g>
        );
      })}
    </svg>
  );
}

export function MarigoldPetal({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  const hue = 30 + Math.random() * 20; // orange to gold range
  return (
    <svg
      className={className}
      style={style}
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8,0 Q12,4 14,10 Q16,16 8,20 Q0,16 2,10 Q4,4 8,0 Z"
        fill={`hsl(${hue}, 85%, 55%)`}
        opacity="0.85"
      />
    </svg>
  );
}

export function Toran({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', height: 60 }}>
      {/* Main string */}
      <path d="M0,10 Q100,50 200,10 Q300,50 400,10 Q500,50 600,10 Q700,50 800,10" stroke="#C9A227" strokeWidth="1.5" fill="none" />
      {/* Marigold flowers along the string */}
      {[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800].map((x, i) => {
        const y = 10 + 40 * Math.sin((x / 200) * Math.PI);
        const size = 6 + Math.sin(i) * 2;
        const hue = 30 + (i % 3) * 10;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={size}
            fill={`hsl(${hue}, 80%, 55%)`}
            opacity="0.8"
          />
        );
      })}
      {/* Hanging marigold drops */}
      {[100, 200, 300, 400, 500, 600, 700].map((x, i) => {
        const stringY = 10 + 40 * Math.sin((x / 200) * Math.PI);
        return (
          <g key={`drop-${i}`}>
            <line x1={x} y1={stringY} x2={x} y2={stringY + 12} stroke="#C9A227" strokeWidth="0.5" />
            <circle cx={x} cy={stringY + 14} r="4" fill={`hsl(${35 + (i % 2) * 10}, 85%, 50%)`} opacity="0.7" />
          </g>
        );
      })}
    </svg>
  );
}

export function GoldOrnamentBorder({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', height: 20 }}>
      <defs>
        <linearGradient id="border-gold" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8CE86" />
          <stop offset="50%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#E8CE86" />
        </linearGradient>
      </defs>
      <rect y="8" width="800" height="2" fill="url(#border-gold)" opacity="0.4" />
      <path d="M0,10 Q25,0 50,10 Q75,20 100,10 Q125,0 150,10 Q175,20 200,10 Q225,0 250,10 Q275,20 300,10 Q325,0 350,10 Q375,20 400,10 Q425,0 450,10 Q475,20 500,10 Q525,0 550,10 Q575,20 600,10 Q625,0 650,10 Q675,20 700,10 Q725,0 750,10 Q775,20 800,10" stroke="url(#border-gold)" strokeWidth="1" fill="none" opacity="0.6" />
    </svg>
  );
}
