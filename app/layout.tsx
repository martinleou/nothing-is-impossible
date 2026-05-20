import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nothing-is-impossible.vercel.app"),
  title: "Nothing Is Impossible | Maximizing Human Potential with AI",
  description: "We help entrepreneurs and business owners boost performance and income using cutting-edge AI. Transform your business with precision AI systems designed for ambitious leaders.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Nothing Is Impossible | Maximizing Human Potential with AI",
    description: "Premium AI transformation for entrepreneurs and business owners who refuse to settle for average.",
    images: [{ url: "/sunrise-earth.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
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
