import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';
import { MandapArch } from '../../assets/svg/Ornaments';

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function InvitationNote() {
  const { invitationNote } = useInvitation();
  const lines = invitationNote.bodyParagraph.split('\n').filter((l) => l.trim() !== '');

  return (
    <section id="invitation-note" className="section-dark py-20 md:py-28 overflow-hidden">
      <div className="wedding-container text-center">
        {/* Mandap arch illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-[280px] sm:max-w-[340px] relative"
        >
          <MandapArch className="w-full opacity-50" />
          {/* Subtle glow behind arch */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center 40%, rgba(232,206,134,0.08) 0%, transparent 60%)',
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display gold-text text-[0.8rem] tracking-widest-3 mb-8"
        >
          {invitationNote.headline}
        </motion.h2>

        <hr className="gold-rule mb-10" />

        {/* Body paragraph — lines fade up one at a time */}
        <div className="max-w-lg mx-auto space-y-4">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="font-body text-ivory/80 text-base sm:text-lg leading-relaxed font-light"
            >
              {line.trim()}
            </motion.p>
          ))}
        </div>

        {/* Gold flourish divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <div className="gold-flourish">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10,2 Q14,6 14,10 Q14,14 10,18 Q6,14 6,10 Q6,6 10,2 Z" fill="#C9A227" opacity="0.5" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
