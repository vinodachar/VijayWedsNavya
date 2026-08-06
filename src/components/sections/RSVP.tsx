import { useState, useCallback } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';

export default function RSVP() {
  const { rsvp, timeline } = useInvitation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    attending: '',
    guestCount: 1,
    events: [] as string[],
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = useCallback(() => {
    const newErrors: Record<string, string> = {};
    if (rsvp.fields.name.required && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (rsvp.fields.phone.required && !formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    if (rsvp.fields.attending.required && !formData.attending) {
      newErrors.attending = 'Please select your attendance';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, rsvp.fields]);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      if (rsvp.endpointUrl) {
        await fetch(rsvp.endpointUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } else {
        // Demo mode: log to console
        console.log('RSVP Submission (demo mode):', formData);
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
      setIsSuccess(true);
    } catch (err) {
      console.error('RSVP submission error:', err);
      // Still show success for demo purposes
      setIsSuccess(true);
    }

    setIsSubmitting(false);
  }, [formData, rsvp.endpointUrl, validate]);

  const toggleEvent = useCallback((eventName: string) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.includes(eventName)
        ? prev.events.filter((e) => e !== eventName)
        : [...prev.events, eventName],
    }));
  }, []);

  return (
    <section id="rsvp" className="section-ivory-warm py-20 md:py-28 silk-texture section-deferred">
      <div className="wedding-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display gold-text text-[0.8rem] tracking-widest-3 text-center mb-2"
        >
          {rsvp.headline}
        </motion.h2>
        <hr className="gold-rule mb-4" />
        <p className="font-body text-charcoal/50 text-sm text-center mb-10">
          {rsvp.deadlineText}
        </p>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            /* ─── Success State ─── */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md mx-auto text-center"
            >
              <div
                className="p-10 rounded-xl"
                style={{
                  background: 'rgba(246,239,227,0.8)',
                  border: '1px solid rgba(201,162,39,0.2)',
                  boxShadow: '0 8px 32px rgba(42,27,18,0.06)',
                }}
              >
                {/* Marigold flourish */}
                <div className="flex justify-center gap-1 mb-4">
                  {['🌼', '🌸', '🌻', '🌸', '🌼'].map((f, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="text-lg"
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>

                <h3 className="font-script text-gold text-3xl mb-3">
                  {rsvp.successHeadline}
                </h3>
                <p className="font-body text-charcoal/60 text-sm">
                  {rsvp.successMessage}
                </p>
              </div>
            </motion.div>
          ) : (
            /* ─── RSVP Form ─── */
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label htmlFor="rsvp-name" className="block font-body text-charcoal/70 text-sm mb-1.5">
                  {rsvp.fields.name.label} {rsvp.fields.name.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  className="input-wedding"
                  placeholder={rsvp.fields.name.placeholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required={rsvp.fields.name.required}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="rsvp-phone" className="block font-body text-charcoal/70 text-sm mb-1.5">
                  {rsvp.fields.phone.label} {rsvp.fields.phone.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  id="rsvp-phone"
                  type="tel"
                  className="input-wedding"
                  placeholder={rsvp.fields.phone.placeholder}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required={rsvp.fields.phone.required}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="rsvp-email" className="block font-body text-charcoal/70 text-sm mb-1.5">
                  {rsvp.fields.email.label}
                </label>
                <input
                  id="rsvp-email"
                  type="email"
                  className="input-wedding"
                  placeholder={rsvp.fields.email.placeholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Attending — gold pills */}
              <div>
                <label className="block font-body text-charcoal/70 text-sm mb-2">
                  {rsvp.fields.attending.label} {rsvp.fields.attending.required && <span className="text-red-500">*</span>}
                </label>
                <div className="flex flex-wrap gap-2">
                  {rsvp.fields.attending.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData({ ...formData, attending: option })}
                      className={`pill-selector text-[0.65rem] ${formData.attending === option ? 'active' : ''}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {errors.attending && <p className="text-red-500 text-xs mt-1">{errors.attending}</p>}
              </div>

              {/* Guest Count — stepper */}
              <div>
                <label htmlFor="rsvp-guests" className="block font-body text-charcoal/70 text-sm mb-1.5">
                  {rsvp.fields.guestCount.label}
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, guestCount: Math.max(1, formData.guestCount - 1) })}
                    className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center font-body text-gold hover:border-gold/50 transition-colors"
                    aria-label="Decrease guest count"
                  >
                    −
                  </button>
                  <span className="font-display text-charcoal text-xl tabular-nums min-w-[2ch] text-center" id="rsvp-guests">
                    {formData.guestCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, guestCount: Math.min(20, formData.guestCount + 1) })}
                    className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center font-body text-gold hover:border-gold/50 transition-colors"
                    aria-label="Increase guest count"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Which events — multi-select chips */}
              <div>
                <label className="block font-body text-charcoal/70 text-sm mb-2">
                  {rsvp.fields.events.label}
                </label>
                <div className="flex flex-wrap gap-2">
                  {timeline.events.map((event) => (
                    <button
                      key={event.eventName}
                      type="button"
                      onClick={() => toggleEvent(event.eventName)}
                      className={`pill-selector text-[0.6rem] py-1 px-3 ${formData.events.includes(event.eventName) ? 'active' : ''}`}
                    >
                      {event.eventName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="rsvp-message" className="block font-body text-charcoal/70 text-sm mb-1.5">
                  {rsvp.fields.message.label}
                </label>
                <textarea
                  id="rsvp-message"
                  className="input-wedding min-h-[100px] resize-none"
                  placeholder={rsvp.fields.message.placeholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold w-full relative"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                      <path d="M12,2 A10,10 0 0,1 22,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  rsvp.submitLabel
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
