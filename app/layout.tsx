import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTAs } from "@/components/FloatingCTAs";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GO-SSIP Café & Restro | Mumbra, Thane",
  description:
    "Premium café and restaurant in Mumbra, Thane offering specialty coffees, boba, burgers, pizza and more. Sip. Savour. Connect.",
  keywords: ["café", "restaurant", "Mumbra", "Thane", "coffee", "boba", "burgers", "pizza"],
  openGraph: {
    title: "GO-SSIP Café & Restro",
    description: "Cinematic dining experience in Mumbra, Thane. International cuisine, specialty coffees & more.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTAs />
      </body>
    </html>
  );
}
