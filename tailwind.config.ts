import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1E36',
          dark: '#0A1329',
          light: '#1F3E6C',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E8CE86',
          dark: '#A07D1C',
          foil: '#D4AF37',
        },
        ivory: {
          DEFAULT: '#F6EFE3',
          warm: '#FBF6EC',
          dark: '#EDE4D4',
        },
        charcoal: {
          DEFAULT: '#2A1B12',
          light: '#3D2B1E',
        },
      },
      fontFamily: {
        display: ['"Marcellus"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Jost"', 'sans-serif'],
        hindi: ['"Tiro Devanagari Hindi"', 'serif'],
      },
      transitionTimingFunction: {
        'wedding': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'seal-pulse': 'sealPulse 2.2s ease-in-out infinite',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'float-down': 'floatDown 5s ease-out forwards',
        'chevron-bob': 'chevronBob 2s ease-in-out infinite',
        'eq-bar': 'eqBar 0.8s ease-in-out infinite alternate',
        'gold-particle': 'goldParticle 8s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        sealPulse: {
          '0%, 100%': { 
            transform: 'scale(1)', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.3), inset 0 2px 4px rgba(232,206,134,0.3), 0 0 25px rgba(201,162,39,0.2)' 
          },
          '50%': { 
            transform: 'scale(1.08)', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.4), inset 0 2px 4px rgba(232,206,134,0.4), 0 0 55px rgba(201,162,39,0.6)' 
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        floatDown: {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        chevronBob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        eqBar: {
          '0%': { height: '4px' },
          '100%': { height: '16px' },
        },
        goldParticle: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100px) translateX(20px)', opacity: '0' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0', filter: 'blur(4px)' },
          '100%': { transform: 'translateY(0)', opacity: '1', filter: 'blur(0px)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E8CE86, #C9A227, #D4AF37, #E8CE86)',
        'gold-shimmer': 'linear-gradient(110deg, transparent 30%, rgba(232,206,134,0.6) 48%, rgba(201,162,39,0.8) 50%, rgba(232,206,134,0.6) 52%, transparent 70%)',
        'navy-left': 'linear-gradient(90deg, #0A1329 0%, #0F1E36 20%, #1F3E6C 40%, #0F1E36 55%, #0A1329 70%, #050E24 85%, #020714 100%)',
        'navy-right': 'linear-gradient(90deg, #020714 0%, #050E24 15%, #0A1329 30%, #0F1E36 45%, #1F3E6C 60%, #0F1E36 80%, #0A1329 100%)',
        'silk-noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
      },
      letterSpacing: {
        'widest-2': '0.25em',
        'widest-3': '0.35em',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(201, 162, 39, 0.3), 0 0 60px rgba(201, 162, 39, 0.1)',
        'gold-glow-sm': '0 0 15px rgba(201, 162, 39, 0.2)',
        'diya-glow': '0 0 80px 30px rgba(232, 206, 134, 0.4), 0 0 160px 60px rgba(201, 162, 39, 0.15)',
        'seal': '0 4px 20px rgba(0,0,0,0.3), inset 0 2px 4px rgba(232,206,134,0.3)',
        'card': '0 4px 24px rgba(42, 27, 18, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
