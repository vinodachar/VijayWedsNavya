import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';

export default function TransportAccommodation() {
  const { transportation, accommodation } = useInvitation();

  return (
    <section id="travel" className="section-dark py-20 md:py-28 section-deferred">
      <div className="wedding-container">
        {/* Transportation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M6,22 L6,10 Q6,6 16,6 Q26,6 26,10 L26,22" stroke="#E8CE86" strokeWidth="1.5" fill="none" />
              <circle cx="10" cy="24" r="2" stroke="#E8CE86" strokeWidth="1" fill="none" />
              <circle cx="22" cy="24" r="2" stroke="#E8CE86" strokeWidth="1" fill="none" />
              <line x1="6" y1="16" x2="26" y2="16" stroke="#E8CE86" strokeWidth="0.5" />
            </svg>
          </div>
          <h2 className="heading-display gold-text text-[0.8rem] tracking-widest-3 mb-2">
            {transportation.headline}
          </h2>
          <hr className="gold-rule mb-6" />
          <p className="font-body text-ivory/60 text-sm max-w-lg mx-auto leading-relaxed">
            {transportation.body}
          </p>
        </motion.div>

        {/* Accommodation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M4,26 L4,12 L16,4 L28,12 L28,26" stroke="#E8CE86" strokeWidth="1.5" fill="none" />
              <rect x="12" y="18" width="8" height="8" stroke="#E8CE86" strokeWidth="1" fill="none" />
              <line x1="4" y1="26" x2="28" y2="26" stroke="#E8CE86" strokeWidth="1.5" />
            </svg>
          </div>
          <h2 className="heading-display gold-text text-[0.8rem] tracking-widest-3 mb-2">
            {accommodation.headline}
          </h2>
          <hr className="gold-rule mb-6" />
          <p className="font-body text-ivory/60 text-sm max-w-lg mx-auto leading-relaxed mb-8">
            {accommodation.body}
          </p>

          {/* Hotel cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-lg sm:max-w-none mx-auto">
            {accommodation.hotels.map((hotel, i) => (
              <motion.a
                key={i}
                href={hotel.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="block p-5 rounded-lg text-left transition-all duration-300 hover:border-gold/30 group"
                style={{
                  background: 'rgba(246,239,227,0.04)',
                  border: '1px solid rgba(201,162,39,0.1)',
                }}
              >
                <h3 className="font-display text-gold text-sm tracking-wide mb-1 group-hover:text-gold-light transition-colors">
                  {hotel.name}
                </h3>
                <p className="font-body text-ivory/40 text-xs mb-3">
                  {hotel.distance}
                </p>
                <span className="font-body text-gold/50 text-[0.65rem] uppercase tracking-widest group-hover:text-gold transition-colors">
                  Book →
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
