import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';

export default function DressCode() {
  const { dressCode } = useInvitation();

  return (
    <section id="dress-code" className="section-ivory-warm py-20 md:py-28 section-deferred">
      <div className="wedding-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display gold-text text-[0.8rem] tracking-widest-3 mb-2"
        >
          {dressCode.headline}
        </motion.h2>
        <hr className="gold-rule mb-6" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-charcoal/60 text-sm max-w-md mx-auto mb-10"
        >
          {dressCode.note}
        </motion.p>

        {/* Colour swatches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8"
        >
          {dressCode.palette.map((swatch, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 cursor-default"
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-shadow duration-300 hover:shadow-gold-glow-sm"
                style={{
                  backgroundColor: swatch.hex,
                  border: swatch.hex.toUpperCase() === '#F6EFE3'
                    ? '2px solid rgba(201,162,39,0.2)'
                    : '2px solid transparent',
                  boxShadow: '0 2px 8px rgba(42,27,18,0.08)',
                }}
                title={swatch.label}
              />
              <span className="font-body text-charcoal/50 text-[0.65rem]">
                {swatch.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
