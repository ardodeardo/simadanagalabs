import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simadanagalabs.com"),
  title: "simadanagalabs",
  description: "A creative space built with code, design, and curiosity.",
  applicationName: "simadanagalabs",
  authors: [{ name: "ardodeardo" }],
  keywords: ["Frontend Development", "UI/UX Design"],

  alternates: {
    canonical: "/",
  },

  // og
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://simadanagalabs.com",
    title: "simadanagalabs",
    description: "A creative space built with code, design, and curiosity.",
    siteName: "simadanagalabs",
  },

  // tw card
  twitter: {
    card: "summary_large_image",
    title: "simadanagalabs",
    description: "A creative space built with code, design, and curiosity.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
