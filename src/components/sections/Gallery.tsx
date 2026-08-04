import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';

export default function Gallery() {
  const { gallery } = useInvitation();

  return (
    <section id="gallery" className="section-ivory py-20 md:py-28 silk-texture section-deferred">
      <div className="wedding-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display gold-text text-[0.8rem] tracking-widest-3 text-center mb-2"
        >
          {gallery.headline}
        </motion.h2>
        <hr className="gold-rule mb-12" />

        <div className="space-y-12">
          {gallery.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className="relative overflow-hidden rounded-lg w-full max-w-[340px] sm:max-w-[420px]"
                style={{
                  border: '2px solid rgba(201, 162, 39, 0.2)',
                  boxShadow: '0 8px 32px rgba(42, 27, 18, 0.08)',
                }}
              >
                {/* Image with parallax-like effect via transform on scroll */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-transform duration-700 ease-wedding hover:scale-105"
                    style={{
                      aspectRatio: '4/5',
                      backgroundColor: '#EDE4D4',
                      minHeight: '280px',
                    }}
                    onError={(e) => {
                      // Graceful fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.style.background = 'linear-gradient(135deg, #F6EFE3, #EDE4D4)';
                      target.style.display = 'flex';
                      target.alt = img.alt;
                    }}
                  />
                </div>

                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold/30 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold/30 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold/30 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold/30 rounded-br-lg" />
              </div>

              {/* Caption */}
              {img.caption && (
                <p className={`font-script text-gold/60 text-lg mt-3 ${i % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
                  {img.caption}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
