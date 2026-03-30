import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTAs } from "@/components/FloatingCTAs";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
    <html lang="en" suppressHydrationWarning className={`${outfit.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Aurora Background Layer */}
          <div className="aurora-container">
            <div className="aurora-blob aurora-blob-1"></div>
            <div className="aurora-blob aurora-blob-2"></div>
            <div className="aurora-blob aurora-blob-3"></div>
          </div>
          
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCTAs />
        </ThemeProvider>
      </body>
    </html>
  );
}
