import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';
import { DiyaIcon, KalashIcon, MandalaIcon, RingIcon, MusicIcon, FeastIcon } from '../../assets/svg/Ornaments';
import type { TimelineEvent } from '../../data/types';

const iconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  diya: DiyaIcon,
  kalash: KalashIcon,
  mandala: MandalaIcon,
  ring: RingIcon,
  music: MusicIcon,
  feast: FeastIcon,
  custom: DiyaIcon,
};

export default function Timeline() {
  const { timeline } = useInvitation();
  const lineRef = useRef<SVGLineElement>(null);

  // Scroll-driven line drawing animation
  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const totalHeight = line.getTotalLength();
    line.style.strokeDasharray = `${totalHeight}`;
    line.style.strokeDashoffset = `${totalHeight}`;

    const handleScroll = () => {
      const section = line.closest('section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 when section enters, 1 when it exits
      const progress = Math.max(0, Math.min(1,
        (windowHeight - sectionTop) / (sectionHeight + windowHeight * 0.5)
      ));

      line.style.strokeDashoffset = `${totalHeight * (1 - progress)}`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [timeline]);

  return (
    <section id="timeline" className="section-ivory py-20 md:py-28 silk-texture section-deferred">
      <div className="wedding-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display gold-text text-[0.8rem] tracking-widest-3 text-center mb-2"
        >
          {timeline.headline}
        </motion.h2>
        <hr className="gold-rule mb-14" />

        <div className="relative">
          {/* Vertical gold line with scroll-draw */}
          <svg
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] h-full"
            style={{ overflow: 'visible' }}
            aria-hidden="true"
          >
            {/* Background track */}
            <line x1="1" y1="0" x2="1" y2="100%" stroke="rgba(201,162,39,0.1)" strokeWidth="2" />
            {/* Animated line */}
            <line
              ref={lineRef}
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#C9A227"
              strokeWidth="2"
            />
          </svg>

          {/* Timeline entries */}
          <div className="space-y-10 sm:space-y-12">
            {timeline.events.map((event: TimelineEvent, i: number) => {
              const Icon = iconMap[event.icon] || DiyaIcon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Diya marker */}
                  <div
                    className="absolute left-3 sm:left-5 w-7 h-7 rounded-full flex items-center justify-center bg-ivory border border-gold/30"
                    style={{ boxShadow: '0 0 12px rgba(201,162,39,0.15)' }}
                  >
                    <Icon size={16} />
                  </div>

                  {/* Event card */}
                  <div
                    className="p-5 rounded-lg bg-ivory-warm/80"
                    style={{
                      border: '1px solid rgba(201,162,39,0.12)',
                      boxShadow: '0 2px 12px rgba(42,27,18,0.04)',
                    }}
                  >
                    <h3 className="heading-display gold-text text-[0.7rem] tracking-widest-2 mb-2">
                      {event.eventName}
                    </h3>
                    <div className="space-y-1">
                      <p className="font-body text-charcoal/70 text-sm">
                        📅 {event.date}
                      </p>
                      <p className="font-body text-charcoal/70 text-sm">
                        🕐 {event.time}
                      </p>
                      <p className="font-body text-charcoal/60 text-sm">
                        📍 {event.venue}
                      </p>
                    </div>
                    {event.note && (
                      <p className="font-body text-charcoal/50 text-xs mt-3 italic">
                        {event.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
