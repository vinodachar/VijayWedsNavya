import { useLanguage } from '../../context/LanguageContext';

export default function LanguageToggle() {
  const { data, toggleLanguage, isTransitioning } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 left-4 z-50 px-3 py-1.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
      style={{
        background: 'rgba(42, 27, 18, 0.6)',
        border: '1px solid rgba(201, 162, 39, 0.2)',
        opacity: isTransitioning ? 0.5 : 1,
      }}
      aria-label="Toggle language"
      disabled={isTransitioning}
    >
      <span className="font-body text-gold-light text-[0.65rem] tracking-wider">
        {data.languages.toggleLabel}
      </span>
    </button>
  );
}
