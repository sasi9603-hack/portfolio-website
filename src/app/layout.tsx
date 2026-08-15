import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundVideo from "@/components/BackgroundVideo";
import LoaderOverlay from "@/components/LoaderOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sasidharreddy Vennapusa | Portfolio",
  description: "Portfolio of Sasidharreddy Vennapusa - CSE Student, GenAI Engineer, & Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#38240D] text-[#FDFBD4] selection:bg-[#C05800]/40 overflow-x-hidden font-sans">
        <LoaderOverlay />
        <BackgroundVideo />
        <div className="fixed inset-0 glow-bg z-0 pointer-events-none" />
        <Navbar />
        <main className="flex-1 z-10 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
