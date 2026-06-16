import type { Metadata } from "next";
import { Literata, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const fontSerif = Literata({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AI6G — Digital Signal Processing, Machine Learning & Deep Learning",
  description:
    "Learning materials from LASSE (UFPA) on Digital Signal Processing, Machine Learning, Deep Learning and Telecom.",
  icons: "/book_cover.webp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSerif.variable,
          fontSans.variable
        )}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
