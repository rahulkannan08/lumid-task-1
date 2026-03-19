import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/sections/FloatingContact";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Architectured - Architecture Firm Framer Template",
  description:
    "Best Architecture Framer Template for architects, interior designers, landscapers, builders, developers, real estate agencies",
  icons: {
    icon: "https://framerusercontent.com/images/J7bap8NdUKR5LPjM0C1TEZmg8.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
          <FloatingContact />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
