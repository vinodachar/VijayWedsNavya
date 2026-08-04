import { useCallback } from 'react';
import { useInvitation } from '../../hooks/useInvitation';

export default function AddToCalendar() {
  const { saveTheDate, venue, countdown, couple } = useInvitation();

  const generateICS = useCallback(() => {
    const startDate = new Date(countdown.targetISODate);
    const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000); // 4 hours

    const formatDate = (d: Date) => {
      return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    };

    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Wedding Invitation//EN',
      'BEGIN:VEVENT',
      `DTSTART:${formatDate(startDate)}`,
      `DTEND:${formatDate(endDate)}`,
      `SUMMARY:${couple.groom.name} & ${couple.bride.name}'s Wedding`,
      `LOCATION:${venue.name}, ${venue.addressLines.join(', ')}`,
      `DESCRIPTION:${saveTheDate.venueShort}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${couple.groom.name}-${couple.bride.name}-wedding.ics`;
    link.click();
    URL.revokeObjectURL(link.href);
  }, [countdown, venue, saveTheDate, couple]);

  const googleCalendarUrl = useCallback(() => {
    const startDate = new Date(countdown.targetISODate);
    const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);

    const formatDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `${couple.groom.name} & ${couple.bride.name}'s Wedding`,
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
      location: `${venue.name}, ${venue.addressLines.join(', ')}`,
      details: saveTheDate.venueShort,
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }, [countdown, venue, saveTheDate, couple]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
      <button
        onClick={generateICS}
        className="pill-selector text-[0.6rem] flex items-center gap-2"
        aria-label="Download calendar file"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="2" y="1" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="2" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1" />
          <line x1="5" y1="1" x2="5" y2="3" stroke="currentColor" strokeWidth="1" />
          <line x1="9" y1="1" x2="9" y2="3" stroke="currentColor" strokeWidth="1" />
        </svg>
        Add to Calendar (.ics)
      </button>

      <a
        href={googleCalendarUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="pill-selector text-[0.6rem] flex items-center gap-2"
        aria-label="Add to Google Calendar"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="2" y="1" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="2" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1" />
          <path d="M6,7 L8,9 L10,6" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
        Google Calendar
      </a>
    </div>
  );
}
