import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { invitation } from '../data/invitation';

interface AudioContextType {
  isPlaying: boolean;
  toggleAudio: () => void;
  startAudio: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const AudioCtx = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(invitation.audio.trackPath);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const fadeIn = useCallback((audio: HTMLAudioElement, targetVol: number, durationMs: number) => {
    const steps = 30;
    const stepTime = durationMs / steps;
    const stepVol = targetVol / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += stepVol;
      if (current >= targetVol) {
        audio.volume = targetVol;
        clearInterval(interval);
      } else {
        audio.volume = current;
      }
    }, stepTime);
  }, []);

  const startAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const stored = localStorage.getItem('wedding-music');
    if (stored === 'off') return;

    audio.play().then(() => {
      fadeIn(audio, 0.25, 3000);
      setIsPlaying(true);
      localStorage.setItem('wedding-music', 'on');
    }).catch(() => {
      // Autoplay blocked — user will use toggle
    });
  }, [fadeIn]);

  const toggleAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      localStorage.setItem('wedding-music', 'off');
    } else {
      audio.play().then(() => {
        audio.volume = 0.25;
        setIsPlaying(true);
        localStorage.setItem('wedding-music', 'on');
      }).catch(() => {});
    }
  }, [isPlaying]);

  return (
    <AudioCtx.Provider value={{ isPlaying, toggleAudio, startAudio, audioRef }}>
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error('useAudio must be used inside AudioProvider');
  return ctx;
}
