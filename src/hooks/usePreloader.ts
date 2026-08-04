import { useState, useEffect, useCallback, useRef } from 'react';
import { invitation } from '../data/invitation';

interface PreloaderState {
  progress: number;
  isComplete: boolean;
}

export function usePreloader(): PreloaderState {
  const [progress, setProgress] = useState(0);
  const loaded = useRef(0);
  const totalRef = useRef(0);

  const tick = useCallback(() => {
    loaded.current += 1;
    if (totalRef.current > 0) {
      setProgress(Math.min(100, Math.round((loaded.current / totalRef.current) * 100)));
    }
  }, []);

  useEffect(() => {
    const assets: Promise<void>[] = [];

    // Preload hero images
    const imagePaths = [invitation.couple.groom.photo, invitation.couple.bride.photo];
    imagePaths.forEach((src) => {
      assets.push(
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => { tick(); resolve(); };
          img.onerror = () => { tick(); resolve(); };
          img.src = src;
        })
      );
    });

    // Preload audio
    assets.push(
      new Promise<void>((resolve) => {
        const audio = new Audio();
        audio.oncanplaythrough = () => { tick(); resolve(); };
        audio.onerror = () => { tick(); resolve(); };
        audio.src = invitation.audio.trackPath;
      })
    );

    // Preload hero fonts via document.fonts
    assets.push(
      new Promise<void>((resolve) => {
        if (document.fonts) {
          document.fonts.ready.then(() => { tick(); resolve(); });
        } else {
          tick();
          resolve();
        }
      })
    );

    totalRef.current = assets.length;

    // Set a minimum load time so the progress bar is visible
    const minTimer = new Promise<void>((resolve) => setTimeout(resolve, 800));

    Promise.all([...assets, minTimer]).then(() => {
      setProgress(100);
    });
  }, [tick]);

  return { progress, isComplete: progress >= 100 };
}
