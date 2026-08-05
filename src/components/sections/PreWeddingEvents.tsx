import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';

export default function PreWeddingEvents() {
  const { preWeddingEvents } = useInvitation();

  return (
    <section id="pre-wedding" className="section-ivory-warm py-20 md:py-28 section-deferred">
      <div className="wedding-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display gold-text text-[0.8rem] tracking-widest-3 text-center mb-2"
        >
          {preWeddingEvents.headline}
        </motion.h2>
        <hr className="gold-rule mb-12" />

        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto justify-center">
          {preWeddingEvents.events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="relative overflow-hidden rounded-xl p-6 bg-ivory"
              style={{
                border: `1px solid ${event.dressColor}20`,
                boxShadow: `0 4px 20px rgba(42,27,18,0.06), inset 0 -3px 0 ${event.dressColor}30`,
              }}
            >
              {/* Event Cover Image */}
              {event.image && (
                <div 
                  className="relative overflow-hidden h-60 -mx-6 -mt-6 mb-5"
                  style={{ borderBottom: `2px solid ${event.dressColor}` }}
                >
                  <img
                    src={event.image}
                    alt={event.eventName}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                </div>
              )}

              {/* Accent color top bar (if no image) */}
              {!event.image && (
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                  style={{ background: event.dressColor }}
                />
              )}

              {/* Event icon */}
              <div className="text-3xl mb-3">{event.icon}</div>

              {/* Event name */}
              <h3
                className="font-display text-sm tracking-widest-2 uppercase mb-4"
                style={{ color: event.dressColor }}
              >
                {event.eventName}
              </h3>

              <div className="space-y-2 text-sm font-body text-charcoal/70">
                <p>📅 {event.date}</p>
                <p>🕐 {event.time}</p>
                <p>📍 {event.venue}</p>
              </div>



              {event.note && (
                <p className="font-body text-charcoal/50 text-xs mt-3 italic">
                  {event.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
