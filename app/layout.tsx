import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://stonemanservicestn.com"),
  title: {
    default: "Stoneman Services | Professional Fence Staining & Deck Sealing in Middle Tennessee",
    template: "%s | Stoneman Services",
  },
  description:
    "Professional fence staining, deck sealing, driveway cleaning & restoration in Middle Tennessee. Local father-and-son team. Free on-site estimates. Serving Nashville, Franklin, Brentwood, Murfreesboro & more.",
  keywords: [
    "fence staining Middle Tennessee",
    "deck sealing Nashville TN",
    "fence staining Franklin TN",
    "driveway sealing Brentwood",
    "wood restoration Murfreesboro",
    "pressure washing Nashville",
    "Stoneman Services",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stonemanservicestn.com",
    siteName: "Stoneman Services",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body style={{ backgroundColor: "#FAF7F2" }} className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
