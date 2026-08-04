# 💍 Indian Digital Wedding Invitation

A premium, mobile-first Indian wedding invitation landing page built with Vite + React 18 + TypeScript + Tailwind CSS + GSAP + Framer Motion + Lenis.

## ✨ Features

- **Curtain Gate Reveal** — Velvet curtain opening with wax seal, bell chime, marigold petals, and diya glow
- **Scratch-to-Reveal** — Heart-shaped scratch card to reveal the wedding date
- **14 Beautifully Designed Sections** — Hero, Invitation Note, Save the Date, Gallery, Countdown, Timeline, Pre-Wedding Events, Menu, Venue, Dress Code, Transport & Accommodation, Gifts, RSVP, Closing
- **Guest Personalization** — Append `?guest=Name` to the URL for a personalized greeting
- **Bilingual** — English and Hindi toggle with 250ms cross-fade
- **Background Music** — Shehnai/sitar track with localStorage persistence
- **RSVP Form** — Posts to configurable endpoint (Google Apps Script / Formspree)
- **Add to Calendar** — `.ics` download and Google Calendar link
- **Share on WhatsApp** — Pre-filled message with link
- **Fully Responsive** — Mobile-first with centered max-width column for desktop
- **Performance Optimized** — Lazy images, content-visibility, transform-only animations

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

---

## 📝 How to Customize

### All content lives in one file:

**`src/data/invitation.ts`** — English content
**`src/data/invitation.hi.ts`** — Hindi content

### Key fields to edit:

| What | Where in `invitation.ts` | Line (approx) |
|------|--------------------------|----------------|
| **Couple names** | `couple.groom.name`, `couple.bride.name` | ~25-35 |
| **Full names + parents** | `couple.groom.fullName`, `.parents`, same for bride | ~25-35 |
| **Wedding date** | `saveTheDate.date`, `countdown.targetISODate` | ~55, ~75 |
| **Venue** | `venue.name`, `venue.addressLines`, `venue.mapEmbedUrl` | ~155-165 |
| **Menu** | `menu.courses` array | ~105-145 |
| **Timeline events** | `timeline` array | ~80-110 |
| **Pre-wedding events** | `preWeddingEvents` array | ~115-135 |
| **Photos** | `gallery` array `src` paths, `couple.groom.photo`, `couple.bride.photo` | ~65-72 |
| **RSVP endpoint** | `rsvp.endpointUrl` | ~185 |
| **Audio track** | `audio.trackPath` | ~210 |
| **Hashtag** | `couple.coupleHashtag` | ~38 |
| **WhatsApp preview** | `meta.whatsappPreviewText` | ~12 |
| **OG image** | `meta.ogImage` | ~10 |

### Adding photos:

1. Drop your images into `public/assets/images/`
2. Update the `src` paths in `invitation.ts`:
   - `couple.groom.photo` → groom portrait
   - `couple.bride.photo` → bride portrait
   - `gallery[].src` → couple photos (3-5 recommended)
   - `meta.ogImage` → WhatsApp/social preview image (1200×630px recommended)

### Adding audio:

1. Drop your `.mp3` file into `public/assets/audio/`
2. Update `audio.trackPath` in `invitation.ts`

### Setting up RSVP:

1. Create a Google Apps Script webhook or Formspree form
2. Paste the endpoint URL into `rsvp.endpointUrl`
3. If left empty, submissions log to console (demo mode)

### Personalized links:

Share links with guest names:
```
https://yoursite.com/?guest=Priya%20Sharma
```

The curtain gate will show "Dear Priya Sharma," instead of the generic greeting.

---

## 📁 Project Structure

```
src/
├── data/
│   ├── types.ts              # TypeScript interfaces
│   ├── invitation.ts          # English content (EDIT THIS)
│   └── invitation.hi.ts      # Hindi content (EDIT THIS)
├── context/
│   ├── LanguageContext.tsx    # Language state + toggle
│   └── AudioContext.tsx       # Audio playback state
├── hooks/
│   ├── useInvitation.ts      # Get current language data
│   ├── useGuestName.ts       # Parse ?guest= from URL
│   ├── usePreloader.ts       # Asset loading progress
│   └── useCountdown.ts       # Countdown timer
├── assets/svg/
│   └── Ornaments.tsx          # All SVG ornamental components
├── components/
│   ├── CurtainGate.tsx       # Curtain reveal (signature)
│   ├── sections/             # One component per section
│   │   ├── HeroSection.tsx
│   │   ├── InvitationNote.tsx
│   │   ├── ScratchReveal.tsx
│   │   ├── Gallery.tsx
│   │   ├── Countdown.tsx
│   │   ├── Timeline.tsx
│   │   ├── PreWeddingEvents.tsx
│   │   ├── Menu.tsx
│   │   ├── Venue.tsx
│   │   ├── DressCode.tsx
│   │   ├── TransportAccommodation.tsx
│   │   ├── Gifts.tsx
│   │   ├── RSVP.tsx
│   │   └── Closing.tsx
│   └── ui/                   # Persistent UI
│       ├── FloatingNav.tsx
│       ├── MusicToggle.tsx
│       ├── LanguageToggle.tsx
│       ├── AddToCalendar.tsx
│       └── ShareWhatsApp.tsx
├── App.tsx                    # Main app shell
├── main.tsx                   # Entry point
└── index.css                  # Design system
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy to any static hosting (Netlify, Vercel, Firebase Hosting, GitHub Pages).

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Deep Maroon | `#6B1226` |
| Rich Velvet | `#8C1C2F` |
| Antique Gold | `#C9A227` |
| Light Gold Foil | `#E8CE86` |
| Ivory / Raw Silk | `#F6EFE3` |
| Warm Cream | `#FBF6EC` |
| Deep Charcoal | `#2A1B12` |

**Fonts:** Marcellus (display), Great Vibes (script), Jost (body), Tiro Devanagari Hindi (Hindi)

---

## 📄 License

Personal use. Built with love for your special day. 💐
