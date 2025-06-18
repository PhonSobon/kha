import { Geist, Geist_Mono, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kantumruyPro = Kantumruy_Pro({
  variable: "--font-kantumruy",
  subsets: ["latin", "khmer"],
  display: "swap",
});

export const metadata = {
  title: "Khmer Heirs Association",
  description: "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit.",
  openGraph: {
    title: "Khmer Heirs Association",
    description: "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit.",
    url: "https://kha-com.vercel.app/",
    siteName: "Khmer Heirs Association",
    images: [
      {
        url: "https://kha-com.vercel.app/og-image.jpg", // Make sure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Khmer Heirs Association",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khmer Heirs Association",
    description: "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit.",
    images: ["https://kha-com.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kantumruyPro.variable} antialiased font-kantumruy`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
