import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://nothingisimpossible.io";

const siteTitle = "Nothing Is Impossible | Cutting-Edge Super Intelligence (SI) for Productivity and Revenue";
const siteDescription =
  "We help ambitious entrepreneurs and visionary business leaders use cutting-edge Super Intelligence (SI) to dramatically increase their companies' productivity and revenue.";

const ogImagePath = "/og-image.jpg";
const ogImageUrl = `${siteUrl}${ogImagePath}`;

const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "Nothing Is Impossible: advanced SI to increase productivity and revenue",
  type: "image/jpeg",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Nothing Is Impossible",
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl],
    creator: "@martinleou",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {children}
        <Toaster 
          position="top-center" 
          richColors 
          closeButton 
          className="sonner-premium"
        />
      </body>
    </html>
  );
}
