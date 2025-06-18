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
  title: "KHMER HEIRS ASSOCIATION",
  description:
    "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit.",
  openGraph: {
    title: "KHMER HEIRS ASSOCIATION",
    description:
      "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit.",
    url: "https://kha-com.vercel.app/",
    siteName: "KHMER HEIRS ASSOCIATION",
    images: [
      {
        url: "https://kha-com.vercel.app/metadata.png", // Use the full URL for best results
        width: 1200,
        height: 630,
        alt: "KHMER HEIRS ASSOCIATION",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KHMER HEIRS ASSOCIATION",
    description:
      "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit.",
    images: ["https://kha-com.vercel.app/metadata.png"],
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
