import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lenauves - Minimal Streetwear for Everyday Confidence",
  description: "Premium minimalist streetwear brand focused on clean designs, quality fabrics, and timeless style. Shop hoodies, sweatshirts, and sweatpants designed for modern life.",
  keywords: "streetwear, minimalist fashion, hoodies, sweatshirts, premium clothing, casual luxury",
  authors: [{ name: "Lenauves" }],
  creator: "Lenauves",
  publisher: "Lenauves",
  openGraph: {
    title: "Lenauves - Minimal Streetwear",
    description: "Premium minimalist streetwear designed for everyday confidence",
    url: "https://lenauves.com",
    siteName: "Lenauves",
    locale: "en_EU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenauves - Minimal Streetwear",
    description: "Premium minimalist streetwear designed for everyday confidence",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}>
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}