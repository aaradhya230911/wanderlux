import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

// Display serif for headlines — carries the "editorial luxury" personality.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body / UI sans — quiet, highly legible workhorse.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://wanderlux.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WanderLux — Bespoke Luxury Travel",
    template: "%s · WanderLux",
  },
  description:
    "WanderLux designs private, fully-tailored luxury journeys across the world's most extraordinary places, backed by a 24/7 concierge.",
  keywords: [
    "luxury travel",
    "bespoke travel agency",
    "private itinerary",
    "luxury vacations",
    "travel concierge",
  ],
  authors: [{ name: "WanderLux Travel Co." }],
  openGraph: {
    title: "WanderLux — Bespoke Luxury Travel",
    description:
      "Private, fully-tailored luxury journeys with a concierge behind every mile.",
    url: SITE_URL,
    siteName: "WanderLux",
    images: [
      {
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Sunrise over a mountain range",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WanderLux — Bespoke Luxury Travel",
    description:
      "Private, fully-tailored luxury journeys with a concierge behind every mile.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F4EE" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0E14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} font-sans`}>
        <ThemeProvider>
          {/* Skip link for keyboard and screen-reader users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm focus:text-ivory-100"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
