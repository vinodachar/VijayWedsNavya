import type { InvitationData } from './types';

// ─── हिंदी अनुवाद — HINDI TRANSLATION ─────────────────────────────────
// This file mirrors invitation.ts with Hindi text.
// Replace placeholders with actual Hindi content.

export const invitationHi: InvitationData = {
  meta: {
    siteTitle: "GROOM_NAME और BRIDE_NAME — विवाह निमंत्रण",
    ogImage: "/assets/images/og-image.jpg",
    faviconPath: "/favicon.ico",
    whatsappPreviewText:
      "आप GROOM_NAME और BRIDE_NAME के विवाह में सादर आमंत्रित हैं! 💍✨",
  },

  couple: {
    groom: {
      name: "वर का नाम",
      fullName: "वर का पूरा नाम",
      parents: "श्री पिताजी का नाम एवं श्रीमती माताजी का नाम के सुपुत्र",
      photo: "/assets/images/groom.jpg",
    },
    bride: {
      name: "वधू का नाम",
      fullName: "वधू का पूरा नाम",
      parents: "श्री पिताजी का नाम एवं श्रीमती माताजी का नाम की सुपुत्री",
      photo: "/assets/images/bride.jpg",
    },
    coupleHashtag: "#वरxवधू",
  },

  hero: {
    curtainSealText: "खोलने के लिए दबाएँ",
    weAreGettingMarriedLabel: "हमारा विवाह हो रहा है",
    subline: "DD.MM.YYYY  •  शहर का नाम",
    dearGuestLabel: "प्रिय अतिथि,",
    youAreInvitedLabel: "आप सादर आमंत्रित हैं",
    scrollLabel: "नीचे स्क्रॉल करें",
  },

  invitationNote: {
    headline: "ईश्वर की कृपा से",
    bodyParagraph:
      "अपने परिवारों के साथ, वर का पूरा नाम और वधू का पूरा नाम आपसे अपने विवाह समारोह में उपस्थित होकर आशीर्वाद देने का अनुरोध करते हैं। इस सुंदर यात्रा की शुरुआत में आपका प्यार और आशीर्वाद हमारे लिए अमूल्य है।",
  },

  saveTheDate: {
    scratchLabel: "तारीख़ याद रखें",
    revealHeadline: "शुभ दिन",
    date: "DD माह YYYY",
    time: "सुबह/शाम HH:MM बजे से",
    venueShort: "स्थान का नाम, शहर",
    hintText: "खरोंचने के लिए दबाएँ और खींचें",
    revealButtonText: "दिखाएँ",
  },

  countdown: {
    targetISODate: "2026-12-15T10:00:00+05:30",
    headline: "शुभ दिन की उलटी गिनती",
    todayMessage: "आज वो शुभ दिन है! 🎉",
    labels: {
      days: "दिन",
      hours: "घंटे",
      minutes: "मिनट",
      seconds: "सेकंड",
    },
  },

  gallery: {
    headline: "हमारी कहानी",
    images: [
      { src: "/assets/images/couple-1.jpg", alt: "वर और वधू साथ में", caption: "यहीं से शुरू हुआ" },
      { src: "/assets/images/couple-2.jpg", alt: "सगाई की तस्वीर", caption: "प्रस्ताव" },
      { src: "/assets/images/couple-3.jpg", alt: "विवाह-पूर्व शूट", caption: "एक यादगार दिन" },
      { src: "/assets/images/couple-4.jpg", alt: "जोड़े की कैंडिड", caption: "हमारा पसंदीदा पल" },
      { src: "/assets/images/couple-5.jpg", alt: "जोड़े का चित्र", caption: "हमेशा के लिए शुरू" },
    ],
  },

  timeline: {
    headline: "कार्यक्रम",
    events: [
      {
        eventName: "हल्दी",
        date: "DD माह YYYY",
        time: "सुबह 10:00 बजे",
        venue: "स्थान का नाम, शहर",
        icon: "kalash",
        note: "हल्दी का शुभ उत्सव।",
      },
      {
        eventName: "मेहंदी",
        date: "DD माह YYYY",
        time: "दोपहर 4:00 बजे",
        venue: "स्थान का नाम, शहर",
        icon: "mandala",
        note: "मेहंदी और संगीत की शाम।",
      },
      {
        eventName: "संगीत",
        date: "DD माह YYYY",
        time: "शाम 7:00 बजे",
        venue: "स्थान का नाम, शहर",
        icon: "music",
        note: "नृत्य और संगीत की शाम।",
      },
      {
        eventName: "विवाह संस्कार",
        date: "DD माह YYYY",
        time: "सुबह 10:00 बजे",
        venue: "स्थान का नाम, शहर",
        icon: "ring",
        note: "पवित्र विवाह संस्कार।",
      },
      {
        eventName: "स्वागत समारोह",
        date: "DD माह YYYY",
        time: "शाम 7:00 बजे",
        venue: "स्थान का नाम, शहर",
        icon: "feast",
        note: "भव्य स्वागत भोज।",
      },
    ],
  },

  preWeddingEvents: {
    headline: "विवाह-पूर्व उत्सव",
    events: [
      {
        eventName: "हल्दी",
        date: "DD माह YYYY",
        time: "सुबह 10:00 बजे",
        venue: "स्थान का नाम, शहर",
        dressColor: "#F5C518",
        note: "पीले रंग के कपड़े पहनें!",
        icon: "🌻",
      },
      {
        eventName: "मेहंदी",
        date: "DD माह YYYY",
        time: "दोपहर 4:00 बजे",
        venue: "स्थान का नाम, शहर",
        dressColor: "#2D8B2D",
        note: "हरे रंग के कपड़े पहनें!",
        icon: "🌿",
      },
      {
        eventName: "संगीत",
        date: "DD माह YYYY",
        time: "शाम 7:00 बजे",
        venue: "स्थान का नाम, शहर",
        dressColor: "#6B1226",
        note: "अपने सबसे अच्छे कपड़े पहनें!",
        icon: "🎶",
      },
    ],
  },

  menu: {
    headline: "भोज",
    note: "बेहतरीन स्वादों का एक चुना हुआ पाक अनुभव।",
    courses: [
      {
        courseName: "स्वागत पेय",
        items: [
          { name: "गुलाब शरबत", description: "ताज़ा गुलाब का शरबत" },
          { name: "मसाला छाछ", description: "मसालेदार छाछ" },
          { name: "आम लस्सी", description: "मलाईदार आम दही पेय" },
          { name: "ठंडाई", description: "पारंपरिक मसालेदार दूध" },
        ],
      },
      {
        courseName: "स्टार्टर्स",
        items: [
          { name: "पनीर टिक्का", description: "तंदूर में भुना पनीर" },
          { name: "दही के कबाब", description: "दही से बने कबाब" },
          { name: "चिकन सीख कबाब", description: "मसालेदार कीमा कबाब" },
          { name: "आलू टिक्की चाट", description: "कुरकुरी आलू टिक्की चटनी के साथ" },
        ],
      },
      {
        courseName: "मुख्य व्यंजन",
        items: [
          { name: "दाल मखनी", description: "क्रीमी काली दाल" },
          { name: "पनीर बटर मसाला", description: "टमाटर-क्रीम पनीर" },
          { name: "मटन रोगन जोश", description: "कश्मीरी शैली का गोश्त" },
          { name: "बिरयानी", description: "सुगंधित मसालेदार चावल" },
          { name: "नान और रोटी", description: "तंदूर में बनी रोटियाँ" },
        ],
      },
      {
        courseName: "लाइव काउंटर",
        items: [
          { name: "चाट काउंटर", description: "पानी पूरी, भेल, सेव पूरी" },
          { name: "डोसा स्टेशन", description: "ताज़ा डोसा" },
          { name: "पास्ता बार", description: "सॉस के साथ ताज़ा पास्ता" },
        ],
      },
      {
        courseName: "मिठाइयाँ",
        items: [
          { name: "गुलाब जामुन", description: "चाशनी में गोल्डन दूध के गोले" },
          { name: "रसमलाई", description: "केसर दूध में मुलायम पनीर" },
          { name: "जलेबी", description: "कुरकुरी केसर जलेबी" },
          { name: "कुल्फी फालूदा", description: "पारंपरिक भारतीय आइसक्रीम" },
        ],
      },
      {
        courseName: "पान",
        items: [
          { name: "मीठा पान", description: "मीठा पान" },
          { name: "चॉकलेट पान", description: "आधुनिक फ्यूज़न पान" },
        ],
      },
    ],
  },

  venue: {
    headline: "विवाह स्थल",
    name: "स्थान का नाम",
    addressLines: ["पता पंक्ति 1", "पता पंक्ति 2", "शहर, राज्य — पिनकोड"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=PASTE_YOUR_EMBED_URL_HERE",
    googleMapsUrl: "https://maps.google.com/?q=VENUE_NAME+CITY_NAME",
    parkingNote: "स्थान पर निःशुल्क वैले पार्किंग उपलब्ध है।",
    viewOnMapsLabel: "गूगल मैप्स पर देखें",
  },

  dressCode: {
    headline: "ड्रेस कोड",
    note: "हम चाहेंगे कि आप हमारे उत्सव के रंगों को अपनाएँ। विवाह के दिन के लिए हमारे सुझाए गए रंग:",
    palette: [
      { label: "शाही मैरून", hex: "#6B1226" },
      { label: "सोना", hex: "#C9A227" },
      { label: "आइवरी", hex: "#F6EFE3" },
      { label: "गहरा लाल", hex: "#8C1C2F" },
      { label: "हल्का गुलाबी", hex: "#E8B4B8" },
      { label: "पन्ना", hex: "#2D6B4A" },
    ],
  },

  transportation: {
    headline: "कैसे पहुँचें",
    body: "स्थान, शहर हवाई अड्डे (कोड) से DISTANCE_MINUTES मिनट की दूरी पर है। सुविधाजनक यात्रा के लिए उबर या ओला बुक करें। विवाह के दिन चयनित होटल से स्थान तक शटल सेवा उपलब्ध रहेगी।",
  },

  accommodation: {
    headline: "कहाँ ठहरें",
    body: "हमने अपने मेहमानों के लिए इन होटलों में विशेष दरें व्यवस्थित की हैं:",
    hotels: [
      { name: "होटल 1 का नाम", distance: "स्थान से 5 मिनट", bookingLink: "https://HOTEL_BOOKING_URL_1" },
      { name: "होटल 2 का नाम", distance: "स्थान से 10 मिनट", bookingLink: "https://HOTEL_BOOKING_URL_2" },
      { name: "होटल 3 का नाम", distance: "स्थान से 15 मिनट", bookingLink: "https://HOTEL_BOOKING_URL_3" },
    ],
  },

  gifts: {
    headline: "उपहार",
    body: "हमारे विवाह में आपकी उपस्थिति सबसे बड़ा उपहार है। यदि आप हमें सम्मानित करना चाहें, तो हमारे नए घर के लिए आर्थिक योगदान हृदय से स्वीकार किया जाएगा।",
  },

  rsvp: {
    headline: "संदेश भेजें",
    deadlineText: "कृपया DD माह YYYY तक जवाब दें",
    endpointUrl: "",
    submitLabel: "संदेश भेजें",
    successHeadline: "धन्यवाद!",
    successMessage: "हमें आपका जवाब मिल गया है। हम आपके साथ उत्सव मनाने का बेसब्री से इंतज़ार कर रहे हैं!",
    fields: {
      name: { label: "आपका नाम", placeholder: "पूरा नाम", required: true },
      phone: { label: "फ़ोन नंबर", placeholder: "+91 XXXXX XXXXX", required: true },
      email: { label: "ईमेल", placeholder: "your@email.com", required: false },
      attending: {
        label: "क्या आप आएँगे?",
        options: ["हर्षपूर्वक स्वीकार", "खेदपूर्वक अस्वीकार", "शायद"],
        required: true,
      },
      guestCount: { label: "मेहमानों की संख्या", placeholder: "1", required: true },
      events: { label: "कौन से कार्यक्रम?", required: false },
      message: { label: "जोड़े के लिए संदेश", placeholder: "अपनी शुभकामनाएँ लिखें…", required: false },
    },
  },

  closing: {
    headline: "हम आपके साथ उत्सव मनाने का बेसब्री से इंतज़ार कर रहे हैं!",
    signOff: "प्यार के साथ, वर का नाम और वधू का नाम",
    footerCredit: "वर का नाम और वधू का नाम के विवाह के लिए ❤️ से बनाया गया",
  },

  audio: {
    trackPath: "/assets/audio/shehnai.mp3",
    defaultOn: true,
  },

  languages: {
    default: "en",
    options: ["en", "hi"],
    toggleLabel: "English",
  },
};
