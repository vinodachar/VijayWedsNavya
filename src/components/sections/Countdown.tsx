import { motion } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';
import { useCountdown } from '../../hooks/useCountdown';

export default function Countdown() {
  const { countdown } = useInvitation();
  const { days, hours, minutes, seconds, isExpired } = useCountdown(countdown.targetISODate);

  const units = [
    { value: days, label: countdown.labels.days },
    { value: hours, label: countdown.labels.hours },
    { value: minutes, label: countdown.labels.minutes },
    { value: seconds, label: countdown.labels.seconds },
  ];

  return (
    <section id="countdown" className="section-dark py-20 md:py-28 section-deferred">
      <div className="wedding-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display gold-text text-[0.8rem] tracking-widest-3 mb-2"
        >
          {countdown.headline}
        </motion.h2>
        <hr className="gold-rule mb-12" />

        {isExpired ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-script text-gold text-3xl sm:text-4xl">
              {countdown.todayMessage}
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center gap-3 sm:gap-5"
          >
            {units.map((unit, i) => (
              <div
                key={i}
                className="flex flex-col items-center min-w-[68px] sm:min-w-[80px]"
              >
                <div
                  className="w-full py-4 sm:py-5 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(180deg, rgba(246,239,227,0.1) 0%, rgba(246,239,227,0.05) 100%)',
                    border: '1px solid rgba(201,162,39,0.15)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  }}
                >
                  <span
                    className="gold-text font-display text-3xl sm:text-4xl md:text-5xl tabular-nums"
                    style={{
                      fontVariantNumeric: 'tabular-nums',
                      minWidth: '2ch',
                      display: 'inline-block',
                      textAlign: 'center',
                    }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="heading-display text-gold/50 text-[0.55rem] tracking-widest-2 mt-3">
                  {unit.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
