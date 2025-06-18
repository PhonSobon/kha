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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://kha-com.vercel.app"
  ),
  manifest:
    (process.env.NEXT_PUBLIC_APP_URL || "https://kha-com.vercel.app") +
    "/images/Logo/logo.jpg",
  title: {
    template: "%s - KHMER HEIRS ASSOCIATION",
  },
  openGraph: {
    title: "Home - KHMER HEIRS ASSOCIATION",
    description: "Collect better data and make better decisions.",
    url: "/",
    siteName: "KHMER HEIRS ASSOCIATION",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s - KHMER HEIRS ASSOCIATION",
    },
    description: "Collect better data and make better decisions.",
    creator: "KHMER HEIRS ASSOCIATION",
    images: ["/og-image.jpg"],
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
