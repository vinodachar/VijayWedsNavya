import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInvitation } from '../../hooks/useInvitation';

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

const confettiColors = ['#E8CE86', '#C9A227', '#FFD700', '#F3A4B5', '#85C1E9', '#A569BD', '#52BE80'];

export default function ScratchReveal() {
  const { saveTheDate } = useInvitation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);
  const [confettiParticles, setConfettiParticles] = useState<ConfettiParticle[]>([]);
  const isDrawing = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  // Animation loop for confetti falling particles
  useEffect(() => {
    if (confettiParticles.length === 0) return;

    let active = true;
    const updateFrame = () => {
      if (!active) return;

      setConfettiParticles(prev => {
        const updated = prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.2, // gravity
            vx: p.vx * 0.98, // air drag
            rotation: p.rotation + p.rotationSpeed,
            opacity: p.opacity - 0.022,
          }))
          .filter(p => p.opacity > 0);

        if (updated.length > 0) {
          requestAnimationFrame(updateFrame);
        }
        return updated;
      });
    };

    const animId = requestAnimationFrame(updateFrame);
    return () => {
      active = false;
      cancelAnimationFrame(animId);
    };
  }, [confettiParticles.length]);

  const triggerConfetti = useCallback((clientX: number, clientY: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const startX = clientX - rect.left;
    const startY = clientY - rect.top;

    const newParticles: ConfettiParticle[] = Array.from({ length: 22 }).map((_, i) => {
      const angle = (Math.random() * Math.PI * 1.5) - Math.PI * 0.75; // explode upwards and outwards
      const speed = 2 + Math.random() * 7;
      return {
        id: Date.now() + i + Math.random(),
        x: startX,
        y: startY,
        vx: Math.sin(angle) * speed,
        vy: -Math.cos(angle) * speed - 2, // upward velocity
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        size: 4 + Math.random() * 7,
        rotation: Math.random() * 360,
        rotationSpeed: -8 + Math.random() * 16,
        opacity: 1,
      };
    });

    setConfettiParticles(prev => [...prev, ...newParticles]);
  }, []);

  const CANVAS_W = 300;
  const CANVAS_H = 360;

  // Initialize canvas with navy blue foil
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = CANVAS_W;
    canvas.height = CANVAS_H;

    // Draw navy blue gradient background as heart-ish rounded shape
    const gradient = ctx.createLinearGradient(0, 0, CANVAS_W, CANVAS_H);
    gradient.addColorStop(0, '#1F3E6C');
    gradient.addColorStop(0.3, '#0F1E36');
    gradient.addColorStop(0.5, '#0A1329');
    gradient.addColorStop(0.7, '#0F1E36');
    gradient.addColorStop(1, '#1F3E6C');

    // Heart-shaped clip path
    ctx.beginPath();
    const cx = CANVAS_W / 2;
    const top = 60;
    ctx.moveTo(cx, CANVAS_H - 40);
    ctx.bezierCurveTo(cx - 160, CANVAS_H - 140, cx - 160, top, cx, top + 60);
    ctx.bezierCurveTo(cx + 160, top, cx + 160, CANVAS_H - 140, cx, CANVAS_H - 40);
    ctx.closePath();
    ctx.clip();

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // Add subtle noise texture
    for (let i = 0; i < 3000; i++) {
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.15})`;
      ctx.fillRect(Math.random() * CANVAS_W, Math.random() * CANVAS_H, 1, 1);
    }

    // Add "Save the Date" text
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#E8CE86';
    ctx.font = '700 14px Marcellus, serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '4px';
    ctx.fillText(saveTheDate.scratchLabel.toUpperCase(), cx, CANVAS_H / 2 - 10);

    // Small scratch icon hint
    ctx.font = '24px sans-serif';
    ctx.fillStyle = '#E8CE86';
    ctx.fillText('✨', cx, CANVAS_H / 2 + 25);
  }, [isRevealed, saveTheDate.scratchLabel]);

  const getCanvasPos = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e && e.touches.length > 0) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    if ('clientX' in e) {
      return {
        x: ((e as React.MouseEvent).clientX - rect.left) * scaleX,
        y: ((e as React.MouseEvent).clientY - rect.top) * scaleY,
      };
    }
    return { x: 0, y: 0 };
  }, []);

  const scratch = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    // Draw line from last position for smooth strokes
    ctx.lineWidth = 44;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastPos.current = { x, y };

    // Check percentage cleared
    checkReveal(ctx, canvas);
  }, []);

  const checkReveal = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;
    let total = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      total++;
      if (pixels[i] === 0) transparent++;
    }

    const pct = transparent / total;
    if (pct > 0.55) {
      setShowSparkle(true);
      setTimeout(() => {
        setIsRevealed(true);
        setShowSparkle(false);
      }, 600);
    }
  }, []);

  const handleStart = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    isDrawing.current = true;
    setHasStarted(true);

    // Trigger paper pops confetti at cursor position
    let clientX = 0;
    let clientY = 0;
    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    triggerConfetti(clientX, clientY);

    const pos = getCanvasPos(e);
    lastPos.current = pos;
    scratch(pos.x, pos.y);
  }, [getCanvasPos, scratch, triggerConfetti]);

  const handleMove = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    if (!isDrawing.current) return;
    const pos = getCanvasPos(e);
    scratch(pos.x, pos.y);
  }, [getCanvasPos, scratch]);

  const handleEnd = useCallback(() => {
    isDrawing.current = false;
  }, []);

  return (
    <section id="save-the-date" className="section-ivory-warm py-20 md:py-28 section-deferred">
      <div className="wedding-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display gold-text text-[0.8rem] tracking-widest-3 mb-2"
        >
          {saveTheDate.scratchLabel}
        </motion.h2>
        <hr className="gold-rule mb-10" />

        {/* Scratch Card Container */}
        <div ref={containerRef} className="relative inline-block mx-auto">
          {/* Confetti particles */}
          {confettiParticles.map(p => (
            <div
              key={p.id}
              className="absolute rounded-sm pointer-events-none"
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
                opacity: p.opacity,
                zIndex: 40,
              }}
            />
          ))}

          {/* Hidden content underneath */}
          <div
            className="w-[300px] h-[360px] flex flex-col items-center justify-center rounded-2xl border border-gold/20 bg-ivory-warm"
            style={{ boxShadow: '0 8px 32px rgba(42,27,18,0.08)' }}
          >
            <p className="heading-display gold-text text-[0.7rem] tracking-widest-2 mb-4">
              {saveTheDate.revealHeadline}
            </p>
            <p className="font-script text-gold text-3xl sm:text-4xl mb-3">
              {saveTheDate.date}
            </p>
            <p className="font-body text-charcoal/60 text-sm mb-1">
              {saveTheDate.time}
            </p>
            <p className="font-body text-charcoal/50 text-xs text-center flex items-center justify-center flex-wrap gap-1">
              <span className="font-script text-gold text-base">White Pearl Convention Hall</span>
              <span>, Jigani, Bangalore</span>
            </p>
          </div>

          {/* Canvas overlay (scratch surface) */}
          <AnimatePresence>
            {!isRevealed && (
              <motion.canvas
                ref={canvasRef}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing rounded-2xl touch-none"
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                aria-label="Scratch card - drag to reveal the date"
              />
            )}
          </AnimatePresence>

          {/* Sparkle burst */}
          {showSparkle && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gold-light"
                  style={{
                    animation: `sparkle 0.6s ease-out forwards`,
                    animationDelay: `${i * 0.04}s`,
                    transform: `rotate(${i * 30}deg) translateY(-40px)`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Hint text */}
          {!hasStarted && !isRevealed && (
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
              <p className="font-body text-charcoal/50 text-xs animate-pulse">
                {saveTheDate.hintText}
              </p>
            </div>
          )}
        </div>

        {/* Accessibility fallback button */}
        {!isRevealed && (
          <button
            onClick={() => setIsRevealed(true)}
            className="mt-6 pill-selector text-[0.65rem]"
            aria-label="Reveal the date"
          >
            {saveTheDate.revealButtonText}
          </button>
        )}
      </div>

      <style>{`
        @keyframes sparkle {
          0% { opacity: 1; transform: rotate(var(--angle, 0deg)) translateY(0) scale(1); }
          100% { opacity: 0; transform: rotate(var(--angle, 0deg)) translateY(-60px) scale(0); }
        }
      `}</style>
    </section>
  );
}
