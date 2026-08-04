import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';
import { Toran } from '../../assets/svg/Ornaments';

export default function Closing() {
  const { closing, couple } = useInvitation();
  const particlesRef = useRef<HTMLDivElement>(null);

  // Gold particle drift
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const count = 15;

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.style.position = 'absolute';
      p.style.width = `${2 + Math.random() * 3}px`;
      p.style.height = p.style.width;
      p.style.borderRadius = '50%';
      p.style.background = `rgba(201, 162, 39, ${0.2 + Math.random() * 0.3})`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.animation = `goldParticle ${6 + Math.random() * 6}s ease-in-out infinite`;
      p.style.animationDelay = `${Math.random() * 5}s`;
      p.style.pointerEvents = 'none';
      container.appendChild(p);
      particles.push(p);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <section id="closing" className="section-ivory-warm py-16 md:py-24 relative overflow-hidden">
      {/* Toran (marigold string) at top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Toran />
      </div>

      {/* Gold particle drift */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="wedding-container text-center relative z-10 pt-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-script gold-text-shimmer mb-6"
          style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)' }}
        >
          {closing.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-script text-gold/70 text-xl sm:text-2xl mb-2"
        >
          {closing.signOff}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="heading-display text-gold/30 text-[0.6rem] tracking-widest-3 mb-10"
        >
          {couple.coupleHashtag}
        </motion.p>

        <hr className="gold-rule mb-8" />

        {/* Footer credit */}
        <p className="font-body text-charcoal/30 text-[0.65rem]">
          {closing.footerCredit}
        </p>
      </div>
    </section>
  );
}
