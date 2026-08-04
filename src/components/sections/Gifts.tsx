import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';

export default function Gifts() {
  const { gifts } = useInvitation();

  return (
    <section id="gifts" className="section-ivory py-16 md:py-24 silk-texture section-deferred">
      <div className="wedding-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md mx-auto"
        >
          {/* Gold rule frame */}
          <div
            className="p-8 sm:p-10 rounded-lg relative"
            style={{
              border: '1px solid rgba(201,162,39,0.15)',
              background: 'rgba(251,246,236,0.5)',
            }}
          >
            {/* Corner ornaments */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-gold/20" />
            <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-gold/20" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-gold/20" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-gold/20" />

            <h2 className="heading-display gold-text text-[0.8rem] tracking-widest-3 mb-2">
              {gifts.headline}
            </h2>
            <hr className="gold-rule mb-6" />

            <p className="font-body text-charcoal/60 text-sm leading-relaxed italic">
              {gifts.body}
            </p>

            {/* Small gift icon */}
            <div className="flex justify-center mt-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="10" width="18" height="12" rx="1" stroke="#C9A227" strokeWidth="1" fill="none" />
                <rect x="1" y="7" width="22" height="4" rx="1" stroke="#C9A227" strokeWidth="1" fill="none" />
                <line x1="12" y1="7" x2="12" y2="22" stroke="#C9A227" strokeWidth="1" />
                <path d="M12,7 Q8,3 6,5 Q4,7 8,7" stroke="#E8CE86" strokeWidth="1" fill="none" />
                <path d="M12,7 Q16,3 18,5 Q20,7 16,7" stroke="#E8CE86" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
