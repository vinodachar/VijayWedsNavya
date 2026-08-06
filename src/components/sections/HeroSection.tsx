import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';
import { HeartDivider } from '../../assets/svg/Ornaments';

export default function HeroSection() {
  const { hero, couple } = useInvitation();
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
              className="heading-script text-navy overflow-hidden"
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
            className="font-script text-navy text-3xl sm:text-4xl"
          >
            &amp;
          </motion.p>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="heading-script text-navy overflow-hidden"
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

        {/* Date & Event Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-sm mx-auto p-5 rounded-xl border border-gold/20 bg-ivory-warm/50 backdrop-blur-[2px] shadow-sm flex flex-col items-center gap-2"
        >
          <div className="flex flex-col gap-1 items-center">
            <div className="flex items-center gap-2">
              <span className="font-script text-gold text-2xl font-normal lowercase first-letter:uppercase">15th August</span>
              <span className="text-[0.6rem] text-charcoal/40 font-light">|</span>
              <span className="font-body text-[0.75rem] tracking-wider text-charcoal/70 uppercase">Reception</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-script text-gold text-2xl font-normal lowercase first-letter:uppercase">16th August</span>
              <span className="text-[0.6rem] text-charcoal/40 font-light">|</span>
              <span className="font-body text-[0.75rem] tracking-wider text-charcoal/70 uppercase">Murutham</span>
            </div>
          </div>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent my-1" />
          <p className="font-body text-charcoal/60 text-xs tracking-wide text-center flex items-center justify-center flex-wrap gap-1">
            <span className="font-script text-gold text-xl">White Pearl Convention Hall</span>
            <span>, Jigani, Bangalore</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        onClick={() => {
          document.getElementById('invitation-note')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-20 group outline-none"
        aria-label="Scroll down to invitation details"
      >
        <div className="flex flex-col items-center px-6 py-2.5 rounded-full bg-navy text-gold-light border border-gold/30 shadow-lg transition-all duration-300 hover:bg-navy-dark hover:border-gold hover:shadow-gold-glow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-95">
          <span className="font-display text-[0.65rem] tracking-widest-3 uppercase font-medium text-gold-light group-hover:text-white transition-colors duration-300">
            {hero.scrollLabel}
          </span>
          <div className="animate-chevron-bob mt-1">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </motion.button>
    </section>
  );
}
