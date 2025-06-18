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
  description: "The Khmer Heirs Association is a non governmental organization that is independent, sovereign, apolitical, non partisan, and not for private profit. It is represented by a single president who is committed to upholding and implementing the statutes and regulations of the association.",
  openGraph: {
    title: "KHMER HEIRS ASSOCIATION",
    description: "The Khmer Heirs Association is a non governmental organization that is independent, sovereign, apolitical, non partisan, and not for private profit. It is represented by a single president who is committed to upholding and implementing the statutes and regulations of the association.",
    url: "https://kha-com.vercel.app/",
    siteName: "KHMER HEIRS ASSOCIATION",
    images: [
      {
        url: "/images/metadata/metadata.png", // Path to your image (should be absolute or start with /)
        width: 1200,
        height: 630,
        alt: "my image alt text",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KHMER HEIRS ASSOCIATION",
    description: "The Khmer Heirs Association is a non governmental organization that is independent, sovereign, apolitical, non partisan, and not for private profit. It is represented by a single president who is committed to upholding and implementing the statutes and regulations of the association.",
    images: ["/images/metadata/metadata.png"], // Path to your image (should be absolute or start with /)
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
