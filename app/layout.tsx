import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Self-hosted, Latin-subset variable fonts (OFL — licences in ./fonts). */
const sans = localFont({
  src: "./fonts/42dotSans-Latin.woff",
  variable: "--font-42dot",
  weight: "300 800",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/GeistMono-Latin.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: false,
});

const description =
  "I’m Samarpann KC, a brand, graphic and event designer with 3+ years of experience turning complex messages into sharp, unignorable visual identities across Nepal and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL("https://samarpannkc.com"),
  title: "Samarpann KC | Brand & Event Designer",
  description,
  keywords: [
    "brand designer",
    "event designer",
    "visual identity",
    "Nepal",
    "Pokhara",
    "Kathmandu",
    "Samarpann KC",
    "skc",
    "samarpan kc",
    "samarpan design",
    "graphic design",
    "logo design",
  ],
  authors: [{ name: "Samarpann KC" }],
  creator: "Samarpann KC",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Samarpann KC | Event & Brand Designer",
    description: "Design is communication, not decoration. 3+ years designing for events, brands, and products in Pokhara, Nepal.",
    siteName: "Samarpann KC Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samarpann KC | Event & Brand Designer",
    description: "Design is communication, not decoration. Event & Brand Designer based in Pokhara, Nepal.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Arms the scroll-reveal styles only when JS runs, so content never stays hidden. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
