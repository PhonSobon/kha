import { Geist, Geist_Mono, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";
import Head from "next/head";

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
  title: "KHMER HEIRS ASSOCIATION | KHA",
  description:
    "Khmer Heirs Association (KHA) is a non-governmental organization in Cambodia. KHA is independent, sovereign, apolitical, non-partisan, and not for private profit.",
  keywords: [
    "Khmer Heirs Association",
    "KHA",
    "Cambodia NGO",
    "Khmer NGO",
    "Khmer Heirs",
    "សមាគមទាយាទខ្មែរ",
    "Cambodia",
    "Non-governmental organization",
    "Education",
    "Human Rights"
  ],
  openGraph: {
    title: "KHMER HEIRS ASSOCIATION | KHA",
    description:
      "Khmer Heirs Association (KHA) is a non-governmental organization in Cambodia. KHA is independent, sovereign, apolitical, non-partisan, and not for private profit.",
    url: "https://kha-com.vercel.app/",
    siteName: "KHMER HEIRS ASSOCIATION",
    images: [
      {
        url: "https://kha-com.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KHMER HEIRS ASSOCIATION",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KHMER HEIRS ASSOCIATION | KHA",
    description:
      "Khmer Heirs Association (KHA) is a non-governmental organization in Cambodia. KHA is independent, sovereign, apolitical, non-partisan, and not for private profit.",
    images: ["https://kha-com.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* SEO: Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Khmer Heirs Association",
              "alternateName": "KHA",
              "url": "https://kha-com.vercel.app/",
              "email": "kha.info01@gmail.com",
              "sameAs": [
                "https://web.facebook.com/KhmerHeirsAssociation",
                "https://t.me/yourtelegramusername"
              ]
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kantumruyPro.variable} antialiased font-kantumruy`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}