import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';

export default function Menu() {
  const { menu } = useInvitation();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="section-dark py-20 md:py-28 section-deferred">
      <div className="wedding-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display gold-text text-[0.8rem] tracking-widest-3 text-center mb-2"
        >
          {menu.headline}
        </motion.h2>
        <hr className="gold-rule mb-4" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-ivory/50 text-sm text-center mb-10"
        >
          {menu.note}
        </motion.p>

        {/* Course tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {menu.courses.map((course, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`pill-selector text-[0.6rem] sm:text-[0.65rem] py-1.5 px-3 sm:px-4 ${activeTab === i ? 'active' : ''}`}
              aria-selected={activeTab === i}
              role="tab"
            >
              {course.courseName}
            </button>
          ))}
        </div>

        {/* Course content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md mx-auto"
            role="tabpanel"
          >
            <div
              className="rounded-lg p-6 sm:p-8"
              style={{
                background: 'rgba(246,239,227,0.04)',
                border: '1px solid rgba(201,162,39,0.1)',
              }}
            >
              <h3 className="heading-display text-gold text-[0.7rem] tracking-widest-2 mb-6 text-center">
                {menu.courses[activeTab].courseName}
              </h3>

              <div className="space-y-4">
                {menu.courses[activeTab].items.map((item, j) => (
                  <div key={j} className="flex items-baseline">
                    <span className="font-body text-ivory/80 text-sm whitespace-nowrap">
                      {item.name}
                    </span>
                    <span className="leader-line" />
                    <span className="font-body text-ivory/40 text-xs whitespace-nowrap max-w-[140px] truncate">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
