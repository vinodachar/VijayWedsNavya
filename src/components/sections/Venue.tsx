import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';

export default function Venue() {
  const { venue } = useInvitation();

  return (
    <section id="venue" className="section-ivory py-20 md:py-28 silk-texture section-deferred">
      <div className="wedding-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display gold-text text-[0.8rem] tracking-widest-3 mb-2"
        >
          {venue.headline}
        </motion.h2>
        <hr className="gold-rule mb-10" />

        {/* Venue name */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-script text-gold text-3xl sm:text-4xl mb-4"
        >
          {venue.name}
        </motion.h3>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-1 mb-8"
        >
          {venue.addressLines.map((line, i) => (
            <p key={i} className="font-body text-charcoal/60 text-sm">
              {line}
            </p>
          ))}
        </motion.div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 rounded-lg overflow-hidden"
          style={{
            border: '1px solid rgba(201,162,39,0.15)',
            boxShadow: '0 4px 20px rgba(42,27,18,0.06)',
          }}
        >
          <iframe
            src={venue.mapEmbedUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map to ${venue.name}`}
          />
        </motion.div>

        {/* Google Maps button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8,1 C5,1 3,3.5 3,6.5 C3,10 8,15 8,15 C8,15 13,10 13,6.5 C13,3.5 11,1 8,1 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="8" cy="6.5" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
            {venue.viewOnMapsLabel}
          </a>
        </motion.div>

        {/* Parking note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-charcoal/40 text-xs mt-6"
        >
          {venue.parkingNote}
        </motion.p>
      </div>
    </section>
  );
}
