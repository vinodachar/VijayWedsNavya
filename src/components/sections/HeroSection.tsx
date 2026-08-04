import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';
import { HeartDivider } from '../../assets/svg/Ornaments';

export default function HeroSection() {
  const { hero, couple, saveTheDate } = useInvitation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Intersection observer for revealing elements when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.3 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center section-ivory silk-texture overflow-hidden px-6"
    >
      {/* Light cone from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top center, rgba(232,206,134,0.3) 0%, rgba(201,162,39,0.08) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center wedding-container">
        {/* "We're Getting Married" label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display gold-text text-[0.75rem] tracking-widest-3 mb-6"
        >
          {hero.weAreGettingMarriedLabel}
        </motion.p>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <hr className="gold-rule" />
        </motion.div>

        {/* Heart divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center my-4"
        >
          <HeartDivider />
        </motion.div>

        {/* Couple Names */}
        <div className="my-8 space-y-3">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="heading-script gold-text-shimmer overflow-hidden"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 3.8rem)', wordBreak: 'break-word' }}
            >
              {couple.groom.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.5 }}
              className="font-body text-charcoal/70 text-xs sm:text-sm mt-1"
            >
              {couple.groom.parents}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-script text-gold text-3xl sm:text-4xl"
          >
            &amp;
          </motion.p>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="heading-script gold-text-shimmer overflow-hidden"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 3.8rem)', wordBreak: 'break-word' }}
            >
              {couple.bride.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.1 }}
              className="font-body text-charcoal/70 text-xs sm:text-sm mt-1"
            >
              {couple.bride.parents}
            </motion.p>
          </div>
        </div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display text-gold/70 text-[0.7rem] tracking-widest-3"
        >
          {saveTheDate.date}
        </motion.p>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="font-body text-charcoal/50 text-sm mt-2"
        >
          {hero.subline}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="heading-display text-gold/40 text-[0.6rem] tracking-widest-3">
          {hero.scrollLabel}
        </p>
        <div className="animate-chevron-bob">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4,6 L10,12 L16,6" stroke="#C9A227" strokeWidth="1.5" opacity="0.5" />
            <path d="M4,10 L10,16 L16,10" stroke="#C9A227" strokeWidth="1.5" opacity="0.3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
