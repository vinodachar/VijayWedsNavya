// ─── Wedding Invitation Data Types ───────────────────────────────────

export interface MetaConfig {
  siteTitle: string;
  ogImage: string;
  faviconPath: string;
  whatsappPreviewText: string;
}

export interface PersonConfig {
  name: string;
  fullName: string;
  parents: string;
  photo: string;
}

export interface CoupleConfig {
  groom: PersonConfig;
  bride: PersonConfig;
  coupleHashtag: string;
}

export interface HeroConfig {
  curtainSealText: string;
  weAreGettingMarriedLabel: string;
  subline: string;
  dearGuestLabel: string;
  youAreInvitedLabel: string;
  scrollLabel: string;
}

export interface InvitationNoteConfig {
  headline: string;
  bodyParagraph: string;
}

export interface SaveTheDateConfig {
  scratchLabel: string;
  revealHeadline: string;
  date: string;
  time: string;
  venueShort: string;
  hintText: string;
  revealButtonText: string;
}

export interface CountdownConfig {
  targetISODate: string;
  headline: string;
  todayMessage: string;
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryConfig {
  headline: string;
  images: GalleryImage[];
}

export interface TimelineConfig {
  headline: string;
  events: TimelineEvent[];
}

export interface PreWeddingConfig {
  headline: string;
  events: PreWeddingEvent[];
}

export interface VenueHeadlineConfig extends VenueConfig {
  headline: string;
}

export interface TimelineEvent {
  eventName: string;
  date: string;
  time: string;
  venue: string;
  icon: 'diya' | 'kalash' | 'mandala' | 'ring' | 'music' | 'feast' | 'custom';
  note?: string;
}

export interface PreWeddingEvent {
  eventName: string;
  date: string;
  time: string;
  venue: string;
  dressColor: string;
  note?: string;
  icon?: string;
}

export interface VenueConfig {
  name: string;
  addressLines: string[];
  mapEmbedUrl: string;
  googleMapsUrl: string;
  parkingNote: string;
  viewOnMapsLabel: string;
}

export interface DressCodeSwatch {
  label: string;
  hex: string;
}

export interface DressCodeConfig {
  headline: string;
  note: string;
  palette: DressCodeSwatch[];
}

export interface MenuItem {
  name: string;
  description?: string;
}

export interface MenuCourse {
  courseName: string;
  items: MenuItem[];
}

export interface MenuConfig {
  headline: string;
  note: string;
  courses: MenuCourse[];
}

export interface TransportationConfig {
  headline: string;
  body: string;
}

export interface HotelOption {
  name: string;
  distance: string;
  bookingLink: string;
}

export interface AccommodationConfig {
  headline: string;
  body: string;
  hotels: HotelOption[];
}

export interface GiftsConfig {
  headline: string;
  body: string;
}

export interface RSVPField {
  label: string;
  placeholder?: string;
  required?: boolean;
}

export interface RSVPConfig {
  headline: string;
  deadlineText: string;
  endpointUrl: string;
  submitLabel: string;
  successHeadline: string;
  successMessage: string;
  fields: {
    name: RSVPField;
    phone: RSVPField;
    email: RSVPField;
    attending: RSVPField & { options: string[] };
    guestCount: RSVPField;
    events: RSVPField;
    message: RSVPField;
  };
}

export interface ClosingConfig {
  headline: string;
  signOff: string;
  footerCredit: string;
}

export interface AudioConfig {
  trackPath: string;
  defaultOn: boolean;
}

export interface LanguageConfig {
  default: 'en' | 'hi';
  options: ('en' | 'hi')[];
  toggleLabel: string;
}

export interface InvitationData {
  meta: MetaConfig;
  couple: CoupleConfig;
  hero: HeroConfig;
  invitationNote: InvitationNoteConfig;
  saveTheDate: SaveTheDateConfig;
  countdown: CountdownConfig;
  gallery: GalleryConfig;
  timeline: TimelineConfig;
  preWeddingEvents: PreWeddingConfig;
  venue: VenueHeadlineConfig;
  dressCode: DressCodeConfig;
  menu: MenuConfig;
  transportation: TransportationConfig;
  accommodation: AccommodationConfig;
  gifts: GiftsConfig;
  rsvp: RSVPConfig;
  closing: ClosingConfig;
  audio: AudioConfig;
  languages: LanguageConfig;
}
