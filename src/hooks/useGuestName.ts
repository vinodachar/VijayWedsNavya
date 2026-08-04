import { useMemo } from 'react';

export function useGuestName(): string | null {
  return useMemo(() => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    const guest = params.get('guest');
    return guest ? decodeURIComponent(guest) : null;
  }, []);
}
