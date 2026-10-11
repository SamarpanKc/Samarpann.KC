/**
 * Site content — every string on the page lives here so copy can change
 * without touching layout code.
 *
 * NOTE: everything under `works` is MOCK DATA (fictional brands) used to
 * shape the layout. Swap it for real case studies before launch.
 */

export const site = {
  name: "Samarpann KC",
  role: "Brand & Event Designer",
  location: "Pokhara, NP",
  timezone: "Pokhara · GMT+5:45",
  email: "samarpannkc@gmail.com",
  linkedin: "https://www.linkedin.com/in/samarpankc/",
  /** Add the PDF to /public and keep this path in sync. */
  cvUrl: "/Samarpann-KC-CV.pdf",
  /** Where "Browse the full archive" points. TODO: your Behance / Drive link. */
  archiveUrl: "https://www.behance.net/",
  availability: "Open for new projects",
  copyright: "© 2026 Samarpann KC. All rights reserved.",
  motto: "Design is communication, not just decoration.",
} as const;

/**
 * Footer "Touch on" icons, in the order drawn in Figma.
 * TODO: point Instagram / Reddit / Behance at your own profiles.
 */
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/samarpann_kc/", icon: "/assets/icons/instagram.png" },
  // { label: "Reddit", href: "https://www.reddit.com/", icon: "/assets/icons/reddit.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samarpankc/", icon: "/assets/icons/linkedin-mono.svg" },
  { label: "Behance", href: "https://www.behance.net/samarpankc", icon: "/assets/icons/behance-mono.svg" },
] as const;

/* -------------------------------------------------------------------------- */
/* Sections (shared by the nav and the cassette scroller)                     */
/* -------------------------------------------------------------------------- */

export const sections = [
  { id: "intro", label: "Intro" },
  { id: "works", label: "Works" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const navLinks: { id: SectionId; label: string }[] = [
  { id: "works", label: "Works" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  greeting: "Namaste, I’m",
  name: "Samarpann KC",
  disciplines: ["Brand System", "Visual Identity", "Event Design", "Spatial Strategy"],
  nowPlaying: {
    eyebrow: "Now playing — Side A, Track 01",
    title: "Annapurna Light Fest — Event identity",
    time: "02:14",
    progress: 0.6,
  },
};

export const trustedBy = {
  label: "Trusted by organizations & forward-thinking Brands",
  clients: ["TVS (Jagdamba Motors)", "Feedax", "SR Holdings", "Nepal Tourism Board", "Franklin Education Consultancy"],
};

/* -------------------------------------------------------------------------- */
/* Works (MOCK)                                                               */
/* -------------------------------------------------------------------------- */

export type CoverArt = "moon" | "rings" | "grid" | "mountain" | "sun" | "sunTop" | "dot" | "blob" | "tape" | "arrow" | "stripes";

export type Cover = {
  name: string;
  /** Solid colour or [top, bottom] vertical gradient */
  bg: string | [string, string];
  fg: string;
  /** Art colour (defaults to fg) */
  accent?: string;
  /** Secondary highlight (grid square / small blob) */
  highlight?: string;
  /** Background-matching colour used to cut shapes (mountain snow cap, tape reels) */
  bg2?: string;
  art: CoverArt;
  tag: string;
  year: string;
  mark: string;
  /** Mark size in px at the Figma reference width of the card */
  markSize: number;
};

export type WorkCategory = "brand" | "identity" | "events";

export const workFilters: { id: "all" | WorkCategory; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "brand", label: "Brand Systems" },
  { id: "identity", label: "Visual Identity" },
  { id: "events", label: "Events & Spaces" },
];

export type FeatureRow = {
  index: string;
  category: WorkCategory;
  label: string;
  title: string;
  description: string;
  side: "left" | "right";
  projects: { name: string; year: string }[];
  /** [back-left, back-right, front] */
  cards: [Cover, Cover, Cover];
};

export const works = {
  eyebrow: "Side A — Selected Works, 2023—2026",
  title: ["Work people", "walk into."],
  intro:
    "Identity systems, event worlds and wayfinding — built for stages, storefronts and screens across Nepal and beyond.",
  totalLabel: "24 projects · newest first",
  features: [
    {
      index: "01",
      category: "events",
      label: "Event Design",
      title: "Event Designs",
      side: "right",
      description: "Stages, passes, backdrops and social kits that make a crowd feel like they belong to something.",
      projects: [
        { name: "Annapurna Light Fest", year: "2026" },
        { name: "Phewa Jazz Nights", year: "2025" },
        { name: "Kathmandu Design Week", year: "2024" },
      ],
      cards: [
        { name: "Phewa Jazz Nights", bg: "#FF5B1F", fg: "#0A0A0A", art: "rings", tag: "EV—025", year: "2025", mark: "PJN", markSize: 72 },
        { name: "KTM Design Week", bg: "#F2EFE8", fg: "#0A0A0A", art: "grid", tag: "EV—024", year: "2024", mark: "KDW", markSize: 72 },
        { name: "Annapurna Light Fest", bg: ["#0B1530", "#2F64E0"], fg: "#F4F1EA", accent: "#FFD9A8", art: "moon", tag: "EV—026", year: "2026", mark: "Light\nFest ’26", markSize: 58 },
      ],
    },
    {
      index: "02",
      category: "brand",
      label: "Brand System",
      title: "Brand Systems",
      side: "left",
      description: "Logo suites, type, colour and the rules that keep a brand consistent from a visiting card to a billboard.",
      projects: [
        { name: "Himal Brew Co.", year: "2026" },
        { name: "Tilicho Outdoor", year: "2025" },
        { name: "Momo & Co.", year: "2024" },
      ],
      cards: [
        { name: "Tilicho Outdoor", bg: "#E9E4D8", fg: "#1A1A1A", accent: "#FF5B1F", art: "sun", tag: "BR—025", year: "2025", mark: "TILICHO", markSize: 46 },
        { name: "Momo & Co.", bg: "#E23B2E", fg: "#FFF4EC", accent: "#FFB3A8", highlight: "#FFF4EC", art: "blob", tag: "BR—024", year: "2024", mark: "m&co.", markSize: 72 },
        { name: "Himal Brew Co.", bg: ["#163024", "#24503A"], fg: "#F2EAD3", accent: "#F2EAD3", bg2: "#24503A", art: "mountain", tag: "BR—026", year: "2026", mark: "himal\nbrew co.", markSize: 56 },
      ],
    },
    {
      index: "03",
      category: "identity",
      label: "Visual Identity",
      title: "Visual Identities",
      side: "right",
      description: "Distinct marks and art direction people recognise before they read the name.",
      projects: [
        { name: "Lakeside Records", year: "2026" },
        { name: "Seto Bagh Studio", year: "2025" },
        { name: "Bindu Ceramics", year: "2024" },
      ],
      cards: [
        { name: "Seto Bagh Studio", bg: "#F5C518", fg: "#0A0A0A", accent: "#0A0A0A", art: "dot", tag: "ID—025", year: "2025", mark: "SB/", markSize: 80 },
        { name: "Bindu Ceramics", bg: "#BFD8FF", fg: "#0A0A0A", accent: "#0A0A0A", art: "dot", tag: "ID—024", year: "2024", mark: "bindu", markSize: 66 },
        { name: "Lakeside Records", bg: ["#0A0A0A", "#262626"], fg: "#F0F0F0", accent: "#FF5B1F", bg2: "#0A0A0A", art: "tape", tag: "ID—026", year: "2026", mark: "Lakeside\nRecords", markSize: 52 },
      ],
    },
  ] satisfies FeatureRow[],

  archive: {
    eyebrow: "04 / The B-sides",
    title: "More from the tape.",
    cta: "View all 24 projects",
    items: [
      { category: "events", label: "Event Design", cover: { name: "Gandaki Startup Summit", bg: "#2F64E0", fg: "#F0F0F0", art: "rings", tag: "EV—025", year: "2025", mark: "GSS", markSize: 68 } },
      { category: "events", label: "Event Design", cover: { name: "Pokhara Marathon", bg: "#F2EFE8", fg: "#0A0A0A", highlight: "#2F64E0", art: "grid", tag: "EV—024", year: "2024", mark: "42.2K", markSize: 64 } },
      { category: "events", label: "Spatial Strategy", cover: { name: "Fewa Fest Wayfinding", bg: "#FF5B1F", fg: "#0A0A0A", accent: "#0A0A0A", art: "arrow", tag: "SP—024", year: "2024", mark: "Fewa Fest", markSize: 46 } },
      { category: "identity", label: "Visual Identity", cover: { name: "Kora Coffee", bg: "#2A1E17", fg: "#F2EAD3", accent: "#C8834A", art: "dot", tag: "ID—025", year: "2025", mark: "kora", markSize: 76 } },
      { category: "events", label: "Event Design", cover: { name: "Nepal Craft Expo", bg: "#7E8436", fg: "#F4F1EA", accent: "#F4F1EA", art: "sunTop", tag: "EV—023", year: "2023", mark: "NCE ’23", markSize: 58 } },
      { category: "brand", label: "Brand System", cover: { name: "Saathi App", bg: "#E8ECF0", fg: "#0A0A0A", accent: "#2F64E0", highlight: "#FF5B1F", art: "blob", tag: "BR—025", year: "2025", mark: "saathi", markSize: 64 } },
      { category: "brand", label: "Packaging", cover: { name: "Dhaka Threads", bg: "#C9302C", fg: "#FFF4EC", accent: "#FFF4EC", art: "stripes", tag: "PK—024", year: "2024", mark: "dhaka", markSize: 68 } },
      { category: "events", label: "Event Design", cover: { name: "Prithvi Tech Fest", bg: ["#0A0A0A", "#262626"], fg: "#F0F0F0", accent: "#F0F0F0", highlight: "#FF5B1F", art: "grid", tag: "EV—023", year: "2023", mark: "PTF ’23", markSize: 60 } },
    ] satisfies { category: WorkCategory; label: string; cover: Cover }[],
  },

  crate: {
    eyebrow: "05 / Full archive — 140+ files since 2023",
    title: ["Dig through", "the whole crate."],
    cta: "Browse the full archive",
    /** Ordered left → right as drawn in Figma */
    folders: [
      { label: "2023", meta: "18 files", size: "sm", align: "start" },
      { label: "2024", meta: "34 files", size: "md", align: "start" },
      { label: "Archive", meta: "140+ files", size: "lg", align: "start" },
      { label: "2025", meta: "52 files", size: "md", align: "end" },
      { label: "2026", meta: "36 files", size: "sm", align: "end" },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* About                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "B-side / About",
  title: ["Designer from the foot", "of the Himalayas."],
  paragraphs: [
    "I’m Samarpann — a brand and event designer based in Pokhara, Nepal. I design event branding at Parichay Advertising, and for 3+ years I’ve been building identities, stages and spaces for organisations across Nepal.",
    "I’m also studying BCA and folding web and AI into my process, so ideas move from sketch to screen faster. Off the clock I write and sing songs — which might explain why this site looks like a cassette.",
  ],
  stats: [
    { value: "03", label: "Years of practice" },
    { value: "05", label: "Trusted brands" },
    { value: "24", label: "Projects archived" },
  ],
  tag: {
    header: ["Baggage tag", "No. SKC—026"],
    stamp: "Checked in — Pokhara",
    photo: { src: "/assets/portrait-sky.jpg", alt: "Illustrated portrait of Samarpann KC wearing orange sunglasses against a blue sky" },
    fields: [
      { label: "Name", value: "Samarpann KC" },
      { label: "From", value: "Pokhara, NP" },
      { label: "Role", value: "Brand & Event" },
      { label: "To", value: "Anywhere ✦" },
    ],
    code: "PKR → ANY",
  },
  ctas: { cv: "Download CV", story: "Read the long version" },
};

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

export type Service = {
  title: string;
  kicker: string;
  shell: "dark" | "light";
  accent: string;
  onAccent: string;
  /** Tape spool diameters (left, right) in the cassette window */
  spool: [number, number];
  description: string;
  deliverables: string[];
};

export const services = {
  eyebrow: "Tracklist / Services",
  title: ["Four tracks.", "One sound."],
  intro:
    "Pick a single track or the whole album. Most clients start with a brand system, then come back when it’s time to put it on a stage.",
  items: [
    { title: "Brand System", kicker: "Identity", shell: "dark", accent: "#FF5B1F", onAccent: "#FFFFFF", spool: [38, 24], description: "Scalable rules for logo, type, colour and layout — so every team ships on-brand without asking.", deliverables: ["Brand guidelines", "Logo suite", "Templates & tokens"] },
    { title: "Visual Identity", kicker: "Identity", shell: "light", accent: "#2F64E0", onAccent: "#FFFFFF", spool: [30, 32], description: "A distinct look and voice people recognise before they read the name.", deliverables: ["Logomark & wordmark", "Art direction", "Packaging"] },
    { title: "Event Design", kicker: "Experience", shell: "dark", accent: "#F5C518", onAccent: "#0A0A0A", spool: [24, 38], description: "Complete event worlds — stage, backdrops, passes, signage and the social kit around it.", deliverables: ["Stage & backdrops", "Badges & passes", "Social media kit"] },
    { title: "Spatial Strategy", kicker: "Space", shell: "light", accent: "#0A0A0A", onAccent: "#F4F1EA", spool: [34, 28], description: "Wayfinding, booth and venue layouts that move crowds the right way.", deliverables: ["Wayfinding systems", "Booth design", "Production files"] },
  ] satisfies Service[],
};

/* -------------------------------------------------------------------------- */
/* Process                                                                    */
/* -------------------------------------------------------------------------- */

export type TransportControl = "rewind" | "record" | "play" | "eject";

export const process = {
  eyebrow: "Track 05 / Process",
  title: ["How a project", "plays out."],
  counter: { digits: "004", unit: "weeks", caption: "Avg. project" },
  steps: [
    { control: "rewind", name: "Rewind", no: "01", time: "Week 1", title: "Research & discovery", description: "We rewind through your history, audience and competitors to find what’s worth keeping — and what’s noise." },
    { control: "record", name: "Record", no: "02", time: "Week 1–2", title: "Strategy & concepts", description: "Positioning, moodboards and two or three creative directions, presented in person or on a call." },
    { control: "play", name: "Play", no: "03", time: "Week 2–4", title: "Design & refine", description: "The chosen direction becomes a full system. Two rounds of revisions are built into every project." },
    { control: "eject", name: "Eject", no: "04", time: "Week 4+", title: "Launch & handoff", description: "Print-ready files, guidelines and source files — plus on-site support when it’s event day." },
  ] satisfies { control: TransportControl; name: string; no: string; time: string; title: string; description: string }[],
};

/* -------------------------------------------------------------------------- */
/* Experience                                                                 */
/* -------------------------------------------------------------------------- */

export const experience = {
  eyebrow: "Track 06 / Experience",
  title: ["Track", "history."],
  intro: "Agency floors, in-house teams and a classroom — every stop added something to the mix.",
  roles: [
    { counter: "001", role: "Graphics Designer", org: "Parichay Advertising", period: "Nov 2025 — Present", meta: "Pokhara · Full-time", current: true },
    { counter: "002", role: "IT Support Officer", org: "Feedax", period: "Present", meta: "Part-time", current: false },
    { counter: "003", role: "Senior Designer", org: "Synexis Softech", period: "Previously", meta: "Design", current: false },
    { counter: "004", role: "BCA — Computer Applications", org: "Tribhuvan University · Prithvi Narayan Campus", period: "Ongoing", meta: "Pokhara · Student", current: false },
  ],
};

/* -------------------------------------------------------------------------- */
/* Contact + footer                                                           */
/* -------------------------------------------------------------------------- */

export const contact = {
  eyebrow: "Side B starts here",
  title: ["Got a brief?", "Let’s press record."],
  rec: { label: "REC", caption: "Start a project" },
  footer: {
    eyebrow: "Collaborate",
    title: ["Let’s build something", "intentional."],
    body: ["Have an event or brand identity that needs impact?", "I’m currently taking on new projects."],
    emailLabel: "Email",
    socialLabel: "Touch on",
    locationLabel: "I’m at",
    location: "Nepal, Asia",
  },
};
