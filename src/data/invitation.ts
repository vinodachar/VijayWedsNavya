import type { InvitationData } from './types';

// ─── INVITATION CONFIGURATION ─────────────────────────────────────────
// Chi. Ra. Vijay Kumar B & Chi. Sou. Navya S — Wedding Details

export const invitation: InvitationData = {
  // ── Meta / SEO / Social ──────────────────────────────────────────────
  meta: {
    siteTitle: "Chi. Ra. Vijay Kumar B & Chi. Sou. Navya S — Wedding Invitation",
    ogImage: "/assets/images/og-image.jpg",
    faviconPath: "/favicon.ico",
    whatsappPreviewText:
      "You're invited to the marriage of Chi. Ra. Vijay Kumar B & Chi. Sou. Navya S on Sunday, 16th August 2026 at White Pearl Convention Hall, Bangalore.",
  },

  // ── Couple Details ───────────────────────────────────────────────────
  couple: {
    groom: {
      name: "Vijay Kumar",
      fullName: "Chi. Ra. Vijay Kumar B BBA",
      parents: "(S/o Smt. Umadevi & Sri. Basavaraju)",
      photo: "/assets/images/couple-2.jpg",
    },
    bride: {
      name: "Navya",
      fullName: "Chi. Sou. Navya S M.Sc",
      parents: "(D/o Smt. Selvi & Sri. Sundar Raj)",
      photo: "/assets/images/couple-1.jpg",
    },
    coupleHashtag: "#VijayWedsNavya",
  },

  // ── Section 1 — Hero / Curtain Gate ──────────────────────────────────
  hero: {
    curtainSealText: "Click to Open",
    weAreGettingMarriedLabel: "We're Getting Married",
    subline: "16.08.2026  •  White Pearl Convention Hall, Bangalore",
    dearGuestLabel: "Dear Family & Friends,",
    youAreInvitedLabel: "You Are Invited",
    scrollLabel: "Scroll",
  },

  // ── Section 2 — Invitation Note ──────────────────────────────────────
  invitationNote: {
    headline: "Wedding Invitation",
    bodyParagraph: `Smt. Umadevi T & Sri. Basavaraju B.E
(Bendoni Village, C.N. Durga Hobli, Koratagere Tq, Tumkur Dist)

&

Smt. Selvi & Sri. Sundar Raj
(Hallmark Layout, Kannikanagar, Bommasandra, Bangalore 560099)

Warmly welcome you with family and friends on the auspicious occasion of the marriage of their beloved children

Chi. Ra. Vijay Kumar B BBA
(S/o Smt. Umadevi & Sri. Basavaraju)

&

Chi. Sou. Navya S M.Sc
(D/o Smt. Selvi & Sri. Sundar Raj)

On Sunday, 16th August 2026
at White Pearl Convention Hall
Near Jigani Tent, Jigani, Bannerghatta Road, Anekal Tq, Bangalore 560105`,
  },

  // ── Section 3 — Save the Date (Scratch Reveal) ──────────────────────
  saveTheDate: {
    scratchLabel: "Save the Date",
    revealHeadline: "The Big Day",
    date: "Sunday, 16th August 2026",
    time: "Muhurtha: Abhijith — 11:45 AM to 12:15 PM",
    venueShort: "White Pearl Convention Hall, Jigani, Bangalore",
    hintText: "Tap & drag to scratch",
    revealButtonText: "Reveal",
  },

  // ── Section 4 — Gallery ──────────────────────────────────────────────
  gallery: {
    headline: "Our Memories",
    images: [
      { src: "/assets/images/couple-2.jpg", alt: "Vijay Kumar and Navya engagement", caption: "The Engagement Ring Ceremony" },
      { src: "/assets/images/couple-1.jpg", alt: "Vijay Kumar and Navya groom and bride to be", caption: "Groom & Bride To Be" },
    ],
  },

  // ── Section 5 — Countdown ────────────────────────────────────────────
  countdown: {
    targetISODate: "2026-08-16T11:45:00+05:30",
    headline: "Counting Down to Muhurtha",
    todayMessage: "Today Is the Wedding Day! 🎉",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
  },

  // ── Section 6 — Program Timeline ────────────────────────────────────
  timeline: {
    headline: "Wedding Program",
    events: [
      {
        eventName: "Reception",
        date: "15-08-2026, Saturday",
        time: "6:30 PM Onwards",
        venue: "White Pearl Convention Hall, Jigani, Bangalore",
        icon: "feast",
        note: "Welcoming guests for the reception celebration.",
      },
      {
        eventName: "Muhurtha",
        date: "16-08-2026, Sunday",
        time: "Lagna: Abhijith — 11:45 AM to 12:15 PM",
        venue: "White Pearl Convention Hall, Jigani, Bangalore",
        icon: "ring",
        note: "Auspicious wedding ceremony (Muhurtha).",
      },
    ],
  },

  // ── Section 7 — Pre-wedding Events ──────────────────────────────────
  preWeddingEvents: {
    headline: "Wedding Program",
    events: [
      {
        eventName: "Reception",
        date: "15-08-2026, Saturday",
        time: "6:30 PM Onwards",
        venue: "White Pearl Convention Hall",
        dressColor: "#6B1226",
        note: "Saturday evening reception",
        icon: "🎉",
      },
      {
        eventName: "Muhurtha",
        date: "16-08-2026, Sunday",
        time: "Lagna: Abhijith (11:45 AM to 12:15 PM)",
        venue: "White Pearl Convention Hall",
        dressColor: "#C9A227",
        note: "Sunday morning auspicious ceremony",
        icon: "💍",
      },
    ],
  },

  // ── Section 8 — Menu ────────────────────────────────────────────────
  menu: {
    headline: "The Feast",
    note: "",
    courses: [],
  },

  // ── Section 9 — Venue ───────────────────────────────────────────────
  venue: {
    headline: "The Venue",
    name: "White Pearl Convention Hall",
    addressLines: [
      "Near Jigani Tent, Jigani",
      "Bannerghatta Road",
      "Anekal Tq, Bangalore 560105",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3!2d77.63!3d12.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWhite+Pearl+Convention+Hall!5e0!3m2!1sen!2sin!4v1",
    googleMapsUrl: "https://maps.google.com/?q=White+Pearl+Convention+Hall+Near+Jigani+Tent+Jigani+Bannerghatta+Road+Bangalore+560105",
    parkingNote: "Near Jigani Tent, Jigani, Bannerghatta Road, Anekal Tq, Bangalore 560105",
    viewOnMapsLabel: "View on Google Maps",
  },

  // ── Section 10 — Dress Code ─────────────────────────────────────────
  dressCode: {
    headline: "Dress Code",
    note: "",
    palette: [],
  },

  // ── Section 11a — Transportation ────────────────────────────────────
  transportation: {
    headline: "Venue Location",
    body: "White Pearl Convention Hall, Near Jigani Tent, Jigani, Bannerghatta Road, Anekal Tq, Bangalore 560105.",
  },

  // ── Section 11b — Accommodation ─────────────────────────────────────
  accommodation: {
    headline: "Location",
    body: "White Pearl Convention Hall, Near Jigani Tent, Jigani, Bannerghatta Road, Anekal Tq, Bangalore 560105.",
    hotels: [],
  },

  // ── Section 12 — Gifts ──────────────────────────────────────────────
  gifts: {
    headline: "With Best Compliments From",
    body: "Family & Friends",
  },

  // ── Section 13 — RSVP ──────────────────────────────────────────────
  rsvp: {
    headline: "Awaiting Your Gracious Presence",
    deadlineText: "Vijay & Navya",
    endpointUrl: "",
    submitLabel: "",
    successHeadline: "",
    successMessage: "",
    fields: {
      name: { label: "", placeholder: "", required: false },
      phone: { label: "", placeholder: "", required: false },
      email: { label: "", placeholder: "", required: false },
      attending: {
        label: "",
        options: [],
        required: false,
      },
      guestCount: { label: "", placeholder: "", required: false },
      events: { label: "", required: false },
      message: { label: "", placeholder: "", required: false },
    },
  },

  // ── Section 14 — Closing ────────────────────────────────────────────
  closing: {
    headline: "Awaiting Your Gracious Presence",
    signOff: "Vijay & Navya",
    footerCredit: "With Best Compliments From : Family & Friends",
  },

  // ── Audio ───────────────────────────────────────────────────────────
  audio: {
    trackPath: "/assets/audio/shehnai.mp3",
    defaultOn: true,
  },

  // ── Language ────────────────────────────────────────────────────────
  languages: {
    default: "en",
    options: ["en"],
    toggleLabel: "English",
  },
};
