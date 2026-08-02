import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samarpann KC | Designer",
  description:
    "I'm Samarpann KC, an Brand, Graphics & Event Designer with 3+ years of experience turning complex messages into sharp, unignorable visual identities across Nepal and beyond.",
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
    description:
      "Design is communication, not decoration. 3+ years designing for events, brands, and products in Pokhara, Nepal.",
    siteName: "Samarpann KC Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samarpann KC | Event & Brand Designer",
    description:
      "Design is communication, not decoration. Event & Brand Designer based in Pokhara, Nepal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}

